module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('is not Array')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    switch (item) {
      case '--double-next':
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break
      case '--double-prev':
        if (i !== 0) {
          result.push(arr[i- 1]);
        }
        break
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        result.pop();
        break;
      default:
        result.push(item);
    }
  }
  return result
}
