export const listOfItems = ["Apple", "Banana", "Orange", "Pinaple"];

export const userData = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

export const userData2 = {
    id: 2,
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com"
};

export const ListOfNumbersOne = [1, 2, 3, 4, 5];
export const ListOfNumbersTwo = [6, 7, 8, 9];

// Order Mock
export const foodOrder = {
    userid: 1,
    name : "shero",
    ordernumber: 11,
    date: "12/12/2023",
    hotel: "Mr X",
    price: 20,
    currency: "ETB"
}
export const foodOrder2 = {
    userid: 2,
    name : "beyaynet",
    ordernumber: 12,
    date: "12/12/2023",
    hotel: "Mr X",
    price: 30,
    currency: "ETB"
}

// Test function
export function testMockData() {
    console.log(listOfItems);
    console.log(userData);
    console.log(ListOfNumbersOne, ListOfNumbersTwo);
    console.log(foodOrder);
}

export const post1 = {
    userid: 1,
    name : "Title of Post1",
    content: "This is the content of the post1",
    createdAt: "12/12/2023",
}
export const post2 = {
    userid: 2,
    name : "Title of Post2",
    content: "This is the content of the post2",
    createdAt: "12/12/2023",
}

export const notification1 = {
    userid: 1,
    message: "This is a notification1",
    type: "info",
    icon: "icon",
}
export const notification2 = {
    userid: 2,
    message: "This is a notification2",
    type: "info",
    icon: "icon",
}

export const posts = [post1, post2];
export const notifications = [notification1, notification2];
export const users = [userData, userData2];
export const foodOrders = [foodOrder, foodOrder2]