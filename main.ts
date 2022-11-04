input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    control.waitMicros(200)
    basic.showIcon(IconNames.Heart)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
})
keyboard.startKeyboardService()
let switch_state = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == switch_state && switch_state == 0) {
        basic.showIcon(IconNames.Happy)
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
        switch_state = 1
    }
    if (pins.digitalReadPin(DigitalPin.P1) == switch_state) {
        basic.showIcon(IconNames.Sad)
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
        switch_state = 0
    }
})
