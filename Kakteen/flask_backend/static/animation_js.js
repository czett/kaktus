//==============/Animation with side change\===============\\

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

// Animation back

// shop

document.addEventListener('DOMContentLoaded', function () {
	var remove = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#shopPress').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 250);
} 
);

});

// home

document.addEventListener('DOMContentLoaded', function () {
	var remove1 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#homePress').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove1, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 250);
} 
);

});

// Entdecken 

document.addEventListener('DOMContentLoaded', function () {
	var remove2 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#discoverPress').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove2, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 250);
} 
);

});

// Forum

document.addEventListener('DOMContentLoaded', function () {
	var remove5 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#forumPress').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove5, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 250);
} 
);

});

// Kakteen Support

document.addEventListener('DOMContentLoaded', function () {
	var remove3 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#supportPress').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove3, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 250);
} 
);

});

// Quiz 

document.addEventListener('DOMContentLoaded', function () {
	var remove4 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#goToQuiz').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove4, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 1050);
} 
);

});

// Baukasten

document.addEventListener('DOMContentLoaded', function () {
	var remove6 = [

        {
            transform: 'translate(64vw, 2vh)',
            width: '5vw',
            height: '5vh',
            borderRadius: '100vw',
			visibility: 'hidden',
        },

		{
            transform: 'translate(0vw, 0vh)',
            width: '0vw',
            height: '0vh',
            borderRadius: '0vw',
			visibility: 'hidden',
        },    
];

document.querySelector('#goToKit').addEventListener('click', function() {
    setTimeout(function(){
        balli.animate(remove6, {
            duration: 100,
            iterations: 1,
            fill: 'forwards'
        });
    }, 1050);
} 
);

});

// Animation with side change

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

// Entdechen

document.addEventListener('DOMContentLoaded', function () {
	var moveE = [

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
	
    document.querySelector('#forumPress').addEventListener('click', function() {
            balli.animate(moveE, {
				duration: 220,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/forum";
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
            }, 900);
        } 
);

});

// Baukasten animation

var balli = document.getElementById('animateBall');
var boxi = document.getElementById('anim-uebergang');

document.addEventListener('DOMContentLoaded', function () {
	var moveToKit = [

        {
            transform: 'translate(85vw, 69vh)',
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
	
    document.querySelector('#goToKit').addEventListener('click', function() {
            balli.animate(moveToKit, {
				duration: 800,
				iterations: 1,
				fill: 'forwards'
			});
            setTimeout(function(){
                window.location.href = "/baukasten";
            }, 900);
        } 
);

});

//==============/Animation with side change [end]\==========\\
