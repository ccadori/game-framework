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
        Camera.context.fillStyle = object.render.fill
        Camera.context.fillRect(renderPosition.x, renderPosition.y, object.render.width, object.render.height)
    }

    static getRenderPosition(object)
    {
       return {
            x : object.position.x - Camera.position.x,
            y : object.position.y - Camera.position.y
        }
    }
}