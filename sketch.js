var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage;
var leaf, redLeaf;
var select_sprites = Math.round(random(1,3));


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redLeaf = loadImage("redImage.png");
  appleImage = loadImage("apple.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 

  if(frameCount % 80 === 0){
    
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaf();
    }
  }

  if(keyDown("left")){
    rabbit.x = rabbit.x - 10;
  }

  if(keyDown("right")){
    rabbit.x = rabbit.x + 10;
  }
  
  
  
 

  


  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10)
  apple.scale = 0.1;
  apple.addImage(appleImage);
  apple.velocityY = 2;

  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;

  
}

function createLeaf(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.scale = 0.1;
  leaf.addImage(redLeaf);
  leaf.velocityY = 2;

  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;

  
}
