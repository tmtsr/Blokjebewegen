function start_spel () {
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
    spel_actief = 1
}
input.onButtonPressed(Button.A, function () {
    if (spel_actief == 1) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    } else {
        start_spel()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (spel_actief == 1) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    } else {
        start_spel()
    }
})
input.onButtonPressed(Button.B, function () {
    if (spel_actief == 1) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    } else {
        start_spel()
    }
})
let spel_actief = 0
let y = 0
let x = 0
start_spel()
basic.forever(function () {
    if (spel_actief == 1) {
        basic.pause(1000)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        if (y == 2 && x < 3) {
            basic.showIcon(IconNames.Sad)
            spel_actief = 0
        } else {
            if (y == 4) {
                if (x == 1) {
                    basic.showIcon(IconNames.Happy)
                    spel_actief = 0
                } else {
                    basic.showIcon(IconNames.Sad)
                    spel_actief = 0
                }
            }
        }
    } else {
    	
    }
})
