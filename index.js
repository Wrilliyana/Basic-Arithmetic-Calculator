let calculate = "y";

while (calculate="y") {
    let operation = prompt("Please enter the operation you want to perform \n e.g +, -, * or / :", "");
    let firstNumber = prompt("First Number: ", "");
    let secondNumber = prompt("Second Number: ", "");
    const result = eval(`${firstNumber} ${operation} ${secondNumber}`);
    alert('Result is ' + result);
    // let calculate = prompt("Do you want to calculate again?\n y for yes, n for no", "");
}
