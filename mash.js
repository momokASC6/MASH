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
let homes = ["Mansion", "Apartment", "Shack", "House", "New Jersey"];

let cars = ["lambo", "convertible", "flintstones car", "cloud", "box with wheels"];

function mash() {
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you’ll drive a " + getCar();
}

function randomizer(range) {
    return Math.floor(Math.random() * (range + 1));
}

function getHome() {
    if(process.argv[2] != "")
        homes.push(process.argv[2]);
    return homes[randomizer(homes.length-1)];
}

function getChildrenCount() {
    if(process.argv[3] != "" || Math.random() >= 0.5)
        return randomizer(100);
    else
        return process.argv[3];

}

function getCar() {
    if(process.argv[4]!= "" || Math.random() >= 0.5)
        return cars[randomizer(cars.length-1)];
    else
        return process.argv[4];
}

console.log(mash());