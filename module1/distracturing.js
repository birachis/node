import { listOfItems } from './mockData.js';

// Before destructuring
// const firstItem = listOfItems[0];
// const secondItem = listOfItems[1];
// const restOfItems = listOfItems.slice(2);

// Destructuring an array
const [firstItem, secondItem, ...restOfItems] = listOfItems;

export function testDestructuringArray() {
    console.log(firstItem); 
    console.log(secondItem); 
    console.log(restOfItems); 
}