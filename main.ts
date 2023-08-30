bluetooth.onUartDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    btMsg2 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.CarriageReturn))
    serial.writeLine("onData -->" + btMsg2)
    if (btMsg2 == "R") {
        basic.showArrow(ArrowNames.West)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (btMsg2 == "L") {
        basic.showArrow(ArrowNames.East)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (btMsg2 == "F") {
        basic.showArrow(ArrowNames.East)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (btMsg2 == "A") {
        basic.showArrow(ArrowNames.East)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        serial.writeLine("Message [" + btMsg2 + "] inconnu !")
    }
})
let btMsg2 = ""
serial.writeLine("Hello")
bluetooth.startUartService()
