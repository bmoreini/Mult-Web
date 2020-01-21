


function setup() {
		questions = parseInt(prompt("*** MUTIPLICATION TABLE TRAINER ***\nHow many questions?"));
		bottomRange = parseInt(prompt("Lowest factor?"));
		topRange = parseInt(prompt("Highest factor?"));
		alert("Enter 'stop' to quit the program.");
		return questions;
	} // close setup


function main(){
	if (question < questions) {
		questioner();
	}
	else endQuiz(wrongAnswers);
}


function questioner(){
	if (wrong == 0 ) {
		x = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
	  y = Math.floor(Math.random()*((topRange+1)-bottomRange))+bottomRange;
		equation=(x+" * "+y+"?");
		solution=x*y;
		document.getElementById("equation").value = equation;
	}
	else {
		document.getElementById("equation").value = equation;
	}
} // close questioner


function userInput(){
	stop=false;
	let input = document.getElementById("input").value;
	if (input == "stop") {
		document.getElementById("input").value = "";
		stop = true;
		questions = question;
	}
	else if (input == solution) {
		alert("Correct!");
		wrongAnswers+=wrong;
		wrong=0;
		document.getElementById("input").value = "";
		question++;
		main();
	}
	else {
		alert("Incorrect solution. Try again.");
		document.getElementById("input").value = "";
		wrong=1;
		main();
	}
} // close userInput


function endQuiz(wrongAnswers){
	if (wrongAnswers>0 || stop==true) {
		again = confirm("You had "+wrongAnswers+" wrong out of "+questions+".\n Do this some more?");
	}
	else again = confirm("Charlie, you've won! Try higher factors and do this some more?");
	if (again==true) main();
	else alert("Hope you learned your times tables!");
} // close endQuiz


var question = 0;
var stop=false; again=true; wrongAnswers=0; bottomRange=0; topRange=0;
var again=false; solution=0;x=0;y=0;equation=null;wrong=0;
var questions = setup();

main();
