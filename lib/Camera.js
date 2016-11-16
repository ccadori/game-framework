class Camera extends Component
{
    constructor (canvas)
    {
        super()
        this.canvas = canvas
        this.context = canvas.getContext("2d")
        
        Input.setCanvasEvents(canvas)
    }

    render(objects) 
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        objects.sort(function(a,b){ return a.body.getCalculatedPosition().z - b.body.getCalculatedPosition().z })

        for (let object of objects)
        {
            if (object.body.parent instanceof Body)
                continue
            
            object.body.draw(this.context)
        }
    }

    getRenderPosition(position, scale)
    {   
        let cameraPosition = {
            x : this.object.body.position.x - ((this.canvas.width / 2) / scale.x), 
            y : this.object.body.position.y - ((this.canvas.height / 2) / scale.y) 
        }

        return {
            x : position.x - cameraPosition.x,
            y : position.y - cameraPosition.y
        }
    }
}