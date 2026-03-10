import {ListOfNumbersOne, ListOfNumbersTwo} from './mockData.js';

const [one, two, ...restofNumvers] = ListOfNumbersOne;

export function testRestOpArray() {   
    console.log("Array Rest Operator");
    console.log(one, two);
    onsole.log("The rest of numvers");
    console.log(restofNumvers);
}