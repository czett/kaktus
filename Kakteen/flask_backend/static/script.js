
function cycle(){
	const active = document.querySelector(".act");
	const index = Number(active.dataset.index);
	var nindex = Number(index) + 1;
	
	if (nindex>getCards()){
		nindex = 1;
	}
	
	active.classList.add("out");
	active.classList.remove("in")
	
	const snindex = nindex.toString();
	active.classList.remove("act");
	const snindexString = `[data-index='${snindex}']`;
	const next = document.querySelector(snindexString);
	next.classList.add("in");
	next.classList.remove("out");
	next.classList.add("act");
}

function getCards(){
	var cardnum = 0;
	Array.from(document.querySelectorAll('.card')).forEach((element,index) =>
	{
		 if (Number(element.dataset.index)>cardnum){
			 cardnum = Number(element.dataset.index);
		 }
	});
	
	return cardnum;
}

Array.from(document.querySelectorAll('.card')).forEach((element,index) =>
{
	 element.addEventListener('click', cycle);
});

var menuCollapsed = true;

function triggerMenu(){
	if (menuCollapsed == true){
		document.querySelector(".link-box").style.display = "flex";
		document.querySelector(".link-box").style.visibility = "visible";
		document.querySelector(".trigger-icon").style.transform = "rotate(90deg)";
		menuCollapsed = false;
	}else{
		document.querySelector(".link-box").style.display = "none";
		document.querySelector(".link-box").style.visibility = "hidden";
		document.querySelector(".trigger-icon").style.transform = "rotate(0deg)";
		menuCollapsed = true;
	}
}


//================/Notification alert\================\\

const bell = document.querySelector('#bell');
const ctnt = document.querySelector('#content');
var ausgeklappt = false;

function ausklappen(){
    if(ausgeklappt == false) {
        ctnt.classList.add('her');
        ausgeklappt = true;
    }else {
        ctnt.classList.remove('her');
        ausgeklappt = false;
    }
}

//================/Notification alert [end]\==========\\

/* login */

var login_vis = false;
const login_window = document.querySelector(".logreg-box");

function trigger_logreg(){
    if(ausgeklappt == false) {
        login_window.style.visibility = "visible"
        ausgeklappt = true;
    }else {
        login_window.style.visibility = "hidden"
        ausgeklappt = false;
    }
}

var login_displayed = true;

function switchLogregOptions(){
	if (login_displayed == true){
		document.querySelector("#login-form").style.display = "none";
		document.querySelector("#register-form").style.display = "flex";
		login_displayed = false;
	}else{
		document.querySelector("#register-form").style.display = "none";
		document.querySelector("#login-form").style.display = "flex";
		login_displayed = true;
	}
}

/* login ende */

//==============/Kaktus Quiz\====================\\

function triggerQuiz(){
	window.location.href = "/quiz";
}

const answer1 = document.getElementById('answBox1');
const answer2 = document.getElementById('answBox2');
const answer3 = document.getElementById('answBox3');
const answer4 = document.getElementById('answBox4');

var round = 0;
var points = 0;


function Answer(clicked, correct) {
	var correct_answer = document.getElementById(correct);
	var clicked_answer = clicked;

	if(clicked_answer != correct_answer) {
		clicked_answer.style.backgroundColor = "red";
		var rounds = 1;
		console.log("Runde: " + rounds);

		setTimeout(function(){
		document.getElementById('answBox1').style.backgroundColor = "";
		document.getElementById('answBox2').style.backgroundColor = "";
		document.getElementById('answBox3').style.backgroundColor = "";
		document.getElementById('answBox4').style.backgroundColor = "";
		
		document.getElementById('question').innerHTML = "Wie groß ist ein Kaktus nach 50 Jahren?";

		document.getElementById('answBox1').innerHTML = "4 - 5 Meter";
		document.getElementById('answBox2').innerHTML = "5 - 6 Meter";
		document.getElementById('answBox3').innerHTML = "3 - 4 Meter";
		document.getElementById('answBox4').innerHTML = "1 - 2 Meter"

		// document.getElementById('answBox1').setAttribute('onmousedown', 'Answer(this, answBox2');
		// document.getElementById('answBox2').setAttribute('onmousedown', 'Answer(this, answBox2');
		// document.getElementById('answBox3').setAttribute('onmousedown', 'Answer(this, answBox2');
		// document.getElementById('answBox4').setAttribute('onmousedown', 'Answer(this, answBox2');

		
		},1000);
	}
	if(clicked_answer == correct_answer) {
		clicked_answer.style.backgroundColor = "green";
		var rounds = 1;
		points += 1;
		console.log("Runde: " + rounds);
		console.log("Punkte: " + points);

		setTimeout(function(){
			document.getElementById('answBox1').style.backgroundColor = "";
			document.getElementById('answBox2').style.backgroundColor = "";
			document.getElementById('answBox3').style.backgroundColor = "";
			document.getElementById('answBox4').style.backgroundColor = "";
			
			document.getElementById('question').innerHTML = "Wie groß ist ein Kaktus nach 50 Jahren?";
	
			document.getElementById('answBox1').innerHTML = "4 - 5 Meter";
			document.getElementById('answBox2').innerHTML = "3 - 4 Meter";
			document.getElementById('answBox3').innerHTML = "6 - 7 Meter";
			document.getElementById('answBox4').innerHTML = "1 - 2 Meter";

			// document.getElementById('answBox1').setAttribute('onmousedown', 'Answer(this, answBox2');
			// document.getElementById('answBox2').setAttribute('onmousedown', 'Answer(this, answBox2');
			// document.getElementById('answBox3').setAttribute('onmousedown', 'Answer(this, answBox2');
			// document.getElementById('answBox4').setAttribute('onmousedown', 'Answer(this, answBox2');

			},1000);
	}
}

//==============/Kaktus Quiz [ende]\=============\\

/* new url methode */

function newUrl(url){
	window.location.href = url;
}

/* endöööööö */

/* profilbilder auswählen */

function profilbildAuswaehlen(bild){
	//document.querySelectorAll(".profilbildoption").style.border = "none";

	var optionen = document.querySelectorAll('.profilbildoption');
	var r = document.querySelector(':root');
	var rs = getComputedStyle(r);
	var ac = rs.getPropertyValue('--ac');

	[].forEach.call(optionen, function(option) {
		// end me
		option.style.border = "none";
	});

	//bild.style.border = "10px solid rgb(255,99,125)";
	bild.style.border = "5px solid " + ac;

	//bild.style.display = "none";
}

// ende 

//==============/Shop plus minus\=============\\

var Anzahl = 100;

function clickonminus(){
	Anzahl -= 1;
	document.getElementById('amountCouter').innerHTML = Anzahl;

	if (Anzahl < 10) {
		Anzahl -= Math.floor(Math.random() * 8)
	}
}

function clickonplus(){
	Anzahl += 1;
	document.getElementById('amountCouter').innerHTML = Anzahl;
}

//==============/Shop plus minus [ende]\=============\\