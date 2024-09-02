function darkMode() {
    if (document.getElementById('DM').innerText == 'Dark Mode') {
        document.getElementById('DM').innerText = "Light Mode"
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    else {
        document.getElementById('DM').innerText = "Dark Mode"
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}

// let sky = 'sunny'

// if (sky == 'cloudy') {
//     alert('It will rain')
// }
// else if (sky == 'sunny') {
//     alert('It is sunny')
// }
// else {
//     alert('It will not rain')
// }


// Parameterized functions
function myFunction(userInput) {
    console.log(userInput);
}

function showNumber(num) {
    if (document.getElementById('displayNumber').innerText == 0) {
    document.getElementById('displayNumber').innerText = num
    }
    else {
    document.getElementById('displayNumber').innerText += num
    }
}

function calculate() {
    let userCalculation = eval(document.getElementById('displayNumber').innerText)
    let calculation = eval (userCalculation);
    document.getElementById('displayNumber').innerText = calculation
}