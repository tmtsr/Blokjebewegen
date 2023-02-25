input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
let y = 0
let x = 0
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    # . . . .
    # . # # #
    `)
x = 0
y = 0
led.plot(x, y)
let spel_actief = 1
basic.forever(function () {
    basic.pause(1000)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    if (y == 2 && x < 3) {
        basic.showIcon(IconNames.Sad)
    } else {
        if (y == 4) {
            if (x == 1) {
                basic.pause(1000)
                basic.showIcon(IconNames.Happy)
            } else {
                basic.pause(1000)
                basic.showIcon(IconNames.Sad)
            }
        }
    }
})
