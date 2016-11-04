class Camera {
    constructor(position, canvas, width, height) {
        this.canvas = canvas
        this.width = width
        this.height = height
        this.context = canvas.getContext("2d")
        
        this.position = position
    }

    render(objects) {
        let self = this
        console.log(self.height)
        self.context.clearRect(0, 0, self.width, self.height)
        for (let object of objects) {
            if (object.body.fill instanceof Image) {
                self.context.drawImage(
                    object.body.fill,
                    object.body.position.x,
                    object.body.position.y
                )
            }
            else if (object.body.fill instanceof Color) {
                self.context.fillStyle = object.body.fill.color
                self.context.fillRect(
                    object.body.position.x,
                    object.body.position.y,
                    object.body.fill.width,
                    object.body.fill.height
                )
            }
        }
    }
}