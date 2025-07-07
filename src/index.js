import './styles/main.css';
import './components/Calculator/Calculator.css';
import './components/Button/Button.css';
import './components/Theme-toggle/ThemeToggle.css';
import './components/AppControls/AppControls.css';
import calculatorHTML from './components/Calculator/Calculator.html';
import themeToggleHTML from './components/Theme-toggle/ThemeToggle.html';
import appControls from './components/AppControls/AppControls.html';
import setupThemeToggle from './components/Theme-toggle/themeToggle';
import setupCalculator from './components/Calculator/calculator';
import renderButtons from './components/Button/button';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = themeToggleHTML + calculatorHTML;

  const calculatorContainer = document.getElementById('calculator');
  if (calculatorContainer) {
    calculatorContainer.insertAdjacentHTML('afterbegin', appControls);
  }

  const buttonsContainer = document.getElementById('calculator-buttons');
  renderButtons(buttonsContainer);

  setupThemeToggle();
  setupCalculator();
});
