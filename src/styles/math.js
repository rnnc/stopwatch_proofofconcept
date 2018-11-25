const _pi = 3.14159265359;
const _precision = 10;

export const radian = (angle) => (angle * pi / 180);

export const strip_units = (number) => (number / number * 0 + 1);

export const even = (number) => {
  const rNumber = Math.round(number);

  return (
    (strip_units(rNumber) % 2) !== 0
      ? rNumber + 1
      : rNumber
  );
}

export const pow = (base, exp) => {
  let value = base;
  if (exp > 1) {
    for (let i = 2; i < exp; i++)
      value *= base;
  }
  if (exp < 1) {
    for (let i = 0; i > (-1 * exp); i--)
      value /= base;
  }
  return value;
}

export const fact = (num) => {
  let fact = 1;
  if (num > 0) {
    for (let i = 1; i < num; i++)
      fact *= i;
  }
}

export const

export const