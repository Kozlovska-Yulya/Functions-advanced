const getMethodNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = (date) => {
  let result = new Date(date);

  const calculator = {
    add(datename, value) {
      if (datename === 'days') {
        const currentValue = date.getDate();
        result = new Date(date.setDate(currentValue + value));
        return this;
      } else if (datename === 'years') {
        const currentValue = date.getFullYear();
        result = new Date(date.setFullYear(currentValue + value));
        return this;
      } else if (datename === 'months') {
        const currentValue = date.getMonth();
        result = new Date(date.setMonth(currentValue + value));
        return this;
      } else if (datename === 'hours') {
        const currentValue = date.getHours();
        result = new Date(date.setHours(currentValue + value));
        return this;
      } else if (datename === 'minutes') {
        const currentValue = date.getMinutes();
        result = new Date(date.setMinutes(currentValue + value));
        return this;
      } else if (datename === 'seconds') {
        const currentValue = date.getSeconds();
        result = new Date(date.setSeconds(currentValue + value));
        return this;
      } else if (datename === 'milliseconds') {
        const currentValue = date.getMilliseconds();
        result = new Date(date.setMilliseconds(currentValue + value));
        return this;
      }
    },
    subtract(datename, value) {
      return this.add(datename, -value);
    },
    result() {
      return result;
    },
  };

  return calculator;
};

console.log(shmoment(new Date('2020, 0, 7, 17, 17, 17')));

// вариант продвинутый//

// export const shmoment = (date) => {
//   let result = new Date(date);

//   const calculator = {
//     add(datename, value) {
//       const currentValue = result[getMethodNames[datename]]();
//       result = new Date(result[setMethodNames[units]](currentValue + value));
//       return this;
//     },
//     subtract(datename, value) {
//       return this.add(datename, -value);
//     },
//     result() {
//       return result;
//     },
//   };
//   return calculator;
// };

// console.log(shmoment(new Date('2020, 0, 7, 17, 17, 17')));
