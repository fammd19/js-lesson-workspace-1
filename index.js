
/*console.log(sayHi('Fi'));
console.log(sayHi());

function sayHi(name="friend") {
    return(`Hi ${name}!`)
}*/


/*const randomAnonymous = function() {
    console.log("We've assigned an anonymous fucntion to a constant!");
}

randomAnonymous();*/

/*const weatherToday = "Nice";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}

const result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"*/

/*function printBook (book) {
  console.log(book);
};

const printBookNormal = function (book) {
  console.log(book);
};*/


/*const printBookArrow = book => book;

console.log(printBookArrow("Chocolat"));*/

/*const myCat = "Lion"
console.log(`I can access ${myCat} in my global scope`);

function isCute() {
  console.log(`I can access ${myCat} in my functional scope`);
  if (myCat === "Lion") {
    console.log(`I can access ${myCat} in my block scope`);
  }
  let age = 9;
}

isCute();
console.log(age);*/


let letters = ['a','b','c','d','e'];

let book = {
	title: 'Harry Potter',
	author: 'J.K. Rowling'
}

console.log(letters[2]);
console.log(book.title);

letters[0] = 'z'
letters [2] = true;
book.title = 'Harry Potter & The Order Of The Phoenix';
book['author'] = 'Unkown Author';

console.log(letters[0]);
console.log(letters[2]);
console.log(book['title']);
console.log(book.author);
