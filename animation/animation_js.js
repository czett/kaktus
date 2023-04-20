
'use strict';

var kaktus = document.getElementById('kaktusKoeper');

document.addEventListener('DOMContentLoaded', function () {
	var moveright = [

        {
            transform: 'translate(0vw, 0vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '50vw'
        },

        {
            transform: 'translate(0vw, 0vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw'
        },

		{
            transform: 'translate(45vw, 95vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw'
        },

        {
            transform: 'translate(90vw, 45vh)',
            width: '10vw',
            height: '10vh',
            borderRadius: '100vw'
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '15vw',
            height: '15vh',
            borderRadius: '5vw'
        },

        {
            transform: 'translate(0vw, 85vh)',
            width: '15vw',
            height: '15vh',
            borderRadius: '50vw'
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '25vw',
            height: '25vh',
            borderRadius: '50vw'
        },

        {
            transform: 'translate(0, 0)',
            width: '100vw',
            height: '100vh',
            borderRadius: '0vw'
        },

        
];

	
    document.querySelector('#starter').addEventListener('click', function() {
            kaktus.animate(moveright, {
				duration: 2750,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "https://youtube.com/";
            }, 2800);
        } 
);

});
