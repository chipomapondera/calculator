
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
    
    const createResultString = function {

    if (!action) {  
      if (action !== 'clear') {  
    const clearButton = calculator.querySelector('[data-action=clear]');  clearButton.textContent = 'CE'
                                  
  } 
      return displayedNum === '0' || 
      previousKeyType === 'operator' || 
      previousKeyType === 'calculate'
        ? keyContent
        : displayedNum + keyContent;

      if (previousKeyType === 'calculate') {
        calculator.dataset.operator = ''
        calculator.dataset.modValue = '0'
        }
      } 

    if (action === 'decimal') {
      if (previousKeyType === 'operator' || 
        previousKeyType === 'calculate') {
        return '0.'
      }  

      if (!displayedNum.includes('.')) {
        return displayedNum + '.'
      }

      return displayedNum
      
    }  

    if (
      action === 'add' || 
      action === 'subtract' || 
      action === 'multiply' || 
      action === 'divide'
    ) {
      
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      
      return firstValue && 
        operator && 
        previousKeyType !== 'operator' && 
        previousKeyType !== 'calculate'
        ? calculate(firstValue, operator, displayedNum)
        : displayedNum
      }
    } 
  } 

     else {
        calculator.dataset.firstValue = displayedNum
      }         
      
        key.classList.add('is-depressed')
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.operator = action;
   
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
    
})

const calculate = function (n1, operator, n2) {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)

    if (operator === 'add') {
      return firstNum + secondNum;
    } 

    if (operator === 'subtract') {
      return firstNum - secondNum;
    } 

    if (operator === 'multiply') {
      return firstNum * secondNum;
    } 

    if (operator === 'divide') {
      return firstNum / secondNum;
    }
    
}

