
const colorSelecter = document.querySelector('.ColorSelecter');
var kitImg1move = document.getElementById('kitImg1');
var kitImg2move = document.getElementById('kitImg2');
var kitImg3move = document.getElementById('kitImg3');
var kitImg4move = document.getElementById('kitImg4');

const importImg1 = document.querySelector('#importImg1');
const importImg2 = document.querySelector('#importImg2');
const importImg3 = document.querySelector('#importImg3');
const importImg4 = document.querySelector('#importImg4');


document.addEventListener('DOMContentLoaded', function () {
	var moveLeft = [

        {
            width: '0',
            height: '0',
			visibility: 'hidden',
        },   
];
	
    document.querySelector('#kitImg1').addEventListener('click', function() {
            kitImg1move.animate(moveLeft, {
				duration: 200,
				iterations: 1,
				fill: 'forwards'
			});
            const CS1 = document.querySelector('#CS1');
            CS1.classList.add('moveIn');
        } 
    );

    document.querySelector('#kitImg2').addEventListener('click', function() {
        kitImg2move.animate(moveLeft, {
            duration: 200,
            iterations: 1,
            fill: 'forwards'
        });
        const CS2 = document.querySelector('#CS2');
        CS2.classList.add('moveIn');
    } 
    );

    document.querySelector('#kitImg3').addEventListener('click', function() {
        kitImg3move.animate(moveLeft, {
            duration: 200,
            iterations: 1,
            fill: 'forwards'
        });
        const CS3 = document.querySelector('#CS3');
        CS3.classList.add('moveIn');
    } 
    );

    document.querySelector('#kitImg4').addEventListener('click', function() {
        kitImg4move.animate(moveLeft, {
            duration: 200,
            iterations: 1,
            fill: 'forwards'
        });
        const CS4 = document.querySelector('#CS4');
        CS4.classList.add('moveIn');
    } 
    );
});

// 1. topf

function clickColor1() {
    importImg1.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor2() {
    importImg2.classList.add('importIMG');
    importImg1.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor3() {
    importImg3.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor4() {
    importImg4.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
}

// 2. topf

function clickColor11() {
    importImg1.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor22() {
    importImg2.classList.add('importIMG');
    importImg1.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor33() {
    importImg3.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor44() {
    importImg4.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
}

// 3. topf

function clickColor111() {
    importImg1.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor222() {
    importImg2.classList.add('importIMG');
    importImg1.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor333() {
    importImg3.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor444() {
    importImg4.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
}

// 4. topf

function clickColor1111() {
    importImg1.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor2222() {
    importImg2.classList.add('importIMG');
    importImg1.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor3333() {
    importImg3.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
    importImg4.classList.remove('importIMG');
}

function clickColor4444() {
    importImg4.classList.add('importIMG');
    importImg2.classList.remove('importIMG');
    importImg3.classList.remove('importIMG');
    importImg1.classList.remove('importIMG');
}