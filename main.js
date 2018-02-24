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

    const pipes = [];

    setInterval(() => {
        let pipeSet = generateRandomPipes(ctx, canva.width, canva.height);
        // console.log(pipeSet);
        pipes.push(pipeSet.top, pipeSet.bottom);
        // console.log('파이프 모음', pipes);
    }, 2000)
    

    const gameLoop = () => {
        ctx.fillRect(0, 0, canva.width, canva.height );
        enviroment.update();
        enviroment.render();
        pipes.forEach( pipe => {
            // console.log(pipe);
            pipe.update();
            pipe.render();
        })
        bird.update();
        bird.render();
        if (detectCollision(bird, pipes)) {
            return drawGameOver(ctx, canva);
        }
        window.requestAnimationFrame(gameLoop);
    }

    const generate = () => {
        let lengthTop = Math.round(Math.random() * 200 + 100);
        let legnthBottom = canva.height - 180 - lengthTop;
        let returnVal = {
            top : {},
            bottom : {}
        }
    }

    // 랜덤으로 변수의 값을 생성하면 그 변수를 패러미터로 라우팅을 한다.
    // 

    const generateRandomPipes = (ctx, canvasWidth, canvasHeight) => {
        let lengthTop = Math.round(Math.random()*200+50);
        let lengthBottom = canvasHeight - 200 - lengthTop;
        let returnVal = {
            top : new Pipe(canvasWidth, -5, lengthTop, 4, ctx),
            bottom : new Pipe(canvasWidth, canvasHeight+5-lengthBottom, lengthBottom, 4, ctx)
        };
        return returnVal;
    }

    const detectCollision = (bird, pipes) => {
        for(let i = 0; i < pipes.length; i++) {
            let e = pipes[i];
            let highPipe = e.xpos <= 0;
            let x0 = e.xpos, x1 = e.xpos + e.width;
            if (highPipe) {
                let y0 = e.ypos + e.length;
                let birdX = bird.x;
                let birdY = bird.y - (bird.height / 2);
                if( birdX > x0 && birdY < x1 && birdY < y0) return true;
                }
            else {
                let y2 = e.ypos;
                let a = bird.x;
                let b = bird.y + bird.height/2;
                if( a > x0 && a < x1 && b > y2) return true;
            }
        }
        return false;
    }

    const drawGameOver = (ctx, c) => {
        ctx.font = "30px Verdana";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canva.width/2, canva.height/2);
        window.addEventListener('keydown', e => {
            if(e.keyCode) {
                window.location = '/birds.html';
                return window.removeEventListener('keydown');
            }
        })
    }

    gameLoop();
};

    