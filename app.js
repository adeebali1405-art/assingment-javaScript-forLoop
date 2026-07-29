
// ==========================================
// Assignment: JavaScript for Loop
// ==========================================

// Question 1: Print numbers from 1 to 10 using for loop

for (var counting = 1; counting <= 10; counting++) {
    console.log(counting);
}


// Question 2: Print numbers from 10 to 1 (Reverse)

for (var reverseCounting = 10; reverseCounting > 0; reverseCounting--) {
    console.log(reverseCounting);
}


// Question 3: Print "Hello, JavaScript!" 5 times

for (var messageDisplay = 0; messageDisplay < 5; messageDisplay++) {
    console.log("Hello, JavaScript!");
}


// Question 4: Print all elements of fruits array

var fruits = ["Apple", "Banana", "Mango", "Orange"];
for (var fruitsNames = 0; fruitsNames < fruits.length; fruitsNames++) {
    console.log(fruits[fruitsNames]);
}


// Question 5 & 6: Total marks and Average marks

var marks = [50, 60, 70, 80];
var total = 0;

for (var marksSum = 0; marksSum < marks.length; marksSum++) {
    total = total + marks[marksSum];
}
console.log("Total Marks: " + total);

var avg = total / marks.length;
console.log("Average Marks: " + avg);


// Question 7: Print array elements in reverse order

var colors = ["Red", "Green", "Blue", "Yellow"];
for (var colorsReverse = colors.length - 1; colorsReverse >= 0; colorsReverse--) {
    console.log(colors[colorsReverse]);
}


// Question 8: Print each element along with its index
var numbers = [5, 10, 15, 20];
for (var i = 0; i < numbers.length; i++) {
    console.log("Index " + i + ": " + numbers[i]);
}


// Question 9: Count elements using for loop without direct number
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var count = 0;

for (var i = 0; i < cities.length; i++) {
    count = count + 1;
}
console.log("Total Elements: " + count);


// Question 10: Print only even numbers
var numbersList = [2, 5, 8, 11, 14, 17, 20];
for (var even = 0; even < numbersList.length; even++) {
    if (numbersList[even] % 2 === 0) {
        console.log(numbersList[even]);
    }
}
