const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityP = parseFloat(sampleActivity)
  if (typeof (sampleActivity) === 'string' && sampleActivityP > 0 &&
    sampleActivityP < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityP) / (0.693 / HALF_LIFE_PERIOD));
  }
  return false
};
