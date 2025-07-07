export function operate(a, b, op) {
  const x = parseFloat(a.replace(',', '.'));
  const y = parseFloat(b.replace(',', '.'));
  let result = 0;

  if (op === '+') result = x + y;
  else if (op === '-') result = x - y;
  else if (op === '×') result = x * y;
  else if (op === '÷') {
    if (y === 0) return 'Error';
    result = x / y;
  }

  let resStr = result.toString().replace('.', ',');
  if (resStr.endsWith(',0')) resStr = resStr.slice(0, -2);
  return resStr;
}

export function toggleSign(input) {
  if (!input) return input;
  return input.startsWith('-') ? input.slice(1) : `-${input}`;
}

export function percent(input) {
  if (!input) return input;
  let num = parseFloat(input.replace(',', '.'));
  num /= 100;
  return num.toString().replace('.', ',');
}
