class Object
{
    constructor(x, y, z, scaleX, scaleY, pivotX, pivotY, render)
    {
        this.components = new Array()
        this.body = this.addComponent(new Body(x, y, z, pivotX, pivotY, scaleX, scaleY))
        this.render = render
    }

    getComponent(type)
    {
        for (let component of this.components)
            if (component instanceof type)
                return component
    }

    addComponent(component)
    {
        this.components.push(component)
        
        component.setObject(this)
        component.start()

        return component
    }

    update(deltaTime)
    {
        for (let component of this.components)
            component.update(deltaTime)
    }
}