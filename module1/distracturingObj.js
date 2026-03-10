import {userData} from './mockData.js';

// Before destructuring
// const name = userData.name;
// const age = userData.age;
// const email = userData.email;

// Destructuring an object
const { name : userName, age, email } = userData;

// Test function
export function testDestructuringObject() {
    console.log(userName); 
    console.log(age); 
    console.log(email); 
}