
export function orderOfExc(){
    console.log('1. Start'); 
    setTimeout(() => { console.log('2. setTimeout1'); }, 10); 
    setImmediate(() => { console.log('3. setImmediate'); }); 
    setTimeout(() => { console.log('2. setTimeout2'); }, 0); 
    Promise.resolve().then(() => { console.log('4. Promise1'); }); 
    process.nextTick(() => { console.log('5. nextTick1'); }); 
    Promise.resolve().then(() => { console.log('4. Promise2'); });
    console.log('6. End');
}


