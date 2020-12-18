// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.

function past(h, m, s){
  //#Happy Coding! ^_^
  return (past.arguments[0] * 3600 + past.arguments[1] * 60 + past.arguments[2]) * 1000;
}
console.log(past(0, 1, 1));