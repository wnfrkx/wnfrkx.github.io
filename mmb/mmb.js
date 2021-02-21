/* Setup Variables */

var firstTime = true;

/* Setup Functions */

class Gas {
	constructor(pressure,volume,temperature,moles) { /* Pressure in atm, volume in L, temperature in K, moles in mol */
		this.pressure = pressure;
		this.volume = volume;
		this.temperature = temperature;
		this.moles = moles;
	}
	create() {
		this.pressure = randomize(1,200); /* Divided by 100 */
		this.volume = randomize(1,5000); /* Divided by 100 */
		this.temperature = randomize(17315,37315); /* Divided by 100 */
		this.moles = randomize(1,200); /* Divided by 10 */
		return this;
	}
	modify() {
		let change1 = randomize(70,150);
		let change2 = randomize(50,200);
		this.pressure = this.pressure * change1 / 100000;
		this.volume = this.volume * change2 / 10000;
		this.temperature = this.temperature * change1 * change2 / 1000000;
		this.moles = this.moles * change2 / 1000;
		/* Round off */
		this.pressure = Math.round(this.pressure * 100) / 100;
		this.volume = Math.round(this.volume * 100) / 100;
		this.temperature = Math.round(this.temperature * 100) / 100;
		this.moles = Math.round(this.moles * 100) / 100;
		return this;
	}
}

/* Number Variables */

var arithNumone = 0;
var arithNumtwo = 0;
var operation = 0;
var digits1 = 1;
var digits2 = 1;
var answer;
var gasBefore = new Gas(0,0,0,0);
var gasAfter = new Gas(0,0,0,0);
var gasHide;

/* Gameplay Variables */
var level = 1;
var exp = 0;
var expTable = [,1,3,6,10,15,22,31,42,55,70,88,109,133,166,190,224,262,304,350,400];
var remainders = false;
var mode = 1;
var digits1 = 1;
var digits2 = 1;
var score;
var totalScore;
computeScore();

/* Control Variables */
var i = 0;
var secs = randomize(2,5);
var j = 0;
var getText;
var goahead;

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
		digits1 = 1;
		digits2 = 1;
		localStorage.setItem("level",0);
		localStorage.setItem("exp",0);
		localStorage.setItem("questionsAnswered",0);
		localStorage.setItem("mode",1);
		localStorage.setItem("digits1",1);
		localStorage.setItem("digits2",1);
		localStorage.setItem("score",score);
		generateEquation();
		alert("Welcome to Mathementals!\n\nClick on the numbers to form your answer, or type it using the box below the equation. Press 'clear' to clear your answer, and 'enter' to submit your answer.\n\nUse 'r' to represent your remainder in division.\n\nRemember, practice makes perfect!");
	}
	else {
		exp = Number(localStorage.getItem("exp"));
		level = Number(localStorage.getItem("level"));
		mode = Number(localStorage.getItem("mode"));
		digits1 = Number(localStorage.getItem("digits1"));
		digits2 = Number(localStorage.getItem("digits2"));
		questionsAnswered = Number(localStorage.getItem("questionsAnswered"));
		computeScore();
		generateEquation();
	}
	display("expNum",Math.floor(exp));
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
	operation = opFromMode(mode);
	computeScore();
	if (mode >= 1 && mode <= 5) {
		if (firstTime) {
			arithNumone = randomize(1,9); arithNumtwo = randomize(1,9); answer = arithNumone + arithNumtwo; display("equation",arithNumone+" + "+arithNumtwo+" =");
		}
		else {
			switch (operation) {
				case 1:
					generateNumbers(digits1,digits2); answer = arithNumone + arithNumtwo;
					display("equation",arithNumone+" + "+arithNumtwo+" ="); display("quizTitle","Addition"); break;
				case 2:
					generateNumbers(digits1,digits2); answer = arithNumone - arithNumtwo;
					display("equation",arithNumone+" - "+arithNumtwo+" ="); display("quizTitle","Subtraction"); break;
				case 3:
					generateNumbers(digits1,digits2); answer = arithNumone * arithNumtwo;
					display("equation",arithNumone+" x "+arithNumtwo+" ="); display("quizTitle","Multiplication"); break;
				case 4:
					generateNumbers(digits1,digits2);
					if (remainders) {
						remNumber = arithNumone % arithNumtwo;
						if (remNumber != 0) { answer = Math.floor(arithNumone/arithNumtwo) + "r" + remNumber; }
						else { answer = arithNumone / arithNumtwo; }
					}
					else {
						arithNumone = Math.floor(arithNumone / arithNumtwo) * arithNumtwo;
						answer = arithNumone / arithNumtwo;
					}
					display("equation",arithNumone+" / "+arithNumtwo+" =");
					display("quizTitle","Division");
					break;
			}
		}
	}
	if (mode >= 6 && mode <= 11) {
		gasBefore = gasBefore.create();
		copyGas(gasAfter,gasBefore);
		gasAfter.modify();
		normalizeGases();
		hideAnswer();
		if (operation == 6) {
			display("quizTitle","Boyle's Law");
			display("equation","");
			append("equation","P<sub>1</sub> = " + gasBefore.pressure + " atm<br>");
			append("equation","P<sub>2</sub> = " + gasAfter.pressure + " atm<br>");
			append("equation","V<sub>1</sub> = " + gasBefore.volume + " L<br>");
			append("equation","V<sub>2</sub> = " + gasAfter.volume + " L<br>");
			switch (gasHide) {
				case 1: answer = gasAfter.pressure * gasAfter.volume / gasBefore.volume; break;
				case 2: answer = gasBefore.pressure * gasBefore.volume / gasAfter.volume; break;
				case 3: answer = gasAfter.pressure * gasAfter.volume / gasBefore.pressure; break;
				case 4: answer = gasBefore.pressure * gasBefore.volume / gasAfter.pressure; break;
			}
		}
		if (operation == 7) {
			display("quizTitle","Charles's Law");
			display("equation","");
			append("equation","V<sub>1</sub> = " + gasBefore.volume + " L<br>");
			append("equation","V<sub>2</sub> = " + gasAfter.volume + " L<br>");
			append("equation","T<sub>1</sub> = " + gasBefore.temperature + " K<br>");
			append("equation","T<sub>2</sub> = " + gasAfter.temperature + " K<br>");
			switch (gasHide) {
				case 3: answer = gasBefore.temperature * gasAfter.volume / gasAfter.temperature; break;
				case 4: answer = gasBefore.volume * gasAfter.temperature / gasBefore.temperature; break;
				case 5: answer = gasBefore.volume * gasAfter.temperature / gasAfter.volume; break;
				case 6: answer = gasBefore.temperature * gasAfter.volume / gasBefore.volume; break;
			}
		}
		if (operation == 8) {
			display("quizTitle","Gay Lussac's Law");
			display("equation","");
			append("equation","P<sub>1</sub> = " + gasBefore.pressure + " atm<br>");
			append("equation","P<sub>2</sub> = " + gasAfter.pressure + " atm<br>");
			append("equation","T<sub>1</sub> = " + gasBefore.temperature + " K<br>");
			append("equation","T<sub>2</sub> = " + gasAfter.temperature + " K<br>");
			switch (gasHide) {
				case 1: answer = gasBefore.temperature * gasAfter.pressure / gasAfter.temperature; break;
				case 2: answer = gasBefore.pressure * gasAfter.temperature / gasBefore.temperature; break;
				case 5: answer = gasBefore.pressure * gasAfter.temperature / gasAfter.pressure; break;
				case 6: answer = gasBefore.temperature * gasAfter.pressure / gasBefore.pressure; break;
			}
		}
		if (operation == 9) {
			display("quizTitle","Avogadro's Law");
			display("equation","");
			append("equation","V<sub>1</sub> = " + gasBefore.volume + " L<br>");
			append("equation","V<sub>2</sub> = " + gasAfter.volume + " L<br>");
			append("equation","n<sub>1</sub> = " + gasBefore.moles + " mol<br>");
			append("equation","n<sub>2</sub> = " + gasAfter.moles + " mol<br>");
			switch (gasHide) {
				case 3: answer = gasBefore.moles * gasAfter.volume / gasAfter.moles; break;
				case 4: answer = gasBefore.volume * gasAfter.moles / gasBefore.moles; break;
				case 7: answer = gasBefore.volume * gasAfter.moles / gasAfter.volume; break;
				case 8: answer = gasBefore.moles * gasAfter.volume / gasBefore.volume; break;
			}
		}
		if (operation == 10) {
			display("quizTitle","Combined Gas Law");
			display("equation","");
			append("equation","P<sub>1</sub> = " + gasBefore.pressure + " atm<br>");
			append("equation","P<sub>2</sub> = " + gasAfter.pressure + " atm<br>");
			append("equation","V<sub>1</sub> = " + gasBefore.volume + " L<br>");
			append("equation","V<sub>2</sub> = " + gasAfter.volume + " L<br>");
			append("equation","T<sub>1</sub> = " + gasBefore.temperature + " K<br>");
			append("equation","T<sub>2</sub> = " + gasAfter.temperature + " K<br>");
			switch (gasHide) {
				case 1: answer = gasBefore.temperature * gasAfter.pressure * gasAfter.volume / gasBefore.volume / gasAfter.temperature; break;
				case 2: answer = gasBefore.pressure * gasBefore.volume * gasAfter.temperature / gasBefore.temperature / gasAfter.volume; break;
				case 3: answer = gasBefore.temperature * gasAfter.pressure * gasAfter.volume / gasBefore.pressure / gasAfter.temperature; break;
				case 4: answer = gasBefore.pressure * gasBefore.volume * gasAfter.temperature / gasBefore.temperature / gasAfter.pressure; break;
				case 5: answer = gasBefore.pressure * gasBefore.volume * gasAfter.temperature / gasAfter.pressure / gasAfter.volume; break;
				case 6: answer = gasBefore.temperature * gasAfter.pressure * gasAfter.volume / gasBefore.pressure / gasBefore.volume; break;
			}
		}
	}
}

function copyGas(a,b) {
	a.pressure = b.pressure;
	a.volume = b.volume;
	a.temperature = b.temperature;
	a.moles = b.moles;
}

function normalizeGases() {
	gasBefore.pressure = gasBefore.pressure / 100;
	gasBefore.volume = gasBefore.volume / 100;
	gasBefore.temperature = gasBefore.temperature / 100;
	gasBefore.moles = gasBefore.moles / 10;
}

function hideAnswer() {
	if (operation == 6) {
		gasHide = randomize(1,4);
	}
	if (operation == 7) {
		gasHide = randomize(1,4) + 2;
	}
	if (operation == 8) {
		gasHide = randomize(1,4);
		if (gasHide > 2) {
			gasHide += 2;
		}
	}
	if (operation == 9) {
		gasHide = randomize(3,6);
		if (gasHide > 4) {
			gasHide += 2;
		}
	}
	if (operation == 10) {
		gasHide = randomize(1,6);
	}
	switch (gasHide) {
		case 1: gasBefore.pressure = "????"; break;
		case 2: gasAfter.pressure = "????"; break;
		case 3: gasBefore.volume = "????"; break;
		case 4: gasAfter.volume = "????"; break;
		case 5: gasBefore.temperature = "????"; break;
		case 6: gasAfter.temperature = "????"; break;
		case 7: gasBefore.moles = "????"; break;
		case 8: gasAfter.moles = "????"; break;
	}
}

function opFromMode(a) {
	if (a >= 1 && a <= 4) {
		return a;
	}
	if (a == 5) {
		return randomize(1,4);
	}
	if (a >= 6 && a <= 10) {
		return a;
	}
	if (a == 11) {
		return randomize(6,10);
	}
}

function generateNumbers(a,b) {
	arithNumone = Math.floor(Math.random() * (10 ** digits1)) + 1;
	arithNumtwo = Math.floor(Math.random() * (10 ** digits2)) + 1;
	computeScore();
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

function computeScore() {
	switch (operation) {
		case 1: score = 5 * (digits1 + digits2); break;
		case 2: score = 5 * (digits1 + digits2); break;
		case 3: score = 10 * (digits1 * digits2 + 1); break;
		case 4: score = 10 * (digits1 * digits2 + 1); break;
		case 6: score = 100; break;
		case 7: score = 100; break;
		case 8: score = 100; break;
		case 9: score = 100; break;
		case 10: score = 200; break;
		case 11: score = 100; break;
	}
	totalScore = score;
}

function checkAnswer() {
	input = document.getElementById("answer").value;
	if (mode >= 1 && mode <= 5) {
		if (answer == input) {
			if (operation == 4 && remainders) {
				exp += score * 2;
			}
			else {
				exp += score;
			}
			computeScore();
			questionsAnswered += 1;
			display("expNum",Math.floor(exp));
			updateStorage();
			if (exp > (expTable[level]*100)) {
				alert("LEVEL UP!!!!!!!!");
				level++;
				display("levNum",level);
				updateStorage();
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
			if (score > (totalScore / 5)) {
				if (firstTime) {
					score = 10;
				}
				else {
					score -= totalScore / 5;
					updateStorage();
				}
			}
			document.getElementById("answer").style.backgroundColor = "#ff3333";
			setTimeout(function() { document.getElementById("answer").style.backgroundColor = "#ffffff"; }, 2000);
		}
	}
	if (mode >= 6 && mode <= 11) {
		if (Math.abs(answer-input) / 1000 <= (1/1000)) {
			exp += score;
			computeScore();
			questionsAnswered += 1;
			display("expNum",Math.floor(exp));
			updateStorage();
			if (exp > (expTable[level]*100)) {
				alert("LEVEL UP!!!!!!!!");
				level++;
				display("levNum",level);
				updateStorage();
			}
			document.getElementById("answer").style.backgroundColor = "#ffffff";
			document.getElementById("answer").value = "";
			generateEquation();
		}
		else {
			score -= totalScore / 5;
			updateStorage();
			document.getElementById("answer").style.backgroundColor = "#ff3333";
			setTimeout(function() { document.getElementById("answer").style.backgroundColor = "#ffffff"; }, 2000);
		}
	}
}

function updateStorage() {
	localStorage.setItem("level",level);
	localStorage.setItem("exp",exp);
	localStorage.setItem("questionsAnswered",questionsAnswered);
	localStorage.setItem("mode",mode);
	localStorage.setItem("digits1",digits1);
	localStorage.setItem("digits2",digits2);
	localStorage.setItem("score",score);
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
	if (mode >= 1 && mode <= 5) {
		hide("gasLawsSel");
		show("arithmeticSel");
	}
	if (mode >= 6 && mode <= 11) {
		hide("arithmeticSel");
		show("gasLawsSel");
	}
}
function letsGo() {
	if (mode >= 1 && mode <= 5) {
		digits1 = Number(document.getElementById("digit1").value);
		digits2 = Number(document.getElementById("digit2").value);
		if (digits1 == 0 || digits2 == 0) {
			digits1 = 2;
			digits2 = 2;
		}
		if (mode == 3 && (digits1 > 6 || digits2 > 6)) {
			if (digits1 > 6) { digits1 = 6; }
			if (digits2 > 6) { digits2 = 6; }
			alert("Unfortunately, multiplication only allows a maximum of six digits. The app will fix that for you!");
		}
		if (((mode != 4) || (mode == 4 & (digits1 >= (digits2+1))))) {
			if (vamonos("remallow") == "yes") {
				remainders = true;
			}
			else {
				remainders = false;
			}
			computeScore();
			show("quizholder");
			show("menu");
			show("level");
			hide("menuSel");
			hide("gameSel");
			updateStorage();
			generateEquation();
		}
		else {
			alert("The second number should be at least one less than the first number.");
		}
	}
	if (mode >= 6 && mode <= 11) {
		show("quizholder");
		show("menu");
		show("level");
		hide("menuSel");
		hide("gameSel");
		updateStorage();
		generateEquation();
	}
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
function append(a,b) {
	document.getElementById(a).innerHTML += b;
}
function show(a) {
	document.getElementById(a).style.display = "block";
}
function hide(a) {
	document.getElementById(a).style.display = "none";
}