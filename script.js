// Problem-1
/* let temparetureNow = 30;
temparetureNow = 35;
console.log("Let variable example:", temparetureNow);

const wifeName = "Binu";
console.log("Const variable example:", wifeName); */

// Problem-2.1

/* const num1 = 25;
const num2 = 52;

if (num1 > num2) {
    console.log("Numb-1 is bigger than num-2");
}

if (num1 < num2) {
    console.log("Num2 is bigger than num-1");
}

if (num1 === num2) {
    console.log("Num1 is equal to num-2");
}

if (num1 !== num2) {
    console.log("Num1 is not equal to num-2");
}

if (num1 >= num2) {
    console.log("Num-1 is greater than or equal to num-2");
}

if (num1 <= num2) {
    console.log("Num-2 is greater than or equal to num-1");
} */

// Problem-2.2

/* const age = 18;
const gender = "Female";

if (age >= 21 && (gender.toLowerCase() === "male" || gender.toLowerCase() === "female")) {
    console.log("You allow for married");
}

else if (age >= 18 && gender.toLowerCase() === "female") {
    console.log("You allow for married");
}

else {
    console.log("You don't allow for married");
} */

// Problem-3

const friendList = ["Shahin", "Naim", "Shuvo"];

const arrayLength = friendList.length;
friendList.push("Manik");
friendList.pop("Manik");

console.log(friendList);
console.log(arrayLength);
console.log(friendList);
console.log(friendList.indexOf("Shahin"));
console.log(friendList.includes("Naim"));

