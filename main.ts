input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    servoS0angle += -30
    if (servoS0angle < 0) {
        servoS0angle = 180
    } else if (servoS0angle > 180) {
        servoS0angle = 0
    } else {
    	
    }
    wuKong.setServoAngel(wuKong.ServoList.S0, servoS0angle)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    servoS1angle += 30
    if (servoS1angle < 0) {
        servoS1angle = 180
    } else if (servoS1angle > 180) {
        servoS1angle = 0
    } else {
    	
    }
    wuKong.setServoAngel(wuKong.ServoList.S1, servoS1angle)
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
wuKong.setLightMode(wuKong.LightMode.OFF)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
servoS0angle = 90
servoS1angle = 90
