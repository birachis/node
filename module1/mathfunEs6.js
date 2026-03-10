import { Divider } from './constant.js';

export function sum(a, b) 
{
    return a + b;
}

export function sub(a, b)
{
    return a - b;
}

export function mul(a, b)
{
    return a * b;
}

export function div(a, b)
{
    return a / b;
}

export function remainder(a, b)
{
    return a % b;
}

export function evenodd(a)
{
    if(remainder(a, Divider) == 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}

// Test function
export function testMathEs6Functions() {
    console.log(sum(5, 3)); 
    console.log(sub(5, 3)); 
    console.log(mul(5, 3)); 
    console.log(div(6, 3)); 
    console.log(remainder(5, 3));
    console.log(evenodd(5)); 
}