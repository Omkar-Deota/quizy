document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-btn");
    const questionContainer = document.getElementById("questions");
    const optionsContainer = document.getElementById("options");
    const feedbackContainer = document.getElementById("feedback");
    const feedbacktime = document.getElementById("feedbacktime");
    const landing = document.getElementById("landing");
    const timerContainer = document.getElementById("timer"); 
    const questionno = document.getElementById("questionno"); 

    let timeLeft = 15; 
    let questioncount=0;
    let ttime=0;
    let currentQuestionIndex = 0;
    let score = 0;
  
    const easyQuestions = [
      {
        question: "What is the capital of Italy?",
        options: ["Paris", "Rome", "Berlin", "London"],
        answer: "Rome",
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale", "Giraffe", "Horse"],
        answer: "Whale",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["Wa", "Wt", "H2O", "O2"],
        answer: "H2O",
      },
      {
        question: "Which month has 28 days in a normal year?",
        options: ["February", "January", "March", "December"],
        answer: "February",
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Shanghai"],
        answer: "Tokyo",
      },
      {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Portuguese",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Ag", "Au", "Pb"],
        answer: "Au",
      },
      {
        question: "What is the tallest mammal?",
        options: ["Elephant", "Giraffe", "Horse", "Whale"],
        answer: "Giraffe",
      },
      {
        question: "Which country is famous for pyramids?",
        options: ["Greece", "Italy", "Egypt", "Mexico"],
        answer: "Egypt",
      },
      {
        question: "What is the largest ocean?",
        options: [
          "Indian Ocean",
          "Atlantic Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        answer: "Pacific Ocean",
      },
    ];
  
    const mediumQuestions = [
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Michelangelo",
        ],
        answer: "Leonardo da Vinci",
      },
      {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        answer: "Pound",
      },
      {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "So", "Sd", "No"],
        answer: "Na",
      },
      {
        question: "What is the speed of light?",
        options: [
          "299,792,458 m/s",
          "300,000,000 m/s",
          "250,000,000 m/s",
          "280,000,000 m/s",
        ],
        answer: "299,792,458 m/s",
      },
      {
        question: "Which gas do plants primarily need for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
        answer: "Harper Lee",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Sv", "Sn"],
        answer: "Ag",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
      },
      {
        question: "Which element is represented by the chemical symbol 'Fe'?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        answer: "Iron",
      },
      {
        question: "Who discovered penicillin?",
        options: [
          "Alexander Fleming",
          "Marie Curie",
          "Albert Einstein",
          "Isaac Newton",
        ],
        answer: "Alexander Fleming",
      },
    ];
  
    const hardQuestions = [
      {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Liver", "Skin", "Heart"],
        answer: "Skin",
      },
      {
        question: "What is the chemical symbol for potassium?",
        options: ["Po", "Ka", "Pt", "K"],
        answer: "K",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile",
      },
      {
        question: "Who wrote '1984'?",
        options: [
          "George Orwell",
          "Aldous Huxley",
          "Ray Bradbury",
          "J.R.R. Tolkien",
        ],
        answer: "George Orwell",
      },
      {
        question: "What is the melting point of water in Celsius?",
        options: ["0°C", "-10°C", "100°C", "50°C"],
        answer: "0°C",
      },
      {
        question: "What is the chemical symbol for mercury?",
        options: ["Me", "Hg", "Mc", "Mv"],
        answer: "Hg",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest",
      },
      {
        question: "Who is the author of 'The Catcher in the Rye'?",
        options: [
          "J.D. Salinger",
          "Ernest Hemingway",
          "F. Scott Fitzgerald",
          "John Steinbeck",
        ],
        answer: "J.D. Salinger",
      },
      {
        question: "What is the chemical symbol for tungsten?",
        options: ["Tu", "Tn", "Tg", "W"],
        answer: "W",
      },
      {
        question: "Which gas is known as laughing gas?",
        options: ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        answer: "Nitrous Oxide",
      },
    ];
  
    startButton.addEventListener("click", function () {
      const selectedLevel = document.getElementById("level").value;
      if (selectedLevel === "easy") {
        questions = easyQuestions;
      } else if (selectedLevel === "medium") {
        questions = mediumQuestions;
      } else if (selectedLevel === "hard") {
        questions = hardQuestions;
      }
  
      landing.style.display = "none";
      const myElement = document.getElementById("show");
      myElement.className="container";
      displayQ(currentQuestionIndex);
      function startTimer() {
       
        let timerInterval = setInterval(function () {
          timerContainer.textContent = timeLeft-1 + "s";
  
          if (timeLeft ==1) {
            timerContainer.textContent ="Times up!";

          }
          if ( timeLeft==17) {
            timerContainer.textContent ="-";

          }
          if(questioncount>=10){
            clearInterval(timerInterval);

    
    
          }
          if (timeLeft <=0) {
            clearInterval(timerInterval);
            timerContainer.textContent ="";
            timeLeft=17;

            nextQuestion();
            startTimer();

          }
          ttime++;
          timeLeft--;
        }, 1000);
      }
      if(questioncount<=10){
        startTimer();


      }
    });
  
    function displayQ(index) {
        timerContainer.textContent ="-";
        questionno.textContent=`${questioncount}`;
        questioncount++;
    
      const currentQuestion = questions[index];
      document.getElementById("question").textContent = currentQuestion["question"];
  
      optionsContainer.innerHTML = "";
      currentQuestion.options.forEach((option, i) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.dataset.index = i;
        li.appendChild(button);
        optionsContainer.appendChild(li);
      });
    }
  
    function checkAns(selectedIndex) {
      const currentQuestion = questions[currentQuestionIndex];
      const selectedOption = currentQuestion.options[selectedIndex];
      const correctAnswer = currentQuestion.answer;
  
      if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "Correct!";
        feedbackContainer.classList.remove("incorrect");
        feedbackContainer.classList.add("correct");
        score++;
      } else {
        feedbackContainer.textContent =
          "Incorrect. The correct answer is: " + correctAnswer;
        feedbackContainer.classList.remove("correct");
        feedbackContainer.classList.add("incorrect");
      }

     
  
      
    }
  
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQ(currentQuestionIndex);
        feedbackContainer.textContent = "";
      } else {

        endQuiz();
      }
    }
  
    function endQuiz() {
      ttime=ttime-12;
      const a=Math.floor(ttime / 60) ;
      questionContainer.textContent =`Quiz ended. Your score: ${score}/${questions.length}`;
      feedbacktime.textContent='';
      feedbacktime.textContent=`total time taken is ${a} minutes and ${ttime%60} seconds`


    }
  
    optionsContainer.addEventListener("click", function (event) {
      if (event.target.matches(".option")) {
        const selectedIndex = parseInt(event.target.dataset.index);
        checkAns(selectedIndex);
      }
    });
    
    optionsContainer.addEventListener('click', function(event) {
        if (event.target.matches('.option')) {
            const selectedIndex = parseInt(event.target.dataset.index);
            checkAns(selectedIndex);
            timerContainer.textContent ="-";
            timeLeft=17;

            setTimeout(nextQuestion,1200);
            
            

        }
    });
  
  });