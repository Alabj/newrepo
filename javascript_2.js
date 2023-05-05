////arrow function
const ask = (question, yes, no) => {
  if(confirm(question)){
  return "we are here already"
  }else{
      return "we die here if need be"
  }    
}

///ITERATION -- LOOP :
//(for
//   normal for
//   -for of 
//   -for in 
//while
//Do While  )

///FOR
for (let i=0; i<100; i++) {
  console.log("hello world")
}

let newArr = [34, 56, 21, 89]
for (let i=0; i<newArr.length; i++){
  console.log(`${i} - ${newArr[i]}`) ////=> 0 - 34, 1 - 56, 2 - 21, 3 - 89
}
c
let str = "The man in the kitchen wants meats"
let res = ''
let skipped = ''
for(let i= 0; i<str.length; i++){
  if(str.at(i) === 'n'){
    skipped = skipped + str.at(i)
    continue
  }
  res = res + str.at(i)
}
console.log(skipped)


for(let i= 0; i< str.length; i++){
  console.log(str[i])
}

///FOR OF
let arr =[ 23, 45, 78]
for(let i of arr){
  console.log(i)
}



///FOR OF
let numbers = [34,56,7,9]

for(let number of numbers){
  console.log(number)
}

///FOR IN
let numberObj ={
  a: "Aduke",
  b: "Asake",
  c: "Anike"
}

for(let name in numberObj){
  console.log(numberObj[name])
}

///Write a function that prints multiplication of 2
function multiplication(x){

  for(let i= 1; i< 12; i++){
  console.log(`${i} * ${x} = ${i * x}`)
}

}
multiplication(5)



///OBJECT
let users =[{
  firstName: "Sam",
  lastName: "Dole",
  age: 21,
  grades: [ {
              year1: 3.20,
              year2: 3.40,
              year3: 6.80,
            }, 18, 14, 17],
  interest: ["computers","Books"]          
},
{
  firstName: "Mustapha",
  lastName: "Sanni",
  age: 21,
  grades: [ {
              year1: 3.20,
              year2: 3.40,
              year3: 6.80,
            }, 18, 14, 17],
  interest: ["computers","Books"]          
}
]
console.log(users[0].grades[0].year1)
console.log(users[0].grades[0])

////
const grades = [
  {
    date: "2018-12-13",
    grade: 14
  },
  {
    date: "2018-12-15",
    grade: 18
  }
]

function getNumberOfTestsTaken(grades){
  const result = grades.filter(item => item.grade>=0)
  return result.length
}
console.log(getNumberOfTestsTaken(grades))//2


///
const sampleUsers =[
  {
    id : 1,
    firstName: "Abayomi",
    lastName: "Ajao"
  },
  {
    firstName: "sam",
    lastName: "Benard"
  }
]

function logName(sampleUsers){
  sampleUsers.forEach(item =>{
    console.log(`${item.firstName} ${item.lastName}`) 
  })

}

let arr1 = [1,2,3,4,5,6]

for(let item of arr1 ){
  console.log(item)
}


////OBJECT KEYS
function giveObjectKey(a){

  return Object.keys(a)
}

console.log(giveObjectKey({id : 1, firstName: "Abayomi", lastName: "Ajao"})) 


const obj ={
  name: "Niyi",    
  age: 23,
  gender: "Male",
  likes: ['football', 'ping-pong', 'money', 'jolof'],
  friends:[{name:"Ola", gender: "male", likes: ['ping-pong', 'money', 'jolof']},
  {},
  {name:"Player", gender: "male", likes: ['ping-pong', 'coding', 'jolof']}]
}

console.log(obj.friends[2].likes[1])

///OBJECT VALUE
///OBJECT KEYS
const obj ={
  name: "Niyi",    
  age: 23,
  gender: "Male",
  likes: ['football', 'ping-pong', 'money', 'jolof'],
  friends:[{name:"Ola", gender: "male", likes: ['ping-pong', 'money', 'jolof']},
  {},
  {name:"Player", gender: "male", likes: ['ping-pong', 'coding', 'jolof']}]
}

console.log(obj.friends[2].likes[1])


console.log(Object.keys(obj)[1])

console.log(Object.values(obj)[3])


////SET TIMEOUT : makes the request come out in 5 seconds
console.log("A")
console.log("B")
setTimeout(()=>{
  console.log("come out of here")
},5000)
console.log("C")


////PROMISE
const _data = [ 
  {name:"Ayodeji Ayokele",
    },
  {},
  {}
]