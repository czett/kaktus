
'use strict';

var kaktus = document.getElementById('kaktusKoeper');

document.addEventListener('DOMContentLoaded', function () {
	var moveright = [

        {
            transform: 'translate(0vw, 0vh)',
            width: '10vw',
            height: '10vw'
        },

        {
            transform: 'translate(0vw, 0vh)',
            width: '10vw',
            height: '10vw'
        },

		{
            transform: 'translate(45vw, 80vh)',
            width: '10vw',
            height: '10vw'
        },

        {
            transform: 'translate(80vw, 45vh)',
            width: '20vw',
            height: '20vw'
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '30vw',
            height: '30vw'
        },

        {
            transform: 'translate(0vw, 39.8vh)',
            width: '30vw',
            height: '30vw'
        },

        {
            transform: 'translate(45vw, 0vh)',
            width: '50vw',
            height: '50vw'
        },

        {
            transform: 'translate(0, 0)',
            width: '100vw',
            height: '100vh'
        },
];

	
    
        if (200 == 200) {
            kaktus.animate(moveright, {
				duration: 2750,
				iterations: 1,
				fill: 'forwards'
			});
        } 
});

