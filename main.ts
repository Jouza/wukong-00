input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    wuKong.setServoAngel(wuKong.ServoList.S0, 40)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    wuKong.setServoAngel(wuKong.ServoList.S1, 40)
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
})
basic.showLeds(`
    # . # . #
    . . # . .
    # # . # #
    . . # . .
    # . # . #
    `)
wuKong.setLightMode(wuKong.LightMode.OFF)
