
const Enviroment = class {
    constructor(c, ctx){
        this.canva = c;
        this.ctx = ctx;
        this.bgPos = 0;
        this.fgPos = 0;
        this.bgSpeed = 3;
        this.bgWidth = 450;
        this.bgImg = document.getElementById('bg');
    }

    update() {
        this.bgPos -= this.bgSpeed;
        // console.log(this.bgPos);
        if(this.bgPos < -this.bgWidth) this.bgPos = 0;
    }

    render() {
        for(let i = 0; i <= this.canva.width/this.bgWidth+1; i++ ) {
            this.ctx.drawImage(this.bgImg, this.bgPos+(i*this.bgWidth), 0);    
        }
    }
}