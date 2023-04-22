//==============/Animation with side change\===============\\

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

// Shop

document.addEventListener('DOMContentLoaded', function () {
	var move = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw',
			visibility: 'visible',
        },    
];
	
    document.querySelector('#shopPress').addEventListener('click', function() {
            balli.animate(move, {
				duration: 220,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/shop";
            }, 230);
        } 
);
});

// Home

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

document.addEventListener('DOMContentLoaded', function () {
	var moveA = [

        {
            transform: 'translate(58vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw',
			visibility: 'visible',
        },    
];
	
    document.querySelector('#homePress').addEventListener('click', function() {
            balli.animate(moveA, {
				duration: 220,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/";
            }, 230);
        } 
);
});

// Entdechen

document.addEventListener('DOMContentLoaded', function () {
	var moveB = [

        {
            transform: 'translate(72vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw',
			visibility: 'visible',
        },    
];
	
    document.querySelector('#discoverPress').addEventListener('click', function() {
            balli.animate(moveB, {
				duration: 220,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/entdecken";
            }, 230);
        } 
);
});

// Kakteen Support

document.addEventListener('DOMContentLoaded', function () {
	var moveC = [

        {
            transform: 'translate(79vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw',
			visibility: 'visible',
        },    
];
	
    document.querySelector('#supportPress').addEventListener('click', function() {
            balli.animate(moveC, {
				duration: 220,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/support";
            }, 230);
        } 
);
});

// quiz animation

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

document.addEventListener('DOMContentLoaded', function () {
	var moveToQuiz = [

        {
            transform: 'translate(60vw, 69vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

		{
            transform: 'translate(45vw, 95vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

        {
            transform: 'translate(90vw, 45vh)',
            width: '10vw',
            height: '10vh',
            borderRadius: '100vw',
			visibility: 'visible',
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '15vw',
            height: '15vh',
            borderRadius: '5vw',
			visibility: 'visible',
        },

        {
            transform: 'translate(0vw, 85vh)',
            width: '15vw',
            height: '15vh',
            borderRadius: '50vw',
			visibility: 'visible',
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '25vw',
            height: '25vh',
            borderRadius: '50vw',
			visibility: 'visible',
        },

        {
            transform: 'translate(0, 0)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw',
			visibility: 'visible',
        },

        
];
	
    document.querySelector('#goToQuiz').addEventListener('click', function() {
            balli.animate(moveToQuiz, {
				duration: 800,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/quiz";
            }, 1050);
        } 
);

});

//==============/Animation with side change [end]\==========\\
