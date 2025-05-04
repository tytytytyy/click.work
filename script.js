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

    const images = [
        "https://via.placeholder.com/300x150?text=tree",
        "https://via.placeholder.com/300x150?text=car",
        "https://via.placeholder.com/300x150?text=dog",
        "https://via.placeholder.com/300x150?text=face",
        "https://via.placeholder.com/300x150?text=food"
    ];

    let taskCount = 0;
    let wage = 0;
    const ratePerTask = 0.0083; // Approx. $2/hr at ~240 tasks/hour
    let popupLoop;

    $('#startBtn').click(() => {
        $('.intro').fadeOut();
        popupLoop = setInterval(spawnPopup, randomTime(2000, 4000));
    });

    function spawnPopup() {
        const popup = $('<div class="popup"></div>');
        const image = images[Math.floor(Math.random() * images.length)];

        popup.html(`
      <div class="task-box">
        <p class="task-label">identify the object</p>
        <img src="${image}" alt="task" />
        <input type="text" placeholder="type here..." />
        <button>submit</button>
      </div>
    `);

        const posX = Math.floor(Math.random() * (window.innerWidth - 320));
        const posY = Math.floor(Math.random() * (window.innerHeight - 200));
        popup.css({ left: `${posX}px`, top: `${posY}px` });

        popup.find('button').on('click', function () {
            const input = popup.find('input').val().trim();
            if (!input) return;

            taskCount++;
            wage += ratePerTask;

            $('#taskCount').text(taskCount);
            $('#wage').text(wage.toFixed(2));

            popup.remove();
            showCritique();
        });

        $('#popup-container').append(popup);
    }

    function showCritique() {
        const message = critiques[Math.floor(Math.random() * critiques.length)];

        const popup = document.createElement("div");
        popup.classList.add("critique-popup");
        popup.innerHTML = `<p>${message}</p>`;

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
