console.log ('Hello from app.js! Your JavaScript is connected and working!');
// --- Part 1: Declaring Variables ---
console.log('--- Part 1: Declaring Variables');

// 'let' for values that can change
// We can reassign 'let' variables
let score = 50;
console.log(`Initial score (let): ${score}`);
score = 75;
console.log(`Updated score: ${score}`);

// 'const' for values that should NOT change
const GAME_TITLE = "Super Mario Bros";
console.log(`Game Title (const): ${GAME_TITLE}`);
// GAME_TITLE = "Another Mario Game";
// Comment out above line error

// --- Part 2: Data Types ---
console.log("--- Data Types (using typeof) ---");

let playerName = "Hero";      // String (text)
let playerHealth = 100;         // number (whole or decimal number)
let isGameOver = false;         // boolean (true or false)

console.log(`${playerName} is a typeof ${typeof playerName}`);
console.log(`${playerHealth} is a typeof ${typeof playerHealth}`);
console.log(`${isGameOver} is a typeof ${typeof isGameOver}`);

// Phatsakone's Variable Rule
// Use const unless you can't than use let
