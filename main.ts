namespace SpriteKind {
    export const shield = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    ispowerup = 1
    pause(30000)
    ispowerup = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ispowerup == 1) {
        dart = sprites.createProjectileFromSprite(img`
. . . . . . . 7 7 7 7 7 f f . . 
. . . . . . . . 7 7 7 7 4 4 . . 
. . . . . . . . . . . . f f . . 
. . . . . . . . . . . . f a . . 
. . . . . . . . . . . . a f . . 
. . . . . . . . . . f f f f f . 
. . . . 2 4 5 . f f f f f f f f 
. . . . 2 4 5 f f f f a a a f f 
. . . . 2 4 5 . f f f f f f f f 
. . . . . . . . . . f f f f f . 
. . . . . . . . . . . . a f . . 
. . . . . . . . . . . . f a . . 
. . . . . . . . . . . . f f . . 
. . . . . . . . 7 7 7 7 4 4 . . 
. . . . . . . 7 7 7 7 7 f f . . 
. . . . . . . . . . . . . . . . 
`, spaceplane, 200, 0)
    } else {
        dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 5 5 . . . . . . 
. . . . . . . 5 . . 2 . . . . . 
. . . . . . 5 5 5 2 2 2 . . . . 
. . . . . . . 5 . . 2 . . . . . 
. . . . . . . . 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spaceplane, 200, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shield, function (sprite, otherSprite) {
    otherSprite.destroy()
    is_shield = 1
    pause(30000)
    is_shield = 0
})
let power_shield: Sprite = null
let POWERUP: Sprite = null
let bad_guy: Sprite = null
let is_shield = 0
let dart: Sprite = null
let ispowerup = 0
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 4 4 4 . . 2 2 . . 2 2 . . . . 
. . 4 4 . . 2 2 . . 2 2 . . . . 
. . 4 4 . . 2 2 2 2 2 2 8 . . . 
. 4 4 2 5 5 2 2 2 2 2 2 8 8 . . 
. 4 4 2 5 5 2 2 2 2 2 2 8 . . . 
. . 4 4 . . 2 2 2 2 2 2 . . . . 
. . 4 4 . . 2 2 . . 2 2 . . . . 
. 4 4 4 . . 2 2 . . 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spaceplane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spaceplane, 200, 200)
game.onUpdateInterval(500, function () {
    bad_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 6 8 8 . . . . . . . . 
. . . . 6 8 8 8 . . . . . . . . 
. . . 7 2 2 2 5 5 2 2 2 5 . 5 . 
a a 7 7 2 2 5 5 5 2 2 2 . 5 5 . 
. . . 7 2 5 5 5 5 2 2 2 5 . . 5 
. . . . 5 5 5 5 5 . . . 5 5 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bad_guy.setVelocity(-100, 0)
    bad_guy.setPosition(180, Math.randomRange(0, 120))
})
game.onUpdateInterval(60000, function () {
    POWERUP = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 2 2 2 7 . . . . . . 
. . . . . 7 2 2 2 7 . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    POWERUP.setVelocity(-50, 0)
    POWERUP.setPosition(180, Math.randomRange(0, 120))
})
game.onUpdateInterval(30000, function () {
    power_shield = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 7 7 8 . . . . . . 
. . . . . . 8 7 7 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.shield)
    power_shield.setVelocity(-50, 0)
    power_shield.setPosition(180, Math.randomRange(0, 120))
})
