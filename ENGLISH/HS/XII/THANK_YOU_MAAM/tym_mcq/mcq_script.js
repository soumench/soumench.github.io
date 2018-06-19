(function() {
		 const sound = new Audio("ting-128kbps.ogg");
			
		  const myQuestions = [
			{
			  question: "The large woman had ",
			  answers: {
				a: "a large purse.",
				b: "a small purse.",
				c: "a medium purse."
			  },
			  correctAnswer: "a"
			},
			{
			  question: "The time was about",
			  answers: {
				a: "ten o'clock.",
				b: "eleven o'clock.",
				c: "twelve o'clock."
			  },
			  correctAnswer: "b"
			},
			{
			  question: "The woman was walking ",
			  answers: {
				a: "with Roger.",
				b: "with a boy.",
				c: "alone.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "The woman told the boy to pick up",
			  answers: {
				a: "the suitcase.",
				b: "the pocket book.",
				c: "the bucket.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "The boy wanted the woman to ",
			  answers: {
				a: "turn him lose.",
				b: "hold him tight.",
				c: "hug him tight.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "The name of the woman was ",
			  answers: {
				a: "Mrs. Lol Bites Washington Jones.",
				b: "Mrs. Lullaby Washington Jones.",
				c: "Mrs. Luella Bates Washington Jones.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "The woman continued to drag the boy ",
			  answers: {
				a: "up the hill.",
				b: "up the lane.",
				c: "up the street.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "The boy could hear the other roomers ",
			  answers: {
				a: "laughing and walking.",
				b: "laughing and talking.",
				c: "crying.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "The woman switched on the light and ",
			  answers: {
				a: "left the door open.",
				b: "left the door closed.",
				c: "left the door ajar.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "What was the name of the boy?",
			  answers: {
				a: "Rogerio.",
				b: "Roger.",
				c: "Rodrigo.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "There was nobody home at the boy's house.",
			  answers: {
				a: "False.",
				b: "I don't know.",
				c: "True.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "The boy named Roger wanted to buy",
			  answers: {
				a: "an icecream.",
				b: "a cold drink.",
				c: "a pair of blue suede shoes.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "In another corner of the room behind a screen was",
			  answers: {
				a: "a gas plate and an icebox.",
				b: "a gas plate and a toybox..",
				c: "a cup plate and a nicebox.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "The woman was going to make ",
			  answers: {
				a: "a lassi.",
				b: "cocoa out of a canned milk.",
				c: "a cold coffee.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Mrs. Jones heated some ",
			  answers: {
				a: "pasta.",
				b: "sandwiches.",
				c: "lima beans and ham.",
			 },
			  correctAnswer: "c"
			},
			{
			  question: "Mrs. Jones  cut the boy a half of her",
			  answers: {
				a: "ten-cent cake.",
				b: "twenty-cent cake.",
				c: "five-cent cake.",
			 },
			  correctAnswer: "a"
			},
			{
			  question: "Mrs. Jones gave the boy ",
			  answers: {
				a: "twenty dollars.",
				b: "ten dollars.",
				c: "thirty dollars.",
			 },
			  correctAnswer: "b"
			},
			{
			  question: "Mrs. Jones led the boy down the hall to the ",
			  answers: {
				a: "back door.",
				b: "front door.",
				c: "passage way.",
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