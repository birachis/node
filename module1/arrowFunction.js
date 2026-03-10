
const addArrow = (a, b) => a + b;
const subArrow = (a, b) => a - b;
const mulArrow = (a, b) => a * b;
const divArrow = (a, b) => a / b;
const remainderArrow = (a, b) => a % b;
const evenoddArrow = (a) => {
    if(remainderArrow(a, 2) == 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}

// Test function
export const testArrowFunctions = () => {
    console.log(addArrow(5, 3)); 
    console.log(subArrow(5, 3)); 
    console.log(mulArrow(5, 3)); 
    console.log(divArrow(6, 3)); 
    console.log(remainderArrow(5, 3));
    console.log(evenoddArrow(5)); 
}
