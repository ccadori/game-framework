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
        this.object.position.move(0,1)
    }

    start()
    {
        
    }
}