import { Quantum, define } from '../../references/quantum.js';
import { element } from '../templates/element.js';

export class Element extends Quantum {
    constructor() {
        super(element);
    }
}

define(Element);