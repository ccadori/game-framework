class Walker extends Behavior
{
    constructor(velocity)
    {
        super()
        this.velocity = velocity
    }

    update(deltaTime)
    {
        if (Input.isPressed(KeyCode.downarrow))
            this.object.position.move(0,this.velocity * deltaTime)
        
        if (Input.isPressed(KeyCode.uparrow))
            this.object.position.move(0,-this.velocity * deltaTime)

        if (Input.isPressed(KeyCode.rightarrow))
            this.object.position.move(this.velocity * deltaTime,0)

        if (Input.isPressed(KeyCode.leftarrow))
            this.object.position.move(-this.velocity * deltaTime,0)

        Camera.position.moveTo(this.object.position.x, this.object.position.y)
    }
}