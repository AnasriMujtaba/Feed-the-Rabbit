var garden,rabbit,apple,garss,leaf,orangeleaf,red;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,orangeleafImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  grassImg = loadImage("grass.png")
  leafImg = loadImage("leaf.png")
  orangeleafImg = loadImage("orangeLeaf.png")
  redImg = loadImage("redimage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,4));

  drawSprites();
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrangeleaf();
    }else {
      createRed();
    }   
  }
}
createleaf();

function createApples() {

  apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;

}

function createOrangeleaf() {
  orangeleaf=createSprite(random(50,350),40,10,10);
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.scale=0.08;
  orangeleaf.velocityY=3;
  orangeleaf.lifetime=150
}
 
  function createRed() {
    red=createSprite(random(100,350),40,10,10)
    red.addImage(redImg)
    red.scale=0.06
    red.velocityY=3
    red.lifetime=150
  }
  
function createleaf() {
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
leaf.scale=0.07;
  leaf.velocityY=3;
leaf.lifetime=150;
}


