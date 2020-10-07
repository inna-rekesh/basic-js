module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return arr.reduce((level, i) => {
            if(Array.isArray(i)) level++;
            return level;
        }, 2)
    }
};
