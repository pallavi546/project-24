class Paper {
    constructor(x, y,radius) {

      var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
      }
      
     this.body= Matter.Bodies.circle(x,y,radius);
      
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("pink");
      this.radius=radius
      circle(x,y,this.radius);
      ellipse(CENTER);
    }
  };
  