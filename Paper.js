class Paper {

    constructor (x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       
        this.body = Bodies.circle (x,y,25,options);
        this.radius = 25;

        World.add(world,this.body);
     

    }

    display(){
fill("blue")
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();

        translate(pos.x,pos.y);
        rotate(angle);
        
       ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
    }

}