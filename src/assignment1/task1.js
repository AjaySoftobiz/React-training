// // Task 1: replace alais with name
const a = [
  { name: "first_name", alais: "FirstName", type: "string" },
  { name: "age", alais: "Age", type: "number" },
  { name: "degree", alais: "Degree", type: "string" },
];
const b = [
  { first_name: "John", age: 23, degree: "BCA" },
  { first_name: "Tom", age: 25, degree: "MBA" },
];
// /*
// output will be:
// const c = [
//   {FirstName: 'John', Age: 23},
//   {FirstName: 'Tom', Age: 25}
// ]
// */
function replaceNameToAlais(alaisArray, dataArray) {
  const output = [];

  for (obj of dataArray) {
    let newObj = {};
    let i = 0;
    for (key in obj) {
      const newKey = alaisArray[i].alais;
      newObj[newKey] = obj[key];
      i++;
    }
    output.push(newObj);
  }
  return output;
}

const c = replaceNameToAlais(a, b);

function showResults() {
  document.getElementById("root").innerHTML = c;
  console.log(c)
}
