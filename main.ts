scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    AAA += 1
    if (AAA == 3) {
        game.over(true, effects.hearts)
    } else if (AAA == 2) {
        music.baDing.play()
        game.splash("ステージクリア笑")
        mySprite.setPosition(24, 80)
        tiles.setCurrentTilemap(tilemap`レベル3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -300
        mySprite.setImage(img`
            . . . . c c c . . . c c c . . . 
            . . . . c e e c c c c e e c . . 
            . . . . c 2 2 2 2 2 2 2 2 c . . 
            . . . . c 2 2 2 2 2 2 2 2 c . . 
            . . . . c e e e e e e e e c . . 
            . . c c c 3 d d d d d d d c . . 
            . c 4 5 c 3 d 3 3 d d d 3 c . . 
            . c 4 5 c 3 d 6 6 d d d 6 c . . 
            . c 4 5 4 3 d 6 6 d d d 6 c . . 
            . c c 4 c 4 d d d d d d d c c . 
            . c 1 c 1 c 4 d d d d d d 5 c . 
            . . c 1 1 1 c 4 4 5 5 5 5 5 c . 
            . c 1 1 1 1 1 c 5 5 5 5 5 5 c . 
            . . c 1 1 1 c 4 5 5 5 5 5 5 c . 
            . c 1 c 1 c 1 c c c c c c c c . 
            . . c . c . c . . . . . . . . . 
            `)
    } else {
        mySprite.ay = 300
    }
    tiles.setTileAt(location, assets.tile`tile4`)
    mySprite.setImage(img`
        . . c . c . c . . . . . . . . . 
        . c 1 c 1 c 1 c c c c c c c c . 
        . . c 1 1 1 c 4 5 5 5 5 5 5 c . 
        . c 1 1 1 1 1 c 5 5 5 5 5 5 c . 
        . . c 1 1 1 c 4 4 5 5 5 5 5 c . 
        . c 1 c 1 c 4 d d d d d d 5 c . 
        . c c 4 c 4 d d d d d d d c c . 
        . c 4 5 4 3 d 6 6 d d d 6 c . . 
        . c 4 5 c 3 d 6 6 d d d 6 c . . 
        . c 4 5 c 3 d 3 3 d d d 3 c . . 
        . . c c c 3 d d d d d d d c . . 
        . . . . c e e e e e e e e c . . 
        . . . . c 2 2 2 2 2 2 2 2 c . . 
        . . . . c 2 2 2 2 2 2 2 2 c . . 
        . . . . c e e c c c c e e c . . 
        . . . . c c c . . . c c c . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    mySprite.vy = -100
    for (let 値 of tiles.getTilesByType(assets.tile`tile2`)) {
        tiles.setTileAt(値, assets.tile`tile3`)
        tiles.setWallAt(値, true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.ay < 0) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            mySprite.vy = 100
        }
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -100
        }
    }
})
let AAA = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfffffffcfffcfffcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcfcfffcfcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcfcfcfcfffcfcfcfcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcfffcf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . c . c . c . . . . . . . . . 
    . c 1 c 1 c 1 c c c c c c c c . 
    . . c 1 1 1 c 4 5 5 5 5 5 5 c . 
    . c 1 1 1 1 1 c 5 5 5 5 5 5 c . 
    . . c 1 1 1 c 4 4 5 5 5 5 5 c . 
    . c 1 c 1 c 4 d d d d d d 5 c . 
    . c c 4 c 4 d d d d d d d c c . 
    . c 4 5 4 3 d 6 6 d d d 6 c . . 
    . c 4 5 c 3 d 6 6 d d d 6 c . . 
    . c 4 5 c 3 d 3 3 d d d 3 c . . 
    . . c c c 3 d d d d d d d c . . 
    . . . . c e e e e e e e e c . . 
    . . . . c 2 2 2 2 2 2 2 2 c . . 
    . . . . c 2 2 2 2 2 2 2 2 c . . 
    . . . . c e e c c c c e e c . . 
    . . . . c c c . . . c c c . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`レベル1`)
mySprite.setPosition(24, 80)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
AAA = 1
