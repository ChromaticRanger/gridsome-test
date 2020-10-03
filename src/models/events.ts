
import { IEvent } from '../interfaces/IEvent';

export class KeyEvent implements IEvent {

    name: string;
    code: string | number;

    constructor(name: string, code: string | number) {
        this.name = name;
        this.code = code;
    }
}

export class ClickEvent implements IEvent {

    name: string;
    code: string | number;

    constructor(name: string, code: string | number) {
        this.name = name;
        this.code = code;
    }
}

export class DrawEvent implements IEvent {

    name: string;
    code: string | number;

    constructor(name: string, code: string | number) {
        this.name = name;
        this.code = code;
    }
}
