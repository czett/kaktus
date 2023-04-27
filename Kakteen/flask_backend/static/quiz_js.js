

const Questions = [{
    id: 0,
    q: "Wie viele Stacheln haben Kakteen im Durchschnitt?",
    a: [{ text: "1.000.000", isCorrect: false },
        { text: "10.000", isCorrect: false },
        { text: "0", isCorrect: true },
        { text: "100.000", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Wie groß werden Kakteen im Durchschnitt nach 50 Jahren?",
    a: [{ text: "5 - 6 Meter", isCorrect: false, isSelected: false },
        { text: "1 - 2 Meter", isCorrect: false },
        { text: "2 - 3 Meter", isCorrect: false },
        { text: "3 - 4 Meter", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Welches Tier ist bekannt Kakteen zu fressen?",
    a: [{ text: "Löwe", isCorrect: false },
        { text: "Bär", isCorrect: false },
        { text: "Kamel", isCorrect: true },
        { text: "Lama", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Wie viel Wasser braucht ein Kaktus in einem Monat um zu überleben?",
    a: [{ text: "2 mal gießen", isCorrect: false },
        { text: "1 mal gießen", isCorrect: true },
        { text: "4 mal gießen", isCorrect: false },
        { text: "3 mal gießen", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Zu welcher Pflanzenart gehören Kakteen?",
    a: [{ text: "Sukkulenten", isCorrect: true },
        { text: "Kürbisgewächs", isCorrect: false },
        { text: "Knöterichgewächse", isCorrect: false },
        { text: "Liliengewächse", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Auf welchem Untergrund wachsen Kakteen am besten?",
    a: [{ text: "Erde", isCorrect: false },
        { text: "Kies", isCorrect: false },
        { text: "Sand", isCorrect: true},
        { text: "Rindenmulch", isCorrect: false }
    ]

},

]

// points
var points = 0;


 
// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Getting the divs from the options
const div1 = document.getElementById('answBox1');
const div2 = document.getElementById('answBox2');
const div3 = document.getElementById('answBox3');
const div4 = document.getElementById('answBox4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    // op1.style.scale = "1.3";
    // op4.style.scale = "1";
    // op2.style.scale = "1";
    // op3.style.scale = "1";

    div1.style.scale = "1.05";
    div2.style.scale = "1";
    div3.style.scale = "1";
    div4.style.scale = "1";

    div1.style.border = "2px solid #A0CE40";
    div2.style.border = "2px solid gray";
    div3.style.border = "2px solid gray";
    div4.style.border = "2px solid gray";


    // op2.style.backgroundColor = "";
    // op3.style.backgroundColor = "";
    // op4.style.backgroundColor = "";
    selected = op1.value;

    if (selected == "true") {
        result[0].innerHTML = "Richtig!!!"
        result[0].style.color = "#A0CE40";
        points += 1;
     
        document.getElementById('point').innerHTML = points;
        div1.style.border = "2px solid #A0CE40";

        next.addEventListener("click", () => {
            
            
            div1.style.scale = "1";
            div2.style.scale = "1";
            div3.style.scale = "1";
            div4.style.scale = "1";
    
            div1.style.border = "2px solid #A0CE40";
            div2.style.border = "2px solid #A0CE40";
            div3.style.border = "2px solid #A0CE40";
            div4.style.border = "2px solid #A0CE40";

            div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
    
            result[0].innerHTML = "";
    
            })

    } else {
        result[0].innerHTML = "Falsch!!!";
        result[0].style.color = "red";
        points -= 1;
        document.getElementById('point').innerHTML = points;

        div1.style.border = "2px solid red";
        div1.style.boxShadow = "0px 0 3px 0.5px red";

        next.addEventListener("click", () => {
            
            
        div1.style.scale = "1";
        div2.style.scale = "1";
        div3.style.scale = "1";
        div4.style.scale = "1";

        div1.style.border = "2px solid #A0CE40";
        div2.style.border = "2px solid #A0CE40";
        div3.style.border = "2px solid #A0CE40";
        div4.style.border = "2px solid #A0CE40";

        div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";

        result[0].innerHTML = "";

        })

    }
})

// Show selection for op2
op2.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    // op2.style.scale = "1.3";
    // op1.style.scale = "1";
    // op4.style.scale = "1";
    // op3.style.scale = "1";

    div1.style.scale = "1";
    div2.style.scale = "1.05";
    div3.style.scale = "1";
    div4.style.scale = "1";

    div2.style.border = "2px solid #A0CE40";
    div1.style.border = "2px solid gray";
    div3.style.border = "2px solid gray";
    div4.style.border = "2px solid gray";
    // op3.style.backgroundColor = "lightskyblue";
    // op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;

    if (selected == "true") {
        result[0].innerHTML = "Richtig!!!"
        result[0].style.color = "#A0CE40";
        points += 1;
     
        document.getElementById('point').innerHTML = points;
        div1.style.border = "2px solid green";

        next.addEventListener("click", () => {
            
            
            div1.style.scale = "1";
            div2.style.scale = "1";
            div3.style.scale = "1";
            div4.style.scale = "1";
    
            div1.style.border = "2px solid #A0CE40";
            div2.style.border = "2px solid #A0CE40";
            div3.style.border = "2px solid #A0CE40";
            div4.style.border = "2px solid #A0CE40";

            div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
    
            result[0].innerHTML = "";
    
            });

    } else {
        result[0].innerHTML = "Falsch!!!";
        result[0].style.color = "red";
        points -= 1;
        document.getElementById('point').innerHTML = points;
        div2.style.border = "2px solid red";

        div2.style.boxShadow = "0px 0 3px 0.5px red";

        next.addEventListener("click", () => {
            
            
        div1.style.scale = "1";
        div2.style.scale = "1";
        div3.style.scale = "1";
        div4.style.scale = "1";

        div1.style.border = "2px solid #A0CE40";
        div2.style.border = "2px solid #A0CE40";
        div3.style.border = "2px solid #A0CE40";
        div4.style.border = "2px solid #A0CE40";

        div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";

        result[0].innerHTML = "";

        });

    }
})

// Show selection for op3
op3.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    // op2.style.backgroundColor = "lightskyblue";
    // op1.style.scale = "1";
    // op2.style.scale = "1";
    // op4.style.scale = "1";
    // op3.style.scale = "1.3";

    div3.style.border = "2px solid #A0CE40";
    div2.style.border = "2px solid gray";
    div1.style.border = "2px solid gray";
    div4.style.border = "2px solid gray";

    div1.style.scale = "1";
    div2.style.scale = "1";
    div3.style.scale = "1.05";
    div4.style.scale = "1";
    // op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;

    if (selected == "true") {
        result[0].innerHTML = "Richtig!!!"
        result[0].style.color = "#A0CE40";
        points += 1;
     
        document.getElementById('point').innerHTML = points;
        div3.style.border = "2px solid #A0CE40";

        next.addEventListener("click", () => {
            
            
            div1.style.scale = "1";
            div2.style.scale = "1";
            div3.style.scale = "1";
            div4.style.scale = "1";
    
            div1.style.border = "2px solid #A0CE40";
            div2.style.border = "2px solid #A0CE40";
            div3.style.border = "2px solid #A0CE40";
            div4.style.border = "2px solid #A0CE40";
    
            result[0].innerHTML = "";
    
            })

    } else {
        result[0].innerHTML = "Falsch!!!";
        result[0].style.color = "red";
        points -= 1;
        document.getElementById('point').innerHTML = points;
        div3.style.border = "2px solid red";

        div3.style.boxShadow = "0px 0 3px 0.5px red";

        next.addEventListener("click", () => {
            
            
        div1.style.scale = "1";
        div2.style.scale = "1";
        div3.style.scale = "1";
        div4.style.scale = "1";

        div1.style.border = "2px solid #A0CE40";
        div2.style.border = "2px solid #A0CE40";
        div3.style.border = "2px solid #A0CE40";
        div4.style.border = "2px solid #A0CE40";

        div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";

        result[0].innerHTML = "";

        })

    }
})

// Show selection for op4
op4.addEventListener("click", () => {
    // op1.style.backgroundColor = "lightskyblue";
    // op2.style.backgroundColor = "lightskyblue";
    // op3.style.backgroundColor = "lightskyblue";
    // op1.style.scale = "1";
    // op2.style.scale = "1";
    // op3.style.scale = "1";
    // op4.style.scale = "1.3";

    div4.style.border = "2px solid #A0CE40";
    div2.style.border = "2px solid gray";
    div3.style.border = "2px solid gray";
    div1.style.border = "2px solid gray";

    div1.style.scale = "1";
    div2.style.scale = "1";
    div3.style.scale = "1";
    div4.style.scale = "1.05";
    selected = op4.value;

    if (selected == "true") {
        result[0].innerHTML = "Richtig!!!"
        result[0].style.color = "#A0CE40";
        points += 1;
     
        document.getElementById('point').innerHTML = points;
        div4.style.border = "2px solid #A0CE40";

        next.addEventListener("click", () => {
            
            
            div1.style.scale = "1";
            div2.style.scale = "1";
            div3.style.scale = "1";
            div4.style.scale = "1";
    
            div1.style.border = "2px solid #A0CE40";
            div2.style.border = "2px solid #A0CE40";
            div3.style.border = "2px solid #A0CE40";
            div4.style.border = "2px solid #A0CE40";

            div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
            div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
    
            result[0].innerHTML = "";
    
            })

    } else {
        result[0].innerHTML = "Falsch!!!";
        result[0].style.color = "red";
        points -= 1;
        document.getElementById('point').innerHTML = points;
        div4.style.border = "2px solid red";

        div4.style.boxShadow = "0px 0 3px 0.5px red";

        next.addEventListener("click", () => {
            
            
        div1.style.scale = "1";
        div2.style.scale = "1";
        div3.style.scale = "1";
        div4.style.scale = "1";

        div1.style.border = "2px solid #A0CE40";
        div2.style.border = "2px solid #A0CE40";
        div3.style.border = "2px solid #A0CE40";
        div4.style.border = "2px solid #A0CE40";

        div1.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div2.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div3.style.boxShadow = "0px 0 3px 0.5px #A0CE40";
        div4.style.boxShadow = "0px 0 3px 0.5px #A0CE40";

        result[0].innerHTML = "";

        })

    }
})


}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}

})


//==============/Kaktus Quiz [ende]\=============\\