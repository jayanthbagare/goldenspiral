let sp;

function setup()
{
  createCanvas(800,800);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
  sp = new Spiral();
}

function draw()
{
  translate(width/2,height/2);
  sp.update();
  sp.display();

}
