// let firstNumber = 20
// let secondNumber = firstNumber
// let sum = firstNumber + secondNumber
// let subtraction =  firstNumber - secondNumber
// let multiply = firstNumber * secondNumber
// let divide =  firstNumber / secondNumber

// console.log(firstNumber)
// console.log(secondNumber)
// console.log(sum)
// console.log(subtraction)
// console.log(multiply)
// console.log(divide)


let secondName = "Olatunju Olayemi"
lengthOfSecondName = secondName.length
console.log(secondName.length)


//////FUNCTION

function doubleMyNumber(w){
  let result = 2 + w 

  return result
}

function greetings(name){
  let greetMe = "Hello Mr " + name +" we die here"

//   return greetMe
  
// }

// console.log(greetings("folarin"))
// console.log(greetings("nike"))
// console.log(greetings("Ola"))


// function add2Numbers(num1, num2, name){
//   let sum = num1 + num2
//   let result = "welcome " +name + ". The sum is  : " + sum
//   return result
// } 
// console.log(add2Numbers(3,5, "tayo"))
// console.log(add2Numbers(13,50, "taju"))


// function greetingOfGuest(name){
//   let secondName = "Olatunju Olayemi"
// lengthOfSecondName = secondName.length
//   return lengthOfSecondName
// }
// console.log(secondName.length)

// let name = "alex"
// let shouting = name.toUpperCase()
// console.log(shouting)
// console.log(name)

// function callMyName(name){
//   let newName = name.toUpperCase()
//   return newName
// }
// console.log(callMyName("Olatunji Yusuf"))


// function callMyToSmall(name){
//   let newName = name.toLowerCase()
//   return newName
// }
// console.log(callMyToSmall("       OlAtunji YUsuF GOVERNOR"))

// function callMyUpper(name){
//   let newName = name.toUpperCase()
//   return newName
// }
// console.log(callMyUpper("   OlAtunji YUsuF GOVERNOR   "))


// function removeSpaces(name){
//   let newName = name.trim()
//   return newName
// }
// console.log(removeSpaces("      OlAtunji YUsuF GOVERNOR       "))

// let x = "        we need to see the governor       "


// let leftTrim = x.trimStart()
// console.log(leftTrim)

// let rightTrim = x.trimEnd()
// console.log(rightTrim)


// //BOOLEAN
// let a = 10 
// let b = 20 

// //greater than
// let firstResult = b > a
// console.log(firstResult)

// //greater then equals
// secondResult = b >= a
// console.log(secondResult)

// //less than
// thirdResult = b < a
// console.log(thirdResult)

// //less than equal to
// thirdResultOfAnswer = a <= b 
// console.log(thirdResultOfAnswer)

// //equals to
// fourthResult = b === a
// console.log(fourthResult)

// //equals to
// fifthResult = a === a
// console.log(fifthResult)

// //not equals to
// sixthResult = a !== a
// console.log(sixthResult)


// //OR: ||
// if(a === 10 || b === 10 ){
//   return true
// } 

// ///AND : && 
// if(a ===10 && b === 10){
//   return true
// }

// /////if

// //if-number
// if(20 >= 10){
// console.log("you can see me")
// }


// ///if-name
// let name = "Abu"
// if (name === "Abu"){
//   console.log("you can see me, yes i am Abu")
// }

// ///if-else: if the variable in the if is not the same

// let firstName = "Abu"
// if (firstName === "OLa"){
//   console.log("you can see me, yes i am Abu")
// }else{
//     console.log("You Missed Road")
// }

// ///if- atm(creation)

// let balance =2000000
// let withdrawalAmount = 2000
// console.log("Before withdrawal: balance: " + balance)
// if(balance > withdrawalAmount){
//   console.log("Yes,you are eligible to withdraw")
//   console.log("Collect your money")

name += 'blue'///(name + blue)

  let newBalance = balance - withdrawalAmount
  balance = newBalance
  console.log("After withdrawal: balance: " + balance)
}else{
  console.log("insufficient balance")
}

/n an organization, bunus is to be shared for staff who have spent at least 10 year with the company to get 5% on ther salary write a function to calculate if a staff is entitiled to the bonus and how much

function getBonus(howLongInYear, monthlySalary){
  if(howLongInYear >= 10){
    let awoofCash = ( (5/100) * monthlySalary)
    let newSalary = awoofCash + monthlySalary
    return `Thank you for your long service. Your new salary is: ${newSalary} `
  }else{

    const NO_OF_YEAR_AWOOF_INCLUSION = 10
    let noOfYearLeft = 10 - howLongInYear
    return `You're blessed, your time is on the way.You have ${noOfYearLeft} left to enjoy the bonus. But today your salary is still " + ${monthlySalary} `
  }
}
console.log(getBonus(6, 25000))

console.log(getBonus(13, 150000))

//Character At ------INdex Of
const game = "champion in fIfa games,  Ola"

///charAt
console.log(game.length)
console.log(game.charAt(0))
console.log(game.charAt(1))
console.log(game.charAt(2))
console.log(game.charAt(3))

///indexOf
console.log(game.indexOf("c"))
console.log(game.indexOf("i"))
console.log(game.indexOf("o"))
console.log(game.indexOf("I"))
console.log(game.replace("i","r"))
console.log(game.replaceAll("i","r"))
///substring
console.log(game.substring(0,8))

///splice
let data = [1 ,2, 3, 4, 5, 6, 7, 8, 9]
data.splice(0,3)
console.log(data) /// [4, 5, 6, 7, 8, 9]
data.length = 0
console.log(data) /// []

///includes

function isEmailValid(data) {
    if (data.includes("@")) {
        return true
    } else {
        return false
    }
}
console.log(isEmailValid("roshbon@gmail.com"))
console.log(isEmailValid("roshbongmail.com"))


function checkEnding(a, b) {
    if (a.endsWith(b)) {
        return true
    } else {
        return false
    }
}
console.log(checkEnding("abc", "bc"))
console.log(checkEnding("abc", "d"))
console.log(checkEnding("samurai", "zi"))
console.log(checkEnding("feminine", "nine"))
console.log(checkEnding("convention", "tio"))

function isPlural(name){
    if(name.endsWith("s")){
        return true
    }else{
        return false
    }
}
console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("dudes"))
console.log(isPlural("man"))

// ///Prompt and Alert
// // let myName = prompt()
// // alert("Wlecome " + myName)


function details() {
    let argsLength = arguments.length
    if(argsLength < 5){
        return "Not enough arguments"
    }else{
       return typeof(arguments[4])
    }
   
}
console.log(details(1, 2, 3, 4, 5))
console.log(details("a", 2, 3, true, "five"))
console.log(details())

/// To Find Date
const today = new Date();
console.log(today)

///SLICE
function newWord(word){ 
    let newWordWithourFirstCharacter = word.slice(1)
    return newWordWithourFirstCharacter
}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log( newWord("plum"))



function isValidNumber(data) {
    if(typeof(data) === "number") {
        return `${data} is a valid number`
    } else {
        return `${data} is not a number`
    }
}
console.log(isValidNumber("11"))


/////ARRAY
function arrayTime(marks){
    if(marks.length % 2 ===0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(arrayTime([2,4,5,6])) =>///EVEN
console.log(arrayTime([2,4,5]))   => ///ODD

////(.push): to add to an array 
let marks = [22,45,6,10]
console.log(marks)

marks.push(12)
marks.push(35)
marks.push(24)
marks.push(19)
console.log(marks)

////(.unshift):add to the front of an array
marks.unshift(100)
console.log(marks)

////(.shift):remove from the front of an array
marks.shift()
console.log(marks) 

////(.pop): to remove from the back of an array
marks.pop()
console.log(marks)

////LIFO - last in first out:


/////ARRAY.includes
function check(a,x){
    if(a.includes(x)){
        return true
    }else{
        return false
    }
}
console.log(check([22,4,16],16))
console.log(check([22,4,16],9))


///String to Array
function stringToArray(a){
    let strToArr = a.split('a')
    return strToArr
}

console.log(stringToArray("Abayomi Ayobami")) =>['Ab','yomi','Ayob','mi']


////Array to String
let name = ['A', 'b', 'a', 'y', 'o', 'm', 'i', ' ', 'A', 'y', 'o', 'b', 'a', 'm', 'i']
let res = name.join()
let res1= name.join('')
let res2 = name.join(' ')
let res3= name.join('a')

console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)

/////code war question- 1
function isVow(a){
    if(a.incudes('a') ||a.incudes('e') || a.incudes('i') || a.incudes('o') || a.incudes('u')){
        return true
    }else{
        return false
    }
}

////2
function uefaEuro2016(teams, score){
    if(score[0] > score[1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }else if(score[0] < score[1]){
        return ` At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }else{
        return `At match ${teams[0]} - ${teams[1]}, teams played draw`
    }
}
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]))
console.log(uefaEuro2016(['Belgium', 'Italy'],[2, 0]))
console.log(uefaEuro2016(['Portugal', 'Iceland'],[2, 0]))

////3
function array(arr){
    if(arr.length <= 2){
        return "NULL"
    }else{
        let res = arr.substring(1, arr.length- 1)
        let newres = res.replaceAll(',',' ')
        
        return newres.trim()
       }
}

console.log(array('2,3,4,5,6'))

/////forEach: takes a function
let scores = [25, 33.5, 45, 50]

scores.forEach(function check(x){
    console.log(x)
})


let scores = [25, 33.5, 45, 50, 'mike']

scores.forEach(function check(scores,index){
    console.log(scores,index)
})

let scores = [25, 33.5, 45, 50, ]
let add = 0
scores.forEach(function check(scores){
    add = add + scores
    console.log(add)
})


let scores = [25, 33.5, 45, 50, 'mike']
let lessThan40Marks = []

scores.forEach(function check(score,o){
   if(score <= 40){
       lessThan40Marks.push(score)
   }
})

console.log(lessThan40Marks)

///REDUCE
 
let data = [1 ,2, 3, 4, 5, 6, 7, 8, 9]
const sum = data.reduce((total, current) =>{
    return total + current    
}, 0)
console.log(sum)///45


/////- (...):used to add array to another array
//1
let arr1 = [1, 2, 3, 4]
console.log(arr1)

let arr2 =[...arr1]
console.log(arr2)

//2
let arr1 = [1, 2, 3, 4]
console.log(arr1)

let arr2 =["john", "niger", 'bremda']
console.log(arr2)


let empty =[...arr1, ...arr2]
console.log(empty)


////SORT
let data = [ 1, 2, 3, 5, 8]

data.sort(function(a,b){
    return a - b
})
console.log(data) ////=> 1,2,3,4,...acending order


///// FILTER: bring out the one you call
let data = ["temiloluwa", 4, 12, 11, "ends"]
let result = data.filter(function(a){
        return typeof(a) === "number"
        // return isNaN(a) === true
})
console.log(result) ////=>[4,12,11]


////OBJECT
let users = {
    firstName: "Sam",
    lastName: "Dole",
    age: 21,
    grades: [ {
                year1: 3.20,
                year2: 3.40,
                year3: 6.80,
              }, 18, 14, 17],
    interest: ["computers","Books"]          
}
users.age = 41 //// to update the object
console.log(users.firstName) /// Sam 
console.log(users.firstName.toUpperCase())
console.log(users.grades[0]) ///  year1: 3.20, year2: 3.40, year3: 6.80
console.log(users.grades[users.grades.length-1])//// last element
console.log(users.school) /// undefined
console.log(users.age) ///21
console.log(users.interest) /// ["computers","Books"] 



//// LastName to Uppercase
function getformattedFullName(user){
    let fullname = user.firstName + " " + user.lastName.toUpperCase()
    return fullname
}
let user1 = {
    firstName: "Sam",
    lastName: "Dole",
    age: 21
}
let user2 = {
    firstName: "window",
    lastName: "Dolesole",
    age: 21
}
console.log(getformattedFullName(user1)) /// Sam Dole
console.log(getformattedFullName(user2)) /// window Delesole

/// to get the first initial
function getInitial(user){
    return user.firstName.charAt(0) + " " + user.lastName.charAt(0)
}
let user1 = {
    firstName: "Sam",
    lastName: "Dole",
    age: 21
}
let user2 = {
    firstName: "window",
    lastName: "Dolesole",
    age: 21
}
console.log(getInitial(user1)) /// S D
console.log(getInitial(user2)) /// w D



///get voting message
function getVotingMessage(user){
    if (user.age >= 18){
        return "You are eligible to vote"
    }else{
        return "You are not eligible to vote"
    }
}
let user1 = {
    firstName: "Sam",
    lastName: "Dole",
    age: 12
}
let user2 = {
    firstName: "window",
    lastName: "Dolesole",
    age: 21
}

console.log(getVotingMessage(user1)) /// "You are eligible to vote"
console.log(getVotingMessage(user2)) ///"You are not eligible to vote"


///add Number of chapters
function addNumberOfChapters(course, count){
    course.numberOfChapters = course.numberOfChapters + count
    return course
}

let course1 = {
    name: "Sam David",
    numberOfChapters: 10
}

let course2 = {
    name: "Sam David",
    numberOfChapters: 12
}
console.log(addNumberOfChapters(course1, 200))/// 
console.log(addNumberOfChapters(course2, 200))

///leetcode:
///1. jewels and stones

var numJewelsInStones = function(jewels, stones) {
    let countCount = 0
    let stonesArr = stones.split('')

stonesArr.forEach(function(stone){
    if(jewels.includes(stone)){
        countCount++
    }


})

return countCount
};

///write a function that takes a string as argument. extract the first half of the string. return the result

function myFunction(a) {
    return a.slice(0, a.length / 2);
 }

 ////Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

 function myFunction(a) {
    return a.slice(0, -3);
 }

/// Write a function that takes two numbers (a and b) as argument. Return b percent of a


function myFunction(a, b) {
    return b / 100 * a

  }


//   Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. 
//   Then multiply by d and divide by e. 
//   Finally raise to the power of f and return the result.

function complexCalculation(a, b, c, d, e, f) {
    return Math.pow((a + b - c) * d / e, f);
  }
  

  

//   Write a function that takes two strings (a and b) as arguments. 
//   If a contains b, append b to the beginning of a. If not, append it to the end

function appendString(a, b) {
    if (a.includes(b)) {
      return b + a;
    } else {
      return a + b;
    }
  }


//   Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {
    return b.split(a).length - 1
  }



//   Write a function that takes a number (a) as argument. 
//   Round a to the 2nd digit after the decimal point. Return the rounded numbe

function roundTo2DecimalPlaces(a) {
    return Math.round(a * 100) / 100;
  }
///or
function myFunction(a) {
    return Number(a.toFixed(2));
  }


//   ///
//   Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. 
//   Tipp: you might want to change the type of the number for the splitting 


function splitNumberIntoDigits(a) {
    const digits = a.toString().split("").map(Number);
    return digits;
  }

  Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

  function myFunction(a, n) {
    return a.charAt(n);
  }


//   Write a function that takes a number (a) as argument. 
//   If a is a whole number (has no decimal place), return true. Otherwise, return false.

function isWholeNumber(a) {
    return Number.isInteger(a);
  }


  Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

  function myFunction(a, n) {
    return a.charAt(n);
  }

  Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

  function myFunction(a, n) {
    return a[n];
  }


//   Write a function that takes an array (a) and a number (n) as arguments. 
//   It should return the last n elements of a.

  function myFunction(a, n) {
    return a.slice(n);
  }

//   Write a function that takes an array (a) and a value (b) as argument. 
//   The function should remove all elements equal to 'b' from the array. Return the filtered array.

  function myFunction(a, b) {
    return a.filter(x => x!== b);
  }

//   Write a function that takes an array of numbers as argument. 
//   Return the number of negative values in the array.

  function myFunction(a){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  
  }

//   Write a function that takes an array of numbers as argument. 
//   It should return an array with the numbers sorted in descending order.
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }


// Write a function that takes an array of numbers as argument. 
// It should return the sum of the numbers.

function myFunction(a){
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;

}

////Write a function that takes an array (a) and a number (n) as arguments. 
///It should return the last n elements of a.
function myFunction(a, n) {
  return a.slice(-n);
}

///Write a function that takes an array of strings as argument. Return the longest string.

function myFunction( arr ) {
  return arr.reduce((a, b) => a.length <= b.length ? b : a)
  }


  // Write a function that takes an array as argument. 
  // It should return true if all elements in the array are equal. It should return false otherwise.

  function myFunction( arr ) {
    return new Set(arr).size === 1
  }

  ///Write a function that takes arguments an arbitrary number of arrays. 
  ///It should return an array containing the values of all arrays.

  
  function
myFunction(...arrays){
  
  return [].concat(...arrays)
}


// Write a function that takes an array of numbers as argument. 
// It should return the average of the numbers.

// complete the function getStringSize such that it returns the an array. 
// This means, for the array ["abc","d"] it should return [3 ,1]

function getStringSize(arr){
  let newArray = []
  arr.forEach(function(a,b){
      newArray.push(a.length)
  })
  return newArray
}


// Get year
// Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.
// Take a look at the sample usage and expected output to better understand how the function should work.

function getYear(arr, searchYear){
  let foundYear = arr.find(function (value, index){
   return value === searchYear
 })
   return foundYear
   
 }
 
 console.log(getYear([2019, 2020, 2021], 2020)); // 2020
 console.log(getYear([2019, 2020, 2021], 1990)); //undefined

 //// getting thing less than 0
 function getFreezingTemperature(arr){
  return arr.filter( function (a){
      return a < 0
  })
  
 }
 console.log(getFreezingTemperature([-5, 12, 3]))



///
// Write a function that takes an object as argument. 
// In some cases the object contains other objects with some deeply nested properties. 
// Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

 if (obj.hasOwnProperty('a') && typeof obj.a === 'object' && obj.a.hasOwnProperty('b')) {
  return obj.a.b;
}
return undefined;


// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a) {
  return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      sum += obj[key];
    }
  }
  return sum;
}
