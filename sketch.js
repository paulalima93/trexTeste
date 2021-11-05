var trex, trexCorrendo;
var chao, imagemDoChao, chaoInvisivel;
var nuvem, imagemDaNuvem;

var aleatorio;

var obstaculo;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;

var pontuacao=0;

function preload() {
  trexCorrendo = loadAnimation("img/trex1.png","img/trex2.png","img/trex3.png");
  imagemDoChao = loadImage("img/ground2.png");
  imagemDaNuvem = loadImage("img/cloud.png");

  obstaculo1 = loadImage("img/obstacle1.png");
  obstaculo2 = loadImage("img/obstacle2.png");
  obstaculo3 = loadImage("img/obstacle3.png");
  obstaculo4 = loadImage("img/obstacle4.png");
  obstaculo5 = loadImage("img/obstacle5.png");
  obstaculo6 = loadImage("img/obstacle6.png");

}
function setup() {
  createCanvas(600,200);

 trex = createSprite(50,160,20,50);
 trex.addAnimation("correndo", trexCorrendo);
 trex.scale = 0.7;

 chao = createSprite(300,180,600,20)
 chao.addImage("chao", imagemDoChao);
 edges = createEdgeSprites();

 chaoInvisivel = createSprite(300,195,600,10);

 /*
 gerar numeros aleatorios e colocar no console
 aleatorio = Math.round(random(1,100));
 console.log(aleatorio);
 */
}

function draw() {
  background(rgb(238,233,233));


  text ("Pontuação: " + pontuacao, 500,50);
    pontuacao = pontuacao + Math.round(frameCount/60);


  if (keyDown("space") && trex.y >= 120) {
    trex.velocityY=-10;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide (chaoInvisivel);
  chaoInvisivel.visible = false;
  chao.velocityX = -2;

  if(chao.x<0){
    chao.x = chao.width/2;
  }

  gerarNuvens();
  
  gerarObstaculos();

drawSprites();
}


function gerarNuvens() {
  if (frameCount % 80===0) {
  nuvem = createSprite(600,100,40,10);
  nuvem.addImage("nuvem", imagemDaNuvem);
  nuvem.scale = 0.6;
  nuvem.y = Math.round(random(50,120));
  nuvem.velocityX = -4;

  nuvem.lifetime = 160;

  nuvem.depth = trex.depth;
  trex.depth = trex.depth+1;

  }
 
}

function gerarObstaculos() {
  if (frameCount % 80 ===0) {
    obstaculo = createSprite(600,163,60,20);
    obstaculo.velocityX = -4;
    

    var numAleatorio = Math.round(random(1,6));

    switch(numAleatorio) {
      case 1: obstaculo.addImage(obstaculo1);
        break;
      case 2: obstaculo.addImage(obstaculo2);
        break;
      case 3: obstaculo.addImage(obstaculo3);
        break;
      case 4: obstaculo.addImage(obstaculo4);
        break;
      case 5: obstaculo.addImage(obstaculo5);
        break;
      case 6: obstaculo.addImage(obstaculo6);
        break;
      default: break;  



    }

    obstaculo.scale = 0.5;
  }
}


