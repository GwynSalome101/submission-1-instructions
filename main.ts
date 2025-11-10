basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # # # .
    `)
basic.clearScreen()
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.North)
    basic.pause(2000)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.North)
    basic.pause(450)
    basic.showArrow(ArrowNames.West)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
