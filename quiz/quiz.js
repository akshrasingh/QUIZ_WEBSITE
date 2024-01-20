
   const queson= [
     {
       question: "How do you say 'good morning' in French?",
       options: ["Bonjour", "Bonsoir", "Salut", "Bonne nuit"],
       answer: "Bonjour"
     },
     {
       question: "What is the French word for 'friend'?",
       options: ["Ami", "Copain", "Compagnon", "Fraternel"],
       answer: "Ami"
     },
     {
       question: "Translate 'merci beaucoup' to English.",
       options: ["Thank you very much", "Hello", "Goodbye", "Excuse me"],
       answer: "Thank you very much"
     },
     {
       question: "How do you say 'I love you' in French?",
       options: ["Je t'aime", "Je t'adore", "Amour", "Coeur"],
       answer: "Je t'aime"
     },
     {
       question: "What is the French word for 'book'?",
       options: ["Livre", "Journal", "Magazine", "Papier"],
       answer: "Livre"
     },
     {
       question: "Translate 'excusez-moi' to English.",
       options: ["Excuse me", "Please", "Sorry", "Thank you"],
       answer: "Excuse me"
     },
     {
       question: "How do you write 'Monday' in French?",
       options: ["Lundi", "Mardi", "Mercredi", "Dimanche"],
       answer: "Lundi"
     },
     {
       question: "What is the French word for 'water'?",
       options: ["Eau", "Vin", "Lait", "Café"],
       answer: "Eau"
     },
     {
       question: "Translate 'good night' to French.",
       options: ["Bonne nuit", "Bonsoir", "Au revoir", "Salut"],
       answer: "Bonne nuit"
     },
     {
       question: "How do you say 'family' in French?",
       options: ["Famille", "Ami", "Maison", "Frère"],
       answer: "Famille"
     }
   ];
 
 

















    let score=0;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");



    let currentques=0
    quizdis()
function quizdis(){
       // Destructuring the object
       const{answer, options, question}=queson[currentques];
       questionEl.textContent = question; // directly accessing 'question' due to destructuring.

       const shuffledOptions = shuffleOptions(options);
       shuffledOptions.forEach((opt) => {
         const btn = document.createElement('button');
         btn.textContent = opt;
         optionEl.appendChild(btn);
 
     // Event handling on the button:
     btn.addEventListener("click", () => {
         if(opt === answer){
             score++;
         }
         else{
             score=score-0.25;
         }
     console.log(score);
     scoreEl.textContent = `Score: ${score}`;
     nextq()
         });
     });
   
}
function nextq()
{
   currentques++;
   optionEl.textContent=''
   if(currentques>=queson.length)
   {
      questionEl.textContent = 'Quiz Completed!!';
      optionEl.textContent = '';
   }
   else{
      quizdis()
   }
}
//Shuffling the Options
function shuffleOptions(options) {
    for (let i = 0; i <options.length; i++) {
      const j = Math.floor(Math.random() * 4);
    temp=options[i]
    options[i]=options[j]
    options[j]=temp
       }
    return options;
  }
  
//   shuffleOptions([1, 2, 3, 4, 5]);