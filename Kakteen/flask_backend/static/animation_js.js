//==============/Animation with side change\===============\\

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

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
	
    document.querySelector('#shopPress').addEventListener('click', function() {
            balli.animate(move, {
				duration: 1000,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/shop";
            }, 1050);
        } 
);

});

var balli = document.getElementById('animateBall');

document.addEventListener('DOMContentLoaded', function () {
	var move2 = [

        {
            transform: 'translate(58vw, 2vh)',
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

	
    document.querySelector('#homePress').addEventListener('click', function() {
            balli.animate(move2, {
				duration: 1000,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/";
            }, 1050);
        } 
);

});

var balli = document.getElementById('animateBall');

document.addEventListener('DOMContentLoaded', function () {
	var move3 = [

        {
            transform: 'translate(72vw, 2vh)',
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

	
    document.querySelector('#discoverPress').addEventListener('click', function() {
            balli.animate(move3, {
				duration: 1000,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/entdecken";
            }, 1050);
        } 
);

});

var balli = document.getElementById('animateBall');

document.addEventListener('DOMContentLoaded', function () {
	var move4 = [

        {
            transform: 'translate(79vw, 2vh)',
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

	
    document.querySelector('#supportPress').addEventListener('click', function() {
            balli.animate(move4, {
				duration: 1000,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/support";
            }, 1050);
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


