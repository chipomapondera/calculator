const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display');


keys.addEventListener("click", e => { 
  if (e.target.matches("button")) {   
    const key = e.target;
    const action = key.dataset.action;
      
    if (!action) {  
      console.log('number key!');
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {  
      console.log('operator key!');
    } else if (action === 'decimal') {
      console.log('decimal key!');
    } else if (action === 'clear') {
      console.log('clear key!');
    } else {
      console.log('calculate!');
    }
  }
}) 

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType
    
    if (!action) {
      
      if (action !== 'clear') {  
    const clearButton = calculator.querySelector('[data-action=clear]');  clearButton.textContent = 'CE'
                                  
  } 
      if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = keyContent;
        
        if (previousKeyType === 'calculate') {
        calculator.dataset.operator = ''
        calculator.dataset.modValue = '0'
        }
      } else {
        display.textContent = displayedNum + keyContent;
      } 
      calculator.dataset.previousKeyType = 'number'
    } else if (action === 'decimal') {
      if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = '0.'
      } else if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      }
      calculator.dataset.previousKeyType = 'decimal';
      
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      
      if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }         
      
        key.classList.add('is-depressed')
      
        //Add custom attribute
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.operator = action;
      
        //Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
   
  } else if (action === 'clear') {
      if (key.textContent === 'AC') {
        calculator.dataset.firstValue = ''
        calculator.dataset.operator = ''
        calculator.dataset.modValue = ''
        calculator.dataset.previousKeyType = ''
      } else {
        key.textContent = 'AC';
      }
    
    display.textContent = 0;
    calculator.dataset.previousKeyType = 'clear';
    
  } else if (action === 'calculate') {
      let firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      let secondValue = displayedNum
      
      if (firstValue) {      
        if (previousKeyType === 'calculate') {          
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstValue, operator, secondValue)
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
    }  
    
} 

})


const calculate = function (n1, operator, n2) {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    switch (operator) {
      case 'add': return firstNum + secondNum;
      case 'subtract': return firstNum - secondNum;
      case 'multiply': return firstNum * secondNum;
      case 'divide': return firstNum / secondNum;

    }
    
}








