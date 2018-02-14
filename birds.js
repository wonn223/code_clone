
const Bird = class {
    constructor(x,y, ctx){
        this.fg = document.getElementById('fg');
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.velY = 0;
        this.width = 90;
        this.height = 64;
        this.ticks = 0;
        this.sprtiesIndex = 0;
        this.sprites = [document.getElementById('bird1'), 
            document.getElementById('bird2'),
            document.getElementById('bird3')];
        window.addEventListener('keydown', e => {
            console.log(e);
            if(e.keyCode === 32) {
                this.velY = -22;
            }
        })    
    }

    update() {
        this.ticks++;
        if(this.ticks % 15 === 0) this.sprtiesIndex = (this.sprtiesIndex + 1) % this.sprites.length;
        this.y += this.velY;
        this.velY += 1.25;
    }

    render() {
        let renderX = this.x - this.width/2;
        let renderY = this.y - this.height/2;
        if( this.y === 600) console.log('천장');
        this.ctx.drawImage(this.sprites[this.sprtiesIndex], renderX, renderY);
    }
}
