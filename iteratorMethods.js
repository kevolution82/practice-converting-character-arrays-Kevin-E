// Task 1: Using forEach()
let cities = ["Chicago", "Tokyo", "Paris", "Cape Town", "Vancouver"];

console.log("Task 1 - Cities in Uppercase:");
cities.forEach(city => {
    console.log(city.toUpperCase());
});
// Output:
// CHICAGO
// TOKYO
// PARIS
// CAPE TOWN
// VANCOUVER

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);

console.log("\nTask 2 - Squares:");
console.log(squares);
// Output: [1, 4, 9, 16, 25]

// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);

console.log("\nTask 3 - High Scores:");
console.log(highScores);
// Output: [85, 90, 100]

// Task 4: Finding with find() and findIndex()
let favoriteFood = ["Tacos", "Sushi", "Pie", "Curry", "Ramen", "Eggs"];
let firstLongFood = favoriteFood.find(food => food.length > 4);
let indexOfLongFood = favoriteFood.findIndex(food => food.length > 4);

console.log("\nTask 4 - First Food with More Than 4 Letters:");
console.log(firstLongFood);       // Output: "Tacos"

console.log("Index of that food:");
console.log(indexOfLongFood);     // Output: 0
