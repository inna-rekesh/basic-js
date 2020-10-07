module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  return members.filter(item => typeof item === "string").map(str=>str.trim()[0]).sort().join('').toUpperCase()
}

