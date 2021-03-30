/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. In the experiment we have seen graphs where in the Y-axis there is "Milli-degrees". It is a measurement of ____________ ?", ///// Write the question inside double quotes
            answers: {
                a: "angle of rotation", ///// Write the option 1 inside double quotes
                b: "Specific rotation", ///// Write the option 2 inside double quotes
		c: "Ellipticity", ///// Write the option 1 inside double quotes
                d: "None of the above are correct", ///// Write the option 2 inside double quotes

		
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. CONTIN is __________ based process of deconvolution.",  ///// Write the question inside double quotes
      answers: {
        a: "Linear regression.", ///// Write the option 1 inside double quotes
        b: "Ridge Regression.", ///// Write the option 2 inside double quotes
        c: "Neural network.",
	d: "None of the above are correct"  
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

     {
      question: "3. Which one of the following is a Neural Network based method of Deconvolution? ",  ///// Write the question inside double quotes
      answers: {
        a: "CONTIN.", ///// Write the option 1 inside double quotes
        b: "K2D.", ///// Write the option 2 inside double quotes
        c: "SVD.",
	d: "All of the above are correct"  
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

     {
      question: "4.  If alpha helical and beta sheet regions occur in independent regions of a protein molecule, it will be counted under _______________ class. ",  ///// Write the question inside double quotes
      answers: {
        a: "Alpha + Beta.", ///// Write the option 1 inside double quotes
        b: "Alpha/Beta.", ///// Write the option 2 inside double quotes
        c: "All alpha.",
	d: "None of the above are correct"  
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
			 
      {
      question: "5. 
Ribonuclease A is an example of _______________ class.",  ///// Write the question inside double quotes
      answers: {
        a: "All alpha.", ///// Write the option 1 inside double quotes
        b: "Alpha + beta.", ///// Write the option 2 inside double quotes
        c: "Alpha + beta.",
	d: "Alpha + beta."  
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
			 
    ];


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
