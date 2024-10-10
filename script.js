///Lab 4 - Introduction to Functions

//Part 1 - Declaring and Invoking Functions
console.log('Step 1 - Declare a simple function');
function greet(name = 'Stranger') {
    return (`Hello ${name}!`);
}
console.log('Step 2 - Invoke the function');
console.log(greet('Raj'));


//Part 2 - Working with Parameters and Returning Values
console.log('\nStep 3 - Function to add two numbers (25+75)');
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(25, 75));

//Part 3 - Function Scope
console.log('\nStep 4 - Local and Global Scope');

let x = 10;

function changeValue() {
    let x = 15;
    return x;
}

console.log(x);
console.log(changeValue());

//Part 4 - Closures
console.log('\nStep 5 - Function with closure');

function outerFunction() {
    let count = 0;
    return {
        update() {
            count++;
            return count;
        }
    }
}

let counter = outerFunction();
console.log(counter.update());
console.log(counter.update());
console.log(counter.update());
console.log(counter.update());
console.log(counter.update());

console.log('\nBonus');

// FUNCTION USED FROM STEP 1
// function greet(name = 'Stranger') {
//     return (`Hello ${name}!`);
// }

console.log(greet());

function outerFunc() {
    let count = 6;
    return {
        subtract() {
            count--;
            return count;
        }
    }
}

let count = outerFunc();
console.log(count.subtract());
console.log(count.subtract());
console.log(count.subtract());
console.log(count.subtract());
console.log(count.subtract());