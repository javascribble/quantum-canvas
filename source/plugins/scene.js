import { Canvas } from '../elements/canvas.js';

const next = Canvas.prototype.integrate;
Canvas.prototype.integrate = async function (api) {
    const { options, loadMap, drawMap } = api;
    const scenes = new Map();

    api.loadScene = async index => {
        const scene = { ...options.scenes[index] };
        for (const map of scene.maps) {
            await loadMap(map);
        }

        scenes.set(index, scene);
    };

    api.applyScene = index => {
        const scene = scenes.get(index);
        for (const map of scene.maps) {
            quantum.animate(() => {
                drawMap(map);
                return true;
            });
        }
    }

    api.clearScene = index => { };

    // for (const defaultScene of options.defaultScenes) {
    //     await api.loadScene(defaultScene);
    //     api.applyScene(defaultScene);
    // }

    next?.call(this, api);
};