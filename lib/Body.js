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
            x : this.scale.x,
            y : this.scale.y
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