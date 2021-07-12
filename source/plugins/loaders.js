const { loaders } = quantum;

const loadImage = async url => {
    const image = new Image();
    image.src = url;
    await image.decode();
    return Promise.resolve(image);
};

loaders.png = loadImage;
loaders.jpg = loadImage;