var trigger = [0,0,0,0];

function a() {
				if (trigger[0] == 0) {	
			 boCo("a","51,204,51,1");
			 bgCo("a","180,180,180,1");
				trigger[0] = 1;
				check();
				}
				else {
				boCo("a","0,0,0,1");
				bgCo("a","250,250,250,1");
				trigger[0] = 0;
				check();
}}

function b() {
				if (trigger[1] == 0) {	
			 boCo("b","255,51,51,1");
			 bgCo("b","180,180,180,1");
				trigger[1] = 1;
				check();
				}
				else {
				boCo("b","0,0,0,1");
				bgCo("b","250,250,250,1");
				trigger[1] = 0;
				check();
}}

function g() {
				if (trigger[2] == 0) {	
			 boCo("g","255,255,51,1");
			 bgCo("g","180,180,180,1");
				trigger[2] = 1;
				check();
				}
				else {
				boCo("g","0,0,0,1");
				bgCo("g","250,250,250,1");
				trigger[2] = 0;
				check();
}}

function h() {
				if (trigger[3] == 0) {	
			 boCo("h","102,153,255,1");
			 bgCo("h","180,180,180,1");
				trigger[3] = 1;
				check();
				}
				else {
				boCo("h","0,0,0,1");
				bgCo("h","250,250,250,1");
				trigger[3] = 0;
				check();
}}

function check() {
				sum = 0;
				for (i in trigger) {
								sum += trigger[i];
								}
				if (sum == 2) {
								sumTwo();
								}
				}
				
function sumTwo() {
				binary = trigger[0]*8 + trigger[1]*4 + trigger[2]*2 + trigger[3];
				switch (binary) {
								case 3: bgCo("place","255,51,51,1"); start(3); break;
								case 5: bgCo("place","255,153,51,1"); start(5); break;
								case 6: bgCo("place","255,255,51,1"); start(6); break;
								case 9: bgCo("place","51,204,51,1"); start(9); break;
								case 10: bgCo("place","102,153,255,1"); start(10); break;
								case 12: bgCo("place","204,153,255,1"); start(12); break;
								}
				}

function boCo(a,b) {
				document.getElementById(a).style.borderColor = "rgba(" + b + ")";

}

function bgCo(a,b) {
				document.getElementById(a).style.backgroundColor = "rgba(" + b + ")";

}
		
		function start(a) {
			document.getElementById("info").innerHTML = "";
			j = 0;
			switch (a) {
							case 0: text = "Welcome to Little Geologist, a game made by Aggnuch. There are four elements above, representing the four subsystems of the Earth. Click on any two of them, and learn more about how those two interact with each other. Can you find all six combinations?"; break;
							case 3: text = "Water from the hydrosphere is primarily responsible for the erosion or breakdown of rocks from the geosphere. Earthquakes and volcanic eruptions originating from the geosphere can cause tsunamis, which displace huge amounts of water."; break;
							case 5: text = "Most life forms need water, and most of the water they consume is provided by the hydrosphere. Water is a key component of photosynthesis. Some life forms also live in the hydrosphere, such as algae, corals, phytoplankton, and fish."; break;
							case 6: text = "The geosphere provides nutrients and minerals for life forms to use. Plants need soil from the geosphere to get nutrients from it, while humans extract minerals for various uses."; break;
							case 9: text = "In the water cycle, clouds from the atmosphere bring water down to the ground in the form of precipitation, and some of the water that finds its way to the hydrosphere brings up water through the process of evaporation."; break;
							case 10: text = "The core in the geosphere gives the earth its magnetic field which protects the planet from solar winds that have the potential to devastate the Earth. Precipitation from the atmosphere sometimes result in landslides and similar events, changing the form of some landforms."; break;
							case 12: text = "Life forms need oxygen and carbon dioxide from the atmosphere for respiration or transpiration. Nitrogen from the atmosphere is fixed and used by plants which give off oxygen, fueling the process of respiration for animals. The atmosphere also protects life forms on Earth from UV light and radiation through its ozone layer."; break;
							}
			letterAnim(text);
		}
		function letterAnim(a) {
			if (j < a.length) {
				document.getElementById("info").innerHTML += a[j];
				setTimeout(function(){letterAnim(a)},30);
			}
			j++;
		}
