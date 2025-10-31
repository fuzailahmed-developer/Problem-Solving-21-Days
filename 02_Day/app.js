//! 🎯 Day 2 – Conditions & Logic

//* 1.Find the Maximum of Three Numbers

function largestNumber (...number) {
    console.log(Math.max(...number))
} 
largestNumber(32,232,32,32,333)


//* 2.Check if a Number is Positive, Negative, or Zero

function num (num){
    if (num > 0) return "Positive"
    else if (num == 0) return "Zero"
    return "Negative"
}
const checkNumber = num(-0);
console.log(checkNumber)


//* 3.Calculate Electricity Bill

let units = 230;
let perUnit = 0;

if (units >= 300) perUnit = 12
else if (units >= 200 && units < 300) perUnit = 10
else if (units >= 100 && units < 200) perUnit = 7
else perUnit = 5;

console.log(units * perUnit)


//*  4.Check if a Character is a Vowel or Consonan

const vowelLetter = ["a","e","i","o","u"]
let countVowel = 0;
function checkVowel(...char){
    for(var i = 0; i < char.length; i++){
        if(vowelLetter.includes(char[i])){
            countVowel++
        }
    }
    console.log(countVowel)
}
checkVowel('e','i',"m","o","u")

//* 5.Check if a Year is a Leap Year

const checkLeapYear = (year) => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return true
    return false
}
console.log(checkLeapYear(2025))