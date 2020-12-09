/* Setup Variables */

var firstTime = true;

/* Number Variables */

var arithNumone = 0;
var arithNumtwo = 0;
var operation = 0;
var answer;

/* Gameplay Variables */
var level = 1;
var exp = 0;
var expTable = [,1,3,6,10,15,22,31,42,55,70,88,109,133,166,190,224,262,304,350,400];
var scoreTable = [,10,25,50,100,150,200];
var remainders = false;
var mode = 1;
var difficulty = 1;
var score = scoreTable[difficulty];

/* Control Variables */
var i = 0;
var secs = randomize(0,0);
var j = 0;
var getText;

/* Stats Variables */
var questionsAnswered = 0;

function start() {
	load();
	if (localStorage.getItem("firstTime") == null) {
		localStorage.setItem("firstTime","1");
	}
	else {
		firstTime = Boolean(Number(localStorage.getItem("firstTime")));
	}
	if (firstTime) {
		document.getElementById("quizholder").style.display = "none";
		hide("menu");
		mode = 1;
		difficulty = 1;
		localStorage.setItem("level",0);
		localStorage.setItem("exp",0);
		localStorage.setItem("questionsAnswered",0);
		localStorage.setItem("mode",1);
		localStorage.setItem("difficulty",1);
		localStorage.setItem("score",10);
		generateEquation();
		alert("Welcome to Mathementals!\n\nClick on the numbers to form your answer, or type it using the box below the equation. Press 'clear' to clear your answer, and 'enter' to submit your answer.\n\nUse 'r' to represent your remainder in division.\n\nRemember, practice makes perfect!");
	}
	else {
		exp = Number(localStorage.getItem("exp"));
		level = Number(localStorage.getItem("level"));
		mode = Number(localStorage.getItem("mode"));
		difficulty = Number(localStorage.getItem("difficulty"));
		questionsAnswered = Number(localStorage.getItem("questionsAnswered"));
		score = scoreTable[difficulty];
		generateEquation();
	}
	display("expNum",exp);
	display("levNum",level);
}

function load() {
	setTimeout(function() { if (!firstTime) { show("menu"); } show("quizholder"); show("level"); hide("mmblogo"); },secs*1000);
}

function menu() {
	show("menuSel");
	hide("quizholder");
	hide("menu");
	hide("level");
	hide("gameSel");
}

function generateEquation() {
	if (firstTime) {
		arithNumone = randomize(1,9);
		arithNumtwo = randomize(1,9);
		answer = arithNumone + arithNumtwo;
		display("equation",arithNumone+" + "+arithNumtwo+" =");
	}
	else {
		operation = opFromMode(mode);
		switch (operation) {
			case 1:
				generateNumbers(difficulty);
				answer = arithNumone + arithNumtwo;
				display("equation",arithNumone+" + "+arithNumtwo+" =");
				display("quizTitle","Addition Level "+(difficulty-1));
				break;
			case 2:
				generateNumbers(difficulty);
				answer = arithNumone - arithNumtwo;
				display("equation",arithNumone+" - "+arithNumtwo+" =");
				display("quizTitle","Subtraction Level "+(difficulty-1));
				break;
			case 3:
				generateNumbers(difficulty);
				answer = arithNumone * arithNumtwo;
				display("equation",arithNumone+" x "+arithNumtwo+" =");
				display("quizTitle","Multiplication Level "+(difficulty-1));
				break;
			case 4:
				if (!remainders) {
					generateNumbers(difficulty);
					temp = arithNumone * arithNumtwo;
					answer = arithNumone;
					display("equation",temp+" / "+arithNumtwo+" =");
					display("quizTitle","Division Level "+(difficulty-1));
				}
				else {
					generateNumbers(difficulty);
					remNumber = arithNumone % arithNumtwo;
					if (remNumber != 0) {
						answer = Math.floor(arithNumone/arithNumtwo) + "r" + remNumber;
					}	
					else {
						answer = arithNumone / arithNumtwo;
					}
					display("equation",arithNumone+" / "+arithNumtwo+" =");
					display("quizTitle","Division Level "+(difficulty-1));
				}
				break;
		}
	}
}

function opFromMode(a) {
	if (a >= 1 && a <= 4) {
		return a;
	}
	if (a == 5) {
		return randomize(1,4);
	}
}

function generateNumbers(a) {
	if (operation == 1 || operation == 2) {
		switch (a) {
			case 1: arithNumone = randomize(1,9); arithNumtwo = randomize(1,9); break;
			case 2: arithNumone = randomize(10,99); arithNumtwo = randomize(1,99); break;
			case 3: arithNumone = randomize(100,999); arithNumtwo = randomize(1,999); break;
			case 4: arithNumone = randomize(1000,9999); arithNumtwo = randomize(1,9999); break;
			case 5: arithNumone = randomize(10000,99999); arithNumtwo = randomize(1,99999); break;
			case 6: arithNumone = randomize(100000,999999); arithNumtwo = randomize(1,999999); break;
		}
	}
	if (operation == 3) {
		switch (a) {
			case 1: arithNumone = randomize(2,9); arithNumtwo = randomize(2,9); break;
			case 2: arithNumone = randomize(10,99); arithNumtwo = randomize(2,9); break;
			case 3: arithNumone = randomize(100,999); arithNumtwo = randomize(2,9); break;
			case 4: arithNumone = randomize(10,99); arithNumtwo = randomize(10,99); break;
			case 5: arithNumone = randomize(1000,9999); arithNumtwo = randomize(2,9); break;
			case 6: arithNumone = randomize(1000,9999); arithNumtwo = randomize(10,99); break;
		}
	}
	if (operation == 4) {
		if (!remainders) {
			switch (a) {
				case 1: arithNumone = randomize(2,9); arithNumtwo = randomize(2,9); break;
				case 2: arithNumone = randomize(10,99); arithNumtwo = randomize(2,9); break;
				case 3: arithNumone = randomize(100,999); arithNumtwo = randomize(2,9); break;
				case 4: arithNumone = randomize(1000,9999); arithNumtwo = randomize(2,9); break;
				case 5: arithNumone = randomize(10,99); arithNumtwo = randomize(10,99); break;
				case 6: arithNumone = randomize(100,999); arithNumtwo = randomize(10,99); break;
			}
		}
		else {
			switch (a) {
				case 1: arithNumone = randomize(1,9); arithNumtwo = randomize(1,9); break;
				case 2: arithNumone = randomize(10,99); arithNumtwo = randomize(2,9); break;
				case 3: arithNumone = randomize(100,999); arithNumtwo = randomize(2,9); break;
				case 4: arithNumone = randomize(100,999); arithNumtwo = randomize(10,99); break;
				case 5: arithNumone = randomize(1000,9999); arithNumtwo = randomize(2,9); break;
				case 6: arithNumone = randomize(1000,9999); arithNumtwo = randomize(10,99); break;
			}
		}
	}
	return '';
}

function mayNapindot(event) {
	key = event.keyCode;
	if (key == 13) {
		checkAnswer();
	}
	if (key == 32) {
		if (firstTime) {
			display("guideText","");
			j = 0;
		}
	}
}

function checkAnswer() {
	input = document.getElementById("answer").value;
	if (answer == input) {
		if (operation == 4 && remainders) {
			exp += score * 2;
		}
		else {
			exp += score;
		}
		score = scoreTable[difficulty];
		questionsAnswered += 1;
		display("expNum",exp);
		localStorage.setItem("exp",exp);
		localStorage.setItem("questionsAnswered",questionsAnswered);
		if (exp > (expTable[level]*100)) {
			alert("LEVEL UP!!!!!!!!");
			level++;
			display("levNum",level);
			localStorage.setItem("level",level);
		}
		document.getElementById("answer").style.backgroundColor = "#ffffff";
		document.getElementById("answer").value = "";
		if (firstTime) {
			if (exp >= 100) {
				setInterval(function() {}, 1000);
				show("menu");
				alert("Congratulations for having answered 10 questions! More level modes are now unlocked, although I highly recommend you don't answer max level questions at first -- your mind will break down instantly if you do. ;)");
				firstTime = false;
				localStorage.setItem("firstTime","0");
				generateEquation();
			}
			else {
				generateEquation();
			}
		}
		else {
			generateEquation();
		}
	}
	else {
		if (score > (scoreTable[difficulty] * 0.2)) {
			if (firstTime) {
				score = 10;
			}
			else {
				score -= scoreTable[difficulty] * 0.2;
				localStorage.setItem("score",score);
			}
		}
		document.getElementById("answer").style.backgroundColor = "#ff3333";
		setTimeout(function() { document.getElementById("answer").style.backgroundColor = "#ffffff"; }, 2000);
	}
}

function clicked(a) {
	if (a >= 0 && a <= 9) {
		document.getElementById("answer").value += a;
	}
	if (a == "-" || a == ".") {
		document.getElementById("answer").value += a;
	}
	if (a == "r") {
		document.getElementById("answer").value += "r";
	}
	if (a == "cle") {
		document.getElementById("answer").value = "";
	}
	if (a == "ent") {
		checkAnswer();
	}
}

function setMode(a) {
	show("gameSel");
	hide("menuSel");
	mode = a;
	if (mode == 4 || mode == 5) {
		show("remallow");
	}
	else {
		hide("remallow");
	}
}

function letsGo() {
	hide("gameSel");
	difficulty = Number(vamonos("digits"));
	if (vamonos("remallow") == "yes") {
		remainders = true;
	}
	else {
		remainders = false;
	}
	score = scoreTable[difficulty];
	show("quizholder");
	show("menu");
	show("level");
	hide("menuSel");
	localStorage.setItem("difficulty",difficulty);
	localStorage.setItem("mode",mode);
	generateEquation();
}

function vamonos(a) {
	var oRadio = document.forms[0].elements[a];
	for(i = 0; i < oRadio.length; i++) {
		if(oRadio[i].checked) {
			return oRadio[i].value;
		}
	}
   return '';
}

function letterAnim(a,b) {
	getText = a;
	if (j < getText.length) {
		document.getElementById(b).innerHTML += getText[j];
		setTimeout(function(){letterAnim(getText,b)},40);
	}
	j++;
}

function randomize(a,b) {
	return Math.floor(Math.random() * (b-a+1)) + a;
}

function display(a,b) {
	document.getElementById(a).innerHTML = b;
}

function show(a) {
	document.getElementById(a).style.display = "block";
}

function hide(a) {
	document.getElementById(a).style.display = "none";
}