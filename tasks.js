const tasks = [
    {
        question: "Is this a bicycle?",
        content: `<img src="https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Sentiment of: <i>'I guess this is fine.'</i>",
        content: `<button class="submit-task">Positive</button>
                  <button class="submit-task">Neutral</button>
                  <button class="submit-task">Negative</button>`,
        type: "buttons"
    },
    {
        question: "Type this exactly: <i>ghost labor is real</i>",
        content: `<input type="text" class="type-input" placeholder="Type here..."/>
                  <button class="submit-typed">Submit</button>`,
        type: "typed"
    },
    {
        question: "Tag all you see in the image.",
        content: `<img src="https://via.placeholder.com/150" />
                  <label><input type="checkbox" /> Person</label><br/>
                  <label><input type="checkbox" /> Animal</label><br/>
                  <label><input type="checkbox" /> Object</label><br/>
                  <button class="submit-task">Submit</button>`,
        type: "binary"
    },
    {
        question: "Is this a car?",
        content: `<img src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Type this exactly: <i>ghost labor is real</i>",
        content: `<input type="text" class="typed-input" placeholder="Type here..." />
                  <button class="submit-typed">Submit</button>`,
        type: "typed",
        expected: "ghost labor is real"
    },
    {
        question: "Tag all you see in the image.",
        content: `<img src="https://via.placeholder.com/150" />
                  <label><input type="checkbox" /> Person</label><br/>
                  <label><input type="checkbox" /> Animal</label><br/>
                  <label><input type="checkbox" /> Object</label><br/>
                  <button class="submit-task">Submit</button>`,
        type: "binary"
    },
    {
        question: "Is this language offensive?<br><i>'You're useless.'</i>",
        content: `<button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
        type: "binary"
    },

    {
        question: "Is this image blurry?",
        content: `<img src="https://images.pexels.com/photos/14038343/pexels-photo-14038343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Match the description:<br><i>'Tall man in blue shirt walking a dog.'</i>",
        content: `<img src="https://via.placeholder.com/150" />
              <button class="submit-task">Match</button>
              <button class="submit-task">No Match</button>`,
        type: "binary"
    },
    {
        question: "Type exactly:<br><i>machine taught by man</i>",
        content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
        type: "typed",
        expected: "machine taught by man"
    },

    // 🔻 Critical microtasks below

    {
        question: "Did this task feel worth $0.0083?",
        content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Did you consent to training AI systems with your input?",
        content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Are you labeling data for AI or being labeled by AI?",
        content: `<button class="submit-task">Labeling AI</button>
              <button class="submit-task">Being Labeled</button>
              <button class="submit-task">Unsure</button>`,
        type: "buttons"
    },
    {
        question: "Does the system recognize your effort?",
        content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
        type: "binary"
    },
    {
        question: "Which term best describes this kind of platform?",
        content: `<button class="submit-task">Marketplace</button>
              <button class="submit-task">Exploitative</button>
              <button class="submit-task">Neutral Tool</button>`,
        type: "buttons"
    },
    {
        question: "Do people see this work as 'real' labor?",
        content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>
              <button class="submit-task">Sometimes</button>`,
        type: "buttons"
    },
    {
        question: "Are these microtasks building something ethical?",
        content: `<button class="submit-task">Yes</button>
            <button class="submit-task">No</button>
            <button class="submit-task">It depends</button>`,
        type: "buttons"
    },
        {
        question: "Is this a intelligence?",
        content: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Racknitz_-_The_Turk_3.jpg" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
        type: "binary"
    }
];
// Export the tasks array
export { tasks };
