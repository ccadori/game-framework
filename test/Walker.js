class Walker extends Behavior
{
    constructor(velocity)
    {
        super()
        this.velocity = velocity
    }

    update(deltaTime)
    {
        if (Input.isPressed(Input.keyCode.downArrow))
            this.object.position.move(0,this.velocity * deltaTime)
        
        if (Input.isPressed(Input.keyCode.upArrow))
            this.object.position.move(0,-this.velocity * deltaTime)

        if (Input.isPressed(Input.keyCode.rightArrow))
            this.object.position.move(this.velocity * deltaTime,0)

        if (Input.isPressed(Input.keyCode.leftArrow))
            this.object.position.move(-this.velocity * deltaTime,0)
    }
}