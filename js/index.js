// Iteration 1: Names and Input
let hacker1 = "Antonio";
let hacker2 = "Pedro";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver's has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
//Ejercicio 3.1 Nombre en mayusculas y espacios

let nameSeparated = "";

for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i].toUpperCase();
  nameSeparated += char + " ";
}
console.log(nameSeparated);

//Ejercicio 3.2 nombre en reverso

let nameReverse = "";

for (let j = hacker1.length - 1; j >= 0; j--) {
  nameReverse += hacker1[j];
}
console.log(nameReverse);

//Ejercicio 3.3 lexicographic order

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] === hacker2[0]) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

//BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet scelerisque porttitor. Fusce leo ante, cursus ac auctor sed, vulputate viverra ex. Duis ultrices non ex at pulvinar. Suspendisse venenatis ipsum ac cursus auctor. Aenean venenatis pretium dolor, et porttitor orci volutpat laoreet. Aliquam suscipit at augue eu efficitur. Cras a libero ut odio tincidunt ultricies. Nunc ut dictum quam. Aliquam eu turpis tellus. Vestibulum rutrum nisl lacus, in dapibus nisi ultrices pretium. Vivamus eget lectus at velit sagittis porttitor placerat sed lorem. Cras volutpat eros id lobortis facilisis. Duis enim ipsum, tincidunt sed odio id, elementum malesuada dui. Nunc et tristique tellus, porta rutrum sapien.

Vestibulum malesuada ac libero ac fringilla. Duis ut velit cursus, laoreet lorem a, ornare mauris. Quisque eget odio augue. Nullam tortor diam, hendrerit ac mi nec, bibendum consequat risus. Suspendisse imperdiet justo pellentesque, consectetur neque eu, placerat est. Donec ex arcu, pulvinar sit amet bibendum vel, ultricies id purus. Duis faucibus quam lacus, non viverra dui accumsan ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Etiam dictum semper eros eu dignissim. Etiam felis lorem, aliquam nec orci in, aliquam efficitur eros. Vivamus metus tortor, vehicula in feugiat a, facilisis molestie magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ligula at lorem lacinia, non hendrerit massa ultrices. Praesent fermentum ac elit sed tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;`;
let countWord = 0;
let countEt = 0;

for (var k = 0; k < longText.length; k++) {
  let char = longText[k];
  let twoChar = longText[k] + longText[k + 1];
  if (char === " " || char === "\n") {
    countWord++;
  }
  if (twoChar === "et") {
    countEt++;
  }
}
console.log(`En el texto hay ${countWord} palabras`);
console.log(`En el texto aparece "et" ${countEt}`);

// BONUS 2
/*
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = "step on no pets";
let inverted = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  let char = phraseToCheck[i];
  inverted += char;
}
if (inverted === phraseToCheck) {
  console.log("es un palindrome");
} else {
  console.log("no es un palindrome");
}
