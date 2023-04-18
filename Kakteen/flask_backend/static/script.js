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

const bell = document.getElementById('bell');
