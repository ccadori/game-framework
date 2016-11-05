class Input
{
    static keyDown(event)
    {   
        if (!Input.pressedKeys)
            Input.pressedKeys = new Array()        

        if (Input.pressedKeys.indexOf(event.keyCode) == -1)
        {
            Input.pressedKeys.push(event.keyCode)
        }
    }

    static keyUp(event)
    {
        if (!Input.pressedKeys)
            return;

        let index = Input.pressedKeys.indexOf(event.keyCode)
        if (index > -1)
            Input.pressedKeys.splice(index, 1)
    }

    static isPressed(key)
    {
        if (!Input.pressedKeys)
            return false

        if (Input.pressedKeys.indexOf(key) > -1)
            return true
        else 
            return false
    }
}

Input.keyCode = 
{
    leftArrow   : 37,
    upArrow     : 38,
    rightArrow  : 39,
    downArrow   : 40 
}

window.addEventListener('keydown', Input.keyDown)
window.addEventListener('keyup', Input.keyUp)