var trex, trex_running


function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex = createSprite(200,200,20,10);
  trex.addAnimation("running",trex_running);
   
}

function draw(){
  background("white");

  
drawSprites();
}
