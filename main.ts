input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    wuKong.setServoAngel(wuKong.ServoList.S0, 45)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    wuKong.setServoAngel(wuKong.ServoList.S1, 135)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    wuKong.stopAllMotor()
    wuKong.setServoAngel(wuKong.ServoList.S0, 90)
    wuKong.setServoAngel(wuKong.ServoList.S1, 90)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
basic.showLeds(`
    # . # . #
    . . # . .
    # # . # #
    . . # . .
    # . # . #
    `)
wuKong.setLightMode(wuKong.LightMode.OFF)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
