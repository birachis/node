import {userData, foodOrder} from './mockData.js';

const spreadedObject = {...userData, ...foodOrder};

export function testSpreadOpObj() {
    console.log("Spread Operator with Objects");
    console.log(spreadedObject);
}