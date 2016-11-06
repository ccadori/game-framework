class Render
{
    constructor(type, fill, width, height)
    {
        this.type = type
        this.fill = fill
        this.width = width
        this.height = height
    }

    getSize()
    {
        return {
            width : this.width,
            height : this.height
        }
    }
}