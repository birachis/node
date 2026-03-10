//Adding two numbers using function
function sum(a, b) 
{
    return a + b;
}

function sub(a, b)
{
    return a - b;
}

function mul(a, b)
{
    return a * b;
}

function div(a, b)
{
    return a / b;
}

function remainder(a, b)
{
    return a % b;
}

function evenodd(a)
{
    if(remainder(a, 2) == 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}


// Test function
function testMathFunctions() {
    console.log(sum(5, 3)); 
    console.log(sub(5, 3)); 
    console.log(mul(5, 3)); 
    console.log(div(6, 3)); 
    console.log(remainder(5, 3));
    console.log(evenodd(5)); 
}

module.exports = {testMathFunctions};