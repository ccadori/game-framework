class Object
{
    constructor(position, scale, render, pivotX, pivotY)
    {
        this.behaviors = new Array()
        this.position = position
        this.scale = scale
        this.render = render
        
        this.pivotX = Math.abs(pivotX)
        this.pivotY = Math.abs(pivotY)
        this.pivotY = (this.pivotY > 1)? 1 : this.pivotY
        this.pivotX = (this.pivotX > 1)? 1 : this.pivotX
    }

    addBehavior(behavior)
    {
        this.behaviors.push(behavior)
        
        behavior.setObject(this)
        behavior.start()
    }

    getScaledSize()
    {
        let size = this.render.getSize()
        
        return {
            width : size.width * this.scale,
            height : size.height * this.scale 
        }
    }

    getCenterOfMass()
    {
        let size = this.getScaledSize()

        return {
            x : size.width * this.pivotX,
            y : size.height * this.pivotY
        }
    }

    getWorldCenterOfMass()
    {
        let centerOfMass = this.getCenterOfMass()

        return {
            x : this.position.x - centerOfMass.x,
            y : this.position.y - centerOfMass.y
        }
    }

    update(deltaTime)
    {
        for (let behavior of this.behaviors)
            behavior.update(deltaTime)
    }
}