class Stone{
  constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20,20, options);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}
