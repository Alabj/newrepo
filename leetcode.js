///1
// Write a JavaScript function to check whether an 'input' is an array or not.

// Test Data:
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
const is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));

//2
//Write a JavaScript program to find the sum of squares of a numeric vector
function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_sq([0,1,2,3,4]));

  //3
//   Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.



var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];uy= 
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//4
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));

  //5
//   Write a simple JavaScript program to join all elements of the following array into a string.

// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//6
// Write a JavaScript function that reverse a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


//7
// join two given arrays. One of them is a string and another is
let arr1 = [1, 2, 3, 4]
console.log(arr1)

let arr2 =["john", "niger", 'bremda']
console.log(arr2)


let empty =[...arr1, ...arr2]
console.log(empty)
