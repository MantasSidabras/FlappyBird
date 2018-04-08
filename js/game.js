let game = new Phaser.Game(400, 600, Phaser.CANVAS, 'game');


let bg;
var bird;
let keypress = true;
let GameState = {
  preload: function() {
    game.load.image('background', 'assets/sprites/background-day.png');
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
    bird.init();
  },
  update: function() {
    bird.update();

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
