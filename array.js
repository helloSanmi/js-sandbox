//first array
var array = ['Banana', 'Apples', 'Oranges', 'Blueberries'];

console.log(array)
// //remove the banana from the array
array.shift()
console.log(array)

//sort the array in order
array.sort()
console.log(array)

//put 'Kiwi' at the end of the array
array.push('Kiwi')
console.log(array)

//remove 'Apples' from the array
array.shift()
console.log(array)

//sort the array in reverse order
array.reverse()
console.log(array)

//second array
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0])
