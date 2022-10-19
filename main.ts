controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite2.sayText("\"push A\"")
    } else {
        mySprite2.sayText("\"push B\"")
    }
}
let randomPick = 0
let mySprite2: Sprite = null
game.splash("Push A or B as directed")
mySprite2 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
