radio.setGroup(52)
basic.forever(function () {
    radio.sendString("1")
    radio.setTransmitPower(1)
})
