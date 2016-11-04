class Game
{
    constructor(canvas, width, height)
    {   
        this.objects = new Array()
        this.camera = new Camera(new Position(0, 0, 0), canvas, width, height)
    }

    start()
    {
        this.update(this)
    }

    update(self)
    {
        for (let object of self.objects)
            object.update()

        self.camera.render(self.objects)
        setTimeout(self.update, 1000/30, self)
    }

    addObject(object)
    {
        this.objects.push(object)
    }
}