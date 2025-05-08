import { tasks } from './tasks.js';
import { workerQuotes } from './workersquotes.js';
import { critiques } from './critiques.js';

$(function () {
    let taskCount = 0;
    let wage = 0;
    const ratePerTask = 0.0083; // ~$2/hr at speed
    let popupInterval = 2000; // Start slow

    let remainingTasks = [...tasks];
    let remainingWorkerQuotes = [...workerQuotes];
    let remainingCritiques = [...critiques];

    // Start loop after intro screen
    $('#startBtn').click(() => {
        $('.intro').fadeOut();

        setTimeout(function showNextPopup() {
            spawnPopup();
            setTimeout(showNextPopup, popupInterval); // Recursive interval
        }, 1000); // First popup delay
    });

    // Spawn a popup task on screen
    function spawnPopup() {
        if (remainingTasks.length === 0) {
            console.log('All tasks have been completed!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * remainingTasks.length);
        const task = remainingTasks.splice(randomIndex, 1)[0];
        let contentHTML = task.content;

        // Re-wrap buttons if present
        if (task.type === "buttons" || task.type === "binary") {
            const $temp = $('<div>').html(task.content);
            const buttons = $temp.find('button');
            const wrappedButtons = $('<div class="button-row"></div>').append(buttons);
            contentHTML = $('<div>').append($temp.find('*:not(button)')).append(wrappedButtons).html();
        }

        const html = `
            <div class="task-box">
                <p class="task-question">${task.question}</p>
                ${contentHTML}
            </div>
        `;

        const popup = $('<div class="popup"></div>').html(html);

        // Position randomly
        const posX = Math.floor(Math.random() * (window.innerWidth - 360));
        const posY = Math.floor(Math.random() * (window.innerHeight - 200));
        popup.css({ left: `${posX}px`, top: `${posY}px` });

        // Attach handlers
        if (task.type === "binary" || task.type === "buttons") {
            popup.find('.submit-task').on('click', () => completeTask(task, popup));
        } else if (task.type === "typed") {
            popup.find('.submit-typed').on('click', () => {
                const val = popup.find('.typed-input').val().trim();
                if (val.toLowerCase() === task.expected.toLowerCase()) {
                    completeTask(task, popup);
                } else {
                    popup.find('.typed-input').css('border', '1px solid red');
                }
            });
        }

        // Submit typed tasks with Enter
        popup.find('input[type="text"]').on('keydown', function (e) {
            if (e.key === 'Enter') completeTask(task, popup);
        });

        $('#popup-container').append(popup);
    }

    // When a task is completed
    function completeTask(task, popup) {
        taskCount++;
        wage += ratePerTask;
        $('#taskCount').text(taskCount);
        $('#wage').text(wage.toFixed(2));
        popup.remove();

        // Speed up popups (with floor)
        popupInterval = Math.max(100, popupInterval * 0.85);

        // Show quote or critique
        Math.random() > 0.5 ? showWorkerQuote() : showCritique();
    }

    // Show a worker quote (random)
    function showWorkerQuote() {
        if (remainingWorkerQuotes.length === 0) {
            console.log('No worker quotes left');
            return;
        }

        const index = Math.floor(Math.random() * remainingWorkerQuotes.length);
        const quote = remainingWorkerQuotes.splice(index, 1)[0];

        const popup = document.createElement("div");
        popup.classList.add("popup-quote");
        popup.innerHTML = `
            <p>"${quote.quote}"</p>
            <a href="${quote.resource}" target="_blank" class="resource-link">${quote.resourceText}</a>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }

    // Show a critique (random)
    function showCritique() {
        if (remainingCritiques.length === 0) {
            console.log('No critiques left');
            return;
        }

        const index = Math.floor(Math.random() * remainingCritiques.length);
        const critique = remainingCritiques.splice(index, 1)[0];

        const popup = document.createElement("div");
        popup.classList.add("popup-critique");
        popup.innerHTML = `
            <p>"${critique.critique}"</p>
            <a href="${critique.resource}" target="_blank" class="resource-link">${critique.resourceText}</a>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }

    // Random int between min and max
    function randomTime(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
