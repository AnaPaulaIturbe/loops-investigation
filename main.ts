basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Duck)
        basic.pause(500)
        basic.showIcon(IconNames.Giraffe)
        basic.pause(200)
    }
})
