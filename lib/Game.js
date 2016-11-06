class Game
{
    static start()
    {
        Game.update()
    }

    static update(lastUpdate)
    {   
        let deltaTime = 0
        if (lastUpdate)
            deltaTime = (new Date() - lastUpdate) / 1000

        if (Game.objects instanceof Array && Game.objects.length > 0)
        {
            for (let object of Game.objects)
                object.update(deltaTime)

            Camera.render(Game.objects)
        }

        setTimeout(Game.update, 1000/30, new Date())
    }

    static addObject(object)
    {
        if (!Game.objects)
            Game.objects = new Array()

        Game.objects.push(object)
    }
}