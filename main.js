let userScore = 0;
let compScore = 0;
const userScore_dom = document.getElementById("user-score");
const compScore_dom = document.getElementById("comp-score");

const userSign_dom = document.getElementById("user-sign");
const compSign_dom = document.getElementById("comp-sign");
const userState_dom = document.getElementById("user-info");
const compState_dom = document.getElementById("comp-info");
const exclaim_dom = document.getElementById("exclaim");
const message_dom = document.getElementById("message");

const one_dom = document.getElementById("1");
const two_dom = document.getElementById("2");
const three_dom = document.getElementById("3");
const four_dom = document.getElementById("4");
const five_dom = document.getElementById("5");
const six_dom = document.getElementById("6");
const seven_dom = document.getElementById("7");
const eight_dom = document.getElementById("8");
const nine_dom = document.getElementById("9");
const ten_dom = document.getElementById("10");

let innings = 1;

function freeze(){
	one_dom.remove();
	two_dom.remove();
	three_dom.remove();
	four_dom.remove();
	five_dom.remove();
	six_dom.remove();
	seven_dom.remove();
	eight_dom.remove();
	nine_dom.remove();
	ten_dom.remove();
}

function wicket(choice) {
	innings = innings + 1;
	exclaim_dom.innerHTML = "It's a Wicket!";
	if(innings === 2) {
		userState_dom.innerHTML = "User - Bowling";
		compState_dom.innerHTML = "Computer - Batting";
		userState_dom.classList.remove("red-back");
		compState_dom.classList.remove("green-back");
		userState_dom.classList.add("green-back");
		compState_dom.classList.add("red-back");
		userScore_dom.classList.add("red-back");
		setTimeout(function() {userScore_dom.classList.remove("red-back")}, 200);
	}
	if(innings === 3) {
		compScore_dom.classList.add("red-back");
		setTimeout(function() {compScore_dom.classList.remove("red-back")}, 200);
		if(userScore > compScore) {
			message_dom.innerHTML = "User wins! Press F5 to play again.";
			message_dom.classList.add("green-back");
			freeze();
		}
		else{
			message_dom.innerHTML = "It's a Draw! Press F5 to play again.";
			freeze();
		}
	}
}


function notWicket(choice) {
	exclaim_dom.innerHTML = "Let's Go!"
	if(innings === 1) {
		userScore = userScore + choice;
		userScore_dom.innerHTML = userScore;
		userScore_dom.classList.add("green-back");
		setTimeout(function() {userScore_dom.classList.remove("green-back")}, 200);
	}
	else {
		compScore = compScore + choice;
		compScore_dom.innerHTML = compScore;
		compScore_dom.classList.add("green-back");
		setTimeout(function() {compScore_dom.classList.remove("green-back")}, 200);

		if(userScore < compScore) {
			innings = innings + 1;
			message_dom.innerHTML = "Computer wins! Press F5 to play again.";
			message_dom.classList.add("red-back");
			exclaim_dom.innerHTML = "Oh! No.";
			freeze();
		}
	}
}


function user_pic(choice) {
	switch(choice) {
		case 1:
			userSign_dom.src="images/1.PNG";
		break;	
		case 2:
			userSign_dom.src="images/2.PNG";
		break;	
		case 3:
			userSign_dom.src="images/3.PNG";
		break;	
		case 4:
			userSign_dom.src="images/4.PNG";
		break;	
		case 5:
			userSign_dom.src="images/5.PNG";
		break;	
		case 6:
			userSign_dom.src="images/6.PNG";
		break;	
		case 7:
			userSign_dom.src="images/7.PNG";
		break;	
		case 8:
			userSign_dom.src="images/8.PNG";
		break;	
		case 9:
			userSign_dom.src="images/9.PNG";
		break;	
		case 10:
			userSign_dom.src="images/10.PNG";
		break;	
	}
}

function comp_pic(choice) {
	switch(choice) {
		case 1:
			compSign_dom.src="images/1.PNG";
		break;	
		case 2:
			compSign_dom.src="images/2.PNG";
		break;	
		case 3:
			compSign_dom.src="images/3.PNG";
		break;	
		case 4:
			compSign_dom.src="images/4.PNG";
		break;	
		case 5:
			compSign_dom.src="images/5.PNG";
		break;	
		case 6:
			compSign_dom.src="images/6.PNG";
		break;	
		case 7:
			compSign_dom.src="images/7.PNG";
		break;	
		case 8:
			compSign_dom.src="images/8.PNG";
		break;	
		case 9:
			compSign_dom.src="images/9.PNG";
		break;	
		case 10:
			compSign_dom.src="images/10.PNG";
		break;	
	}

}


function game(userChoice) {
	const compChoice = 1 + Math.floor(10 * Math.random());
	user_pic(userChoice);
	comp_pic(compChoice);

	if(userChoice === compChoice) {
		wicket(userChoice);
	}
	else{
		if(innings === 1){
			notWicket(userChoice);
		}
		else{
			notWicket(compChoice);
		}
	}
}


function main() {
	one_dom.addEventListener("click", function() {
		game(1);
	})
	two_dom.addEventListener("click", function() {
		game(2);
	})
	three_dom.addEventListener("click", function() {
		game(3);
	})
	four_dom.addEventListener("click", function() {
		game(4);
	})
	five_dom.addEventListener("click", function() {
		game(5);
	})
	six_dom.addEventListener("click", function() {
		game(6);
	})
	seven_dom.addEventListener("click", function() {
		game(7);
	})
	eight_dom.addEventListener("click", function() {
		game(8);
	})
	nine_dom.addEventListener("click", function() {
		game(9);
	})
	ten_dom.addEventListener("click", function() {
		game(10);
	})
}

userState_dom.classList.add("red-back");
compState_dom.classList.add("green-back");
main();