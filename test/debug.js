import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/node.js';
import '/source/extensions/sprite.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const [characterImage, tilemapImage] = document.querySelectorAll('img');

const { Node, Sprite } = canvas;

const mapSize = 10;
const tileSize = 64;

const tiles = [];
for (let row = 0; row < tilemapImage.height / tileSize; row++) {
    for (let column = 0; column < tilemapImage.width / tileSize; column++) {
        tiles.push({
            image: tilemapImage,
            sx: column * tileSize,
            sy: row * tileSize,
            sw: tileSize,
            sh: tileSize
        });
    }
}

const tilemap = [];
for (let i = 0; i < mapSize; i++) {
    for (let ii = 0; ii < mapSize; ii++) {
        tilemap.push(new Sprite({
            ...tiles[Math.round(Math.random())],
            dx: tileSize * (i % mapSize),
            dy: tileSize * (ii % mapSize),
            dw: tileSize,
            dh: tileSize
        }));
    }
}

const characterSprite = new Sprite({
    image: characterImage,
    sx: 0,
    sy: 0,
    sw: characterImage.width,
    sh: characterImage.height,
    dx: -characterImage.width / 2,
    dy: -characterImage.height / 2,
    dw: characterImage.width,
    dh: characterImage.height
});

const characterNode = new Node();
characterNode.drawables.push(characterSprite);
characterNode.transform.translation = { x: 400, y: 400 };

const worldNode = new Node();
worldNode.children.push(characterNode);
worldNode.drawables = tilemap;

quantum.animate(({ elapsed }) => {
    const angle = elapsed * 0.005 % 360;
    const radians = angle * Math.PI / 180;

    characterNode.transform.rotation.z = radians;
    worldNode.transform.translation.x = Math.sin(angle) * 10;

    worldNode.draw(canvas.context);
}).start();

document.body.style.visibility = 'visible';