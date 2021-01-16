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
        servoS0angle = 90
        servoS0S1diff = 90
        wuKong.setServoAngel(wuKong.ServoList.S0, servoS0angle)
        wuKong.setServoAngel(wuKong.ServoList.S1, servoS0angle)
    } else if (name == "display") {
        if (value == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        } else if (value == 2) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showIcon(IconNames.Skull)
        }
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
let startProcessFinnished = 0
let servoS0S1diff = 0
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
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
music.setVolume(60)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    if (0 == startProcessFinnished && 6000 < input.runningTime()) {
        wuKong.setLightMode(wuKong.LightMode.OFF)
        strip.clear()
        strip.show()
        startProcessFinnished = 1
        music.stopAllSounds()
    }
    // problikávání LED a "animace" displeje
    if (0 == startProcessFinnished) {
        strip.rotate(1)
        strip.show()
        if (Math.randomBoolean()) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . # . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
        }
    }
    if (1 == startProcessFinnished) {
        servoS0S1diff = 180 - servoS0angle - servoS1angle
        strip.clear()
        if (servoS0S1diff > 5) {
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        } else if (servoS0S1diff < -5) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        }
        strip.show()
    }
    control.waitMicros(200000)
})
