var bath;
var eat;
var brush;
var gym;
var sleep;
var move;
var bg;
var astronaut;
var left, right, up, bottom;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  eat = loadAnimation("eat1.png","eat2.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}
 
function setup() {
  createCanvas(400,400);

  astronaut=createSprite(200, 300);
  astronaut.addImage(bg);
  astronaut.addAnimation(sleep);
  astronaut.addAnimation(eat);
  astronaut.addAnimation(brush);
  astronaut.addAnimation(gym);
  astronaut.addAnimation(move);
  astronaut.addAnimation(bath);
  astronaut.scale = 0.1;



  left = createSprite(0,200,10,400); 
  left.visible = false;
  right = createSprite(400,200,1,400);
  right.visible = false;
  up = createSprite(200,0,400,5);
  up.visible = false;
  bottom = createSprite(200,400,400,1);
  bottom.visible = false;
}

function draw() {
  background(255,255,255);  

  if (keyDown("up")){
astronaut.changeAnimation(brush);
  }

  if (keyDown("down"){
    astronaut.changeAnimation(gym);   
  }

  if (keyDown("left"){
    astronaut.changeAnimation(eat);   
  }

  if (keyDown("right"){
    astronaut.changeAnimation(bath);   
}

  if (keyDown("m"){   
  astronaut.changeAnimation(move);   
  astronaut.velocityX=-4;
  astronaut.velocityY=-2;
}

if(astronaut.isTouching(left)){astronaut.bounceOff(left);   
}

  if(astronaut.isTouching(up)){astronaut.bounceOff(up);   
}

  if(astronaut.isTouching(right)){astronaut.bounceOff(right);   
}
  
  if(astronaut.isTouching(bottom)){astronaut.bounceOff(bottom);   
}

 
     

  drawSprites();
}