class Behavior
{
    constructor(props)
    {
        
    }

    setObject(object)
    {
        this.object = object
    }

    update()
    {
        this.object.body.position.move(0.1,0)
    }

    start()
    {
        
    }
}