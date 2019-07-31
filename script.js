//Calculator

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

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const keyType = getKeyType(key)
  const {
    firstValue,
    modValue,
    operator, 
    previousKeyType,
  } = state
    
    if (keyType === 'number') {
      console.log('This is action 1 ', action)
      return displayedNum === '0' || 
          previousKeyType === 'operator' || 
          previousKeyType === 'calculate'
          ? keyContent
      : displayedNum + keyContent;
  }

  if (keyType === 'decimal') {
    console.log('This is action 2 ', action)
        if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
        if (!displayedNum.includes('.')) return displayedNum + '.'    
        return displayedNum 
    }

    console.log('This is action 3 ', action)
  if (keyType === 'operator') {
  
    return firstValue && 
      operator && 
      previousKeyType !== 'operator' &&       
      previousKeyType !== 'calculate'

    ? calculate(firstValue, operator, displayedNum)
    : displayedNum;
            
  } 

  if (keyType === 'clear') return 0

  if (keyType === 'calculate') {
    const firstValue = calculator.dataset.firstValue      
    const operator = calculator.dataset.operator
    const modValue = calculator.dataset.modValue
      
  return firstValue     
    ? previousKeyType === 'calculate'          
      ? calculate(displayedNum, operator, modValue)
      : calculate(firstValue, operator, displayedNum)
    : displayedNum
    }
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType
    const resultString = createResultString(e.target, displayedNum, calculator.dataset)
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  const updateCalculatorState = () => {

}

  
  display.textContent = resultString 
  updateCalculatorState()

    if (!action) {
      if (previousKeyType === 'calculate') {
        	calculator.dataset.operator = ''
        	calculator.dataset.modValue = '0'
      }

      calculator.dataset.previousKeyType = 'number'
    } 

    if (action === 'decimal') {
      calculator.dataset.previousKeyType = 'decimal';     
    } 

    if (action === 'add' || 
    	action === 'subtract' || 
    	action === 'multiply' || 
    	action === 'divide') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
  
    if (firstValue && 
    	operator && 
    	previousKeyType !== 'operator' && 
    	previousKeyType !== 'calculate') {

    	const calcValue = calculate(firstValue, operator, secondValue)
    	display.textContent = calcValue
    	calculator.dataset.firstValue = calcValue;
    	} else {
    	calculator.dataset.firstValue = displayedNum;
    	}   

    key.classList.add('is-depressed')
  	calculator.dataset.previousKeyType = 'operator';
    calculator.dataset.operator = action;             
  } 

  	if (action === 'clear') {
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
  } 

    if (action !== 'clear') {  
    const clearButton = calculator.querySelector('[data-action=clear]');  clearButton.textContent = 'CE'
                                  
  } 

  	if (action === 'calculate') {
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
    switch (operator) {
      case 'add': return firstNum + secondNum;
      case 'subtract': return firstNum - secondNum;
      case 'multiply': return firstNum * secondNum;
      case 'divide': return firstNum / secondNum;

    }
    
}








