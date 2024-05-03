const GRASS_CLASS = "grass",
GRASS_COUNT = 50;
const BALL_CLASS = "pokeball",
 BALL_COUNT =5;
 const PLAYER = document.querySelector(".player");
 let playerPos={
    x:0,
    y:0
 };
 let playerVel={
    x:0,
    y:0
 };
 const PLAYER_SPEED = 1.8;
 const START_PLAYER_POS = {
    x:window.innerWidth / 2,
    y:window.innerHeight / 2,
 }
   const SOUND = new Audio("assets/coin.mp3")
//-----------------------Game Functions-------------------------------
function start(){
    generateRondomElements(GRASS_CLASS,GRASS_COUNT);
    generateRondomElements(BALL_CLASS,BALL_COUNT);

    playerPos =START_PLAYER_POS;
 }

function update(){
    playerPos.x += playerVel.x;
    playerPos.y += playerVel.y;
    PLAYER.style.left = playerPos.x + "px";
    PLAYER.style.top  = playerPos.y + "px";

    checkCollision();

    requestAnimationFrame(update)
}
//--------------------------HANDLE PLAYER MOVMENT--------------------
window.addEventListener("keydown",(e) =>{
    if (e.key == "ArrowUp"){
        playerVel.y = -1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/player_front.png')";
    }
     if (e.key == "ArrowDown") {
       playerVel.y = 1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/player_back.png')";

     }
      if (e.key == "ArrowLeft") {
        playerVel.x = -1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/player_left.png')";
      }
       if (e.key == "ArrowRight") {
         playerVel.x = 1 * PLAYER_SPEED;
         PLAYER.style.backgroundImage = "url('assets/player_right.png')";
       }
       PLAYER.classList.add("walk");
});
window.addEventListener("keyup",(e) => {
    playerVel.x = 0;
    playerVel.y = 0;
    PLAYER.classList.remove("walk");

});

function generateRondomElements(className,elementCount){
    for(let count = 0; count < elementCount; count++) {
        const newElement = document.createElement("div");
        newElement.classList.add(className);
        newElement.style.left = Math.random() * 100 + "%";
        newElement.style.top  = Math.random() * 100 +"%";
        document.body.appendChild(newElement);
      }    

}

function checkCollision(){
    balls = document.querySelectorAll(`.pokeball`);
    balls.forEach(ball =>{
        if (collistion(ball,PLAYER)){
             ball.style.left = Math.random() * 100 + "%";
             ball.style.top = Math.random() * 100 + "%";
             SOUND.play()
        
        }
    });
}
//=====================Check Collision between 2 divs=================
 function collistion($div1, $div2){
    let x1 = $div1.getBoundingClientRect().left;
    let y1 = $div1.getBoundingClientRect().top;
    let h1 = $div1.clientHeight;
    let w1 = $div1.clientWidth;
    let b1 = y1 + h1;
    let r1 = x1 + w1;

    let x2 = $div2.getBoundingClientRect().left;
    let y2 = $div2.getBoundingClientRect().top;
    let h2 = $div2.clientHeight;
    let w2 = $div2.clientWidth;
    let b2 = y2 + h2;
    let r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

//------------------Run The Game------------------------
start();
update();