
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
		document.querySelector(".suchleiste-mob").style.visibility = "visible";
		document.querySelector(".trigger-icon").style.transform = "rotate(180deg)";
		menuCollapsed = false;
	}else{
		document.querySelector(".link-box").style.display = "none";
		document.querySelector(".link-box").style.visibility = "hidden";
		document.querySelector(".suchleiste-mob").style.visibility = "hidden";
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
	document.getElementById('anzahl-inp').value = Anzahl;

	if (Anzahl < 10) {
		Anzahl -= Math.floor(Math.random() * 8)
	}
}

function clickonplus(){
	Anzahl += 1;
	document.getElementById('amountCouter').innerHTML = Anzahl;
	document.getElementById('anzahl-inp').value = Anzahl;

	console.log(document.getElementById('anzahl-inp').value);
	console.log(document.getElementById('anzahl-inp'));
}

//==============/Shop plus minus [ende]\=============\\

// Settings

var settingsVisible = false;

function openSettings(){
	if (settingsVisible == true){
		document.getElementById("settings").style.display = "none";
		settingsVisible = false;
	}else{
		document.getElementById("settings-menu").style.display = "block";
		document.getElementById("password-change").style.display = "none";
		document.getElementById("settings").style.display = "block";
		settingsVisible = true;
	}
}

function togglePasswordChange(){
	document.getElementById("settings-menu").style.display = "none";
	document.getElementById("password-change").style.display = "block";
}

// Settings Ende

// Bezahl Anfang

const adress = document.querySelector('.Rechnungsadresse');
var adr = false;
adress.classList.add('show');

function adresse(){
    if(adr == true) {
        adress.classList.add('show');
        adr = false;
		
		}
    else {
        
    }

	if(adrvis == true){
		adressek.classList.remove('look');
		adrvis = false;
}
}

const firm = document.querySelector('.firma');
var firmvis = false;

function firmen(){
    if(firmvis == false) {
        firm.classList.add('vis');
        firmvis = true;
    }
}

function firmen2(){

	if (firmvis == true){
        firm.classList.remove('vis');
        firmvis = false;
    }



}






const adressek = document.querySelector('.adresse2');
var adrvis = false;

function adressevis(){
    if(adrvis == false) {
        adressek.classList.add('look');
        adrvis = true;
    }
    
	if (adr == false){
		adress.classList.remove('show');
        adr = true;

	}
}




// Bezahl Ende

// friends list popup

var friend_list_vis = false;

function toggleFriendList(){
	if (friend_list_vis){
		document.querySelector(".flp").style.visibility = "hidden";
		friend_list_vis = false;
	}else{
		document.querySelector(".flp").style.visibility = "visible";
		friend_list_vis = true;
	}
}

// flp ende

// new post forum

var new_post_vis = false;

function toggleNewPostForm(){
	if (new_post_vis){
		document.querySelector(".new-post-form").style.visibility = "hidden";
		new_post_vis = false;
	}else{
		document.querySelector(".new-post-form").style.visibility = "visible";
		new_post_vis = true;
	}
}

// new post forum ende

function showReplyForm(comment_id){
	document.querySelector(".reply-comment-form-" + comment_id).style.display = "block";
}

// forum post teilen

var share_menu_vis = false;

function toggleShareMenu(){
	if (share_menu_vis == true){
		document.querySelector(".share-popup").style.display = "none";
		share_menu_vis = false;
	}else{
		document.querySelector(".share-popup").style.display = "block";
		share_menu_vis = true;
	}
}

// post teilen ende
