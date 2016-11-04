class Object
{
    constructor(body)
    {
        this.behaviors = new Array()
        this.body = body
    }

    addBehavior(behavior)
    {
        this.behaviors.push(behavior)
        
        behavior.setObject(this)
        behavior.start()
    }

    update()
    {
        for (let behavior of this.behaviors)
            behavior.update()
    }
}