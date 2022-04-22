const Game = require("./lib/Game");
var inquirer = require("inquirer");

const moviesBank = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
];

inquirer
  .prompt([
   {
       name:"question";
       message: "Enter a character"
   },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });








// Initialize a new Game object
const game = new Game();

// Start playing
game.play();




