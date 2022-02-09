//Select Elements
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const mainDisplay = document.querySelector('.current');
const secondaryDisplay = document.querySelector('.pre-current');
const equals = document.querySelector('.equals');
const allClear = document.querySelector('.allClear');
const del = document.querySelector('.del')

//Variables
let display = '';
let display2 = '';
let value = 0;
let ans = 0;
let havePeriod = false;
let prevOperation = '';


//Event Listeners

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !havePeriod){
            havePeriod = true;
        } else if (e.target.innerText === '.' && havePeriod){
            return;
        }
        display += e.target.innerText;
        mainDisplay.textContent = display;
    })
});

operations.forEach(operation => {
    operation.addEventListener('click', (e)=>{
        if(!display) return;
        havePeriod = false;
        let math = e.target.innerText


     
        if(display && display2){
            mathOperation(prevOperation);
        } 
        else {
            ans = parseFloat(display);
        }
        display2 = display2 + display + e.target.innerText;
            secondaryDisplay.textContent = display2;
            mainDisplay.textContent = '0';
        display = ''
        prevOperation = math

    })
});

equals.addEventListener('click', (e)=>{
    if(!display2) return;
    let num = display2.split(/\d+/)
    let math = num[num.length -1]
    mathOperation(math)
    display = ans;
    mainDisplay.innerHTML = display;

    display2 = '';
    secondaryDisplay.innerText = display2;
})

allClear.addEventListener('click', (e)=>{
    display = ''
    display2 = ''
    mainDisplay.innerText = '0'
    secondaryDisplay.innerText = display2
})

del.addEventListener('click', (e)=> {
    let arr = display.split('');
    arr.splice((arr.length-1),1);
    display = arr.join('');

    mainDisplay.innerText = display;
    console.log(display);
})

//Keyboard key action and event listeners
window.addEventListener('keydown', (e)=>{
    if (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '.'
    ){
        clickButton(e.key);
    }
    else if (
        e.key === '*'
    ){
        clickButton2(e.key);
    }
    else if (
        e.key === '/'
    ){
        clickButton3(e.key);
    }
    else if (
        e.key === '=' || e.key == 'Enter'
    ){
        clickButton4(e.key);
    };

})


//Functions
function mathOperation(operation){
    switch(operation){
        case '+':
            ans += parseFloat(display)
            break;
        case '-':
            ans -= parseFloat(display)
            break;
        case '×':
            ans *= parseFloat(display)
            break;
        case '÷':
            ans /= parseFloat(display)
            break;
    } console.log(ans)
}

function clickButton (key) {
    numbers.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    });
    
    operations.forEach(button => {
        if(button.innerText === key){
            button.click();
        }
    })
};

function clickButton2 (key) {
    operations.forEach(button => {
        if(button.innerText === '×'){
            button.click();
        }
    })
};

function clickButton3 (key) {
    operations.forEach(button => {
        if(button.innerText === '÷'){
            button.click();
        }
    })
};

function clickButton4 (key) {
    equals.click();
};



