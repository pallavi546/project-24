class Paper {
    constructor(x, y,radius) {
    this.radius=radius
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
      
      circle(x,y,this.radius);
      ellipse(CENTER);
    }
  };
  
