//Start of lesson task

/*let number = 3.5;
 
if (number != 0) {
    if (number%2===1) {
        console.log("the number is odd");
    } else if (number%2===0) {
        console.log("the number is even");
} else {
    console.log("the number is neither odd nor even");
}
}
*/

/* //Example while loop
count = 0;

while (count < 5) {
    console.log (`It's true, ${count} is less than 5!`);
    count ++;
}
*/


/*
let gasLevel = 100;
while (gasLevel > 0) {
    console.log(`The car is running. The gas level is ${gasLevel}`);
    gasLevel -= 10;
}*/

/*let gasLevel = 100;
do {
    console.log(`The car is running. The gas level is ${gasLevel}`);
    gasLevel -= 10;
} while (gasLevel > 0);
*/

/*for (count=0; count<5; count++) {
    console.log(`It's true, ${count} is less than 5!`);
}*/

/*for (let gasLevel=100; gasLevel>0; gasLevel-=10) {
    console.log (`The car is running. The gas level is ${gasLevel}`);
}*/

/*for (number=1; number<=20; number++) {
    console.log(number);
}*/

/*for (let number=1; number<=20; number++) {
    if (number % 2 === 0) {
    console.log(number)
    }
}*/

/*function greet (name="friend") {
    console.log(`Hello ${name}`);
}

greet ();*/

/*function sumOfTwoNumbers (num1, num2) {
    console.log(num1+num2);
}

sumOfTwoNumbers (27, 62);*/

/*function printNumber (number) {
    for (let i=1; i<number; i++) {
        console.log ("Hello World");
    }
}

printNumber (6);*/

/*function performArithmetic (operation, num1, num2) {
    if (operation==="add") {
        console.log(num1 + num2);
    } else if (operation === "minus") {
        console.log(num1 - num2);
    } else if (operation === "multiply") {
        console.log(num1 * num2);
    } else if (operation === "divide") {
        console.log(num1 / num2);
    } else {
        console.log ("Error!");
    }
}

performArithmetic ("multiply")
*/

/*function sumOfTwoNumbers (num1, num2) {
    return(num1+num2);
}

console.log(sumOfTwoNumbers (27, 62));
*/

// a function that takes two numbers and returns the greater of the two

function returnGreaterNumber (num1, num2) {
    if (num1 > num2) {
        return num1 
    } else if (num2 < num2) {
        return num2
    } else {
        return "equal numbers"
    }
}

console.log(returnGreaterNumber (97,24));
console.log(returnGreaterNumber (12,88));
