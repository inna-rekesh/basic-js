module.exports = function getSeason(date) {
  if(date===undefined) return 'Unable to determine the time of year!'
  if (isNaN(date)) throw new Error();
  if(date.getMonth() < 2 || date.getMonth()===11) {
    return 'winter'
  } else if(2 <= date.getMonth() && date.getMonth() < 5) {
    return 'spring'
  } else if(5 <= date.getMonth() && date.getMonth() < 8) {
    return 'summer'
  } else if(8 <= date.getMonth() && date.getMonth() < 11) {
    return /autumn|fall/
  }
};
