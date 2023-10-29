fruits = ["avocado","banana","calamansi","cherry","coconut","grape","jackfruit","mango","orange","papaya","peach","pineapple","raspberry","strawberry","watermelon"]
fruitPos = new Array();
collatz = [3,5,6,10,11,12,13,17,20,21,22,23,24,26,34,35,40,42,48,52,53,68,69,70,75,80,84,85,96];
let ordie = 0;
kpop = [
	{"n":"Aespa","m":["Giselle","Karina","Ningning","Winter"]},
	{"n":"Blackpink","m":["Jennie","Jisoo","Lisa","Rose"]},
	{"n":"G-Idle","m":["Minnie","Miyeon","Shuhua","Soyeon","Yuqi"]},
	{"n":"Itzy","m":["Chaeryeong","Lia","Ryujin","Yeji","Yuna"]},
	{"n":"Le Sserafim","m":["Chaewon","Eunchae","Kazuha","Sakura","Yunjin"]},
	{"n":"Twice","m":["Chaeyoung","Dahyun","Jeongyeon","Jihyo","Mina","Momo","Nayeon","Sana","Tzuyu"]},
	{"n":"Newjeans","m":["Danielle","Haerin","Hanni","Hyein","Minji"]},
	{"n":"BTS","m":["J-Hope","Jimin","Jin","Jungkook","RM","Suga","V"]},
	{"n":"Ive","m":["Gaeul","Leeseo","Liz","Rei","Wonyoung","Yujin"]},
	{"n":"Nmixx","m":["Bae","Haewon","Jiwoo","Kyujin","Lily","Sullyoon"]}
]
words = [
	["magnetic","manganese","magnify","magnesium"],
	["Philippines","felicity","Felix","flipping"],
	["Habsburg","hamburger","Lamborghini","iceberg"],
	["trabaho","trampoline","triangle","Tripoli"],
	["Juan","Jane","Sean","Jamie"],
	["Mandarin","mantra","meant","mention"],
	["Elmo","Elijah","Isabelle","Elizabeth"],
	["Angeles","Evangelista","Andres","Ingles"],
	["sexy","secant","secretary","insect"]
]
kpopMems = [];

function dalandan() {
	shuffleList(fruits,500);
	for (i in kpop) {
		for (j in kpop[i].m) {
			kpopMems.push(kpop[i].m[j]);
		}
	}
	for (i in fruits) {
		ordie = Number(i) + 1;
		newImg = document.createElement("img");
		newImg.src = "fruits/" + fruits[i] + ".png";
		newImg.setAttribute("id",fruits[i]);
		document.getElementById("fruits").appendChild(newImg);
		document.getElementById(fruits[i]).classList.add("fruitImages");
		let fruitName = fruits[i];
		document.getElementById(fruits[i]).addEventListener("click",function () {
			initiateFruit(fruitName);
		});
		if (ordie % 5 == 0) {
			newBr = document.createElement("br");
			document.getElementById("fruits").appendChild(newBr);
		}
		left = document.getElementById(fruits[i]).offsetLeft;
		taas = document.getElementById(fruits[i]).offsetTop;
		fruitObj = new Object();
		fruitObj.name = fruits[i];
		fruitObj.left = left;
		fruitObj.taas = taas;
		fruitPos.push(fruitObj);
	}
}

function initiateFruit(a) {
	hide("holder");
	show("loading");
	nmixx = document.getElementById("nmixx");
	nmixx.load();
	nmixx.onended = function () {
		hide("loading");
		show("prompt");
	}
	document.getElementById("promptFruit").src = "fruits/" + a + ".png";
	switch(a) {
		case "peach":
			display("promptSelected","Amazon Prime")
			changeBackground("orange");
			var rng = randomize(5,100) * 2;
			display("promptText","Express " + rng + " as the sum of 2 prime numbers.");
			break;
		case "strawberry":
			display("promptSelected","Divide and conquer")
			changeBackground("red");
			do {
				var rng = randomize(13,999);
			}
			while (
				rng % 7 != 0 && rng % 11 != 0 && rng % 13 != 0
			)
			display("promptText","Is " + rng + " divisible by 7, 11, or 13?");
			break;
		case "pineapple":
			display("promptSelected","Collatz na collatz ako sayo")
			changeBackground("yellow");
			rng = collatz[randomize(0,collatz.length-1)];
			display("promptText","Start with " + rng + ".<br>If the number is even, divide it by 2.<br>If the number is odd, multiply by 3 then add 1.<br>Repeat this as much as possible and see if you can get it down to 1!");
			break;
		case "avocado":
			display("promptSelected","Tanghalan ng mga aso")
			changeBackground("green");
			rng = randomize(1,9);
			fruit = fruits[randomize(1,15)];
			switch(rng) {
				case 1: display("promptText","Would you place " + fruit + " on pizza?"); break;
				case 2: display("promptText","Would you eat " + fruit + "-flavored ice cream?"); break;
				case 3: display("promptText","Would you eat only " + fruit + " for the rest of your life?"); break;
				case 4: display("promptText","If " + fruit + " were a person, what would you ask them?"); break;
				case 5: display("promptText","Anong prutas ang pwedeng pang-cosplay?"); break;
				case 6: 
					while (fruit == "tomato" || fruit == "banana") {
						fruit = fruits[randomize(1,15)];
					}
					display("promptText","Pwede bang gawing ketchup ang " + fruit + "?"); break;
				case 7: display("promptText","Sa lahat ng mga pwedeng ipangalan sa cellphone, bakit pa Apple?"); break;
				case 8: display("promptText","Kumakain ba ng dragonfruit ang mga dragon?"); break;
				case 9: display("promptText","Kailangan ba kumain ng date sa first date?"); break;
			}
			break;
		case "grape":
			display("promptSelected","Webdev internship yarn?")
			changeBackground("purple");
			rng = randomize(1,9);
			switch(rng) {
				case 1: display("promptText","Suggest one way how to improve this website/webpage:<br><br>The Chungganese Rotation<br>(Julgat's personal journal in the form of a website)"); break;
				case 2: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Mathementals<br>(Basic math problem generator created by Julgat during the pandemic)"); break;
				case 3: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Baybayin Quiz/Generator<br>(Webpage created by Julgat with Baybayin-related questions and a Baybayin transcriber)"); break;
				case 4: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Korean Sentence Flashcards<br>(Flashcard deck created by Julgat containing basic Korean sentences)"); break;
				case 5: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Institute of Mathematics<br>(<a href='http://math.upd.edu.ph' target='_blank'>math.upd.edu.ph</a>)"); break;
				case 6: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Makati City Government<br>(<a href='http://www.makati.gov.ph' target='_blank'>makati.gov.ph</a>)"); break;
				case 7: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Congress<br>(<a href='http://congress.gov.ph' target='_blank'>congress.gov.ph</a>)"); break;
				case 8: display("promptText","Suggest one way how to improve this website/webpage:<br><br>Philippine Statistics Authority<br>(<a href='http://psa.gov.ph' target='_blank'>psa.gov.ph</a>)"); break;
				case 9: display("promptText","Suggest one way how to improve this website/webpage:<br><br>UP School of Statistics SC<br>(<a href='http://updstatsc.wixsite.com/updstatsc' target='_blank'>updstatsc.wixsite.com/updstatsc</a>)"); break;
			}
			break;
		case "papaya":
			display("promptSelected","Recommendations for future consumption")
			changeBackground("orange");
			rng = randomize(1,7);
			switch(rng) {
				case 1: display("promptText","Recommend me a non-mainstream game you would like me to play."); break;
				case 2: display("promptText","Recommend me a song to listen to while walking around campus."); break;
				case 3: display("promptText","Recommend me an artist/musician from any music genre."); break;
				case 4: display("promptText","Recommend me any lighthearted manga/webtoon."); break;
				case 5: display("promptText","Recommend me any poem or short story you would want me to read."); break;
				case 6: display("promptText","Recommend me a trait you want to see in a game character."); break;
				case 7: display("promptText","Recommend me a lighthearted movie or mini-series."); break;
			}
			break;
		case "orange":
			display("promptSelected","|Truth|")
			changeBackground("orange");
			rng = randomize(1,13);
			switch(rng) {
				case 1: display("promptText","True or false?<br><br>UPMC is older than Juan Ponce Enrile and shares the same birthday with him."); break;
				case 2: display("promptText","True or false?<br><br>English is a Germanic language."); break;
				case 3: display("promptText","True or false?<br><br>Chinese, Japanese, and Korean are members of the same language family."); break;
				case 4: display("promptText","True or false?<br><br>The United Kingdom is a member of the European Union."); break;
				case 5: display("promptText","True or false?<br><br>There are about as many people in Luzon as South Korea."); break;
				case 6: display("promptText","True or false?<br><br>Italy is larger than the Philippines."); break;
				case 7: display("promptText","True or false?<br><br>UP won against ADMU in their game on October 22."); break;
				case 8: display("promptText","True or false?<br><br>UPMC's 22B app process theme was Differentiate."); break;
				case 9: display("promptText","True or false?<br><br>I was born one day before Christmas."); break;
				case 10: display("promptText","True or false?<br><br>I am taking Korean 10 this semester."); break;
				case 11: display("promptText","True or false?<br><br>I want to be an actuary in the future."); break;
				case 12: display("promptText","True or false?<br><br>I am older than the oldest member of Kpop group Newjeans."); break;
				case 13: display("promptText","True or false?<br><br>Java the programming language was inspired by Java island in Indonesia."); break;
			}
			break;
		case "cherry":
			display("promptSelected","Shi ne chi tae?")
			changeBackground("red");
			rng = randomize(1,6);
			show("promptImage");
			show("promptUl");
			display("promptText","Below is a picture of a Korean girl group I stan called " + kpop[rng-1].n + " and its members' names. See if you could match their names with their faces!<br><br>Bonus question: Sino ang bias ko sa " + kpop[rng-1].n + "?");
			document.getElementById("promptUl").innerHTML = "";
			document.getElementById("promptImage").src = "kpop/" + kpop[rng-1].n + ".png";
			for (i in kpop[rng-1].m) {
				let newLi = document.createElement("li");
				newLi.classList.add("promptLi");
				newLi.innerHTML = kpop[rng-1].m[i];
				document.getElementById("promptUl").appendChild(newLi);
			}
			break;
		case "banana":
			display("promptSelected","Mekus mekus names")
			changeBackground("yellow");
			rng = randomize(1,10);
			show("promptUl");
			srswor = new Array();
			for (i in kpop[rng-1].m) {
				srswor.push(kpop[rng-1].m[i]);
			}
			for (i = 0; i < 15 - kpop[rng-1].m.length; i++) {
				let newMem = "";
				do {
					newMem = kpopMems[randomize(0,kpopMems.length-1)];
				}
				while (srswor.includes(newMem));
				srswor.push(newMem);
			}
			shuffleList(srswor,1000);
			display("promptText","Below is a list of 15 random K-pop idols. Can you spot the names of all " + kpop[rng-1].m.length + " members of " + kpop[rng-1].n + "?");
			for (i in srswor) {
				let newLi = document.createElement("li");
				newLi.classList.add("promptLi");
				newLi.innerHTML = srswor[i];
				document.getElementById("promptUl").appendChild(newLi);
			}
			break;
		case "mango":
			display("promptSelected","The shape of your body is a flag");
			changeBackground("yellow");
			rng = randomize(1,12);
			show("promptImage");
			document.getElementById("promptImage").src = "countries/" + rng + ".png";
			display("promptText","Which country has this flag below?");
			break;
		case "coconut":
			display("promptSelected","Coconut! Dodododododododododok")
			changeBackground("green");
			rng = randomize(1,14);
			display("promptText","Come up with the best (or worst) situation to use this meme!");
			switch(rng) {
				case 1: document.getElementById("promptImage").src = "memes/adios.jpg"; break;
				case 2: document.getElementById("promptImage").src = "memes/anguished.png"; break;
				case 3: document.getElementById("promptImage").src = "memes/cat thumbs up.jpg"; break;
				case 4: document.getElementById("promptImage").src = "memes/confused math lady.jpg"; break;
				case 5: document.getElementById("promptImage").src = "memes/disappointed.jpg"; break;
				case 6: document.getElementById("promptImage").src = "memes/drowning.jpg"; break;
				case 7: document.getElementById("promptImage").src = "memes/eunchae.jpg"; break;
				case 8: document.getElementById("promptImage").src = "memes/holy water.jpg"; break;
				case 9: document.getElementById("promptImage").src = "memes/mom come pick me up im scared.png"; break;
				case 10: document.getElementById("promptImage").src = "memes/right.jpg"; break;
				case 11: document.getElementById("promptImage").src = "memes/that sign.jpg"; break;
				case 12: document.getElementById("promptImage").src = "memes/the rock.png"; break;
				case 13: document.getElementById("promptImage").src = "memes/w.jpg"; break;
				case 14: document.getElementById("promptImage").src = "memes/wojak.jpg"; break;
			}
			show("promptImage");
			break;
		case "watermelon":
			display("promptSelected","Amogus words")
			changeBackground("green");
			rng = randomize(1,words.length);
			show("promptUl");
			display("promptText","There are four words below. Which one is not etymologically related to the others?");
			srswor = words[rng-1];
			shuffleList(srswor,100);
			for (i in srswor) {
				let newLi = document.createElement("li");
				newLi.classList.add("promptLi");
				newLi.innerHTML = srswor[i];
				document.getElementById("promptUl").appendChild(newLi);
			}
			break;
		case "raspberry":
			display("promptSelected","Sudoku where everyone counts")
			changeBackground("red");
			rng = randomize(2,4);
			show("promptImage");
			display("promptText","Fill up the table below using numbers from 1 to 4 such that there are no duplicate numbers per row and column. Also, abide by the operations for every color block!<br><br>You can view a sample solution <a href='mathdoku/Slide1.png' target='_blank'>here</a>.");
			document.getElementById("promptImage").src = "mathdoku/Slide" + rng + ".PNG";
			break;
		case "calamansi":
			display("promptSelected","Choke lang yan")
			changeBackground("green");
			rng = randomize(1,5);
			show("promptImage");
			display("promptText","Spot the error in this simple calculation.");
			document.getElementById("promptImage").src = "calcs/" + rng + ".jpg";
			break;
		case "jackfruit":
			display("promptSelected","Hackerman")
			changeBackground("yellow");
			rng = randomize(1,4);
			show("promptImage");
			display("promptText","Below is a block of code in R.<br>Spot the error in the code!<br><br>Hint: The errors are mathematical or logical in nature. There is no error in the code structure itself.");
			document.getElementById("promptImage").src = "debug/" + rng + ".png";
			break;
	}
}

function shuffleList(a,b) {
	for (i = 0; i < b; i++) {
		rngA = randomize(0,a.length-1);
		rngB = randomize(0,a.length-1);
		tempA = a[rngA];
		tempB = a[rngB];
		a[rngA] = tempB;
		a[rngB] = tempA;
	}
}

function changeBackground(a) {
	document.body.style.backgroundImage = "url('bgs/" + a + ".PNG')";
}
function randomize(a,b) { return Math.floor(Math.random() * (b-a+1)) + a; }
function display(a,b) { document.getElementById(a).innerHTML = b; }
function append(a,b) { document.getElementById(a).innerHTML += b; }
function show(a) { document.getElementById(a).style.display = "block"; }
function hide(a) { document.getElementById(a).style.display = "none"; }