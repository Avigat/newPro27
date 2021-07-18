class Bob {
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(this.x,this.y,25,options)
        World.add(world,this.body);
    }
    display(){
        push()
        ellipseMode(RADIUS)
        fill(255,0,255)
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop()
    }
}