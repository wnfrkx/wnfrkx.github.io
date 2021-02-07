function showInstructions() {
	hide("screen1");
	show("screen2");
	document.getElementById("bgMusic").play();  
	document.getElementById("bgMusic").volume = 0.3;  
}

function chooseCharacter() {
	hide("screen2");
	show("screen3");
}

function instructionsBack() {
	hide("screen3");
	show("screen2");
}

function goFoliated() {
	hide("screen3");
	show("screen4");
}

function goNon() {
	hide("screen3");
	show("screen5");
}

function folToBack() {
	hide("screen4");
	show("screen3");
}

function nonToBack() {
	hide("screen5");
	show("screen3");
}

function StartB() { document.getElementById("startButton").src = "foliation/StartB.png"; } 
function StartA() { document.getElementById("startButton").src = "foliation/StartA.png"; }
function ContinueB() { document.getElementById("continueButton").src = "foliation/ContinueB.png"; } 
function ContinueA() { document.getElementById("continueButton").src = "foliation/ContinueA.png"; }
function HotdogB() { document.getElementById("hotdog").src = "foliation/GoBackB.png"; } 
function HotdogA() { document.getElementById("hotdog").src = "foliation/GoBackA.png"; }
function CanalB() { document.getElementById("canal").src = "foliation/GoBackB.png"; } 
function CanalA() { document.getElementById("canal").src = "foliation/GoBackA.png"; }

function show(a) {
	document.getElementById(a).style.display = "block";
}

function hide(a) {
	document.getElementById(a).style.display = "none";
}

function display(a,b) {
	document.getElementById(a).innerHTML = b;
}