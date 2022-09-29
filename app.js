// program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else if (operator === '/') {
//     result = number1 / number2;
// } else {
//     result = "there seem's to be an error"
// }

// display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);



// after most struggle it has been discovered that this code would able to target all buttons text 
let buttons = document.querySelectorAll('.button');
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // string = e.target.innerText;
        if(e.target.innerHTML === "="){
            // console.log('you clicked = this');
            string = eval(string);
            document.getElementById('input').value = string;
        } else if(e.target.innerHTML === "C"){
            string = "";
                document.getElementById('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.getElementById('input').value = string
        }
    })
});