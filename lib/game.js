class Game
{
    constructor(canvas)
    {
        this.canvas = canvas
        this.width = this.canvas.getAttribute("width")
        this.height = this.canvas.getAttribute("height")

        this.camera = new Camera(new Position(0,0))
    }

    start()
    {
        this.update()
    }

    render()
    {

    }

    update()
    {

    }
}