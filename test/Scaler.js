class Scaler extends Behavior
{
    constructor(velocity)
    {
        super()
        this.velocity = velocity
    }

    update(deltaTime)
    {
        if (Input.isPressed(KeyCode.space))
            this.object.scale += (this.velocity * deltaTime)
        else if (this.object.scale >= 1)
            this.object.scale -= (this.velocity * deltaTime)
    }
}