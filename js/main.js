
const sprites = new Image();
sprites.src ="img/bola.png";

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


  const Atomform = {
    sourceX: 0,
    sourceY: 0,
    heightfromAtom: 700,
    weightfromAtom: 700,
    x: 50,
    y: 50,
    w: 200,
    h: 200,

    drawtheAtom() {

      context.drawImage(
        sprites, Atomform.sourceX, Atomform.sourceY,
        Atomform.weightfromAtom, Atomform.heightfromAtom,
        Atomform.x, Atomform.y,
        Atomform.w, Atomform.h,
      );


    }
  }

  const keys ={
  UP: 40,
  DOWN: 38,
  LEFT: 37,
  RIGHT: 39
  }

  window.addEventListener("keydown", keydownHandler);

  function keydownHandler (e){
    const key = e.keyCode;
    if(key === keys.LEFT){

      Atomform.x--;
    }
    if(key === keys.RIGHT) {

      Atomform.x++;
    }
    if(key === keys.UP){

      Atomform.y++;
    }
    if(key === keys.DOWN){

      Atomform.y--;
    }

  }

  function loop (){
    context.clearRect(0,0, canvas.height,canvas.width)
    Atomform.drawtheAtom()
    requestAnimationFrame(loop)
  }
  loop();

