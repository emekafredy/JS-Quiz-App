let currentQuestion = 0;
let score = 0;
let percentage = 0;
let totalQuestions = questions.length;

let container = document.getElementById('container');
let question = document.getElementById('question');
let option1 = document.getElementById('opt1');
let option2 = document.getElementById('opt2');
let option3 = document.getElementById('opt3');
let option4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextBtn');
let result = document.getElementById('resultDiv');







function getQuestions(index) {
	let questionIndex = questions[index];
	question.textContent = `${index + 1}. ${questionIndex.question}`;
	option1.textContent = questionIndex.option1;
	option2.textContent = questionIndex.option2;
	option3.textContent = questionIndex.option3;
	option4.textContent = questionIndex.option4;
};


nextButton.addEventListener('click', function() {

	let choice = document.querySelector('input[type=radio]:checked');

	if (!choice) {
		alert("Please select an option");
		return;
	}

	let selected = choice.value;
	
	if(questions[currentQuestion].answer == selected) {
		score += 1;
		percentage += 10;
	}

	choice.checked = false;
	currentQuestion++;
	if(currentQuestion === totalQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion === totalQuestions) {
		container.style.display = "none";
		resultDiv.style.display = "";
			if(score < 4) {
				resultDiv.innerHTML = `<h1> Poor Result: ${percentage}%</h1> <p>You got  ${score} out of ${totalQuestions} Correct </p>
															<input class="btn btn-primary" type="button" value="Go again" onClick="window.location.reload()">
				`;
			} else if (score > 3 && score < 7) {
				resultDiv.innerHTML = `<h1>Fair Result: ${percentage}%</h1> <p>You got  ${score} out of ${totalQuestions} Correct </p>
															<input class="btn btn-primary" type="button" value="Go again" onClick="window.location.reload()">
				`;
			} else if (score > 6 && score < 10) {
				resultDiv.innerHTML = `<h1>Great: ${percentage}%</h1> <p>You got  ${score} out of ${totalQuestions} Correct </p>
															<input class="btn btn-primary" type="button" value="Go again" onClick="window.location.reload()">
				`;
			} else {
				resultDiv.innerHTML = `<h1>Excellent: ${percentage}%</h1> <p>You got  ${score} out of ${totalQuestions} Correct </p>`;
			}

		
		return;
	}
	getQuestions(currentQuestion);

});