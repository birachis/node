const fetchData = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({id: 1, name: 'Alice'});
            } else {
                reject(new Error('Failed to fetch'));
            }
        }, 1000);
    })
}

fetchData().then(data => {
    console.log("The Data");
    console.log(data)
}).catch(err => console.log(err.message))
