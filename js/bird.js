var Bird = function(x, y){
  this.sprite = game.add.sprite(x,y, 'redbird');
  this.speed = 0;
  this.acceleration = 0.3 ;
  this.angleIncrement = 1;


  game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.sprite.anchor.setTo(0, 0.5);
  this.sprite.x -= 2*this.sprite.width;
  this.sprite.scale.set(1.2);
  this.sprite.animations.add('flap', [0,2,1,2,0], 7, true);
  this.sprite.frame = 0;
  this.sprite.play('flap');

  this.sprite.body.onCollide = new Phaser.Signal();
  this.sprite.body.onCollide.add(hitSprite, this);

  this.update = function(){
    if(this.speed <= 15){
      this.speed += this.acceleration;
    }
    this.sprite.y += this.speed;
    if(this.sprite.angle < 65 && this.speed > 0){
      this.sprite.angle += this.speed / 2;

    }

    this.colideWithBorder();
  }

  this.flap = function(){
    if(this.speed > -8){
      this.speed -= 10;
      // this.sprite.angle
        game.add.tween(this.sprite).to({angle: -25}, 250).start();
    }
  }
  this.colideWithBorder = function(){
    if(this.sprite.y - this.sprite.width / 3 < 0){
      this.sprite.y = this.sprite.height/2;
      this.sprite.y += 1;
      this.speed += this.acceleration;
    }

    if(this.sprite.y > game.height){
      // crash
      this.sprite.y = game.world.centerY;
      this.speed = 0;
    }

  }
}
