 let cor;
 let circulox; // horizontal
 let circuloY; // vertical

function setup() {
 createCanvas(400, 400);
 background(color (100,0,0));
cor = color(random(0, 255), random(0, 255), random(0, 255));

circulox = [0, 0, 0];
 circuloY = [random(height), random(height), random(height)];
 }

14 function draw() {

fill(cor);

for(let contador in circulox) {
circle(circuloX[contador], circuloY[contador], 50);
circuloX[contador]+= random(0,3);
circuloY[contador]+= random(-3,3);

if(circulox [contador] >= width){
circuloX[contador] = 0;
circuloy [contador] = random(height);
 }
}

if(mouseIsPressed){
cor = color (random(0, 255), random(0, 255), random(0, 255), random(0, 100));
}
}
