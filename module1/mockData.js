export const listOfItems = ["Apple", "Banana", "Orange", "Pinaple"];

export const userData = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

export const ListOfNumbersOne = [1, 2, 3, 4, 5];
export const ListOfNumbersTwo = [6, 7, 8, 9];

// Order Mock
export const foodOrder = {
    name : "shero",
    ordernumber: 12,
    date: "12/12/2023",
    hotel: "Mr X"
}

// Test function
export function testMockData() {
    console.log(listOfItems);
    console.log(userData);
    console.log(ListOfNumbersOne, ListOfNumbersTwo);
    console.log(foodOrder);
}