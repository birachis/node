import {users, foodOrders} from '../mockData.js';


async function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(users.find(user => user.id === userId));
            } else {
                reject(new Error('Failed to fetch user'));
            }
        }, 100);
    })
}

async function fetchOrder(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(foodOrders.find(order => order.userid === userId));
            } else {
                reject(new Error('Failed to fetch orders'));
            }
        }, 100);
    })
}

async function calculateTotal(userId) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(
    foodOrders
        .filter(order => order.userid === userId)
        .reduce((total, order) => total + order.price, 0));
            } else {
                reject(new Error('Failed to calculate total'));
            }
        }, 100);
    })
}

export async function ProcessUser(userId) {
    try {
        const user = await fetchUser(userId);
        const order = await fetchOrder(userId);
        const total = await calculateTotal(userId);
        console.log("User:", user);
        console.log("Order:", order);
        console.log("Total:", total);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

await ProcessUser(1);

