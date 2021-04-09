

// using Object Oriented JavaScript
// class - game, player, token, board, space

// Player.js
class Player {
  constructor(name, id, color, active = false){
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
}

/**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */

createTokens(num){
  const tokens = [];
  
  for (let i = 0; i < num; i++) {
    let token = new Token (i, this);
    tokens.push(token);
  }
  return tokens;
}




//Token.js
class Token {
  constructor() {
    this.owner = owner;
    this.id = 'token-${index}-${owner.id}';      //for DOM purpose
    this.dropped = false;   // this property holds a boolean value that indicates whether or not that taken has been played. initial value
  }
}



//Space.js
class Space {
  constructor(x,y){   //coordinate value on the space object
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
  }
}


  
  //Board.js
class Board {
  constructor() {     //no consturctor passed because each game only has one board object
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }
}

  //generates 2D array of spaces
// @return {array}  - an array of space objects

createSpaces(){
  const spaces = [];
  for (let x = 0; x < this.columns; x++){
    const column = [];
    
    for (let y = 0; y < this.columns; y++){
      const space = new Space (x, y);
      column.push(space);
    }
    
    spaces.push(column);
  }
  
  return spcaes; 
}
}




//Game.js
class Game {
  constructor() {
    this.board = new Board ();
    this.player = this.createPlayers();
    this.ready = false;
  }
  
  //creates two player object
  //@return {array} an array of two player objects
  
  createPlayer(){
    const players = [new Player ('Player 1', 1, '#e15258', true)
                     new Player ('Player 2', 2, '#e59e13')];
    return players;
  }
}


//app.js  ---this file for if user triggers events, like if a player clicks their mouse or presses a key


