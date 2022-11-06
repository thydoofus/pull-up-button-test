input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    control.waitMicros(200)
    basic.showIcon(IconNames.Heart)
    keyboard.sendSimultaneousKeys(" ", false)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
    control.waitMicros(200)
    basic.showIcon(IconNames.Heart)
    keyboard.sendSimultaneousKeys(keyboard.modifiers(keyboard._Modifier.shift), false)
})
mouse.startMouseService()
let switch_state = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == switch_state) {
        basic.showIcon(IconNames.Happy)
        control.waitMicros(200)
        basic.showIcon(IconNames.Heart)
        mouse.click()
    }
})
