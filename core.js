class Component {
    constructor() {

    }

    setObject(object) {
        this.object = object
    }

    update(deltaTime) {

    }

    start() {

    }
}

class Body extends Component {
    constructor(x, y, z) {
        super()
        this.position = {
            x: x,
            y: y,
            z: z
        }
        this.pivot = {
            x: 0.5,
            y: 0.5
        }
        this.scale = {
            x: 1,
            y: 1
        }
        this.rotation = 0
        this.childrens = new Array()
    }

    draw(context) {
        let centerOfMass = this.getCenterOfMass()
        let calculatedPosition = Game.camera.getRenderPosition(this.getCalculatedPosition(), {
            x: this.scale.x,
            y: this.scale.y
        })
        if (this.parent instanceof Body)
            calculatedPosition = this.getCalculatedPosition()

        context.save()
        context.scale(this.scale.x, this.scale.y)
        context.translate(calculatedPosition.x + centerOfMass.x, calculatedPosition.y + centerOfMass.y)
        context.rotate(this.rotation * Math.PI / 180)

        if (this.object.render) {
            context.fillStyle = this.object.render.fill
            context.fillRect(-centerOfMass.x, -centerOfMass.y, this.object.render.width, this.object.render.height)
        }
        if (this.childrens instanceof Array && this.childrens.length > 0) {
            this.childrens.sort(function (a, b) {
                return a.body.getCalculatedPosition().z - b.body.getCalculatedPosition().z
            })

            for (let child of this.childrens)
                child.draw(context)
        }

        context.restore() // Recovering the canvas state
    }

    setParent(parent) {
        if (this.parent instanceof Body)
            this.parent.removeChild(this)

        this.parent = parent

        if (this.parent instanceof Body)
            this.parent.addChild(this)
    }

    addChild(child) {
        this.childrens.push(child)
    }

    removeChild(child) {
        let index = this.childrens.findIndex(function (d) { return d == child })
        if (index > -1)
            this.childrens.splice(index, 1)
    }

    getCenterOfMass() {
        if (this.object.render)
            return {
                x: this.object.render.width * this.pivot.x,
                y: this.object.render.height * this.pivot.y
            }
        else
            return { x: 0, y: 0 }
    }

    getCalculatedPosition() {
        let centerOfMass = this.getCenterOfMass()

        return {
            x: this.position.x - centerOfMass.x,
            y: this.position.y - centerOfMass.y,
            z: this.position.z
        }
    }
}

class Camera extends Component {
    constructor(canvas) {
        super()
        this.canvas = canvas
        this.context = canvas.getContext("2d")

        Input.setCanvasEvents(canvas)
    }

    render(objects) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        objects.sort(function (a, b) { return a.body.getCalculatedPosition().z - b.body.getCalculatedPosition().z })

        for (let object of objects) {
            if (object.body.parent instanceof Body)
                continue

            object.body.draw(this.context)
        }
    }

    getRenderPosition(position, scale) {
        let cameraPosition = {
            x: this.object.body.position.x - ((this.canvas.width / 2) / scale.x),
            y: this.object.body.position.y - ((this.canvas.height / 2) / scale.y)
        }

        return {
            x: position.x - cameraPosition.x,
            y: position.y - cameraPosition.y
        }
    }
}

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

class Input {
    static setCanvasEvents(canvas) {
        canvas.addEventListener('mousedown', Input.keyDown)
        canvas.addEventListener('mouseup', Input.keyUp)
    }

    static keyDown(event) {
        if (!Input.pressedKeys)
            Input.pressedKeys = new Array()

        let keyCode = event.keyCode || 223 // mouse code

        if (Input.pressedKeys.indexOf(keyCode) == -1) {
            Input.pressedKeys.push(keyCode)
        }
    }

    static keyUp(event) {
        if (!Input.pressedKeys)
            return;

        let keyCode = event.keyCode || 223 // mouse code
        let index = Input.pressedKeys.indexOf(keyCode)

        if (index > -1)
            Input.pressedKeys.splice(index, 1)
    }

    static isPressed(key) {
        if (!Input.pressedKeys)
            return false

        if (Input.pressedKeys.indexOf(key) > -1)
            return true
        else
            return false
    }
}

window.addEventListener('keydown', Input.keyDown)
window.addEventListener('keyup', Input.keyUp)

let KeyCode = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222,
    mouse: 223
}

class Object {
    constructor(x, y, z, render) {
        this.components = new Array()
        this.body = this.addComponent(new Body(x, y, z))
        this.render = render
    }

    getComponent(type) {
        for (let component of this.components)
            if (component instanceof type)
                return component
    }

    addComponent(component) {
        this.components.push(component)

        component.setObject(this)
        component.start()

        return component
    }

    update(deltaTime) {
        for (let component of this.components)
            component.update(deltaTime)
    }
}

class Render {
    constructor(type, fill, width, height) {
        this.type = type
        this.fill = fill
        this.width = width
        this.height = height
    }

    getSize() {
        return {
            width: this.width,
            height: this.height
        }
    }
}