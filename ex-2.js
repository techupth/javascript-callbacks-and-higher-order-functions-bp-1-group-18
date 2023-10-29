//Exercise #2: At Least Five Function  // หาจำนวนเกิน 70 ถ้าใน arrayมีเกิน 5 ให้ผลออก true

let moreThan70=[]
function ifMoreThan70(number) {
 
  if (number >= 70) {
    moreThan70.push(number);
  }
  if (moreThan70.length >= 5) {
    return true;
  } else {
    return false;
    
  }
}


function atLeastFive(array, operation) {
  let result =[] 
  for(let i =0; i < array.length; i++){
result = operation(array[i])
  } 
  moreThan70=[]
  return result
}




const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67]; // 5 true
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100]; // 4 false
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67]; // 4 false


console.log(moreThan70)
console.log(moreThan70.length)
console.log(ifMoreThan70())


let scoreRoom1Result = atLeastFive(studentScoresRoom1,ifMoreThan70);
console.log(scoreRoom1Result);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,ifMoreThan70);
console.log(scoreRoom2Result);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,ifMoreThan70);
console.log(scoreRoom3Result);

console.log(moreThan70)