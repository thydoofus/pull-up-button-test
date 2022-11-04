keyboard.startKeyboardService()
let switch_state = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == switch_state && switch_state == 0) {
        basic.showIcon(IconNames.Happy)
        control.waitMicros(200)
        basic.showIcon(IconNames.Heart)
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + "v", false)
        switch_state = 1
    }
    if (pins.digitalReadPin(DigitalPin.P1) == switch_state) {
        basic.showIcon(IconNames.Sad)
        control.waitMicros(200)
        basic.showIcon(IconNames.Heart)
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + "v", false)
        switch_state = 0
    }
})
