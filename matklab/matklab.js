var seta = [];
var setb = [];
var setc = [];
var setd = [];
var sete = [];
var setf = [];
var logs = [0,0,0,0];

function hot() {
	for (i = 1; i <= 99; i++) {
		seta.push(i);
	}
	for (i = 1; i <= 99; i++) {
		if (i % 2 == 0) {
			setb.push(i);
			seta[i-1] = 0;
		}
		if (i % 3 == 0) {
			setc.push(i);
			seta[i-1] = 0;
		}
		if (i % 5 == 0) {
			setd.push(i);
			seta[i-1] = 0;
		}
		if (i % 7 == 0) {
			sete.push(i);
			seta[i-1] = 0;
		}
	}
	seta = seta.filter(function(x) { return x !== 0; })
	for (i in seta) {
		setf.push(seta[i]);
	}
	
}

function readyTask() {
	logs = [0,0,0,0];
	display("setB","");
	display("setC","");
	display("setD","");
	display("setE","");
	display("setF","");
	hide("setB");
	hide("setC");
	hide("setD");
	hide("setE");
	hide("setF");
	bilang = Number(document.getElementById("bilang").value);
	pass = false;
	if (((bilang < 100) && (bilang > 0)) && (bilang % 1 == 0)) {
		pass = true;
	}
	if (pass) {
		if (setb.includes(bilang)) { logs[0] = greatestLog(bilang,2); }
		else { logs[0] = 0; }
		if (setc.includes(bilang)) { logs[1] = greatestLog(bilang,3); }
		else { logs[1] = 0; }
		if (setd.includes(bilang)) { logs[2] = greatestLog(bilang,5); }
		else { logs[2] = 0; }
		if (sete.includes(bilang)) { logs[3] = greatestLog(bilang,7); }
		else { logs[3] = 0; }
	if (logs[0] != 0) {
		show("setB");
		display("setB","I will show you " + logs[0] + " date/s that bear personal or historical significance. Try to guess what happened on those days!");
	}
	if (logs[1] != 0) {
		show("setC");
		display("setC","I want you to give me " + logs[1] + " pair/s of two-digit numbers and I need to give the product of each pair within five seconds per pair. Should I fail this, you can ask me anything non-sigsheet related.");
	}
	if (logs[2] != 0) {
		show("setD");
		display("setD","Please recommend me " + logs[2] + " song/s that you would play when walking around UP Diliman. It may be chill, metal, your call!");
	}
	if (logs[3] != 0) {
		show("setE");
		display("setE","Name " + logs[3] + " UPMC member/s who you find attractive or cute. I won't tell, I promise.");
	}
	if (logs[0] + logs[1] + logs[2] + logs[3] == 0) {
		show("setF");
		display("setF","I will show you a list of phrases pertaining to the dreams I had of various UPMC members. Pick one phrase and I will explain a dream corresponding to that phrase.");
	}}
	else {
		alert("mukhang di yata nakita ang instructions sa taas");
	}
}

function greatestLog(a,b) {
	if (a % b == 0) {
		for (i = 1; i <= Math.floor(Math.log(a)/Math.log(b)); i++) {
			if ((a/(b**i))%1 != 0) {
				break;
			}
		}
		return i-1;
	}
}

function randomize(a,b) { return Math.floor(Math.random() * (b-a+1)) + a; }
function display(a,b) { document.getElementById(a).innerHTML = b; }
function append(a,b) { document.getElementById(a).innerHTML += b; }
function show(a) { document.getElementById(a).style.display = "block"; }
function hide(a) { document.getElementById(a).style.display = "none"; }