window.onload = () => {

    const canva = document.getElementById('canvas');

    canva.width = window.innerWidth;
    canva.height = 600;

    const ctx = canva.getContext('2d');

    // ctx.fillRect(20, 20, 20, 20);
// 
    // ctx.fillStyle = "#00FF00";
    // ctx.fillRect(100, 20, 20, 20);
// 
    // ctx.fillStyle = "#0000FF";
    // ctx.fillRect(200, 20, 20, 20);
// 
    // ctx.strokeRect(300, 20, 20, 20);
    // ctx.strokeStyle = "#FF0000";
    // ctx.strokeRect(400, 20, 20, 20);
// 
    // ctx.drawImage(document.getElementById('bird1'), 500, 20);
    // ctx.drawImage(document.getElementById('bird1'), 700, 20);

    // 함수 내부에서는 const는 var 호이스팅과 같다.
    const enviroment = new Enviroment(canva, ctx);

    // ctx.fillStyle = "#FFFFFF"
    const bird = new Bird(250, 300, ctx);

    const pipe1 = new Pipe(400, 20, 200, 20, ctx);

    const gameLoop = () => {
        ctx.fillRect(0, 0, canva.width, canva.height );
        enviroment.update();
        enviroment.render();
        pipe1.update();
        pipe1.render();
        bird.update();
        bird.render();
        window.requestAnimationFrame(gameLoop);
    }

    gameLoop();
};

    