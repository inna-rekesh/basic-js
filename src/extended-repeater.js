module.exports = function repeater(str, options) {
  const defaultSeparator = '+';
  const defaultAdditionSeparator = '|';
  let item = str;
  let resultAddition = [];
  let result = []
  if(options.addition || options.addition === false || options.addition === null) {
    for (let i = 0; i < options.additionRepeatTimes-1; i++) {
      if(options.additionSeparator) {
        resultAddition.push(''+options.addition, options.additionSeparator)
      }else {
        resultAddition.push(''+options.addition, defaultAdditionSeparator)
      }
    }
    resultAddition.push(''+options.addition)
    item += resultAddition.join('')
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      if(options.separator) {
        result.push(item, options.separator)
      } else {
        result.push(item, defaultSeparator)
      }
    }
    result.push(item)
  } else {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      if(options.separator) {
        result.push(item, options.separator)
      } else {
        result.push(item, defaultSeparator)
      }
    }
    result.push(item)
  }
  return result.join('');
};
