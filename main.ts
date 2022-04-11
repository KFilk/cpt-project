namespace SpriteKind {
    export const Bone = SpriteKind.create()
}
function Bones () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Bone = sprites.create(img`
            . . . . . . . . . . . f f . . . 
            . . . f f . . . . . f 1 1 f . . 
            . . f 1 1 f . . . . f 1 1 1 f . 
            . f 1 1 1 f . . . f 1 1 1 1 f . 
            . f 1 1 1 1 f . f 1 1 1 f f . . 
            . . f f 1 1 1 f 1 1 1 f . . . . 
            . . . . f 1 1 1 f 1 f . . . . . 
            . . . . . f 1 1 1 f . . . . . . 
            . . . . f 1 f 1 1 1 f . . . . . 
            . . . f 1 1 1 f 1 1 1 f f . . . 
            . f f 1 1 1 f . f 1 1 1 1 f . . 
            f 1 1 1 1 f . . . f 1 1 1 f . . 
            f 1 1 1 f . . . . f 1 1 f . . . 
            . f 1 1 f . . . . . f f . . . . 
            . . f f . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bone)
        tiles.placeOnTile(Bone, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        Bone,
        [img`
            ................
            ................
            ................
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ..fff1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            `,img`
            ................
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ................
            ................
            `,img`
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ................
            ................
            ................
            `,img`
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ................
            ................
            ................
            ................
            `,img`
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ................
            ................
            ................
            ................
            ................
            `,img`
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            ...........ff...
            ...ff.....f11f..
            ..f11f....f111f.
            .f111f...f1111f.
            .f1111f.f111ff..
            ..ff111f111f....
            ....f111f1f.....
            .....f111f......
            ....f1f111f.....
            ...f111f111ff...
            .ff111f.f1111f..
            f1111f...f111f..
            f111f....f11f...
            .f11f.....ff....
            ..ff............
            `],
        200,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Skel.vy == 0) {
        Skel.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bone, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skel,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 . d 1 1 1 1 . . . 
        . . . . 9 9 . 1 1 1 1 d 1 . . . 
        . . . 9 9 . . f d f 1 1 1 . . . 
        . . . 9 9 . . 1 f 1 1 1 d . . . 
        . . . 9 9 . . 1 d 1 d . . . . . 
        . . . f f . . 1 1 1 . . . . . . 
        . . d 1 1 1 . d 1 d d 1 1 . . . 
        . . . 1 d 1 d 1 . 1 . 1 1 d 1 . 
        . . . . 1 d . . 1 d 1 . . . d 1 
        . . . . . . . d 1 1 d 1 . . . d 
        . . . . . . . 1 1 . 1 1 . . . . 
        . . . . . . d 1 . . . 1 d . . . 
        . . . . . . 1 1 . . . . 1 1 . . 
        . . . . . 1 . d . . . . . d . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 . d 1 1 1 1 . . . 
        . . . . 9 9 . 1 1 1 1 d 1 . . . 
        . . . 9 9 . . f d f 1 1 1 . . . 
        . . . 9 9 . . 1 f 1 1 1 d . . . 
        . . . 9 9 . . 1 d 1 d . . . . . 
        . . . f f . . 1 1 1 . . . . . . 
        . . d 1 1 1 . d 1 d d 1 1 . . . 
        . . . 1 d 1 d 1 . 1 . 1 1 d 1 . 
        . . . . 1 d . . 1 d 1 . . . d 1 
        . . . . . . . d 1 1 d 1 . . . d 
        . . . . . . . 1 1 . 1 d . . . . 
        . . . . . . d 1 . . . 1 . . . . 
        . . . . . d 1 . . . . d . . . . 
        . . . . . 1 . . . . d 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 . d 1 1 1 1 . . . 
        . . . . 9 9 . 1 1 1 1 d 1 . . . 
        . . . 9 9 . . f d f 1 1 1 . . . 
        . . . 9 9 . . 1 f 1 1 1 d . . . 
        . . . 9 9 . . 1 d 1 d . . . . . 
        . . . f f . . 1 1 1 . . . . . . 
        . . d 1 1 1 . d 1 d d 1 1 . . . 
        . . . 1 d 1 d 1 . 1 . 1 1 d 1 . 
        . . . . 1 d . . 1 d 1 . . . d 1 
        . . . . . . . d 1 1 d 1 . . . d 
        . . . . . . . 1 1 . 1 d . . . . 
        . . . . . . . d . . . 1 . . . . 
        . . . . . . . 1 . . . d . . . . 
        . . . . . . . d . . . 1 . . . . 
        `],
    200,
    true
    )
})
function Enemy2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Mushroom = sprites.create(img`
            . . . . . . c c c c . . . . . . 
            . . . . c c 9 9 9 9 c c . . . . 
            . . . c b 9 9 9 9 f f b c . . . 
            . . c b 9 9 9 9 9 f b b b c . . 
            . c c b b f 9 9 9 9 b b 9 c c . 
            c c f b b f 9 9 9 9 9 9 9 b c c 
            c b f f f 9 9 9 9 9 f f b b b c 
            c b b b 9 9 b b 9 9 b b f f b c 
            c b b b b f f b b 9 b f f f b c 
            . c b b b b f f b b b b b b c . 
            . . c c b b b b b b b b c c . . 
            . . . . c c c c c c c c . . . . 
            . . . . . . b f f b . . . . . . 
            . . . . . . b f f b b . . . . . 
            . . . . . b b d f f b . . . . . 
            . . . . . b d d f f b . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Mushroom, value)
        Mushroom.setVelocity(-50, 0)
        Mushroom.setBounceOnWall(true)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skel,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 d . 9 9 . . . . . 
        . . . 1 d 1 1 1 1 . 9 9 . . . . 
        . . . 1 1 1 f d f . . 9 9 . . . 
        . . . d 1 1 1 f 1 . . 9 9 . . . 
        . . . . . d 1 d 1 . . 9 9 . . . 
        . . . . . . 1 1 1 . . f f . . . 
        . . . 1 1 d d 1 d . 1 1 1 d . . 
        . 1 d 1 1 . 1 . 1 d 1 d 1 . . . 
        1 d . . . 1 d 1 . . d 1 . . . . 
        d . . . 1 d 1 1 d . . . . . . . 
        . . . . 1 1 . 1 1 . . . . . . . 
        . . . d 1 . . . 1 d . . . . . . 
        . . 1 1 . . . . 1 1 . . . . . . 
        . . d . . . . . d . 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 d . 9 9 . . . . . 
        . . . 1 d 1 1 1 1 . 9 9 . . . . 
        . . . 1 1 1 f d f . . 9 9 . . . 
        . . . d 1 1 1 f 1 . . 9 9 . . . 
        . . . . . d 1 d 1 . . 9 9 . . . 
        . . . . . . 1 1 1 . . f f . . . 
        . . . 1 1 d d 1 d . 1 1 1 d . . 
        . 1 d 1 1 . 1 . 1 d 1 d 1 . . . 
        1 d . . . 1 d 1 . . d 1 . . . . 
        d . . . 1 d 1 1 d . . . . . . . 
        . . . . d 1 . 1 1 . . . . . . . 
        . . . . 1 . . . 1 d . . . . . . 
        . . . . d . . . . 1 d . . . . . 
        . . . . 1 d . . . . 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 d . 9 9 . . . . . 
        . . . 1 d 1 1 1 1 . 9 9 . . . . 
        . . . 1 1 1 f d f . . 9 9 . . . 
        . . . d 1 1 1 f 1 . . 9 9 . . . 
        . . . . . d 1 d 1 . . 9 9 . . . 
        . . . . . . 1 1 1 . . f f . . . 
        . . . 1 1 d d 1 d . 1 1 1 d . . 
        . 1 d 1 1 . 1 . 1 d 1 d 1 . . . 
        1 d . . . 1 d 1 . . d 1 . . . . 
        d . . . 1 d 1 1 d . . . . . . . 
        . . . . d 1 . 1 1 . . . . . . . 
        . . . . 1 . . . d . . . . . . . 
        . . . . d . . . 1 . . . . . . . 
        . . . . 1 . . . d . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > 0) {
        info.changeLifeBy(-1)
        otherSprite.destroy()
    } else {
    	
    }
})
let Mushroom: Sprite = null
let Bone: Sprite = null
let Skel: Sprite = null
info.setLife(2)
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    fffffffcffffffbffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
    ffffffcffffffffbdffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
    fcfffffffcdcdffdffdccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
    fffffffffdbddcfffffcdddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
    fcffffbffbffffffffbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
    fcbffffffcfffffffcddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
    fdcccffffdbffcffccddddddddddddddddddddddccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
    fffffffffffffffcdddddddddddddddddddddddccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
    ffffffffffffffcbdddddddddddddddddddddddccccddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
    fffffffddcfffddddddddddddddddddddddddddcccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffdddbffbddddddddddddddddddddddddccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
    ffffffcbfcccddddddddddddddddddddddddddcccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
    fffffffffcfdddddddddddddddddddddddddddcccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
    ffffffffdfcdddddddddddddddddddddddddddccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
    ffffffffcfbddddddddddddddddddddddddddcccccccccddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
    fffffffcdcdddddddddddddddddddddddddddccccccccccdddddddcccdddddddddcccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
    fffffbfffcddddddddddddddddddddddddddcccccccccccdddddddccccdddcddddcccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fccffdcbfbddddddddddddddddddddddddddccccccccccccddddddccccddcccdddcccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fffcffcdfbdddddddddddddddddddddddddcccccccccccccccddddcc1cddcccddccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    ffddfffbbbddddddddddddddddddddddddccccccccccccccccddddcc1cddcccddc11cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
    cfdffffbcdddddddddddddddddddddddddccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
    ffffffccddddddddddddddddddddddddddccccccccccccccccddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
    ffcfffbdbdddddddddddddddddddddddddddccccccccccccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
    fffffcddddddddddddddddddddddddddddddcc1cc1ccd1ccddddddcccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
    fffffbddddddddddddddddddddddddddddddcc1cc1ccc1ccdddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
    ffffcbddddddddddddddddddddddddddddddccccccccccccddddddddcccccccccccdddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
    fffccdddddddddddddddddddddddddddddddccccccccccccdddddddddccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
    ffdcbdddddddddddddddddddddddddddddddccccccccccccdddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
    ffccdddddddddddddddddddddddddddddddddccccccccccddddddddddcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
    ffcbddddddddddddddddddddddddddddddddddccccccccddbddddddddcccccccccddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
    ffcbdddddddddddddddddddddddddddddddddddcccccccbcccccccdddcccccccccdddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
    fcbbddddddddddddddddcccbdcccddddccccdddcccccccccccccccccdcccccccccdddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
    fcdddddddddddddddddccccbdccccddcccccdddcccccccccbbccbbbcccccccccccdddddddddddddbdddddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
    ccdddddddddddddddddcccccbccccddcccccdddcccccccccbbcccbbcccccccccccdddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
    dddddddddddddddddddccc1ccccccccc1cccdddcccccccccccccccccccccccccccdddddddddddddbdddbdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
    dddddddddddddddddddcc11ccc11cccc1cccdddccccccccc1111ccccccccccccccdddddddddddddbdddbddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
    dddddddddddddddddddcccccccbccccccccccddcccccccc1111111ccccccccccccdddddddddddddbdddbddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
    dddddddddddddddddddcccccccccccccccccdddccccccc1111b1111cccccccccccdddddddddddddbddbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
    dddddddddddddddddddcccccccccccccccc1bbdccccccc1111bb111cccccccccccdddddbdddddddbddbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
    ddddddddddddddddddddcccccccccccccccccccccccccc111111111cccccccccccbbdddddddddddbddb1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
    dddddddddddddddddddddcccccccccccccbccbbccccccc1111111b1cccccccccccbbbbdddddddddbddb1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
    ddddddddd1ddddddddddddccccccccccccbbcbbccccccc1111111b1ccccccccccccdbddddddddddbbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
    ddddddddd1dddbddddddddccccccccccccbccbcccccccc111111bb1ccccccccccccddddddddddddbbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
    ddddddddd1dddbddddddddcccccccccccccccccccccccc1111111bbccccccccccccdddddddddddbbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
    dddddddddddddbbddbbdddcccccccccccc111d1cccccccd1d1111bbccccccccccccdddddddddddbbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
    dddddddddddddbbddbddddccccccccccccddbccccccccccc1ddddbcccccccccccccddddddddbbdbb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbddbddbbccccccccccccccccccccccccccbcccccccccccccccccbddddddddbbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbbdbddbbccccccccccccccccccccccccccccccccccccccccccccdddddbddddbbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
    dddddddddddddddbdbddb1cccccccccccccccccccccccccccccccccccccccccccccdddddddddbbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
    ddddddddddddddddbbdbbdccccccccccccccccccccccccccccccccccccccccccccbdddddddddbbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddddbbdbbdccccccccccccccccccccccccccccccccccccccccccccbdbdddddddbbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
    ddddddddddddddddbbdb11cccccccccccccccccccccccccccccccccccccccccccccbbbddddddbbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
    ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbbdddddddbbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
    ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bbdddddddbbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
    ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbbdddddbbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
    ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bbdddddbbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
    dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bbddddbbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
    dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bbddddbbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11bdddddbbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bbdddbbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bbdbbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
    bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
    bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
Skel = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 d 1 d 1 . 9 9 . . . . 
    . . . . 1 1 1 1 1 1 . 9 9 . . . 
    . . . . 1 d 1 f d f . . 9 9 . . 
    . . . . d 1 1 1 f 1 . . 9 9 . . 
    . . . . . . 1 d 1 1 . . 9 9 . . 
    . . . . . . . 1 1 1 . . f f . . 
    . . . . d 1 1 d 1 d . 1 d 1 d . 
    . . 1 d 1 1 . 1 . 1 d 1 1 d . . 
    . 1 1 . . . 1 1 d . . 1 d . . . 
    . d . 1 . 1 d 1 1 1 . . . . . . 
    . . . . . 1 1 . d 1 . . . . . . 
    . . . . 1 d . . . 1 1 . . . . . 
    . . . 1 1 . . . . 1 d . . . . . 
    . . . d . 1 . . . 1 . d . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Skel, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Skel.ay = 165
scene.cameraFollowSprite(Skel)
tiles.placeOnRandomTile(Skel, assets.tile`myTile1`)
Bones()
Enemy2()
