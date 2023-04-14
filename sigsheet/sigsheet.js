var kinwa = [
	{"n":"moter","r":"Moter","l":0},
	{"n":"mags","r":"mags","l":0},
	{"n":"uncleroger","r":"UncleRoger","l":0},
	{"n":"mspink","r":"Ms. Pink","l":0},
	{"n":"unique","r":"Unique!","l":0},
	{"n":"sinomuna","r":"sino muna mem at app crush mo","l":0},
	{"n":"lern","r":"lern","l":0},
	{"n":"isaw","r":"ISAW","l":0},
	{"n":"jelan","r":"jelan","l":0},
	{"n":"siberia","r":"Siberia","l":0},
	{"n":"cutie","r":"cutie","l":0},
	{"n":"chungha","r":"chungha","l":0},
	{"n":"jam","r":"JAM :0","l":0},
	{"n":"herrscher","r":"Herrscher","l":0},
	{"n":"woofer","r":"WOOFER","l":0},
	{"n":"sayamau","r":"saya mau pulang ke rumah dan beristirahat","l":0},
	{"n":"williesimon","r":"Willie+Simon <3","l":0},
	{"n":"withasmile","r":"With A Smile","l":0},
	{"n":"raiven","r":"raiven","l":0},
	{"n":"ats","r":"ATS","l":0},
	{"n":"playror2","r":"play risk of rain 2","l":0},
	{"n":"baluy","r":"baluy","l":0},
	{"n":"sibin-ilibin","r":"sibin-ilibin","l":0},
	{"n":"mre","r":"Mr.E","l":0},
	{"n":"continews","r":"continews","l":0},
	{"n":"jelay","r":"jelay","l":0},
	{"n":"bizzcuit","r":"bizzcuit","l":0},
	{"n":"uwu","r":"uwu","l":0},
	{"n":"umbreon","r":"umbreon","l":0},
	{"n":"noobcarry","r":"NoobCarry","l":0},
	{"n":"conanedogawa","r":"conan edogawa","l":0},
	{"n":"nekokonut","r":"nekokonut","l":0},
	{"n":"wanderer","r":"Wanderer","l":0},
	{"n":"wanderlust","r":"Wanderlust","l":0},
	{"n":"breakthecode","r":"Break The Code","l":0},
	{"n":"strechy","r":"strechy","l":0},
	{"n":"treblemaker","r":"Treblemaker","l":0},
	{"n":"papyrus","r":"Papyrus","l":0},
	{"n":"desserts","r":"Desserts","l":0},
	{"n":"lingling","r":"lingling","l":0},
	{"n":"finn","r":"FINN","l":0},
	{"n":"istupd","r":"ISTUPD","l":0},
	{"n":"myloxyloto","r":"mylo xyloto","l":0},
	{"n":"hermit","r":"Hermit","l":0},
	{"n":"sassy","r":"Sassy","l":0},
	{"n":"axax","r":"(a+x)^(a-x)","l":0},
	{"n":"starlost","r":"star lost","l":0},
	{"n":"half-latina","r":"half-Latina","l":0},
	{"n":"mcsteamy","r":"Mcsteamy","l":0},
	{"n":"buboy","r":"Buboy","l":0},
	{"n":"cruisingmaverick","r":"Cruising Maverick","l":0},
	{"n":"peanut","r":"Peanut","l":0},
	{"n":"ichimie","r":"Ichimie","l":0},
	{"n":"yukihira","r":"yukihira","l":0},
	{"n":"imthemap","r":"I'm the Map","l":0},
	{"n":"air","r":"Air","l":0},
	{"n":"bl4nk","r":"bl4nk","l":0},
	{"n":"qqq","r":"qqq","l":0},
	{"n":"bunnyrose","r":"Bunny Rose","l":0},
	{"n":"breeze","r":"Breeze","l":0},
	{"n":"thedayafter","r":"The Day After Valentine's","l":0},
	{"n":"baymax","r":"Baymax","l":0},
	{"n":"probi","r":"PROBI","l":0},
	{"n":"woody","r":"Woody","l":0},
	{"n":"501-on","r":"501-on","l":0},
	{"n":"hundround","r":"hundround","l":0},
	{"n":"urdol","r":"u.r.d.o.l.xsection","l":0},
	{"n":"lavoisier","r":"Lavoisier","l":0},
	{"n":"kingoftheworld","r":"King of the World","l":0},
	{"n":"yoloyoloya","r":"yoloyoloyA","l":0},
	{"n":"puregold","r":"puregold steph curry","l":0},
	{"n":"goggles","r":"goggles","l":0},
	{"n":"bella","r":"bella","l":0},
	{"n":"diyosa","r":"Diyosa","l":0},
	{"n":"superposition","r":"Superposition","l":0},
	{"n":"sir","r":"Sir","l":0},
	{"n":"slenderman","r":"Slender Man","l":0},
	{"n":"fullback","r":"Full Back","l":0},
	{"n":"hymnpapawidth","r":"hymn papa width","l":0},
	{"n":"watchmecook","r":"Watch Me Cook","l":0},
	{"n":"yourbigaunt","r":"yourbigaunt","l":0},
	{"n":"coronacht","r":"coronacht","l":0},
	{"n":"unicorn","r":"unicorn","l":0},
	{"n":"kureh","r":"kureh","l":0},
	{"n":"hoodie","r":"Hoodie","l":0},
	{"n":"jonathan","r":"Jonathan","l":0},
	{"n":"mryoso","r":"Mr. Yoso","l":0},
	{"n":"scical","r":"sci cal","l":0},
	{"n":"monasimp","r":"monasimp","l":0},
]
var aira;
var lana;
var jesh;
var kenny = ["fafafa","9be0f1","b4f6a4","f7faa1","fcda9c","f898a4"];
var fortin = 0;
var raki = "";

function yna() {
	for (i in kinwa) {
		document.getElementById(kinwa[i].n).style.fill = "#fafafa";
	}
	for (i in kinwa) {
		elijah(i);
	}
	if (localStorage.getItem("sigsheetDeets") == null) {
		for (i in kinwa) {
			raki += 0;
		}
		localStorage.setItem("sigsheetDeets",raki);
	}
	else {
		raki = localStorage.getItem("sigsheetDeets");
		for (i in kinwa) {
			kinwa[i].l = raki[i];
			lana = kinwa[i].n;
			document.getElementById(lana).style.fill = "#" + kenny[raki[i]];
		}
	}
	brian();
}

function elijah(j) {
	document.getElementById(kinwa[j].n).addEventListener("click",function () {rhese(j);},false);
}

function rhese(i) {
	jesh = Number(i);
	lana = kinwa[i].n;
	aira = document.getElementById(lana).getBoundingClientRect();
	display("jane",kinwa[i].r);
	show("elle");
	document.getElementById("elle").style.left = (aira.left + window.scrollX) + "px";
	document.getElementById("elle").style.top = (aira.top + window.scrollY) + "px";
}

function aljay() {
	hide("elle");
}

function jamie(a) {
	kinwa[jesh].l = a;
	document.getElementById(lana).style.fill = "#" + kenny[a];
	raki = raki.slice(0,jesh) + a + raki.slice(jesh+1);
	localStorage.setItem("sigsheetDeets",raki);
	brian();
	aljay();
}

function jong() {
	display("luigi","");
	hide("luigi");
}

function brian() {
	fortin = 0;
	for (i in kinwa) {
		fortin += Number(kinwa[i].l);
	}
	display("euri",fortin);
}

function display(a,b) { document.getElementById(a).innerHTML = b; }
function append(a,b) { document.getElementById(a).innerHTML += b; }
function show(a) { document.getElementById(a).style.display = "block"; }
function hide(a) { document.getElementById(a).style.display = "none"; }