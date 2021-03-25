var enemy1,enemy1img;
var enemy2,enemy2img;
var enemy3,enemy3img;

var enemy5,enemy5img;
var enemy6,enemy6img;

var go,goimg;
var bg,bgimg;
var yw,ywimg;
var bullet,bullet1,bulletimg;
var score=0;
var player,playerimg;
var enemy1grp;
function preload()
{
  ywimg=loadImage("yw.png");

  enemy1img=loadImage("enemy1.png");
  enemy2img=loadImage("enemy2.PNG");
  enemy3img=loadImage("enemy32.png");
  goimg=loadImage("go.PNG");
  enemy5img=loadImage("enemy5.PNG");
  enemy6img=loadImage("enemy6.png");
  playerimg=loadImage("player.png");

  bgimg=loadImage("background.PNG");

  bulletimg=loadImage("bullet.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  player=createSprite(209, windowHeight/2-90, 50, 50);
  player.addImage(playerimg);
  player.scale=0.88;

  bg=createSprite(200,20,20,20);
  bg.addImage(bgimg);
  bg.visible=false;

  enemy1grp=new Group();

  
}

function draw() {
  background(bgimg);
 
  
  if (keyDown("right"))
  {
    player.x=player.x+6;
  }
  if (keyDown("left"))
  {
    player.x=player.x-6;
  }
  if (keyDown("up"))
  {
    player.y=player.y-6;
  }
  if (keyDown("down"))
  {
    player.y=player.y+6;
  }
  if (keyDown("space"))
  {
    bullet1=new createbullet(400,20,20,20);
    bullet1.x=player.x;
    bullet1.y=player.y;
    bullet1.addImage(bulletimg);
    //bullet1.lifetime=10;
    //bullet.scale=1;
    
  }
  if (enemy1grp.isTouching(player))
  {
    //stroke("yellow");
    //fill ("red");
    //textSize(80);
    //text("Game Over!",windowWidth/2-200,windowHeight/2-50);

    
    go=createSprite(windowWidth/2+50,windowHeight/2-20,20,20);
    go.addImage(goimg);
    enemy1grp.destroyEach();
    bullet1.destroy();
  }

  if (enemy1grp.isTouching(bullet1))
  {
    enemy1grp.destroyEach();
    bullet1.destroy();
    score=score+1
  }
  if (score===15)
  {
yw=createSprite(windowWidth/2+50,windowHeight/2-20,20,20);
yw.addImage(ywimg);
enemy1grp.destroyEach();
    bullet1.destroy();
  }

  stroke("white");
fill("blue");
textSize(70);
text ("Score: "+score,windowWidth/2+250,100);
  spawnenemy();
  
  drawSprites();
}


//}
function spawnenemy()
{
  if (frameCount%300===0)
  {
    //45-255
  enemy=createSprite(1350,255,20,20);
  enemy.y=Math.round(random(45,255));
  //enemy1.addImage(enemy1img);
  enemy.velocityX=-5;
  enemy.scale=0.33;
  //enemy.lifetime=150;
  var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: enemy.addImage(enemy1img);
              break;
      case 2: enemy.addImage(enemy2img);
              break;
      case 3: enemy.addImage(enemy3img);
              break;
      case 4: enemy.addImage(enemy5img);
              break;
      case 5: enemy.addImage(enemy6img);
              break;
      default: break;
    }
  enemy1grp.add(enemy);
  }
}
function createbullet() 
    {
       //create the bullet
        bullet=createSprite(360,100,5,10);
      bullet.addImage(bulletimg);
        bullet.velocityX=5;
        bullet.scale=0.33;

        return bullet;
    }
