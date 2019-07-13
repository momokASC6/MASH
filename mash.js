/* VERSION 1 */

// function mash() {
//     return "house";
// }

// console.log(mash());

/* VERSION 2 */
// let homes = ["Mansion", "Apartment", "Shack", "House"];

// function mash() {
//     return getHome();
// }

// function randomizer(range) {
//     return Math.floor(Math.random() * (range + 1));
// }

// function getHome() {
//     return homes[randomizer(homes.length-1)];
// }

/* VERSION 3 */

// let homes = ["Mansion", "Apartment", "Shack", "House"];

// function mash() {
//     return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!"
// }

// function randomizer(range) {
//     return Math.floor(Math.random() * (range + 1));
// }

// function getHome() {
//     return homes[randomizer(homes.length-1)];
// }

// function getChildrenCount() {
//     return randomizer(100);
// }

/* VERSION 4 */
// let homes = ["Mansion", "Apartment", "Shack", "House", "New Jersey"];

// let cars = ["lambo", "convertible", "flintstones car", "cloud", "box with wheels"];

// function mash() {
//     return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you’ll drive a " + getCar();
// }

// function randomizer(range) {
//     return Math.floor(Math.random() * (range + 1));
// }

// function getHome() {
//     homes.push(process.argv[2]);
//     return homes[randomizer(homes.length-1)];
// }

// function getChildrenCount() {
//     if(Math.random() >= 0.5)
//         return randomizer(100);
//     else
//         return process.argv[3];

// }

// function getCar() {
//     if(Math.random() >= 0.5)
//         return cars[randomizer(cars.length-1)];
//     else
//         return process.argv[4];
// }

/* VERSION 5 */

// Defining the home and car arrays for our MASH game
let homes = ["Mansion", "Apartment", "Shack", "House", "New Jersey"];

let cars = ["lambo", "convertible", "flintstones car", "cloud", "box with wheels"];

function mash() {
    // Our mash function returns a string that has random values from our other functions
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you’ll drive a " + getCar();
}

function randomizer(range) {
    // Our randomizer function returns a random number between a range of 0 and range parameter
    return Math.floor(Math.random() * (range + 1));
}

function getHome() {
    if(process.argv[2] != "") // Check if user input exists first
        homes.push(process.argv[2]); // If so then push to the possible outcomes for a home
    return homes[randomizer(homes.length-1)]; // Return a random home
}

function getChildrenCount() {
    if(process.argv[3] != "" || Math.random() >= 0.5) // If no input exists for children, then we will return a random number
        return randomizer(100);
    else // Otherwise there is a chance for the player to get their specified number of children
        return process.argv[3];

}

function getCar() {
    if(process.argv[4]!= "" || Math.random() >= 0.5) // If not input exists for a car, then we will return a random car
        return cars[randomizer(cars.length-1)];
    else // Otherwise the user has a chance for the player to get the car they entered
        return process.argv[4];
}

console.log(mash()); // Play our game. Notice how when we call mash() inside console.log it runs mash and then the funcionts we call in mash