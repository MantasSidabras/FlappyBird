var Pipe = function(xoffset){
  this.xoffset = 0;
  this.speed = 3;
  this.width = game.height * 0.3;

  this.gapWidth = 150;
  this.gap = getRandomIntInclusive(game.height * 0.4, game.height * 0.8);

  if(typeof xoffset !== 'undefined'){
    this.xoffset = xoffset;
  }
  this.bottomSprite = game.add.sprite(game.width + this.xoffset, this.gap, 'pipe');
  this.topSprite = game.add.sprite(game.width + this.xoffset, this.gap - this.gapWidth, 'pipe');
  //this.topSprite.x += this.topSprite.width;


  game.physics.arcade.enable([this.bottomSprite, this.topSprite]);

  this.topSprite.scale.y = -1.3;
  this.bottomSprite.scale.y = 1.3;
  // this.topSprite.angle = 180;

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
