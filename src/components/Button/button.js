import buttonTemplate from './Button.html';
import { buttonLayout, cornerRadiuses } from '../../constants/constants';

export default function renderButtons(buttonsContainer) {
  const buttonsHTML = [];

  buttonLayout.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      let buttonHTML = buttonTemplate;
      buttonHTML = buttonHTML.replace('></button>', `>${value}</button>`);
      let style = '';
      let className = 'button';

      if (['+', '-', '×', '÷', '='].includes(value)) {
        className += ' operator';
      } else if (/^\d$/.test(value) || value === '0' || value === ',') {
        className += ' number';
      } else if (['AC', '⁺⁄₋', '%'].includes(value)) {
        className += ' func';
      }

      const key = `${rowIndex},${colIndex}`;
      if (cornerRadiuses[key]) {
        style += cornerRadiuses[key];
      }
      if (rowIndex === 4 && colIndex === 0) {
        className += ' zero';
      }
      if (style) {
        buttonHTML = buttonHTML.replace(
          '<button ',
          `<button style="${style}" `
        );
      }

      buttonHTML = buttonHTML.replace(
        'class="button"',
        `class="${className}" data-value="${value}"`
      );

      buttonsHTML.push(buttonHTML);
    });
  });

  const container = buttonsContainer;
  container.innerHTML = buttonsHTML.join('');
}
