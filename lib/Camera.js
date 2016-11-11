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
        objects.sort(function(a,b){ return a.body.getWorldPosition().z - b.body.getWorldPosition().z })

        for (let object of objects)
        {
            if (!object.render)
                continue
            
            if (object.render.type == "rect")
                this.renderRect(object)
        }
    }

    renderRect(object)
    {
        let renderPosition = this.getRenderPosition(object)
        let size = object.body.getScaledSize()
        
        this.context.fillStyle = object.render.fill
        this.context.fillRect(renderPosition.x, renderPosition.y, size.width, size.height)
    }

    getRenderPosition(object)
    {
        let objectPosition = object.body.getWorldPosition()
        
        let cameraPosition = {
            x : this.object.body.position.x - this.canvas.width / 2, 
            y : this.object.body.position.y - this.canvas.height / 2 
        }

        return {
            x : objectPosition.x - cameraPosition.x,
            y : objectPosition.y - cameraPosition.y
        }
    }
}