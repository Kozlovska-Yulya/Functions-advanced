export const calc = (initValue) => {
  let result = initValue;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },

    subtract(number) {
      result -= number;
      return this;
    },

    mult(number) {
      result *= number;
      return this;
    },

    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

const result = calc(3).add(5).subtract(7).mult(2).div(5).result();

console.log(result);
