class BOX
{
  constructor(x,y)
  {
    var option =
    {
      restitution:0.75
    };

    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
    World.add(world,this.body)
  }
  show()
  {
     var pos = this.body.position;
     rectMode(CENTER);
     push()
     fill(0, 255, 217)
     rect(pos.x,pos.y,this.width,this.height)
     pop()
  }
}