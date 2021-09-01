

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
    
    if (b == 'plus') {
        return add(a,c);
    }

    else if (b == 'minus') {
        return subtract(a,c);
    }
    
    else if (b == 'upon') {
        return divide(a,c);
    }

    else if (b == 'into') {
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
let onlyNumbers = '';
let firstValue = '';
let secondValue = '';

/* ##########################
    Button Selectors
########################## */

const clear = document.querySelector(".clear")

clear.addEventListener('click', () => { 
    onlyNumbers = '';
    return document.querySelector('p.displayText').textContent = "";
    
});


const allButtons = document.querySelectorAll("button:not(#exclude)")

Array.from(allButtons).forEach((el, index) => el.addEventListener('click', () => {
    document.querySelector('.displayText').textContent += allButtons[index].textContent;
    onlyNumbers += allButtons[index].textContent.toString();
}))

const operations = document.querySelectorAll('.operatorMultiply, .operatorDivide, .operatorSubtract, .operatorAdd');

Array.from(operations).forEach((el, index) => el.addEventListener('click', () => {
    displayValue = document.querySelector('.displayText').textContent;
    firstValue = Number(onlyNumbers);
    console.log(firstValue);
    document.querySelector('.displayText').textContent += operations[index].textContent;
}))