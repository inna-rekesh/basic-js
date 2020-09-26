module.exports = function countCats(matrix) {
  const ears = '^^';
  if(matrix.length===0){
    return 0
  }
  return matrix.map(res=>{
    return res.filter(i=>{
      if(i===ears){
        return i
      }
    }).length
  }).reduce((acc, item)=>acc+item)
};
