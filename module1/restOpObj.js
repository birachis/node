import {foodOrder} from './mockData.js';

const {name, ordernumber, ...restofdata} = foodOrder;

export function testRestOpObjs() {   
    console.log("Object Rest Operator");
    console.log(name, ordernumber);
    console.log("Rest of Data");
    console.log(restofdata);
}