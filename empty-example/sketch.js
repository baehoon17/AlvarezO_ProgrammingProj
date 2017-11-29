var diam1=0;

function setup() {
   //put setup code here 
    createCanvas(500,500);
    background("#FFC922");
}

function draw() {
 //put drawing code here 
  //background("#003366");
  fill("#FC0000");
  stroke("#FC0000");
  strokeWeight(5); 
  ellipse(250,250,diam1,diam1);
    ellipse(150,300,diam1,diam1);
    ellipse(40,400,diam1,diam1);
    ellipse(200,50,diam1,diam1);
    ellipse(350,450,diam1,diam1);
    ellipse(450,50,diam1,diam1);
    ellipse(340,200,diam1,diam1);

}

function mousePressed(){
    diam1=diam1+30;
}