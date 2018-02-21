const Pipe = class {
    constructor(xpos, ypos, len, speed, ctx) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.length = len;
        this.ctx = ctx;
        this.speed = speed;
    }

    update(){
        this.xpos -= this.speed;
    } 

    // 시작점,길이가 다른 파이프 생성
    // static generateRandomPipe = (a,b) => {
    //     // 타입 : 천장에 붙은, 바닥에 붙은
    //     // max : 300
    //     let topPipe = Math.round(Math.random() * 200 + 100);
    //     let bottomPipe = ;

    //     return new Pipe(ctx);
    // }
    

    render(){
        // canvas 색깔을 유지
        // this.ctx.save();
        this.ctx.fillStyle = "#000000"
        this.ctx.fillRect(this.xpos, this.ypos, 150, this.length);
        this.ctx.fillStyle = "#74BF2E";
        this.ctx.fillRect(this.xpos+5, this.ypos+5, 140, this.length-10);

        // this.ctx.restore();

        this.ctx.fillStyle = "#FFFFFF";
    }
}

