class Game {
    static start() {
        Game.update()
    }

    static setCamera(camera) {
        Game.camera = camera

        return Game
    }

    static update(lastUpdate) {
        let deltaTime = 0
        if (lastUpdate)
            deltaTime = (new Date() - lastUpdate) / 1000

        if (Game.objects instanceof Array && Game.objects.length > 0) {
            for (let object of Game.objects)
                object.update(deltaTime)

            Game.camera.render(Game.objects)
        }

        setTimeout(Game.update, 1000 / 60, new Date())
    }

    static addObject(object) {
        if (!Game.objects)
            Game.objects = new Array()

        if (object instanceof Array)
            for (let o of object)
                Game.objects.push(o)
        else
            Game.objects.push(object)
    }
}