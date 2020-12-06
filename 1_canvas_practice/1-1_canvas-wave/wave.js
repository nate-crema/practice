import { Point } from "./point.js";

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        // copy stageWidth/stageHeight in order to use in class
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        // set center coordinate in order to locate position at middle of browser
        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);
        
        this.init();
    }

    init() {
        // create point
        this.point = new Point(
            this.centerX,
            this.centerY
        );

        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(
                this.index+1,
                this.pointGap * i,
                this.centerY
            );
            this.points[i] = point;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        // get prev coordination (in order to get smoother arcs)
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            if(i < this.totalPoints - 1) {

            }
        }


        // move point
        this.point.update();
    }
}