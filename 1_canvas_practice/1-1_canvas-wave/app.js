import { Wave } from "./wave.js";

class App { // class definition
    constructor() { // class constructor

        // create canvas & add element to html
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);


        this.wave = new Wave();

        // if resize, run resize function
        window.addEventListener("resize", this.resize.bind(this), false); // make event listenable (.bind()'s purpose: to make 'this' value fixed)
        this.resize(); // run resize when constructor run
        
        // request animation frame
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        // set stage width/height
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // scale * 2 for retina display
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2, 2);

        this.wave.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}


window.onload = () => {
    new App();
};