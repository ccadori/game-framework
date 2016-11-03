class Position
{
    constructor(x,y,z)
    {
        this.x = x
        this.y = y
        this.z = z
    }

    move(x,y,z)
    {
        this.x += x
        this.y += y
        this.z += z
    }

    moveTo(x,y,z)
    {
        this.x = x
        this.y = y
        this.z = z
    }
}