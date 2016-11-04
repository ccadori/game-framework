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
        Camera.context.fillStyle = object.render.fill
        Camera.context.fillRect(object.position.x, object.position.y, object.render.width, object.render.height)
    }
}