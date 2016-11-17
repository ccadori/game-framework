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