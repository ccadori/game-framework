class Game
{
    static start()
    {
        Game.update()
    }

    static update()
    {   
        let deltaTime = 0
        if (Game.lastUpdate)
            deltaTime = (new Date() - Game.lastUpdate) / 1000

        if (Game.objects instanceof Array && Game.objects.length > 0)
        {
            for (let object of Game.objects)
                object.update(deltaTime)

            Camera.render(Game.objects)
        }

        Game.lastUpdate = new Date()

        setTimeout(Game.update, 1000/30)
    }

    static addObject(object)
    {
        if (!Game.objects)
            Game.objects = new Array()

        Game.objects.push(object)
    }
}