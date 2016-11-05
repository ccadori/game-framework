class Object
{
    constructor(position, scale, render)
    {
        this.behaviors = new Array()
        this.position = position
        this.scale = scale
        this.render = render
    }

    addBehavior(behavior)
    {
        this.behaviors.push(behavior)
        
        behavior.setObject(this)
        behavior.start()
    }

    update(deltaTime)
    {
        for (let behavior of this.behaviors)
            behavior.update(deltaTime)
    }
}