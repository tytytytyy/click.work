const tasks = [
  {
    question: "Is this a bicycle?",
    content: `<img src="https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Sentiment of: <i>'I guess this is fine.'</i>",
    content: `<button class="submit-task">Positive</button>
                  <button class="submit-task">Neutral</button>
                  <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question:
      "What category does this text belong to: <i>'Breaking news: Major earthquake hits city.'</i>",
    content: `<button class="submit-task">News</button>
              <button class="submit-task">Sports</button>
              <button class="submit-task">Entertainment</button>`,
    type: "buttons",
  },
  {
    question:
      "Type the following sentence exactly: <i>'The quick brown fox jumps over the lazy dog.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "The quick brown fox jumps over the lazy dog.",
  },
  {
    question: "Fill in your name in the form below.",
    content: `<input type="text" class="typed-input" placeholder="Enter name here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Is there a spelling mistake in the following text: <i>'This is a test with incorect speling.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question:
      "Classify the following text: <i>'The weather is sunny today.'</i>",
    content: `<button class="submit-task">Weather</button>
              <button class="submit-task">General</button>
              <button class="submit-task">Uncategorized</button>`,
    type: "buttons",
  },
  {
    question: "Type this exactly: <i>ghost labor is real</i>",
    content: `<input type="text" class="type-input" placeholder="Type here..."/>
                  <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Rewrite the following sentence in your own words: <i>'The cat sat on the mat.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Rewrite sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Tag all you see in the image.",
    content: `<img src="https://freerangestock.com/sample/160722/urban-street-scene-with-diverse-pedestrians.jpg" />
                  <label><input type="checkbox" /> Person</label><br/>
                  <label><input type="checkbox" /> Animal</label><br/>
                  <label><input type="checkbox" /> Object</label><br/>
                  <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question:
      "Summarize the following text in 1-2 sentences: <i>'The quick brown fox jumps over the lazy dog. This is a classic example of a pangram, which contains every letter of the alphabet.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Summarize the text..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Find and correct the grammatical errors in this text: <i>'She dont like going to the park, becuase its too crowded.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Correct text..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Translate the following sentence into Spanish: <i>'Good morning, how are you today?'</i>",
    content: `<input type="text" class="typed-input" placeholder="Translation..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Categorize the following text: <i>'The stock market crashed after the unexpected announcement.'</i>",
    content: `<button class="submit-task">Finance</button>
              <button class="submit-task">Sports</button>
              <button class="submit-task">Technology</button>
              <button class="submit-task">Health</button>`,
    type: "buttons",
  },
  {
    question:
      "Extract the main keywords from the following sentence: <i>'Machine learning algorithms are widely used in data science for prediction and classification.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Keywords..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "What is the sentiment of the following sentence: <i>'I absolutely love this new phone!'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Find a synonym for the word 'happy':",
    content: `<input type="text" class="typed-input" placeholder="Synonym..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Is the following text duplicated or repeated: <i>'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question:
      "Tag the sentiment of this text: <i>'I'm feeling really down today.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question:
      "Paraphrase the following sentence: <i>'I am very excited about the upcoming event.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Paraphrased sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Tag the relevance of this text: <i>'The stock market has been volatile in recent weeks.'</i>",
    content: `<button class="submit-task">Relevant</button>
              <button class="submit-task">Not Relevant</button>`,
    type: "binary",
  },
  {
    question:
      "Write a headline for this article: <i>'Scientists discover a new species of frog in the Amazon rainforest.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Headline..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Extract the main idea from the following text: <i>'Climate change is causing more frequent and severe natural disasters worldwide, threatening ecosystems and human populations.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Main idea..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Identify and correct the typo in this sentence: <i>'The quik brown fox jumpd over the lazzy dog.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Correct sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question:
      "Complete the sentence: <i>'The ___ went to the store to buy milk.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Fill in the blank..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Is this a car?",
    content: `<img src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Type this exactly: <i>Data work is invisible labor</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "Data work is invisible labor",
  },
  {
    question: "Is this work mentally demanding?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Does this type of task make you feel less human?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Type this exactly: <i>'Machine learning is powerful.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "Machine learning is powerful.",
  },
  {
    question: "Tag all you see in the image.",
    content: `<img src="https://thumbs.dreamstime.com/b/busy-street-scene-intersection-hong-kong-february-pedestrians-crossing-man-pushing-cart-boxes-52773831.jpg" />
                  <label><input type="checkbox" /> Person</label><br/>
                  <label><input type="checkbox" /> Animal</label><br/>
                  <label><input type="checkbox" /> Object</label><br/>
                  <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question: "Is this language offensive?<br><i>'You're useless.'</i>",
    content: `<button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "How would you describe the emotional toll of repetitive tasks?",
    content: `<button class="submit-task">Low</button>
              <button class="submit-task">Moderate</button>
              <button class="submit-task">High</button>`,
    type: "buttons",
  },
  {
    question: "Do you think this work is cognitively rewarding?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "buttons",
  },
  {
    question: "Is this image blurry?",
    content: `<img src="https://images.pexels.com/photos/14038343/pexels-photo-14038343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Is this image blurry?",
    content: `<img src="https://live.staticflickr.com/3515/3256704240_93edaf8eb1_z.jpg" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Tag the objects in this image.",
    content: `<img src="https://img.ccnull.de/1035000/preview/1036037_b77291f980e3693bdec7068eeecb24ce.jpg" />
              <label><input type="checkbox" /> Person</label><br/>
              <label><input type="checkbox" /> Chair</label><br/>
              <label><input type="checkbox" /> Table</label><br/>
              <label><input type="checkbox" /> Lamp</label><br/>
              <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question: "What is this object in the image?",
    content: `<img src="https://images.squarespace-cdn.com/content/v1/6080b01c47cc8079603b202a/15d69ef5-9c94-4925-9c50-121441b0fe29/ave-calvar-bAoAN8WFJkI-unsplash.jpg" />
              <button class="submit-task">Dog</button>
              <button class="submit-task">Cat</button>
              <button class="submit-task">Car</button>
              <button class="submit-task">Tree</button>`,
    type: "buttons",
  },
  {
    question: "Tag the objects in this image.",
    content: `<img src="https://images.pexels.com/photos/842948/pexels-photo-842948.jpeg" />
              <label><input type="checkbox" /> Person</label><br/>
              <label><input type="checkbox" /> Chair</label><br/>
              <label><input type="checkbox" /> Table</label><br/>
              <label><input type="checkbox" /> Lamp</label><br/>
              <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question: "What type of object is shown in the image?",
    content: `<img src="https://previews.123rf.com/images/fotografiecor/fotografiecor2005/fotografiecor200500162/148037071-altes-auto-altes-fahrzeug-thema-fahren-sch%C3%B6ne-braut-sitzt-mit-hochzeitsstrau%C3%9F-in-einem-retro.jpg" />
              <button class="submit-task">Car</button>
              <button class="submit-task">Bike</button>
              <button class="submit-task">Building</button>`,
    type: "buttons",
  },

  {
    question:
      "Match the description:<br><i>'Tall man in blue shirt walking a dog.'</i>",
    content: `<img src="https://live.staticflickr.com/1009/1395131748_18db6e1e42_b.jpg" />
              <button class="submit-task">Match</button>
              <button class="submit-task">No Match</button>`,
    type: "binary",
  },
  {
    question: "Type exactly:<br><i>machine taught by man</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "machine taught by man",
  },

  {
    question: "Did this task feel worth $0.0083?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Did you consent to training AI systems with your input?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Are you labeling data for AI or being labeled by AI?",
    content: `<button class="submit-task">Labeling AI</button>
              <button class="submit-task">Being Labeled</button>
              <button class="submit-task">Unsure</button>`,
    type: "buttons",
  },
  {
    question: "Does the system recognize your effort?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Which term best describes this kind of platform?",
    content: `<button class="submit-task">Marketplace</button>
              <button class="submit-task">Exploitative</button>
              <button class="submit-task">Neutral Tool</button>`,
    type: "buttons",
  },
  {
    question: "Do people see this work as 'real' labor?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>
              <button class="submit-task">Sometimes</button>`,
    type: "buttons",
  },
  {
    question: "Are these microtasks building something ethical?",
    content: `<button class="submit-task">Yes</button>
            <button class="submit-task">No</button>
            <button class="submit-task">It depends</button>`,
    type: "buttons",
  },
  {
    question: "Is this intelligence?",
    content: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Racknitz_-_The_Turk_3.jpg" />
                  <button class="submit-task">Yes</button>
                  <button class="submit-task">No</button>`,
    type: "binary",
  },
   {
    question: "Is this a dog?",
    content: `<img src="https://images.pexels.com/photos/1108095/pexels-photo-1108095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Sentiment of: <i>'I don’t mind this at all.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Select the color of the sky in this image.",
    content: `<img src="https://images.pexels.com/photos/1170982/pexels-photo-1170982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button class="submit-task">Blue</button>
              <button class="submit-task">Gray</button>
              <button class="submit-task">Orange</button>`,
    type: "buttons",
  },
  {
    question: "Type the sentence: <i>'A picture is worth a thousand words.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "A picture is worth a thousand words.",
  },
  {
    question: "Enter your favorite color.",
    content: `<input type="text" class="typed-input" placeholder="Enter your color..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Is there a typo in the sentence: <i>'He go to school everyday.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Classify the text: <i>'The sunset was amazing.'</i>",
    content: `<button class="submit-task">Weather</button>
              <button class="submit-task">Nature</button>
              <button class="submit-task">General</button>`,
    type: "buttons",
  },
  {
    question: "Type this exactly: <i>Repetitive tasks are common in microwork.</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "Repetitive tasks are common in microwork.",
  },
  {
    question: "Identify the object in the image.",
    content: `<img src="https://images.pexels.com/photos/255974/pexels-photo-255974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button class="submit-task">Car</button>
              <button class="submit-task">Tree</button>
              <button class="submit-task">Building</button>`,
    type: "buttons",
  },
  {
    question: "Summarize the following text in 1-2 sentences: <i>'The moon is full, and it shines brightly in the sky.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Summarize the text..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Does this sentence have any grammatical errors: <i>'She don't like ice cream.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Translate the sentence into French: <i>'Good evening, how are you today?'</i>",
    content: `<input type="text" class="typed-input" placeholder="Translation..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Which category does this text belong to: <i>'The stock prices have been fluctuating lately.'</i>",
    content: `<button class="submit-task">Finance</button>
              <button class="submit-task">Sports</button>
              <button class="submit-task">Technology</button>`,
    type: "buttons",
  },
  {
    question: "What is the sentiment of the sentence: <i>'I am feeling okay.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "What is a synonym for 'fast'?",
    content: `<input type="text" class="typed-input" placeholder="Synonym..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Is the text duplicated: <i>'Hello, how are you? Hello, how are you?'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Classify the sentiment of this text: <i>'I am feeling down today.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Rewrite the following sentence: <i>'The dog is barking loudly.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Rewrite sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Identify and correct the typo in this sentence: <i>'The quik brown fox.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Correct sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Fill in the blank: <i>'The ___ is playing with the ball.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Fill in the blank..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Is this a cat?",
    content: `<img src="https://picsum.photos/300/300" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Type this exactly: <i>Microtasks are repetitive but necessary.</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "Microtasks are repetitive but necessary.",
  },
  {
    question: "Is this task mentally demanding?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Does this task make you feel like a machine?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Type this exactly: <i>The system is learning over time.</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "The system is learning over time.",
  },
  {
    question: "Tag the objects in this image.",
    content: `<img src="https://live.staticflickr.com/3459/3877534599_3c83d9570d_b.jpg" />
              <label><input type="checkbox" /> Person</label><br/>
              <label><input type="checkbox" /> Animal</label><br/>
              <label><input type="checkbox" /> Object</label><br/>
              <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question: "Is this language offensive: <i>'You are terrible.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
   {
    question: "Is the object in the image a chair?",
    content: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGhinAXJkzSs3vBeIbogdTssRU1OR8jtOkQ&s" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Tag the objects in this image.",
    content: `<img src="https://picsum.photos/200/300" />
              <label><input type="checkbox" /> Person</label><br/>
              <label><input type="checkbox" /> Object</label><br/>
              <label><input type="checkbox" /> Animal</label><br/>
              <button class="submit-task">Submit</button>`,
    type: "binary",
  },
  {
    question: "Is this a car?",
    content: `<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Car_pictogram.svg" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Is this a dog?",
    content: `<img src="https://picsum.photos/300/300" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
    {
    question: "What category does this text belong to: <i>'The football match ended in a draw.'</i>",
    content: `<button class="submit-task">Sports</button>
              <button class="submit-task">News</button>
              <button class="submit-task">Entertainment</button>`,
    type: "buttons",
  },
  {
    question: "Sentiment of: <i>'I'm feeling alright.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Is there a spelling mistake in the following text: <i>'She is a grat dancer.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Rewrite the following sentence in your own words: <i>'The sun is shining bright.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Rewrite sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Translate the following sentence into French: <i>'How are you today?'</i>",
    content: `<input type="text" class="typed-input" placeholder="Translation..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Summarize the following text in 1-2 sentences: <i>'The sun sets over the ocean, painting the sky in hues of orange and pink.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Summarize the text..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Extract the main keywords from the following sentence: <i>'The book explores the mysteries of the universe.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Keywords..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Complete the sentence: <i>'The ___ jumped over the fence.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Fill in the blank..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Is this text grammatically correct? <i>'She dont want to leave.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Does the following text contain any typos? <i>'The quik brown fox jumped.' </i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Tag the relevance of this text: <i>'The weather forecast predicts rain tomorrow.'</i>",
    content: `<button class="submit-task">Relevant</button>
              <button class="submit-task">Not Relevant</button>`,
    type: "binary",
  },
  {
    question: "Identify and correct the typo in this sentence: <i>'The gril is walking down the street.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Correct sentence..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
  },
  {
    question: "Tag the sentiment of this text: <i>'I am feeling really tired today.'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Is this a repeated sentence? <i>'The dog barked. The dog barked.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "How would you describe the difficulty level of this task?",
    content: `<button class="submit-task">Easy</button>
              <button class="submit-task">Moderate</button>
              <button class="submit-task">Difficult</button>`,
    type: "buttons",
  },
  {
    question: "Is this text confusing to read? <i>'She quickly ran, not because she had to, but because she wanted to.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Do you find this task too repetitive?",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Classify the following text: <i>'I need to find a good recipe for dinner.'</i>",
    content: `<button class="submit-task">Cooking</button>
              <button class="submit-task">Lifestyle</button>
              <button class="submit-task">Health</button>`,
    type: "buttons",
  },
  {
    question: "What category does this text belong to: <i>'The latest superhero movie broke box office records.'</i>",
    content: `<button class="submit-task">Entertainment</button>
              <button class="submit-task">News</button>
              <button class="submit-task">Sports</button>`,
    type: "buttons",
  },
  {
    question: "Type the following sentence exactly: <i>'A journey of a thousand miles begins with a single step.'</i>",
    content: `<input type="text" class="typed-input" placeholder="Type here..." />
              <button class="submit-typed">Submit</button>`,
    type: "typed",
    expected: "A journey of a thousand miles begins with a single step.",
  },
  {
    question: "Is there any grammatical error in the following sentence: <i>'He have been to the store.'</i>",
    content: `<button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
   {
    question: "Does this image show a tree?",
    content: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReco54-5Ko7cjj6EaGiQpEFnkqHa-0n7Cjw&s" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Categorize this headline: <i>'Government passes new economic reform.'</i>",
    content: `<button class="submit-task">Politics</button>
              <button class="submit-task">Economy</button>
              <button class="submit-task">World</button>`,
    type: "buttons",
  },
  {
    question: "Sentiment of: <i>'I absolutely love this product!'</i>",
    content: `<button class="submit-task">Positive</button>
              <button class="submit-task">Neutral</button>
              <button class="submit-task">Negative</button>`,
    type: "buttons",
  },
  {
    question: "Is this a valid receipt?",
    content: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8fpoRm9_dTpCnBnTdTDNhquCXKxzCfGjgw&s" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
    question: "Topic of: <i>'New iPhone model launched today.'</i>",
    content: `<button class="submit-task">Technology</button>
              <button class="submit-task">Business</button>
              <button class="submit-task">Lifestyle</button>`,
    type: "buttons",
  },
  {
    question: "What emotion best fits: <i>'I can’t take this anymore.'</i>",
    content: `<button class="submit-task">Anger</button>
              <button class="submit-task">Sadness</button>
              <button class="submit-task">Frustration</button>`,
    type: "buttons",
  },
  {
    question: "Does this show a product?",
    content: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHGNc2TCWjrhH-L9JfGJcI5K3Qq0P_xc0wg&s" />
              <button class="submit-task">Yes</button>
              <button class="submit-task">No</button>`,
    type: "binary",
  },
  {
  question: "Is this a bicycle?",
  content: `<img src="https://picsum.photos/300/301" />
            <button class="submit-task">Yes</button>
            <button class="submit-task">No</button>`,
  type: "binary",
},
{
  question: "Does this review express a positive sentiment? '<i>I absolutely loved this product!</i>'",
  content: `<button class="submit-task">Yes</button>
            <button class="submit-task">No</button>`,
  type: "binary",
},
{
  question: "What category best fits this sentence: '<i>The election results were announced today.'</i>'",
  content: `<button class="submit-task">Politics</button>
            <button class="submit-task">Entertainment</button>
            <button class="submit-task">Technology</button>`,
  type: "buttons",
},
{
  question: "Identify the emotion: '<i>I can't believe this happened! I'm so angry.'</i>'",
  content: `<button class="submit-task">Happy</button>
            <button class="submit-task">Sad</button>
            <button class="submit-task">Angry</button>
            <button class="submit-task">Surprised</button>`,
  type: "buttons",
},
{
  question: "Classify this image:",
  content: `<img src="https://picsum.photos/300/200" />
            <button class="submit-task">Animal</button>
            <button class="submit-task">Vehicle</button>
            <button class="submit-task">Building</button>`,
  type: "buttons",
},
{
  question: "Is the text '<i>This movie was better than I expected.</i>' sarcastic?",
  content: `<button class="submit-task">Yes</button>
            <button class="submit-task">No</button>`,
  type: "binary",
},
{
  question: "How relevant is this ad to 'running shoes': '<i>Buy the newest sportswear now.'</i>'",
  content: `<button class="submit-task">Highly relevant</button>
            <button class="submit-task">Somewhat relevant</button>
            <button class="submit-task">Not relevant</button>`,
  type: "buttons",
},
{
  question: "Is this tweet offensive? '<i>You people are so dumb it's laughable.'</i>'",
  content: `<button class="submit-task">Yes</button>
            <button class="submit-task">No</button>`,
  type: "binary",
}

];
// Export the tasks array
export { tasks };
