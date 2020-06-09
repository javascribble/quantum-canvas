import { raise, preventDefault } from '../../references/quantum.js';

const click = 'click';

export const raiseClick = element => event => {
    preventDefault(event);
    raise(element, new Event(click));
};