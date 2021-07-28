//firts commit
const sprites = new Image();
sprites.src ="img/bola.png";

const border = new Image();
border.src = "img/bordas.png"

const logopause = new Image();
logopause.src = "img/PAUSE.png"

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//Atom e formas a serem desenhadas
  const Atomform = {
    sourceX: 0,
    sourceY: 0,
    heightfromAtom: 700,
    weightfromAtom: 700,
    x: 50,
    y: 50,
    w: 500,
    h: 500,
    fast: 2,

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

  const PauseLogo ={
    sourceX: 0,
    sourceY: 0,
    heightfrompause: 400,
    weightfrompause: 400,
    x: 140,
    y: 200,
    w: 100,
    h: 100,

    drawthePause() {

      context.drawImage(
        logopause, PauseLogo.sourceX, PauseLogo.sourceY,
        PauseLogo.weightfrompause, PauseLogo.heightfrompause,
        PauseLogo.x, PauseLogo.y,
        PauseLogo.w, PauseLogo.h,
      );


    }
  }
//Termina aqui

//movimentações e confifuração de movimentações
  const keys ={
  SPACE: 32,
  UP: 40,
  DOWN: 38,
  LEFT: 37,
  RIGHT: 39,
  toUP: false,
  toDOWN: false,
  toLEFT: false,
  toRIGHT: false
  }
  window.addEventListener("keydown", keydownHandler);
  window.addEventListener("keyup", keyupHandler);
  function keydownHandler (e){
    const key = e.keyCode;

    let i =0;
    if(key === keys.LEFT && key!== keys.RIGHT){
        keys.toLEFT = true;
    }
    if(key === keys.RIGHT && key!== keys.LEFT) {
      keys.toRIGHT = true;
    }
    if(key === keys.UP && key!== keys.DOWN){
      keys.toUP = true;
    }
    if(key === keys.DOWN && key!== keys.UP){
      keys.toDOWN = true;
    }

    if(key === keys.SPACE){
      activeScreen.click()
    }

    }
  function keyupHandler (e){
  const key = e.keyCode;
  let i =0;
  if(key === keys.LEFT && key!== keys.RIGHT){
    keys.toLEFT = false;
  }
  if(key === keys.RIGHT && key!== keys.LEFT) {
    keys.toRIGHT = false;
  }
  if(key === keys.UP && key!== keys.DOWN){
    keys.toUP = false;
  }
  if(key === keys.DOWN && key!== keys.UP){
    keys.toDOWN = false;
  }
}
  function move () {
      let i = 0;
      if (keys.toLEFT) {
        do {
          i++;
          Atomform.x--;
        } while (i < Atomform.fast)
      }
      if (keys.toRIGHT) {
        do {
          i++;
          Atomform.x++;
        } while (i < Atomform.fast)
      }
      if (keys.toUP) {
        do {
          i++;
          Atomform.y++;
        } while (i < Atomform.fast)
      }
      if (keys.toDOWN) {
        do {
          i++;
          Atomform.y--;
        } while (i < Atomform.fast)
      }
    }
//Termina aqui

  let activeScreen = {};
  function changeScreen(newScreen){
    activeScreen = newScreen;
  }


  const Screeen ={
    Pause:{
      Draw(){
        context.clearRect(0,0, canvas.width,canvas.height)
        movieborders.drawtheborder()
        Atomform.drawtheAtom()
        PauseLogo.drawthePause()
      },
      att(){

      },
      click(){
        changeScreen(Screeen.Reproduce)
      }

    },

    Reproduce:{
      Draw(){
        context.clearRect(0,0, canvas.width,canvas.height)
        movieborders.drawtheborder()
        Atomform.drawtheAtom()
      },
      att(){
        move()
      },
      click(){
        changeScreen(Screeen.Pause)
      }
    }

  }
  function loop (){

    activeScreen.Draw();
    activeScreen.att();
    requestAnimationFrame(loop);
  }
/*
    window.addEventListener('click', function (){
      if(activeScreen.click){
        activeScreen.click();
      }

    })*/

    changeScreen(Screeen.Pause)
    loop();





