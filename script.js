

/* ##########################
    Operation Functions
########################## */


const add = function(a, b) {
    return a + b
}



const subtract = function(a, b) {
    return a - b
}



const multiply = function(a, b) {
    return a * b
}



const divide = function(a, b) {
    return a / b

}

let operate = function (a, b, c) {
    
    if (b == '+') {
        return add(a,c);
    }

    else if (b == '-') {
        return subtract(a,c);
    }
    
    else if (b == '÷') {
        return divide(a,c);
    }

    else if (b == 'x') {
        return multiply(a,c);
    }

    else {
       return console.log('ERRUR');
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
    Button Selectors
########################## */

const clear = document.querySelector(".clear")

clear.addEventListener('click', () => { 
    onlyNumbers = '';
    firstValue = '';
    secondValue = '';
    return document.querySelector('p.displayText').textContent = "";
    
});


const allButtons = document.querySelectorAll("button:not(#exclude)")

Array.from(allButtons).forEach((el, index) => el.addEventListener('click', () => {
    document.querySelector('.displayText').textContent += allButtons[index].textContent;
    onlyNumbers += allButtons[index].textContent.toString();
}))

const operations = document.querySelectorAll('.operatorMultiply, .operatorDivide, .operatorSubtract, .operatorAdd');

Array.from(operations).forEach((el, index) => el.addEventListener('click', () => {
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

const equals = document.querySelector('.equals')



 const executeOperation = equals.addEventListener('click', () => {
     secondValue = Number(onlyNumbers);
     console.log(secondValue);
     document.querySelector('.displayText').textContent = operate(firstValue, operatorValue, secondValue);});

     