// Basic JavaScript Concepts
let age = 20;
let name = "Alice";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}


// Function 1: Greet a user
function greet(userName) {
    return `Hello, ${userName}!`;
}

// Function 2: Sum of two numbers
function sum(a, b) {
    return a + b;
}

console.log(greet(name)); // Hello, Alice!
console.log("Sum of 5 + 10 =", sum(5, 10)); // 15


// Example 1: For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
    console.log("While loop count:", count);
    count++;
}

// 1️⃣ Change text of an element
document.getElementById("message").innerText = "The DOM has been updated!";

// 2️⃣ Add click event to a button
document.getElementById("btnClick").addEventListener("click", function() {
    alert("Button clicked!");
});

// 3️⃣ Populate a list dynamically
const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = document.getElementById("fruitList");

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.innerText = fruits[i];
    fruitList.appendChild(li);
}
