class Body extends Component 
{
    constructor(x, y, z, pivotX, pivotY, scaleX, scaleY)
    {
        super()

        this.position = {}
        this.position.x = x || 0
        this.position.y = y || 0
        this.position.z = z || 0
        
        this.pivot = {}
        this.pivot.x = pivotX || 0.5
        this.pivot.y = pivotY || 0.5

        this.scale = {}
        this.scale.x = scaleX || 1
        this.scale.y = scaleY || 1
    }

    getScale()
    {   
        let parentScale = {x:1, y:1, z:1}

        if (this.parent instanceof Body)
            parentScale = this.parent.getScale()

        return {
            x : this.scale.x * parentScale.x,
            y : this.scale.y * parentScale.y
        }
    }

    getScaledSize()
    {
        let scale = this.getScale()
        let size = (this.object.render)? this.object.render.getSize() : { width : 0, height : 0 }
           
        return {
            width : size.width * scale.x,
            height : size.height * scale.y 
        }
    }

    getCenterOfMass()
    {
        let size = this.getScaledSize()

        return {
            x : size.width * this.pivot.x,
            y : size.height * this.pivot.y
        }
    }

    getScaledPosition()
    {
        let scale = this.getScale()

        if (this.parent instanceof Body)
            return { x : this.position.x * scale.x, y : this.position.y * scale.y }
        else
            return { x : this.position.x, y : this.position.y }
    }

    getWorldPosition()
    {
        let scale = this.getScale()
        let centerOfMass = this.getCenterOfMass()
        let position = this.getScaledPosition()
        
        let parentWorldPosition = {x:0, y:0, z:0}

        if (this.parent instanceof Body)
            parentWorldPosition = this.parent.getWorldPosition()
       
        return {
            x : (position.x + parentWorldPosition.x) - centerOfMass.x,
            y : (position.y + parentWorldPosition.y) - centerOfMass.y,
            z : (position.z + parentWorldPosition.z)
        }
    }
}