// Exercise #1: For Each Function

function add5000(number){
  return number + 5000;
}

function forEach(array, operation) {
  for(let i=0; i < array.length;i++){   // เอา employeesalaries ไป ทำงานใน add5000
    newEmployeeSalaries.push(operation(array  [i]));    
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,add5000);

console.log(newEmployeeSalaries);
