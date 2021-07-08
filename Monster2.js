class Monster2 {
    constructor(x,y,r)
      {
          var options = { 
        density: 5, 
        frictionAir: 0
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("monster2.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var monster2Pos=this.body.position;		
              push()
              translate(monster2Pos.x, monster2Pos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r, this.r)
              pop()
              
      }
  }