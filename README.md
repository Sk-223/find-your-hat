# CodeCademy Challenge Project: "Find Your Hat"

This project is an interactive terminal game built using JavaScript classes. The game is played in the terminal, where the player moves through a field to find a hat while avoiding holes. The player uses the W, A, S, and D keys to navigate through the field, up, left, down, and right, respectively.

<img src="https://github.com/Sk-223/find-your-hat/assets/104045720/a22feb42-47c4-442e-af79-e23aff093545" alt="Game Start" width="400">

## Overview
"Find Your Hat" is an interactive terminal game built using JavaScript classes. The player starts in the upper-left corner of a grid and must navigate to find the hat (^) while avoiding holes (O). The player's path is marked with *, and the rest of the field is represented by ░.

## Table of Contents
- [Project Requirements](#project-requirements)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Class Structure](#class-structure)
- [Game Logic](#game-logic)
- [Controls](#controls)
- [Contributing](#contributing)
- [License](#license)

## Project Requirements
For this project, I was to create an interactive terminal game using JavaScript classes. The player starts in the upper-left corner of a grid and must navigate to find the hat (^) while avoiding holes (O). The player's path is marked with *, and the rest of the field is represented by ░.

## Features
- Randomly generated field with customizable dimensions and hole percentage.
- Player movement using WASD keys.
- Win condition: find the hat.
- Lose conditions: fall into a hole or move outside the field.
- Real-time field display updates in the terminal.
- Easy-to-use interface with clear instructions.

## Installation
To install and run the game, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/Sk-223/find-your-hat.git
```

2. Navigate to the project directory:
```
cd find-your-hat
```

3. Install the required dependencies:
```
npm install
```

4. Start the game:
```
node main.js
```

That's it! You can now play the "Find Your Hat" game in your terminal. Enjoy!

## Usage
Run the game using the command:
```
node main.js
```

Use the WASD keys to move the player:
- Up: W
- Down: S
- Left: A
- Right: D

Quit the game at any time by pressing q.

## Class Structure
### Field Class
The Field class handles the game field generation, player movement, and field display.

#### Constructor
```javascript
constructor(field)
```
Initializes the field and sets the player's starting position.

#### Methods
- `print()`: Displays the current state of the field.
- `static generateField(height, width, holePercentage)`: Generates a random field with the specified dimensions and hole percentage.
- `movePlayer(direction)`: Updates the player's position based on the direction and checks for win/lose conditions.
- `runGame()`: Runs the game loop, handling user input and updating the field.

## Game Logic
### Field Generation:
- A 2D array is generated with the specified height and width.
- Holes (O) are randomly placed based on the given hole percentage.
- The hat (^) is placed at a random location that is not the starting point.
- The player's starting point is marked with *.

### Player Movement:
- The player's position is updated based on the WASD key input.
- The game checks if the player has moved outside the field, fallen into a hole, or found the hat.
- The field is reprinted after each move to show the updated state.

### Win/Lose Conditions:
- Win: The player finds the hat.
- Lose: The player falls into a hole or moves outside the field.

### Game Win:
<img src="https://github.com/Sk-223/find-your-hat/assets/104045720/67ccbf21-1b4e-411a-973c-0c7385755fd9" alt="Game Win" width="400">

### Game Loss:
<img src="https://github.com/Sk-223/find-your-hat/assets/104045720/596245bb-e6b2-4b33-93ab-f3ebd87cf067" alt="Game Loss" width="400">

## Controls
WASD Keys:
- Up: W
- Down: S
- Left: A
- Right: D
- Quit: Press q to exit the game.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and write clear commit messages.

## License
This project is licensed under the MIT License. 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
