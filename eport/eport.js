var percent;
var op;
var change;
var counts = [0,0,0,0];
var yeet = new Array(4);
var height;

var srcs = [["sea.jpg","waser.jpg"],["IMG_0257.jpg","IMG_0712.jpg","IMG_0713.jpg","IMG_0714.jpg","IMG_1380.jpg"],["IMG_1384.jpg","IMG_1448.jpg","IMG_1449.jpg"],["IMG_0712.jpg","IMG_0257.jpg","IMG_0713.jpg","IMG_0714.jpg"]];
var fark = [[{"title":"Why are the Earth's inner layers hot?","sub":"Click above to know why temperatures on Earth's interior can be as hot as the Sun."},{"title":"The Four Layers of the Earth","sub":"Click above to learn more about the crust, mantle, outer core, and inner core."}],[{"title":"Stress vs. Strain","sub":"Click above to learn the difference between stress and strain."},{"title":"Types of Stress","sub":"Click above to learn about uniform and differential stress."},{"title":"Stages of Deformation","sub":"Click above to read about the stages of deformation in rocks."},{"title":"What factors affect the behavior of a material?","sub":"Click above to learn more about what affects how rocks break down."},{"title":"Effects of Deformation","sub":"Click above to learn more what happens when rocks deform."},{"title":"What is metamorphism?","sub":"Click above to learn more about metamorphism."}],[{"title":"Types of Metamorphism","sub":"Click above to know the types of metamorphism in rocks."},{"title":"Metamorphic Grade","sub":"Click above to learn about metamorphic grade."},{"title":"Endogenic vs. Exogenic","sub":"Click above to know how to differentiate between endogenic and exogenic."}],[{"title":"Continental Drift Theory","sub":"Click above to know all about the theory proposed by Alfred Wegener."},{"title":"Seafloor Spreading","sub":"Click above to learn more about seafloor spreading theory."},{"title":"Tectonic Plates","sub":"Click above to learn more about tectonic plates."},{"title":"Types of Plate Convergences","sub":"Click above to learn more about plate convergences."}]];

function hello() {
	height = document.getElementById("svg1").clientHeight;
	document.getElementById("textOne").style.top = "0px";
	document.getElementById("textTwo").style.top = height + "px";
	document.getElementById("textThree").style.top = (height*2) + "px";
	document.getElementById("textFour").style.top = (height*3) + "px";
	document.getElementById("textOne").style.height = height + "px";
	document.getElementById("textTwo").style.height = height + "px";
	document.getElementById("textThree").style.height = height + "px";
	document.getElementById("textFour").style.height = height + "px";
	document.getElementById("image1").setAttribute("height",height);
	document.getElementById("image2").setAttribute("height",height);
	document.getElementById("image2").setAttribute("top",height);
	document.getElementById("image3").setAttribute("height",height);
	document.getElementById("image3").setAttribute("top",height*2);
	document.getElementById("image4").setAttribute("height",height);
	document.getElementById("image4").setAttribute("top",height*3);
	document.getElementById("one").style.top = (height*1/2) + "px";
	document.getElementById("two").style.top = (height*1/2) + "px";
	document.getElementById("three").style.top = (height*3/2) + "px";
	document.getElementById("four").style.top = (height*3/2) + "px";
	document.getElementById("five").style.top = (height*5/2) + "px";
	document.getElementById("six").style.top = (height*5/2) + "px";
	document.getElementById("seven").style.top = (height*7/2) + "px";
	document.getElementById("eight").style.top = (height*7/2) + "px";
	showImage("image1");
}

function transition(a,b) {
	if (b == "l") {
		change = -1;
	}
	if (b == "r") {
		change = 1;
	}
	counts[a] = counts[a] + change;
	switch (a) {
		case 0:
			if (counts[0] == -1) { counts[0] = 1; }
			if (counts[0] == 2) { counts[0] = 0; }
		case 1:
			if (counts[1] == -1) { counts[1] = 4; }
			if (counts[1] == 5) { counts[1] = 0; }
		case 2:
			if (counts[2] == -1) { counts[2] = 2; }
			if (counts[2] == 3) { counts[2] = 0; }
		case 3:
			if (counts[3] == -1) { counts[3] = 3; }
			if (counts[3] == 4) { counts[3] = 0; }
	}
	changeImage("image"+(a+1),srcs[a][counts[a]]);
	display("title"+(a+1),fark[a][counts[a]].title);
	display("sub"+(a+1),fark[a][counts[a]].sub);
	showImage("image"+(a+1));
}

function transForm() {
	if (counts[0] == 0) {
		changeImage("imageOne","waser.jpg");
		showImage("imageOne");
		display("title"+1,fark[1].title);
		display("sub"+1,fark[1].sub);
		counts[0]++;
	}
	else {
		changeImage("imageOne","sea.jpg");
		showImage("imageOne");
		display("title"+1,fark[0].title);
		display("sub"+1,fark[0].sub);
		counts[0] = 0;
	}
}

function showImage(a) {
	bruh = a;
	op = 0;
	yeet[0] = setInterval(function(){opacitize(bruh);},10);
	function opacitize(a) {
		op += 1 / 100;
		document.getElementById(a).style.opacity = op;
		clearInterval(yeet[0]);
			if (op < 1) { yeet[0] = setTimeout(function(){opacitize(bruh);},10); }
			if (op > 1) { clearInterval(yeet[0]); op = 1; }
	}
}

function changeImage(a,b) {
	document.getElementById(a).src = b;
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