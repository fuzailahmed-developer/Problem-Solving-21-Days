//! 🎯 Day 1 – Simple Number Problems

//* 1. Print Numbers from 1 to N

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

//* 2.Print Numbers from N to 1 without changing the loop condition of above question

// for(let i = 5; i > 0; i--){
//     console.log(i)
// }

//* 3.Print All Even Numbers from 1 to N

// for(let i = 1; i <= 10; i++){
//     if (i % 2 == 0) console.log(i)
// }

//* 4.Sum of First N Natural Numbers

    // let sum = 0;
    // for(let i = 1; i <= 5; i++){
    //     sum += i
    // }
    // console.log(sum)

//* 5.Product (Factorial) of N

// function Factorial(N) {
//   let product = 1; // start with 1, not 0
//   for (let i = 1; i <= N; i++) {
//       product *= i; // multiply, not add
//       console.log(product)
//   }
//   return product;
// }

// console.log(Factorial(5)); // Output: 120


//* 6.Sum of All Even Numbers up to N

// let count = 0;

// for(var i = 1; i <= 10; i++){
//     if(i % 2 == 0) count += i
// }


//* 7.Print Squares of Numbers from 1 to N

// for(var i = 1; i <= 5; i++){
//     console.log(i * i)
// }

//* 8.Print all numbers divisible by 3 and 5 up to N

// for(var i = 1; i <= 30; i++){
//     if (i % 3 == 0 && i % 5 == 0) console.log(i)
// }

//* 9.Find the sum of all odd numbers up to N

// let count = 0;

// for(var i = 1; i <= 10; i++){
//     if(i % 2 !== 0) count += i
// }

//* 10.Print the cubes of numbers from 1 to N

// function printCubes(N) {
//   for (let i = 1; i <= N; i++) {
//     console.log(i ** 3); // or use Math.pow(i, 3)
//   }
// }

// printCubes(5);


//* 11.Print only the numbers that are both even and perfect squares


// for(var i = 1; i <= 20; i++){
    
//     if( i % 2 == 0 && Math.sqrt(i) % 1 == 0){
//         console.log(i)
//     }

// }
