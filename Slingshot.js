class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var ptA = this.sling.bodyA.position;
            var ptB = this.pointB;
            strokeWeight(10);
            stroke('rgb(48,22,8)')
            line(ptA.x-20, ptA.y, ptB.x-30, ptB.y);
            line(ptA.x-20, ptA.y, ptB.x+20, ptB.y-3);
        }
        image(this.sling1,200,20 );
        image(this.sling2,170,20 );
    }
    
}