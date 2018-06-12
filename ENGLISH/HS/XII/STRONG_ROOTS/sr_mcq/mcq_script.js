(function() {
		 const sound = new Audio("ting-128kbps.ogg");
			
		  const myQuestions = [
			{
			  question: "Rameswaram is ",
			  answers: {
				a: "an island town",
				b: "a village",
				c: "a state"
			  },
			  correctAnswer: "a"
			},
			{
			  question: "Ashiamma was",
			  answers: {
				a: "Kalam's sister",
				b: "Kalam's mother",
				c: "Kalam's brother"
			  },
			  correctAnswer: "b"
			},
			{
			  question: "What was the name of Kalam's father?",
			  answers: {
				a: "Joynulabedin",
				b: "MoinulAbedin",
				c: "Jainulabdeen",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "Who bestowed the title of \"Bahadur\" upon one of Ashiamma's forebears?",
			  answers: {
				a: "The French.",
				b: "The British.",
				c: "The German.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Kalam was ",
			  answers: {
				a: "a short boy with rather undistinguished look.",
				b: "a handsome boy.",
				c: "a pretty boy.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "The childhood of Kalam was ",
			  answers: {
				a: "insecure.",
				b: "emotionally insecure.",
				c: "very secure.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "The locality  of Kalam was ",
			  answers: {
				a: "full of Hindus.",
				b: "full of Christians.",
				c: "predominantly Muslim.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "Many people of different religions offered Kalam's father ",
			  answers: {
				a: "a bowl of soup",
				b: "a bowl of water",
				c: "a bowl of curry",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Many people of different religions visited Kalam's father ",
			  answers: {
				a: "to thank him.",
				b: "to scold him.",
				c: "to preach him.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "Pakshi Lakshmana Sastry was the ",
			  answers: {
				a: "saint of the temple.",
				b: "the high priest of the temple.",
				c: "the low priest of the temple.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Prayer made possible ",
			  answers: {
				a: "a difference of spirit between people.",
				b: "a difference of opinion between people.",
				c: " a communion of the spirit between people.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "Adversity always presents opportunities for ",
			  answers: {
				a: "inspection.",
				b: "interception.",
				c: "introspection.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "impasse stands for",
			  answers: {
				a: "a situation in which no progress is possible.",
				b: "a situation  which is amicable.",
				c: "a situation which is advantageous.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "Kalam's father used to start his day",
			  answers: {
				a: "at six am",
				b: "at four am.",
				c: "at seven am.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Kalam tried to emulate his his father ",
			  answers: {
				a: "in his own world of religion.",
				b: "in his own world of sociology.",
				c: "in his own world of science and technology.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "Kalam firmly believed that ",
			  answers: {
				a: "there exists a divine power.",
				b: "there exists a mechanical power.",
				c: "there exists a logical power.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: " A person is on the road to freedom, happiness and peace of mind ",
			  answers: {
				a: "once an individual studies well.",
				b: "once an individual severs his emotional and physical bond.",
				c: "once an individual does physical exercise.",
			 },
			  correctAnswer: "b"
			}
		  ];

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
				`<div class="slide">
				   <div class="question"> ${currentQuestion.question} </div>
				   <div class="answers"> ${answers.join("")} </div>
				 </div>`
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
				answerContainers[questionNumber].style.color = "lightgreen";
			  } else {
				// if answer is wrong or blank
				// color the answers red
				answerContainers[questionNumber].style.color = "red";
			  }
			});

			// show number of correct answers out of total
			resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
		  }

		  function showSlide(n) {
			slides[currentSlide].classList.remove("active-slide");
			slides[n].classList.add("active-slide");
			currentSlide = n;

			if (currentSlide === 0) {
			  previousButton.style.display = "none";
			} else {
			  previousButton.style.display = "inline-block";
			}

			if (currentSlide === slides.length - 1) {
			  nextButton.style.display = "none";
			  submitButton.style.display = "inline-block";
			} else {
			  nextButton.style.display = "inline-block";
			  submitButton.style.display = "none";
			}
		  }

		  function showNextSlide() {
			showSlide(currentSlide + 1);
			sound.play();
		  }

		  function showPreviousSlide() {
			showSlide(currentSlide - 1); sound.play();
		  }

		  const quizContainer = document.getElementById("quiz");
		  const resultsContainer = document.getElementById("results");
		  const submitButton = document.getElementById("submit");

		  // display quiz right away
		  buildQuiz();

		  const previousButton = document.getElementById("previous");
		  const nextButton = document.getElementById("next");
		  const slides = document.querySelectorAll(".slide");
		  let currentSlide = 0;

		  showSlide(0);

		  // on submit, show results
		  submitButton.addEventListener("click", showResults);
		  previousButton.addEventListener("click", showPreviousSlide);
		  nextButton.addEventListener("click", showNextSlide);
		})();
	/*Sincere acknowledgement: www.sitepoint.com*/