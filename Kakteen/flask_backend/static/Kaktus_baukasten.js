
const colorSelecter = document.querySelector('.ColorSelecter');
var kitImg1move = document.getElementById('kitImg1');
var kitImg2move = document.getElementById('kitImg2');
var kitImg3move = document.getElementById('kitImg3');
var kitImg4move = document.getElementById('kitImg4');

// getting the picutures

// töpfe
const importImg1 = document.querySelector('#importImg1');
const importImg2 = document.querySelector('#importImg2');
const importImg3 = document.querySelector('#importImg3');
const importImg4 = document.querySelector('#importImg4');

const importImg11 = document.querySelector('#importImg11');
const importImg22 = document.querySelector('#importImg22');
const importImg33 = document.querySelector('#importImg33');
const importImg44 = document.querySelector('#importImg44');

const importImg111 = document.querySelector('#importImg111');
const importImg222 = document.querySelector('#importImg222');
const importImg333 = document.querySelector('#importImg333');
const importImg444 = document.querySelector('#importImg444');

const importImg1111 = document.querySelector('#importImg1111');
const importImg2222 = document.querySelector('#importImg2222');
const importImg3333 = document.querySelector('#importImg3333');
const importImg4444 = document.querySelector('#importImg4444');

// Körper
const importBody1 = document.querySelector('#importBody1');
const importBody2 = document.querySelector('#importBody2');
const importBody3 = document.querySelector('#importBody3');
const importBody4 = document.querySelector('#importBody4');

// Arme
const importArm1 = document.querySelector('#importArm1');
const importArm2 = document.querySelector('#importArm2');
const importArm3 = document.querySelector('#importArm3');
const importArm4 = document.querySelector('#importArm4');

// Köpfe
const importHead1 = document.querySelector('#importHead1');
const importHead2 = document.querySelector('#importHead2');
const importHead3 = document.querySelector('#importHead3');
const importHead4 = document.querySelector('#importHead4');


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
    clearImgTopf();
    importImg1.classList.add('importIMG');
}

function clickColor2() {
    clearImgTopf();
    importImg2.classList.add('importIMG'); 
}

function clickColor3() {
    clearImgTopf();
    importImg3.classList.add('importIMG'); 
}

function clickColor4() {
    clearImgTopf();
    importImg4.classList.add('importIMG');
}

// 2. topf

function clickColor11() {
    clearImgTopf();
    importImg11.classList.add('importIMG');
}

function clickColor22() {
    clearImgTopf();
    importImg22.classList.add('importIMG');
}

function clickColor33() {
    clearImgTopf();
    importImg33.classList.add('importIMG');
}

function clickColor44() {
    clearImgTopf();
    importImg44.classList.add('importIMG');
}

// 3. topf

function clickColor111() {
    clearImgTopf();
    importImg111.classList.add('importIMG');
}

function clickColor222() {
    clearImgTopf();
    importImg222.classList.add('importIMG');
}

function clickColor333() {
    clearImgTopf();
    importImg333.classList.add('importIMG');
}

function clickColor444() {
    clearImgTopf();
    importImg444.classList.add('importIMG');
}

// 4. topf

function clickColor1111() {
    clearImgTopf();
    importImg1111.classList.add('importIMG');
}

function clickColor2222() {
    clearImgTopf();
    importImg2222.classList.add('importIMG');
}

function clickColor3333() {
    clearImgTopf();
    importImg3333.classList.add('importIMG');
}

function clickColor4444() {
    clearImgTopf();
    importImg4444.classList.add('importIMG');
}


// body
function clickBody1() {
    clearImgBody();
    importBody1.classList.add('importIMG');
}

function clickBody2() {
    clearImgBody();
    importBody2.classList.add('importIMG');
}

function clickBody3() {
    clearImgBody();
    importBody3.classList.add('importIMG');
}

function clickBody4() {
    clearImgBody();
    importBody4.classList.add('importIMG');
}

// Arms
function clickArm1() {
    clearImgArm();
    importArm1.classList.add('importIMG');
}

function clickArm2() {
    clearImgArm();
    importArm2.classList.add('importIMG');
}

function clickArm3() {
    clearImgArm();
    importArm3.classList.add('importIMG');
}

function clickArm4() {
    clearImgArm();
    importArm4.classList.add('importIMG');
}

// Heads
function clickHead1() {
    clearImgHead();
    importHead1.classList.add('importIMG');
}

function clickHead2() {
    clearImgHead();
    importHead2.classList.add('importIMG');
}

function clickHead3() {
    clearImgHead();
    importHead3.classList.add('importIMG');
}

function clickHead4() {
    clearImgHead();
    importHead4.classList.add('importIMG');
}

// remove functions

function clearImgTopf() {
    const topfer = document.querySelectorAll('.KitImgGameT');

    topfer.forEach((bildT) => {
        bildT.classList.remove('importIMG');
    });
}

function clearImgBody() {
    const bodyer = document.querySelectorAll('.KitImgGameB');

    bodyer.forEach((bildB) => {
        bildB.classList.remove('importIMG');
    });
}

function clearImgHead() {
    const headier = document.querySelectorAll('.KitImgGameH');

    headier.forEach((bildH) => {
        bildH.classList.remove('importIMG');
    });
}

function clearImgArm() {
    const armer = document.querySelectorAll('.KitImgGameA');

    armer.forEach((bildA) => {
        bildA.classList.remove('importIMG');
    });
}

function clearImgAll() {
    const bilder = document.querySelectorAll('.KitImgGame');

    bilder.forEach((bild) => {
        bild.classList.remove('importIMG');
    });
}