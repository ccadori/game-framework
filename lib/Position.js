class Position
{
    constructor(x,y)
    {
        this.x = x || 0
        this.y = y || 0
    }

    move(x,y,z)
    {
        this.x += x || 0
        this.y += y || 0
    }

    moveTo(x,y,z)
    {
        this.x = x || 0
        this.y = y || 0
    }
}