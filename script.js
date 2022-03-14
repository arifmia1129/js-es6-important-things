// Problem-1
// Variable

/* let temparetureNow = 30;
temparetureNow = 35;
console.log("Let variable example:", temparetureNow);

const wifeName = "Binu";
console.log("Const variable example:", wifeName); */

// Problem-2.1
// relational operator

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
// Condition

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
// Array
/* const friendList = ["Shahin", "Naim", "Shuvo"];

const arrayLength = friendList.length;
friendList.push("Manik");
friendList.pop("Manik");

console.log(friendList);
console.log(arrayLength);
console.log(friendList);
console.log(friendList.indexOf("Shahin"));
console.log(friendList.includes("Naim"));
 */

// Problem-4
// loop

// for loop technique-1
/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

// for loop technique-2
/* const technology = ["Computer", "Electrical", "Electronics", "Mechanical", "Auto Mobile", "RAC"];

for (const name of technology) {
    console.log(name);
} */

// for loop technique-3
/* const student = { name: "Arif", technology: "Computer", roll: 112864 };

for (const key in student) {
    console.log(key, ":", student[key]);
} */

// while loop

/* let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
} */

// Problem-5
// function

// function technique-1

/* function getting() {
    console.log("Good morning Sir/Mam");
}

getting(); */

// function technique-2

/* function sum(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result = sum(2, 3);
console.log(result); */

// function technique-3
// default parametar

/* function sum(num1, num2 = 0) {
    const sum = num1 + num2;
    return sum;
}

const result = sum(3);
console.log(result); */

// Problem-6
// Objtect
/* const student = {
    name: "Arif",
    technology: "Computer",
    balance: 5000,
    roll: 112864,
    subject: ["Principal of software", "Networking", "Microprocessor"],
    teacher: { instructor: "Al-Amin Sir", juniorInstructor: "Mizan Sir, Hasan Sir" },
    semesterfee: function (fee) {
        this.balance = this.balance - fee;
    }
}

student.semesterfee(1000);
console.log(student.balance);

const naim = {
    name: "Naim",
    balance: 4000
}

const naimFee = student.semesterfee.bind(naim);

naimFee(1000);
console.log(naim);

const shuvo = {
    name: "shuvo",
    balance: 6000
}

student.semesterfee.call(shuvo, 1000);
console.log(shuvo);

const nasib = {
    name: "nasib",
    balance: 5500
}
student.semesterfee.apply(nasib, [1000]);
console.log(nasib); */



// ES6

// Problem-1
// Template String

/* const name = "Arif";
console.log(`Welcome Sir ${name}`); */

// Problem-2
// Spread Operator

/* const numbers = [1, 2, 3, 4];
const newNubmbers = [...numbers, 5];
console.log(newNubmbers); */

// Problem-3
// Arrow function

// technique-1

/* const zeroPara = () => console.log(9);
zeroPara(); */

// technique-2

/* const onePare = (num) => num * 12;
console.log(onePare(1)); */

// technique-3
/* const twoPara = (num1, num2) => {
    const sum = num1 + num2;
    const div = sum / 4;
    return div;
}
console.log(twoPara(2, 2)); */

// technique-4

const twoPara = (num1, num2) => {
    const newNum1 = num1 + 5;
    const newNum2 = num2 + 5;
    const mul = newNum1 * newNum2;
    return mul;
}

console.log(twoPara(1, 1));