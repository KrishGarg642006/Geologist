class stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
    };

display(){
    var pos = this.body.position;
    pos.x =800;
    pos.y =300;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('silver')
    fill('gold')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();


};
};


