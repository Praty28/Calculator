

/* ##########################
    Operation Functions
########################## */


const add = function(a, b) {
    if ((a + b) == 0) {
        return 0
    }
    
    else {return a + b}
}



const subtract = function(a, b) {
    if ((a - b) == 0) {
        return 0
    }
    else if (!(a - b)) {
        return "Undefined"
    }
    else {return a - b}
}



const multiply = function(a, b) {
    if ((a * b) == 0) {
        return 0
    }
    else if (!(a * b)) {
        return "Undefined"
    }
    else {return a * b}
}



const divide = function(a, b) {
    if ((a / b) == 0) {
        return 0
    }
    else if (!(a / b)) {
        return "Undefined"
    }
    else {return a / b}

}

let operate = function (a, b, c) {
    
    if (b == ' + ') {
        return Math.round(add(a,c) * 100) / 100;
    }

    else if (b == ' - ') {
        return Math.round(subtract(a,c) * 100) / 100;
    }
    
    else if (b == ' ÷ ') {
        return Math.round(divide(a,c) * 100) / 100;
    }

    else if (b == ' x ') {
        return Math.round(multiply(a,c) * 100) / 100;
    }

    else {
       return 'Error';
    }
};



/* ##########################
    Variables
########################## */
let displayValue = '';
let operatorValue = '';
let onlyNumbers = '';
let firstValue = '';
let secondValue = '';

/* ##########################
    Buttons Top Row
########################## */
var powerButton = document.querySelector(".power");


powerButton.addEventListener("click", function() {
    onlyNumbers = '';
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    document.querySelector('p.displayText').textContent = "";
    document.getElementById("displaySpan").classList.toggle("display"); 

});

const clear = document.querySelector(".AC")

clear.addEventListener('click', () => { 
    onlyNumbers = '';
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    return document.querySelector('p.displayText').textContent = "";
    
});

/* ##########################
    Buttons Numbers
########################## */

const allButtons = document.querySelectorAll("button:not(#exclude)")

Array.from(allButtons).forEach((el, index) => el.addEventListener('click', () => {
    document.querySelector('.displayText').textContent += allButtons[index].textContent;
    onlyNumbers += allButtons[index].textContent.toString();
}))


/* ##########################
    Buttons Operations
########################## */

const operations = document.querySelectorAll('.operatorMultiply, .operatorDivide, .operatorSubtract, .operatorAdd');

Array.from(operations).forEach((el, index) => el.addEventListener('click', () => {
    if (operatorValue) {
    secondValue = Number(onlyNumbers);
    firstValue = document.querySelector('.displayText').textContent = operate (firstValue,    operatorValue, secondValue);
    
    }
    
    operatorValue = operations[index].textContent
    displayValue = document.querySelector('.displayText').textContent;
    
    if ( !firstValue ) {
        firstValue = Number(onlyNumbers);
    }
    else {
        secondValue = Number(onlyNumbers);
    }
    onlyNumbers = '';
    console.log(firstValue);
    console.log(secondValue);
    console.log(operatorValue);
    document.querySelector('.displayText').textContent += operations[index].textContent;
}))

/* ##########################
    Operation Execution
########################## */

const equals = document.querySelector('.equals')



 const executeOperation = equals.addEventListener('click', () => {
     secondValue = Number(onlyNumbers);
     
     document.querySelector('.displayText').textContent = operate(firstValue, operatorValue, secondValue);});
     firstValue = document.querySelector('.displayText').textContent;
     console.log(`after equals ${firstValue} is firstvalue, ${secondValue} is second`);
     