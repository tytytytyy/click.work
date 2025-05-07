import { tasks } from './tasks.js';

$(function () {
    const critiques = [
        "data work is fragmented, invisible, and undervalued.",
        "tasks are fast, but wages are slow.",
        "every label is a training set for someone else's profit.",
        "you are not meant to ask who you are working for.",
        "invisible labor powers visible AI.",
        "you clicked. they scaled.",
        "no benefits. no union. no exit."
    ];

        const workerQuotes = [
        {
            quote: "I speak for myself and all the data workers I know and communicate with daily. Everyone agrees with me that working for these platforms brings about psychological and physical exhaustion, mainly due to inadequate compensation.",
            resource: "https://data-workers.org/#Inquiries",
            resourceText: "Learn more about workers' rights and struggles"
        },
        {
            quote: "Data work is fragmented, invisible, and undervalued.",
            resource: "https://www.example.com/article-on-invisible-labor",
            resourceText: "Read more about invisible labor and its impacts"
        },
        {
            quote: "You clicked. They scaled.",
            resource: "https://www.example.com/scale-of-data-work",
            resourceText: "Understand how platforms scale using workers' labor"
        },
        {
            quote: "No benefits. No union. No exit.",
            resource: "https://www.example.com/unionizing-data-workers",
            resourceText: "How data workers are fighting for better rights"
        }
    ];

    let taskCount = 0;
    let wage = 0;
    const ratePerTask = 0.0083; // Approx. $2/hr at ~240 tasks/hour
    let popupInterval = randomTime(2000, 4000); // Initial interval for popups


    $('#startBtn').click(() => {
        $('.intro').fadeOut();

        // Delay the first popup by 2 seconds
        setTimeout(() => {
        spawnPopup();  // Show the first popup after the delay
        setInterval(spawnPopup, popupInterval); // Then start the interval for subsequent popups
    }, 2000); // 2000ms delay before first popup
    });

function spawnPopup() {
    const popup = $('<div class="popup"></div>');
    const task = tasks[Math.floor(Math.random() * tasks.length)];

    const html = `
        <div class="task-box">
            <p class="task-question">${task.question}</p>
            ${task.content}
        </div>
    `;

    popup.html(html);

    const posX = Math.floor(Math.random() * (window.innerWidth - 320));
    const posY = Math.floor(Math.random() * (window.innerHeight - 200));
    popup.css({ left: `${posX}px`, top: `${posY}px` });

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

    popup.find('input[type="text"]').on('keydown', function (e) {
        if (e.key === 'Enter') completeTask(task, popup);
    });

    $('#popup-container').append(popup);
}

function completeTask(task) {
    taskCount++;
    wage += ratePerTask;
    $('#taskCount').text(taskCount);
    $('#wage').text(wage.toFixed(2));

    // Remove the popup after completing the task
    $('.popup').remove();

    // Speed up the popups after each task completion
    popupInterval = Math.max(500, popupInterval - 100); // Reduce interval by 100ms each time (min 500ms)
    
    // Show either a worker's quote or critique
    const showQuote = Math.random() > 0.5; // Randomly decide to show quote or critique
    if (showQuote) {
        showWorkerQuote();
    } else {
        showCritique();
    }
}

    // Function to show the worker's quote with a clickable resource link
    function showWorkerQuote() {
        // Select a random worker quote and its associated resource
        const quoteIndex = Math.floor(Math.random() * workerQuotes.length);
        const selectedQuote = workerQuotes[quoteIndex];

        const popup = document.createElement("div");
        popup.classList.add("popup-quote");
        popup.innerHTML = `
            <p>"${selectedQuote.quote}"</p>
            <a href="${selectedQuote.resource}" target="_blank" class="resource-link">${selectedQuote.resourceText}</a>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }

    // Function to show critiques with linked resources
    function showCritique() {
        // Select a random critique and its associated resource
        const critiqueIndex = Math.floor(Math.random() * critiques.length);
        const selectedCritique = critiques[critiqueIndex];

        const popup = document.createElement("div");
        popup.classList.add("popup-critique");
        popup.innerHTML = `
            <p>"${selectedCritique.critique}"</p>
            <a href="${selectedCritique.resource}" target="_blank" class="resource-link">${selectedCritique.resourceText}</a>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }

    function randomTime(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
