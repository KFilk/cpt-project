// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140028000101010101010101010101010101010101010101010000000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000401010000000000000000000000000000000202020101000000000000000000000000000000000000010105000000000000000002020602000000000001010700000000000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000020206020000000000000000000101000000000000000000000000000005000000010100000000000000000000000000000700000001010000000000000000000000000000000000000101000000020000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000700000000000000000000000000010100000002060202000000020602000000000001010000000000000000000000000000000000000101000000000000000000000000000000000000010102000000000000000000000000000000000001010000000000000000000000000000000000000101000000000000000000000000000002060200010100000000000000000000000000000000000001010000020202000000000000000000000000000101000000000000000000000000000000000000010100000000000000000000000000000000000201010000000000000000000000000000000000000101050000000000000000000000000000000000010107000000000000000000000700000000000001010000000000000000000202060200000000000101000000000000000000000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000000000202060200000000000000000000010100000000000000000000000000000000000001010000000000000000000000000000000000000101000003000000000000000000000000000705010101010101010101010101010101010101010101`, img`
22222222222222222222
2..................2
2..................2
2..................2
2...............2222
2..................2
2.........2222.....2
2..................2
2..................2
2..................2
2.....2222.........2
2..................2
2..................2
2..................2
2...2..............2
2..................2
2..................2
2..................2
2...2222...222.....2
2..................2
2..................2
22.................2
2..................2
2..............222.2
2..................2
2..222.............2
2..................2
2.................22
2..................2
2..................2
2..................2
2.........2222.....2
2..................2
2..................2
2..................2
2....2222..........2
2..................2
2..................2
2..................2
22222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
