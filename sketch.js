
// all the variables

var monkey , monkey_running, monkeystop;
var bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var invisiblebackround;
var gameState="start";
// var Music;
var banana;
var survivaltime;

function preload(){
  
  // loading images
  
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
// Music = loadSound("Song.mp3");
monkeystop=loadImage("sprite_0.png")
}



function setup() {
  
  // setup
  
  monkey=createSprite(100, 200, 20, 20);
  monkey.addAnimation("monkey", monkey_running, 100, 200);
  monkey.scale=0.09;
  
  
  
  invisiblebackround=createSprite(100, 220, 600, 10);
  banana = createSprite(600,165,10,40);
  obstacle=createSprite(500, 200, 10, 40);
  score=0;
  
  obstacle.debug=true;
  
  gameState="play"
  
//   if (gameState==="start")
//   {
//     Music.play();
//   }
  
  
}


function draw() {
  background("lightblue");
  
  // functions for banana and obstacles
  
  if (gameState==="play")
  {
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival time:" +survivaltime,100,50);
  
  // monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
    
  // making sure monkey dosn't go through the ground
  
  monkey.collide(invisiblebackround); 
    
  spawnbanana();
  rock();
  }
    
  // scoring system
  
  if (monkey.isTouching(banana))
  {
    score=score+1;
    banana.visible=false;
    
  }
  
  // monkey movement
  
  if(keyDown("space")&& monkey.y >= 180) {
        monkey.velocityY = -12;
  }
  
  // how to end the game
  
  if (monkey.isTouching(obstacle))
  {
    gameState="end";
  }
  
  invisiblebackround.visible=false;
  
  // what happens when you end it
  
  if(gameState==="end")
  {
    monkey.velocityX=0;
    obstacle.velocityX=0;
    banana.velocityX=0;
    monkey.addImage(monkeystop);
    monkey.velocityY=15;
    obstacle.lifetime=-1;
    banana.visible=false;
    text("Game over.", 200, 200);
    text.size=10;
  }
  
  // more scoreing
  
  text("Score:"+score, 20, 200);
  
  
  
  // calling the music function
  
//   music();
  
  // drawing the sprites
  
  drawSprites();
  
  
  
}

function spawnbanana(){

  // function for the bananas
  
 if (frameCount % 80 === 0)
 { 
  banana=createSprite(600,165,10,40);
  banana.velocityX = -(6 + score/100);
  banana.lifetime=300;
  banana.addImage("bananananananananananana", bananaImage);
  banana.scale=0.07;
  
}
}

function rock()
{
  
  // function for the obstacles
  
  if (frameCount % 300 === 0)
  {
    obstacle=createSprite(500, 200, 10, 40);
    obstacle.velocityX=-(6+score/100);
    obstacle.lifetime=300;
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale=0.1;
    
  }
  }

// function music()
// {
  
//  functions for music (not done yet)
  
  
// }


