class Rope{
    constructor(body1, body2,offsetX,offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            length: 500
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.offsetX=offsetX;
        this.offsetY = offsetY;
    }
    

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push()
        strokeWeight(4);
        stroke("white");
        var pointCX = pointB.x+this.offsetX
        var pointCY = pointB.y+this.offsetY
        line(pointA.x, pointA.y, pointCX, pointCY);
        pop();
    }
    
}