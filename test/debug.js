import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/extensions/image.js';
import '/source/extensions/path.js';
import '/source/extensions/scene.js';
import '/source/main.js';

const canvas = document.querySelector('quantum-canvas');
const [characterImage, tilemapImage] = document.querySelectorAll('img');

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
            sh: tileSize,
            dx: 0,
            dy: 0,
            dw: tileSize,
            dh: tileSize
        });
    }
}

const tilemap = { children: [] };
for (let i = 0; i < mapSize; i++) {
    for (let ii = 0; ii < mapSize; ii++) {
        const tile = tiles[Math.round(Math.random())];
        tilemap.children.push({
            ...tile,
            dx: tileSize * (i % mapSize),
            dy: tileSize * (ii % mapSize)
        });
    }
}

const characterSprite = {
    image: characterImage,
    sx: 0,
    sy: 0,
    sw: characterImage.width,
    sh: characterImage.height,
    dx: -characterImage.width / 2,
    dy: -characterImage.height / 2,
    dw: characterImage.width,
    dh: characterImage.height,
    transform: {
        translation: { x: 400, y: 400 },
        rotation: { z: 0 },
        scale: { x: 1, y: 1 }
    },
};

const grid = [
    { dx: 64, dy: 64, dw: 64, dh: 64 },
    { dx: 128, dy: 64, dw: 64, dh: 64 },
    { dx: 64, dy: 128, dw: 64, dh: 64 },
    { dx: 128, dy: 128, dw: 64, dh: 64, selected: true }
];

const selected1 = grid.filter(cell => cell.selected);
const path1 = { points: [...grid], style: 'fill', color: { r: 0, g: 0, b: 255, a: 0.3 } };
const path2 = { points: [...selected1], style: 'fill', color: { r: 255, g: 0, b: 0, a: 1 } };
const paths = { children: [path1, path2] };

const world = {
    children: [tilemap, paths, characterSprite],
    transform: {
        translation: { x: 0, y: 0 },
        rotation: { z: 0 },
        scale: { x: 1, y: 1 }
    }
};

quantum.animate(({ elapsed }) => {
    const angle = elapsed * 0.02 % 360;
    const radians = angle * Math.PI / 180;
    const alpha = (Math.sin(angle) + 1) / 2;
    path2.color.a = alpha;

    characterSprite.transform.rotation.z = radians;
    //world.transform.translation.x = alpha * 10;

    canvas.drawScene(world);
}).start();

document.body.style.visibility = 'visible';