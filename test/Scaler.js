class Scaler extends Component
{
    constructor(velocity)
    {
        super()
        this.velocity = velocity
    }

    update(deltaTime)
    {
        if (Input.isPressed(KeyCode.space))
        {
            this.object.body.scale.x += (this.velocity * deltaTime)
            this.object.body.scale.y += (this.velocity * deltaTime)
        }
        else if (this.object.body.scale.x >= 1)
        {
            this.object.body.scale.x -= (this.velocity * deltaTime)
            this.object.body.scale.y -= (this.velocity * deltaTime)
        }
    }
}