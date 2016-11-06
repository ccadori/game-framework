class Camera 
{
    static setCanvas (canvas, position)
    {
        Camera.canvas = canvas
        Camera.position = position
        Camera.context = canvas.getContext("2d")
    }

    static render(objects) 
    {
        Camera.context.clearRect(0, 0, Camera.canvas.width, Camera.canvas.height)
        
        for (let object of objects)
            if (object.render.type == "rect")
                Camera.renderRect(object)
            else if (object.render.type == "image")
                Camera.renderImage(object)
    }

    static renderImage(object)
    {

    }

    static renderRect(object)
    {
        let renderPosition = Camera.getRenderPosition(object)
        let size = object.getScaledSize()
        
        Camera.context.fillStyle = object.render.fill
        Camera.context.fillRect(renderPosition.x, renderPosition.y, size.width, size.height)
    }

    static getRenderPosition(object)
    {
        let objectPosition = object.getWorldCenterOfMass()
        
        let cameraPosition = {
            x : Camera.position.x - Camera.canvas.width / 2, 
            y : Camera.position.y - Camera.canvas.height / 2 
        }

        return {
            x : objectPosition.x - cameraPosition.x,
            y : objectPosition.y - cameraPosition.y
        }
    }
}