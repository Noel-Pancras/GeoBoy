
// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which country has more ancient pyramids than Egypt??",
    a: [{ text: "Japan", isCorrect: false },
        { text: "Sudan", isCorrect: true },
        { text: "Zambia", isCorrect: false },
        { text: "Mozambique", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which mountain has the biggest sheer drop on Earth?",
    a: [{ text: "Mt. Everest", isCorrect: false, isSelected: false },
        { text: "Mt. Kilimanjaro", isCorrect: false },
        { text: "Mt. Fuji", isCorrect: false },
        { text: "Mt. Thor", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How fast do continents shift?",
    a: [{ text: "About as fast as a car", isCorrect: false },
        { text: "Around as fast as the average man", isCorrect: false },
        { text: "The speed at which your fingernails grow", isCorrect: true },
        { text: "Almost as fast as the Earth rotates", isCorrect: false }
    ]

}

]



// Set start
var start = true;
 
// Iterate
function iterate(id) {
 
    // Getting the result display section
const result = document.getElementsByClassName["result"];
    result[0].innerText = '';

    //let result = document.getElementsByClassName("result");
//let resultArray = Array.from(result);
//resultArray[0].innerText = '';


 
    // Getting the question
    const question = document.getElementById("question");
 
 
    // Setting the question text
    question.innerText = Questions[id].qu;
 
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
 
 
    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
 
    // Giving the boolean value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
}
    var selected = "";
 
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
 
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "red";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
 
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
 
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "red";
        selected = op4.value;
    })
 
    // Grabbing the evaluate button
    const check = document.getElementsByClassName("evaluate");
 
    // Evaluate method
    check[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })

 
if (start) {
    iterate("0");

}

/*document.getElementById("btn").addEventListener("click", wrong()); 
    document.getElementById("btn1").addEventListener("click", right()); 
    document.getElementById("btn2").addEventListener("click", wrong1()); 
    document.getElementById("btn3").addEventListener("click", wrong2()); 

    function wrong() { 
        document.getElementById("btn").innerHTML = "Try again";
        console.log ('137')
    }

    function wrong1() { 
        document.getElementById("btn2").innerHTML = "Try again";
        console.log ('137')
    }

    function wrong2() { 
        document.getElementById("btn3").innerHTML = "Try again";
        console.log ('137')
    }
    
    function right() {
        document.getElementById("btn1").innerHTML = "Correct";
        console.log ('144')
        
    }*/