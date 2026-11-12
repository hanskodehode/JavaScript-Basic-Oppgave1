let eksempelString = "String";

let eksempelInt = 1;

let eksempelFloat = 1.0;

let eksempelBoolean = true;

Array[(1, 2, 3, 4, 5)];

const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

let firstNumber = 5;
let secondNumber = 12;

let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let modulo = secondNumber % firstNumber;

let shortHandPlus = firstNumber++;
let shortHandMinus = secondNumber--;

let storeAddition = (firstNumber += secondNumber);
let storeSubtraction = (firstNumber -= secondNumber);
let storeMultiplication = (firstNumber *= secondNumber);
let storeDivision = (firstNumber /= secondNumber);
let storeModulo = (firstNumber %= secondNumber);

let userName = "John";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName != null && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Welcome to the homepage");
} else {
  console.log("You dont satisfy the requirements");
}

const userMale = false;

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);
