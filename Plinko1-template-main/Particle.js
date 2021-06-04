class Particle {
    constructor(x, y) {
        var options = {
        //isStatic:false,
        restitution:0.8,
        friction:0
        }
        this.r=10
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255,0), random(0, 255, 255), random(230, 230, 250));
        World.add(world, this.body);
    }
    display() {
    pop()
    fill(0,0,255)
    ellipseMode(RADIUS);
    ellipse(400,20,this.r,this.r);
    push()
    }
}