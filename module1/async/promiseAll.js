import {users, posts, notifications} from '../mockData.js';

async function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(users.find(user => user.id === userId));
            } else {
                reject(new Error('Failed to fetch users'));
            }
        }, 100);
    })
}

async function fetchPost(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(posts.find(post => post.userid === userId));
            } else {
                reject(new Error('Failed to fetch posts'));
            }
        }, 100);
    })
}

async function fetchNotifications(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(notifications.find(notification => notification.userid === userId));
            } else {
                reject(new Error('Failed to fetch notifications'));
            }
        }, 100);
    })
}

async function ProcessData(userId) {
    try {
        const [usersData, postsData, notificationsData] = await Promise.all([
            fetchUser(userId),
            fetchPost(userId),
            fetchNotifications(userId)
        ]);
        console.log("Users:", usersData);
        console.log("Posts:", postsData);
        console.log("Notifications:", notificationsData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

await ProcessData(2);