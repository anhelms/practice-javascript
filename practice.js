function selectEvenItems(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

const inputArray = ["a", "b", "c", "d", "e", "f"];
const outputArray = selectEvenItems(inputArray);
console.log(outputArray);

setTimeout(function() {
  console.log('First task done!');
}, 2000);

setTimeout(function() {
  console.log('Second task done!');
}, 4000);

setTimeout(function() {
  console.log('Third task done!');
}, 6000);

setTimeout(function () {
  console.log('First task done!');
  setTimeout(function () {
    console.log('Second task done!');
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);


var myVar = "Tiger";
console.log(myVar);

const newVar = "Otis";
console.log(newVar);

