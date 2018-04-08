var Bird = function(x, y){
  this.sprite = game.add.sprite(x,y, 'redbird');
  this.speed = 0;
  this.acceleration = 0.3 ;
  this.maxspeed = 3;

  this.init = function(){

    this.sprite.anchor.setTo(0.5);
    this.sprite.scale.set(1.2);
    this.sprite.animations.add('flap', [0,2,1,2,0], 7, true);
    this.sprite.frame = 0;
    this.sprite.play('flap');

  }

  this.update = function(){
    if(this.speed <= 15){
      this.speed += this.acceleration;
    }
    this.sprite.y += this.speed;

    this.colideWithBorder();
  }

  this.flap = function(){
    if(this.speed > -8)
      this.speed -= 12 ;
  }
  this.colideWithBorder = function(){
    if(this.sprite.y - this.sprite.height/2 < 0){
      this.sprite.y = this.sprite.height/2;
    }

    if(this.sprite.y + this.sprite.height/2 > game.height){
      // crash
      this.sprite.y = game.world.centerY;
      this.speed = 0;
    }

  }
}
