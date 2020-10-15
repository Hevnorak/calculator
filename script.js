    const numbers = document.querySelectorAll('.number');
    const operations = document.querySelectorAll('.operator');
    const clearBtn = document.querySelectorAll('.clear-btn');
    const decimalBtn = document.getElementById('decimal');
    const result = document.getElementById('result');
    const display = document.getElementById('display');
    const sqrtBtn = document.getElementById('sqrt');
    const negativeBtn = document.getElementById('negative');
    let MemoryCurrentNumber = 0;
    let MemoryNewNumber = false;
    let MemoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
        });        
}

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
    });        
}

for (let i = 0; i < clearBtn.length; i++) {
    let clearBtns = clearBtn[i];
    clearBtns.addEventListener('click', function (e) {
        clear(e.srcElement.id)
    });        
}

negativeBtn.addEventListener('click', negative);

sqrtBtn.addEventListener('click', sqrt);
  

decimalBtn.addEventListener('click', decimal);





function numberPress(textNumber){
        if (MemoryNewNumber) {
            display.value = textNumber;
            MemoryNewNumber = false;
        } else {
        if (display.value === '0') {
            display.value = textNumber;
        } else {
            display.value += textNumber;
        }
    }
};

function operation(op) {
    let localOperatorMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation === '√'){
        display.value = MemoryCurrentNumber
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += +localOperatorMemory;
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= +localOperatorMemory;
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= +localOperatorMemory;
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= +localOperatorMemory;
        } else if (MemoryPendingOperation === '^') {
            MemoryCurrentNumber **= +localOperatorMemory;
        } else if (MemoryPendingOperation === '±') {
            MemoryCurrentNumber = +localOperatorMemory * -1;
        } else {MemoryCurrentNumber = +localOperatorMemory}

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    }
}

function sqrt(arg){
    let resultSqrt = Math.sqrt(display.value);

    display.value = resultSqrt;
    MemoryPendingOperation = arg;
    console.log(resultSqrt)
}

function negative(){
        
    let resultNegative = display.value * -1;
    display.value = resultNegative;
    console.log('Клик по кнопке негатив!');
}

function decimal(argument) {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;        
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
        }
    }

    display.value = localDecimalMemory;

}

function clear(id) {
    if (id === 'ce'){
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c'){
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
}

