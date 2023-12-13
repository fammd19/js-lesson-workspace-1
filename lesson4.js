//Print numbers from 1 up to x except for numbers 3 and 7
/* function printNumber (x) {
    for (let i=1; i<=x; i++) {
        if (i===3 || i===7) {
            break;
        } 
        console.log(i)
    }
}

printNumber (10);*/

//Write a fucntion that prints odd numbers, and in place of even numbers, prints even

/*function printEven (x) {
    for (i=1; i<=x ; i++) {
        if (i%2 === 0) {
            console.log(i);
        } else if (i%2 === 1) {
            console.log("even");
        }
    }
} 

printEven(10);*/

//Write a fucntion that prints odd numbers, and in place of even numbers, prints even, using continue

/*function oddEven (x) {
    for (i=1; i<=x ; i++) {
        if (i%2 === 0) {
            console.log("even");
            continue;
        } 
        console.log(i);
    }
} 

oddEven(10);*/

/*let oddEven = function(x) {
    for (i=1; i<=x ; i++) {
        if (i%2 === 0) {
            console.log("even");
            continue;
        } 
        console.log(i);
    }
} 

oddEven(10);*/

/*function doSomething(action) {
    action();
}*/

/*function hello() {
    console.log("Hi");
}

function bye() {
    console.log("Bye");
}

doSomething(hello);*/

/*function execute(someFunc) {
    console.log("This is a execute function");
    someFunc();
    console.log("End of execute function")
}

function hello() {
    console.log("Hi Hi");
}

function bye() {
    console.log("Bye Bye");
}

execute(hello);*/


//Function that gets two params, 1 is a fucntion, 1 is a name
/*
function greet(callback,name) {
    console.log("This is the great function");
    callback(name);
}

function helloThere(name) {
    console.log(`hello there ${name}`)
}


function hola(name) {
    console.log(`hola ${name}`)
}

greet(helloThere, "John");
greet(hola, "John");
*/

//Arrow function 

/*let sum = (x, y) => x + y;

console.log(sum(4,5));*/

/*let performThis = (func) => {
    console.log("This is the perform this function");
    console.log("Perform this function " + func());
} 

function func () {
    return 1+2;
}

performThis(func);*/

/*let getMin = (x,y) => {
    if (x<y) {
        return x
    } else {
        return y
    }
}
console.log(getMin(6,8));*/

// Can also write the above as 
/*let getMin2 = (x,y) => (x<y ? x : y);

console.log(getMin2(6,8));*/


//Scope

/*function scoping () {
    let name="Fi";
    let age=29;

    if (age >= 18) {
        let message = "I'm inside the if block,I can't be accessed ourside the block";
        var otherMessage = "I'm inside the if block but I can be accessed ourside the block because of var"
        console.log(name);
    }

    console.log(message); //ERROR
    console.log(otherMessage); //NO ERROR
}
//name is avaialble in the function but not outside of the function if with let

scoping (); //Will error */

/*scoping (); //called ahead of function

function scoping () {
    let name="Fi";
    let age=29;

    if (age >= 18) {
        let message = "I'm inside the if block,I can't be accessed ourside the block";
        var otherMessage = "I'm inside the if block but I can be accessed ourside the block because of var"
        console.log(name);
    }

    console.log(otherMessage); //NO ERROR
}*/

//Arrays

/*let myNames = ["Fi", "Floo", "Bear"];

//console.log(myNames.length); //=> 3

myNames[myNames.length] = "Bodger"

console.log (myNames);*/


//push method for adding to array, and pop to remove
/*
let myNames = ["Fi", "Floo", "Bear"];
console.log(myNames);
myNames.push("Bodger");
console.log(myNames);
myNames.pop();
console.log(myNames);*/

//unshift method for adding to array, and shift to remove

/*let myNames = ["Fi", "Floo", "Bear"];
console.log(myNames);
myNames.unshift("Bodger");
console.log(myNames);
myNames.shift();
console.log(myNames);
*/

//Use splice to insert in between

/*let myNames = ["Fi", "Floo", "Bear"];
console.log(myNames);
myNames.splice(1,0,"Bodger");
console.log(myNames);
myNames.splice(3,1,"Tattie Lion");
console.log(myNames);
myNames.splice(2,1);
console.log(myNames);*/

//Use spread to insert in between

/*let myNames = ["Fi", "Floo", "Bear"];
console.log(myNames);
let myNamesCopy = [...myNames,"Bodger", "Tattie Lion"]
console.log(myNamesCopy);*/





