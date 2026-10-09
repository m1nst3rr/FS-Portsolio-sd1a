function setup() {
  createCanvas(400, 400);
}

function draw() {
  
//bg -------------------------------------------------------------------------------------------
  frameRate(25); 
  horizon = 200;
  line(0,horizon,400,horizon);
if (mouseY < horizon) {
  background(171, 202, 217);
  } else {
  background(68, 70, 97)
  }

  //functions ----------------------------------------------------------------------------------
function DrawCloud()
{
  let cloudonex= 2;
  cloudonex= frameCount%width
  stroke(233, 241, 242, 0);
  fill(233, 241, 242, 100);
  ellipse(cloudonex + 50,90,100,50)
  ellipse(cloudonex - 40, 100, 60, 20);
ellipse(cloudonex + 20, 150, 40, 10);
  
  stroke(233, 241, 242, 0);
    fill(233, 241, 242, 100);
  ellipse(cloudonex +300,30,300,90);
   ellipse(cloudonex - 200, 100, 60, 20);
   ellipse(cloudonex - 300, 60, 60, 20);
ellipse(cloudonex + 250, 150, 40, 10);
}

  
function DrawSun()
  {
      stroke(224, 181, 112, 0);
  fill(224, 181, 112, 60)
  circle(150,mouseY,60,)
  stroke(247, 234, 193);
    fill(247, 234, 193)
  circle(150,mouseY,40)

  }
  
function DrawMountains()
{
    stroke(88, 91, 107);
  fill(88, 91, 107);
  triangle(0, 400, 400, 400, 200, 150);
    stroke(88, 91, 107);
  fill(88, 91, 107);
  triangle(200, 400, 440, 400, 240, 180);
      //shadows
      stroke(52, 55, 66);
      fill(52, 55, 66);
      triangle(-40, 400, 60, 400, 200, 150);
      stroke(52, 55, 66);
      fill(52, 55, 66);
      triangle(-50, 400, 100, 325, 50, 260);
}

  function DrawTree(x,y,size)
  {
     fill("brown")
    rect(x-size,y-size,size*2,size*6)
fill ("green")
    triangle(x-size*3,y,x,y-size*8,x+size*3,y)
  }

  //drawing  :) ----------------------------------------------------------------------------------
  DrawSun();
  DrawCloud();
  DrawMountains();
  DrawTree(200, 300, 3);
   DrawTree(250, 340, 4);
    DrawTree(230, 250, 2);
  
 
  
}