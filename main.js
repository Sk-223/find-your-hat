const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = { x: 0, y: 0 };
    this.field[0][0] = pathCharacter;
  }

  print() {
    this.field.forEach(row => console.log(row.join('')));
  }

  static generateField(height, width, holePercentage = 0.2) {
    const field = Array.from({ length: height }, () => Array.from({ length: width }, () => fieldCharacter));

    // Place holes
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (Math.random() < holePercentage) {
          field[i][j] = hole;
        }
      }
    }

    // Ensure starting point is safe
    field[0][0] = pathCharacter;

    // Place the hat
    let hatPlaced = false;
    while (!hatPlaced) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      if (field[y][x] === fieldCharacter) {
        field[y][x] = hat;
        hatPlaced = true;
      }
    }

    return field;
  }

  movePlayer(direction) {
    const { x, y } = this.playerPosition;
    switch (direction) {
      case 'w':
        this.playerPosition.y -= 1;
        break;
      case 's':
        this.playerPosition.y += 1;
        break;
      case 'a':
        this.playerPosition.x -= 1;
        break;
      case 'd':
        this.playerPosition.x += 1;
        break;
      default:
        console.log('Invalid input! Please use "w" for up, "d" for down, "a" for left, "d" for right');
    }

    if (this.playerPosition.x < 0 || this.playerPosition.y < 0 || this.playerPosition.x >= this.field[0].length || this.playerPosition.y >= this.field.length) {
      console.log('You moved outside the field! Game over.');
      return false;
    } else if (this.field[this.playerPosition.y][this.playerPosition.x] === hole) {
      console.log('You fell in a hole! Game over.');
      return false;
    } else if (this.field[this.playerPosition.y][this.playerPosition.x] === hat) {
      console.log('You found your hat! You win!');
      return false;
    } else {
      this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
      return true;
    }
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.print();
      const move = prompt('Which way? (w, s, a, d) or "q" to quit: ');
      if (move === 'q') {
        console.log('You quit the game.');
        break;
      }
      playing = this.movePlayer(move);
    }
  }
}

const myField = new Field(Field.generateField(10, 10, 0.2));
myField.runGame();
