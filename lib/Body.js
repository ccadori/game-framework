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
        console.log(this.scale)
    }

    getScaledSize()
    {
        let size = (this.object.render)? this.object.render.getSize() : { width : 0, height : 0 }
           
        return {
            width : size.width * this.scale.x,
            height : size.height * this.scale.y 
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

    getWorldPosition()
    {
        let centerOfMass = this.getCenterOfMass()

        return {
            x : this.position.x - centerOfMass.x,
            y : this.position.y - centerOfMass.y,
            z : this.position.z
        }
    }
}