// console.log('Hello');
// let fruit = "apple";
// console.log (fruit);
// fruit = 100;
// console.log (fruit);

//let grade = 72;

/*
let finalMark = (grade>=70) ? "pass":"fail";
console.log(finalMark);
*/

/*
if (grade>=70) {
    console.log("pass");
} else {
    console.log("fail");
}
*/

/*
let category = "food";

switch(category) {
    case "food":
        console.log("You chose food!");
        break;
    case "tech":
        console.log("You chose tech!");
        break;
    case "animals":
        console.log("You chose animals!");
        break;
    default:
        console.log("None");
}
*/

/*if (category == "food") {
    console.log("You chose food!")
} else if (category == "tech") {
    console.log("You chose tech!")
} else if (category == "animals") {
    console.log("You chose animals!")
} else {
    console.log ("None")
}*/


/*let age = 19;

switch (true) {
    case (age >=18):
        console.log("You can enter");
        break
     case (age >=15):
        console.log("You can enter with a chaperone");
        break
    default:
        console.log("You are too young");
}*/


/*
let num = 5;

switch (num) {
    case 1:
    case 2:
    case 3:
        console.log("first 3");
        break;
    case 4:
    case 5:
    case 6:
        console.log("middle 3");
        break;
    case 7:
    case 8:
    case 9:
        console.log("bottom 3");
        break;
}
*/

/*
let house = 19;
let city = "Sydney";

if (house == 19 && city == "Sydney" ) {
    console.log ("You live at #19 in Sydney")
} else if (city == "Sydney") {
    console.log ("You live in Sydney, but not at #19")
} else if (house == 19) {
    console.log ("You live at #19")
} else {
    console.log ("No idea where you live")
}
*/

//console.log(false | NaN | null | "Floo" );

//console.log(false && NaN && null && "Floo" );

/*let myCounter = 5;
do {
    console.log(`Counting down. We're at ${myCounter}`);
} while (false);*/

let acceptAllCookies = false;
let acceptFunctionalCookies = true;
let acceptMarketingCookies = true;
let acceptThirdPartyCookies = false;

if (acceptAllCookies === true) {
    console.log ("All code can run");
} else if (acceptFunctionalCookies === true && acceptMarketingCookies === true ) { 
    console.log ("Run tier two cookies");
} else if (acceptFunctionalCookies === false || acceptMarketingCookies === false || acceptThirdPartyCookies === true){
    console.log ("Run tier 3 cookies");
} else {
    console.log("Remove all code");
}


