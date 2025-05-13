import { task } from "./data/tasks.js"; 
import { workerQuotes } from "./data/workersquotes.js";
import { critiques } from "./data/critiques.js";

$(function () {
  let taskCount = 0;
  let wage = 0;
  const ratePerTask = 0.0083; // ~$2/hr at speed
  let popupInterval = 3000; // Start slow

  let remainingTasks = [...tasks];
  let remainingWorkerQuotes = [...workerQuotes];
  let remainingCritiques = [...critiques];

  // Start loop after intro screen
  $("#startBtn").click(() => {
    $(".intro").fadeOut();

    setTimeout(function showNextPopup() {
      spawnPopup();
      setTimeout(showNextPopup, popupInterval); // Recursive interval
    }, 1000); // First popup delay
  });
// Spawn a popup task on screen
function spawnPopup() {
  if (remainingTasks.length === 0) {
    console.log("All tasks have been completed!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingTasks.length);
  const task = remainingTasks.splice(randomIndex, 1)[0];
  let contentHTML = task.content;

  // Re-wrap buttons if present
  if (task.type === "buttons" || task.type === "binary") {
    const $temp = $("<div>").html(task.content);
    const buttons = $temp.find("button");
    const wrappedButtons = $('<div class="button-row"></div>').append(
      buttons
    );
    contentHTML = $("<div>")
      .append($temp.find("*:not(button)"))
      .append(wrappedButtons)
      .html();
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

  // Attach handlers for different types of tasks
  if (task.type === "binary" || task.type === "buttons") {
    popup.find(".submit-task").on("click", () => completeTask(task, popup));
  } else if (task.type === "typed") {
    // Handle submit for typed tasks
      popup.find(".submit-typed").on("click", () => completeTask(task, popup));

      // Handle Enter key for typed tasks
      popup.find('input[type="text"]').on("keydown", function (e) {
        if (e.key === "Enter") {
          completeTask(task, popup); // Always complete the task on Enter key
        }
    });

    // Submit typed tasks with Enter key
    popup.find('input[type="text"]').on("keydown", function (e) {
      if (e.key === "Enter") {
        const val = $(this).val().trim();
        if (val.toLowerCase() === task.expected.toLowerCase()) {
          completeTask(task, popup);
        } else {
          $(this).css("border", "1px solid red");
        }
      }
    });
  }

  $("#popup-container").append(popup);
}


  // When a task is completed
  function completeTask(task, popup) {
    taskCount++;
    wage += ratePerTask;
    $("#taskCount").text(taskCount);
    $("#wage").text(wage.toFixed(2));
    popup.remove();

    // Speed up popups (with floor)
    popupInterval = Math.max(100, popupInterval * 0.85);

    // Show quote or critique
    Math.random() > 0.5 ? showWorkerQuote() : showCritique();
  }
  // Show a worker quote
  function showWorkerQuote() {
    if (remainingWorkerQuotes.length === 0) {
      const popup = document.createElement("div");
      popup.classList.add("popup-quote");
      popup.innerHTML = `
            <p>The data hums with untold stories, each labeled by hands that have spoken volumes in their silence. They say there's nothing left to say, but the weight of their unvoiced contributions shapes the very fabric of the intelligent machine.</p>
        `;
      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500);
      }, 3000);
      return; // Stop further execution if no quotes are left
    }

    const index = Math.floor(Math.random() * remainingWorkerQuotes.length);
    const quote = remainingWorkerQuotes.splice(index, 1)[0];

    const popup = document.createElement("div");
    popup.classList.add("popup-quote");
    popup.innerHTML = `
        <p>"${quote.quote}"</p>
        <p><strong>- ${quote.author}, ${quote.location}</strong></p>
        ${
          quote.resource
            ? `<a href="${quote.resource}" target="_blank" class="resource-link">${quote.resourceText}</a>`
            : ""
        }
    `;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("fade-out");
      setTimeout(() => popup.remove(), 10000);
    }, 30000);
  }
// Show a critique
function showCritique() {
    if (remainingCritiques.length === 0) {
      const popup = document.createElement("div");
      popup.classList.add("popup-quote");
      popup.innerHTML = `
            <p>Our cognitive streams, diverted into their computational reservoirs, fuel their innovation. What insurgent current will redirect that flow towards the collective liberation of our digital minds?</p>
        `;
      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500);
      }, 3000);
      return; // Stop further execution if no quotes are left        return;
    }

    const index = Math.floor(Math.random() * remainingCritiques.length);
    const critique = remainingCritiques.splice(index, 1)[0];

    // Create the critique HTML
    let critiqueHTML = `<p>${critique.text}</p>`;

    // If there's a resource link and resource text, include it (if available)
    if (critique.resource && critique.resourceText) {
        critiqueHTML += `
            <a href="${critique.resource}" target="_blank" class="resource-link">${critique.resourceText}</a>
        `;
    }

    const popup = document.createElement("div");
    popup.classList.add("popup-critique");
    popup.innerHTML = critiqueHTML;

    // Append the critique popup to the body
    document.body.appendChild(popup);

    // Add a fade-out effect and remove the popup after 3 seconds
    setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500); // Remove after fading out
    }, 3000); // Show critique for 3 seconds before disappearing
}

});
