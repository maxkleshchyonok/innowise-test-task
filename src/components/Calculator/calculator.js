import { operate, toggleSign, percent } from '../../utils/mathFunctions';

export default function setupCalculator() {
  let currentInput = '';
  let previousValue = null;
  let operator = null;
  let justEvaluated = false;

  const calculator = document.getElementById('calculator');
  const buttons = calculator.querySelectorAll('.button');
  let activeOperatorBtn = null;

  function setActiveOperator(value) {
    if (activeOperatorBtn) activeOperatorBtn.classList.remove('active');
    activeOperatorBtn = Array.from(buttons).find(
      btn => btn.dataset.value === value && btn.classList.contains('operator')
    );

    if (activeOperatorBtn) activeOperatorBtn.classList.add('active');
  }
  function clearActiveOperator() {
    if (activeOperatorBtn) activeOperatorBtn.classList.remove('active');
    activeOperatorBtn = null;
  }

  buttons.forEach(button => {
    if (button.id === 'theme-toggle') return;

    button.addEventListener('click', event => {
      const display = document.getElementById('display');
      const value = event.target.innerText;

      switch (value) {
        case 'AC':
          currentInput = '';
          previousValue = null;
          operator = null;
          justEvaluated = false;
          display.value = '';
          clearActiveOperator();
          break;
        case '⁺⁄₋':
          if (currentInput) {
            currentInput = toggleSign(currentInput);
            display.value = currentInput;
          }
          break;
        case '%':
          if (currentInput) {
            currentInput = percent(currentInput);
            display.value = currentInput;
          }
          break;
        case '+':
        case '-':
        case '×':
        case '÷':
          setActiveOperator(value);
          if (currentInput === '' && previousValue !== null) {
            operator = value;
          } else if (currentInput !== '') {
            if (previousValue === null) {
              previousValue = currentInput;
            } else if (operator) {
              previousValue = operate(previousValue, currentInput, operator);
            }
            operator = value;
            currentInput = '';
            display.value = previousValue;
          }
          justEvaluated = false;
          break;
        case '=':
          clearActiveOperator();
          if (operator && previousValue !== null && currentInput !== '') {
            const result = operate(previousValue, currentInput, operator);
            display.value = result;
            previousValue = result === 'Error' ? null : result;
            currentInput = '';
            operator = null;
            justEvaluated = true;
          }
          break;
        case ',':
          if (!currentInput.includes(',')) {
            if (currentInput === '') currentInput = '0,';
            else currentInput += ',';
            display.value = currentInput;
          }
          break;
        default:
          if (/^\d$/.test(value) || value === '0') {
            clearActiveOperator();
            if (justEvaluated) {
              currentInput = value;
              justEvaluated = false;
            } else if (currentInput === '0') {
              currentInput = value;
            } else {
              currentInput += value;
            }

            display.value = currentInput;
          }
          break;
      }
    });
  });
}
