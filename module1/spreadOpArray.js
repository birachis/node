import {ListOfNumbersOne, ListOfNumbersTwo} from './mockData.js';

const spreadedArray = [...ListOfNumbersOne, ...ListOfNumbersTwo];

export function testSpreadOpArray() {
    console.log("Spread Operator with Arrays");
    console.log(spreadedArray);
}