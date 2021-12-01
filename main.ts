radio.setGroup(200)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
