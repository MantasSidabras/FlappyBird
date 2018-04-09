let game = new Phaser.Game(300, 500, Phaser.CANVAS, 'game');


let bg;
var bird;
let pipes = [];

let keypress = true;
let GameState = {
  preload: function() {
    game.load.image('background', 'assets/sprites/background-day.png');
    game.load.image('pipe', 'assets/sprites/pipe-green.png');
    game.load.spritesheet('redbird', 'assets/sprites/redbird.png',34,25,3);
  },

  create: function() {
    bg = game.add.sprite(0,0,'background');
    bg.width = game.width;
    bg.height = game.height;

    game.input.keyboard.onUpCallback = function( e ){
      if(e.keyCode == Phaser.Keyboard.SPACEBAR){
        keypress = true;
      }
    }

    bird = new Bird(game.world.centerX,game.world.centerY);
    pipes.push(new Pipe(500));
    pipes.push(new Pipe(680));

  },
  update: function() {
    bird.update();
    for(let i = 0; i < pipes.length; i++){
      pipes[i].update();
      if(pipes[i].bottomSprite.x + pipes[i].bottomSprite.width < 0){
        pipes[i] = new Pipe();
      }
    }



    if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || game.input.pointer1.isDown){
      if(keypress){
        bird.flap();
        keypress = false;
      }
    }
  }
}

game.state.add('GameState', GameState);
game.state.start('GameState');
