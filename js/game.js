let game = new Phaser.Game(300, 500, Phaser.CANVAS, 'game');


let bg;
var bird;
let pipes = [];
let score = 0;
let text;

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
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.input.keyboard.onUpCallback = function(e){
      if(e.keyCode == Phaser.Keyboard.SPACEBAR){
        keypress = true;
      }
    }

    bird = new Bird(game.world.centerX,game.world.centerY);
    pipes.push(new Pipe(500));
    pipes.push(new Pipe(680));
    updateScore();
    
  },
  update: function() {
    bird.update();
    for(let i = 0; i < pipes.length; i++){
      if(bird.sprite.x + bird.sprite.width > pipes[i].bottomSprite.x + pipes[i].bottomSprite.width && !pipes[i].isScored){
        score++;
        pipes[i].isScored = true;
        updateScore();
      }

      game.physics.arcade.collide(bird.sprite, pipes[i].bottomSprite);
      game.physics.arcade.collide(bird.sprite, pipes[i].topSprite);
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

function updateScore(){
  let txt = "Score: " + score;
  if(typeof text === 'undefined'){
    text = game.add.text(20, 20, txt, {
      font: "20px Pixeled",
      fill: "#f0f0f0"
    });
  } else {
    text.setText(txt);
  }
}

function hitSprite (sprite1, sprite2) {
  console.log('game over!');
  die();
}

game.state.add('GameState', GameState);
game.state.start('GameState');
