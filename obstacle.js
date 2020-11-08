class Obstacle{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2
        }
        this.width = 30;
        this.height = 30;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}