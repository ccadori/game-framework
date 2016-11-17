class Walker extends Component {
    constructor(velocity, camera) {
        super()
        this.velocity = velocity
        this.camera = camera
    }

    update(deltaTime) {
        //Movementation
        if (Input.isPressed(KeyCode.downarrow)) {
            this.object.body.position.y += this.velocity * deltaTime
            this.object.body.rotation = 0
        }
        else if (Input.isPressed(KeyCode.uparrow)) {
            this.object.body.position.y -= this.velocity * deltaTime
            this.object.body.rotation = 180
        } else if (Input.isPressed(KeyCode.leftarrow)) {
            this.object.body.position.x -= this.velocity * deltaTime
            this.object.body.rotation = 90
        } else if (Input.isPressed(KeyCode.rightarrow)) {
            this.object.body.position.x += this.velocity * deltaTime
            this.object.body.rotation = 270
        }

        // Camera Follow 
        this.camera.body.position.x = this.object.body.position.x
        this.camera.body.position.y = this.object.body.position.y
    }
}