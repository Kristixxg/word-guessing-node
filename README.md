# word-guessing-node


## Description 

* This app is a word guessing game that requires users to use constructor functions on the command-line.

* This game uses `Node.js` and `Inquirer` package. The `index.js` file will be the javascript file that runs the game and has a dependency on the word.js file for the array of movie names/title.

* The `Word.js` file, on the other hand, uses the `<require()>` function to read the the `Letter.js` file that stores the letters guessed.


* The game will select a random movie title.
```
Start the game by typing `npm start` in the terminal. The game will then load and you will see underscores `_ ___ ____`.

If you guessed the correct letter, it will show a green alert message "CORRECT!". If you guessed the wrong letter, it will show a red green alert message "INCORRECT!"

Users only get 10 guesses on the letters. If your guesses run out, there will be a message showing "No guesses left!" and the correct word(s).

There will also be another message asking user if they want to play again and choose "(Y/n)".

If user chooses "y", then they can continue guessing the next movie title.

If user chooses "n", then the game will end and the message will show "Goodbye!". 
```


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

Please install Inquirer and Node.js.

Type `npm install` when you're in the file directory.
After installation is complete, type `npm start`. 
Voila! The game begins! 

## Usage 

Use inquirer from your command line to answer questions about your project.

https://user-images.githubusercontent.com/97390473/164956029-90c7d2b4-caf8-43e5-a94a-2119348c21d3.mp4

or go to <a href="https://drive.google.com/file/d/1lFE8VDRPTNMjPuLVmq0y6xmT3tqa6pbh/view">Word Guess CL Video </a>

## Credits

* <a href="https://github.com/chaunnybby7">YiLin Ong</a> 

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Packages and Dependencies

Inquirer.js - https://www.npmjs.com/package/inquirer
Node - https://www.npmjs.com/package/node





---

MIT License

Copyright (c) [2022] [Kristy Guo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
