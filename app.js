const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(array){
    this.width = array[0].length
    this.height = array.length
    this.array = array
  }

  move() {
    let input = null
    let row = 0
    let column = 0
    let checkIfHole = (item) =>{
      if(item === "O") {
        console.log("game over, you fall into hole")
       
      }
    }

    while(input!=="q"){
      
      console.log(this.array.join('\r\n'));

      input = prompt("What is your move?");
      //down
      if(input === "d") {
        if(row === this.height-1) {
          console.log("game over, you are outside of field")
          break
        } 

        row++

        if(this.array[row][column] === "O") {
          console.log("game over, you fall into hole")
          break
        }

        if(this.array[row][column] === "^") {
          console.log("you win")
          break
        }

        this.array[row][column] = "*"
      }
      //left
      if(input === "l") {
        if(column === -1) {
          console.log("game over, you are outside of field")
          break
        }

        column--

          if(this.array[row][column] === "O") {
          console.log("game over, you fall into hole")
          break
        }

        if(this.array[row][column] === "^") {
          console.log("you win")
          break
        }
        this.array[row][column] = "*"
      }
      //up
      if(input === "u") {
        if(row === -1) {
          console.log("game over, you are outside of field")
          break
        } 

        row--

        if(this.array[row][column] === "O") {
          console.log("game over, you fall into hole")
          break
        }

        if(this.array[row][column] === "^") {
          console.log("you win")
          break
        }

        this.array[row][column] = "*"
      }
      //right
      if(input === "r") {
        if(column === this.width-1) {
          console.log("game over, you are outside of field")
          break
        }

        column++

          if(this.array[row][column] === "O") {
          console.log("game over, you fall into hole")
          break
        }

        if(this.array[row][column] === "^") {
          console.log("you win")
          break
        }
        this.array[row][column] = "*"
      }
      

      

      /*
      for(let i=0; i<this.height; i++) {
        for(let j=0; j<this.width; j++){
          console.log(this.array[i][j])
        }
      }
      */
        
      }

  }

  }


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '░', '░'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.move()