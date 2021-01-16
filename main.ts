input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
radio.onReceivedValue(function (name, value) {
    if (name == "servoS0a") {
        servoS0angle = Math.min(180, Math.max(0, value))
        wuKong.setServoAngel(wuKong.ServoList.S0, servoS0angle)
    } else if (name == "servoS1a") {
        servoS1angle = Math.min(180, Math.max(0, value))
        wuKong.setServoAngel(wuKong.ServoList.S1, servoS1angle)
    } else if (name == "stopAll") {
        wuKong.stopAllMotor()
        wuKong.setServoAngel(wuKong.ServoList.S0, 90)
        wuKong.setServoAngel(wuKong.ServoList.S1, 90)
    } else {
        basic.showString(name)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    wuKong.stopAllMotor()
    wuKong.setServoAngel(wuKong.ServoList.S0, 90)
    wuKong.setServoAngel(wuKong.ServoList.S1, 90)
    strip.clear()
    strip.show()
})
let servoS1angle = 0
let servoS0angle = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
radio.setGroup(86)
wuKong.setLightMode(wuKong.LightMode.BREATH)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
servoS0angle = 90
servoS1angle = 90
let startProcessFinnished = 0
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (0 == startProcessFinnished && 3000 < input.runningTime()) {
        wuKong.setLightMode(wuKong.LightMode.OFF)
        strip.clear()
        strip.show()
        startProcessFinnished = 1
    }
    strip.rotate(1)
    strip.show()
    control.waitMicros(200000)
})
