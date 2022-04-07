//first array
var array = ['Banana', 'Apples', 'Oranges', 'Blueberries'];

console.log(array)
// //remove the banana from the array
array.shift()
console.log(array)

//sort the array in order
array.sort()

//put 'Kiwi' at the end of the array
array.push('Kiwi')

//remove 'Apples' from the array
delete array[0];

//sort the array in reverse order
array.reverse()

//second array
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1])
