export class Point { // class export: Point
    constructor (index, x, y) { // params: x / y
        this.x = x;
        this.y = y;
        this.fixedY = y; // fixed point's y value
        this.speed = 0.05;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
    }
    
    update() { // for point's move (up & down)
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}