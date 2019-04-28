class Spiral
{
  constructor()
  {
    this.c = 3;
    this.index = 1;
    this.radius = 10;
    this.angle = 0;
    this.start = 0;
    this.n = 0;
    this.x;
    this.y;
  }


  update()
  {
    this.index = this.index + 1;
    if (this.index <= 600)
    {
      this.radius = this.c + sqrt(this.index);
      this.radius *= 10;
      this.angle = this.angle + 137.5078;
      this.x = this.radius * cos(this.angle);
      this.y = this.radius * sin(this.angle);
    }
  }

  display()
  {
    rotate(this.n * 0.3);
    var hu = sin(this.start + this.index * 0.5);
    hu = map(hu, -1, 1, 0, 360);
    fill(hu, 255, 255);
    noStroke();
    ellipse(this.x, this.y, 4, 4);
  }
}
