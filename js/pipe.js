var Pipe = function(){

  this.speed = 2;
  this.width = game.height *0.3;
  this.topSprite = game.add.sprite(game.width, 0, 'pipe');
  this.bottomSprite = game.add.sprite(game.width, 0, 'pipe');

  // this.topSprite.anchor.setTo(0);

  this.topSprite.height = getRandomIntInclusive(game.height * 0.1, game.height * 0.6);
  this.bottomSprite.height = game.height - this.topSprite.height - this.width;
  this.bottomSprite.y = this.topSprite.height + this.width;
  this.topSprite.y += this.topSprite.height;
  // this.bottomSprite.y = game.height;
  // this.bottomSprite.anchor(0, this.bottomSprite.height);
  // this.bottomSprite.scale(1,-1);
   this.topSprite.angle = 180;
   this.topSprite.x += this.topSprite.width;

   this.update = function(){
     this.topSprite.x -= this.speed;
     this.bottomSprite.x -= this.speed;
   }
   
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
