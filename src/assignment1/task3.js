// Task 3: get all Children by parentId create a dropdown of all ids, user can select id and will get all children

const a = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 2 },
  { id: 7, parentId: 5 },
  { id: 8, parentId: 5 },
  { id: 9, parentId: 5 },
  { id: 10, parentId: 5 },
];

// get first children of parent id
function getChildren(parentId, data) {
  const output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].parentId === parentId) {
      output.push(data[i].id);
    }
  }
  return output;
}

// get All children of parentId
function getAllChildren(parentId, data) {
  const parents = [...new Set(data.map((x) => x.parentId))]; // get all unique parent ids
  
  let output = getChildren(parentId, data);

  for (let i = 0; i < output.length; i++) {
    // traverse thorugh output and add new ids
    if (parents.includes(output[i])) {
      const newOutput = getChildren(output[i], data);
      output = output.concat(newOutput);
    }
  }
  return output;
}

// console.log(getAllChildren(1,a))
// show data on homepage
function changeHandler() {
  const selectBox = document.getElementById("selectBox");
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;
  const data = getAllChildren(+selectedValue, a);
  document.getElementById("root").innerHTML = data;
}

/*
output will be:
// if user select id 1
const b = [2,3,4,5,6,7,8,9,10];
// if user select id 5
const b = [7,8,9,10];
*/
