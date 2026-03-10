function sumOfNumbers(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

export function testSpreadSummation() {
    console.log("Spread Operator Summation");
    console.log(sumOfNumbers(1, 2, 3, 4, 5));
}

function mulOfNumbers(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

export function testSpreadMultiplication() {
    console.log("Spread Operator Multiplication");
    console.log(mulOfNumbers(1, 2, 3, 4, 5));
}