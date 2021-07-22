//firts commit
const sprites = new Image();
sprites.src ="img/bola.png";

const border = new Image();
border.src = "img/bordas.png"

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


  const Atomform = {
    sourceX: 0,
    sourceY: 0,
    heightfromAtom: 700,
    weightfromAtom: 700,
    x: 50,
    y: 50,
    w: 500,
    h: 500,

    drawtheAtom() {

      context.drawImage(
        sprites, Atomform.sourceX, Atomform.sourceY,
        Atomform.weightfromAtom, Atomform.heightfromAtom,
        Atomform.x, Atomform.y,
        Atomform.w, Atomform.h,
      );


    }
  }

  const movieborders = {
    sourcebX: 0,
    sourcebY: 0,

    sourcebXdown: 320,
    sourcebYdown: 480,

    heightfromborder: 240,
    weightfromborder: 2648,
    x: -105,
    y: -24,
    w: 441,
    h: 40,
    variablex: 0,

    drawtheborder() {

      if(movieborders.x<=0){
      movieborders.variablex = movieborders.x++;
      }

      if(movieborders.x>0){
        movieborders.x = -105
      }
        context.drawImage(
          border, movieborders.sourcebX, movieborders.sourcebY,
          movieborders.weightfromborder, movieborders.heightfromborder,
          movieborders.variablex, movieborders.y,
          movieborders.w, movieborders.h,
        );

      context.drawImage(
        border, movieborders.sourcebX, movieborders.sourcebY,
        movieborders.weightfromborder, movieborders.heightfromborder,
        movieborders.variablex, 472,
        movieborders.w, movieborders.h,
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
    movieborders.drawtheborder()
    Atomform.drawtheAtom()
    requestAnimationFrame(loop)
  }
  loop();

