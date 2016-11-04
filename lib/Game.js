class Game
{
    constructor(canvas)
    {
        this.canvas = canvas
        this.context = canvas.getContext("2d")

        this.width = this.canvas.getAttribute("width")
        this.height = this.canvas.getAttribute("height")
        
        this.objects = new Array()
        this.camera = new Camera(new Position(0, 0, 0))
    }

    start()
    {
        this.update(this)
    }

    update(self)
    {
        for (let object of self.objects)
        {
            object.update()
            self.camera.render(object, context)
        }

        setTimeout(self.update, 1000/60, self)
    }

    addObject(object)
    {
        this.objects.push(object)
    }
}