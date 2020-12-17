// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.

function past(h, m, s){
  //#Happy Coding! ^_^
  if (past.arguments[0] === 0) {
    res = (past.arguments[1] * 60 + past.arguments[2]) * 1000;
  return res;
  }
  res = (past.arguments[1] * 60 * past.arguments[0] + past.arguments[2]) * 1000;
  return res;
}
console.log(past(2, 3, 25));