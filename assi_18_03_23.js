///1
function getFirstValue(first){
    return `${first[0]}`
}
console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))

///2
// function makePair(a){
//     let strToArr = a.split()
//     return strToArr
// }
// console.log(makePair(1,2))
// console.log(makePair(51,21))
// console.log(makePair(512124,215))


////3
function reverse(a){
    let arrReave = a.reverse()
    return arrReave
}
console.log(reverse([1, 2, 3, 4]))
console.log(reverse([9, 9, 2, 3, 4]))
console.log(reverse([]))


///4
function arrayTostring(a){
    let arr = a.join('')
    return arr 
}
console.log(arrayTostring([1,2,3,4,5,6]))
console.log(arrayTostring(['a','b','c','d','e','f']))
console.log(arrayTostring([1,2,3,'a','s','dAAA']))


///5
function valueAt(a, b){
    let result = a.length
    return result
}
console.log(valueAt([1,2,3,4,5,6], 10/2))
console.log(valueAt([1,2,3,4,5], 8.0/2))
console.log(valueAt([1,2,3,4], 6.5353535314/2))

///5
function valueAt(arr, index){
    const arrIndex = math.floor(index)
    return arrIndex
}
console.log(valueAt([1,2,3,4,5,6], 10/2))
console.log(valueAt([1,2,3,4,5], 8.0/2))
console.log(valueAt([1,2,3,4], 6.5353535314/2))


///6
let data = data.forEach(function(number,index){
    console.log
})


///7
function check(a, b){
    let result = a.includes(b)
    return result
}
console.log(check([1,2,3,4,5,6],3))
console.log(check([1,1,2,1,1],3))
console.log(check([5,5,5,6],5))
console.log(check([],5))

////8
let data = data.forEach(function(number){
   console.log(-1 * number)
})
console.log(data([1,2,3,4,5,6]))
console.log(data([1,-2,3,-4,5]))

///8
function invertArray(arr){
    return arr.map(function(num){
        num * -1
    })
}
console.log(invertArray([1,2,3,4,5,6]))
console.log(invertArray([1,-2,3,-4,5]))

///10
let data = data.filter(function(a){
    return isNaN(a) === false
})
console.log(data([1,2,3,'a','b',4]))
console.log(data(['A',0,'Edabit',1729,'phyton','1729']))
console.log(data(['nothing','here']))

//11
function forbiddenLetter(a,b){
  let result = a.includes(b)
}
console.log(forbiddenLetter(['rock','paper','scissors'],'r'))
console.log(forbiddenLetter(['spoon','fork','knife'],'a'))
console.log(forbiddenLetter([],'m'))