class Paper{
	constructor(x,y,r)
	{
	
    var options = {
		friction: 0,
		restitution: 0.3,
		density: 1.2,
        isStatic: false
	}
		
		this.r=r
		this.body=Bodies.circle(x,y,r, options)
		this.image = loadImage("paper.png");
		console.log(x,y)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			
			imageMode (CENTER)
            image(this.image, 0, 0, this.r+25, this.r+25);
			pop()
	}

}