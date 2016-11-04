class Game
{
    static start()
    {
        Game.update()
    }

    static update()
    {   
        if (Game.objects instanceof Array && Game.objects.length > 0)
        {
            for (let object of Game.objects)
                object.update()

            Camera.render(Game.objects)
        }

        setTimeout(Game.update, 1000/30)
    }

    static addObject(object)
    {
        if (!Game.objects)
            Game.objects = new Array()

        Game.objects.push(object)
    }
}