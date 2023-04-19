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
		option.style.border = "5px solid transparent";
	});

	bild.style.border = "10px solid rgb(255,99,125)";

	//bild.style.display = "none";
}

// ende 