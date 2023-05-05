///1
function leapYear(year){
    if(year % 4 === 0){
       return true
    }else{
        return false
    }
}
console.log(leapYear(2000))
console.log(leapYear(1998))


///2
function isSquareOrRectangle(lenght,breath){
    if(lenght === breath){
        return `this is a square` 
    }else{
       return `this is a rectangle`
    }
}
console.log(isSquareOrRectangle(5,9))
console.log(isSquareOrRectangle(8,8))

///3
function shopDiscout(quantity){
    const DISCOUNT = 0.1
    const UNIT_COST = 100
    const MINIMUM_AMOUNT_TO_BE_SPENT = 1000


    let totalCost = quantity + UNIT_COST

    if(totalCost > MINIMUM_AMOUNT_TO_BE_SPENT){
        let discountToBeEarned = totalCost * DISCOUNT
        let reducedAmount = totalCost - discountToBeEarned

        return reducedAmount
    }

    return totalCost
}
console.log(shopDiscout(1000))


///4
function profitableGamble(prob, prize, pay){
    if(prob * prize > pay ){
        return true
    }else{
        return false
    }
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))


///5
function makesTen(a, b){
    ///if(a,b ===10 || a + b === 10){
    if(a === 10 || b === 10 || a + b === 10){
        return true
    }else{
        return false
    }

}

console.log(makesTen(9, 10))
console.log(makesTen(9, 9))
console.log(makesTen(1, 9))




///6
function comp(first, second){
    if(first.lenght === second.lenght){
        return true 
    }else{
        return false
    }
    
}
console.log(comp("AB","CD"))
console.log(comp("ABC","DE"))
console.log(comp("hello","edabit"))

///7
function acceptIntoMovie(age, isSupervised){
    if(age >= 15 || isSupervised === true){
        return true
    }else{
        return false 
    }

}
console.log(acceptIntoMovie(14, true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16, false))

///8
function oddOrEven(data){
    if(data.length % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(oddOrEven("apples"))
console.log(oddOrEven("pears"))
console.log(oddOrEven("cherry"))

function isEmailValid(data) {
    if (data.includes("@")) {
        return true
    } else {
        return false
    }
}
console.log(isEmailValid("roshbon@gmail.com"))

///9
function isLastCharacterN(name) {
    let characterAtTheLastIndex = name.substring(name.length - 1)
    if (characterAtTheLastIndex === "n" || characterAtTheLastIndex === "N") {
        return true
    } else {
        return false
    }
}
}
console.log(isLastCharacter("Aiden"))
console.log(isLastCharacter("Piet"))
console.log(isLastCharacter("Bert"))
console.log(isLastCharacter("Deon"))


///21
function moodToday(mood){
    let argumentPassed = arguments.length
    if(arguments.length === 0){
        return "Today, I am feeling neutral"
    }
}
console.log(moodToday("happy"))
console.log(moodToday("sad"))
console.log(moodToday())

///22
if(age >= 18){
    return "canVote"
}else {
    return "You need to grow up to vote"
}

let tween = "tween"
if(age <=15){
    return "Tween"    
}else if (age <= 25){
    return "Teen"
}else if (age <= 40){
    return "Adult"
}
else {
    return "Elders"
}