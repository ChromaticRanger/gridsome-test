
import { Coord } from "./models/coord";

export function getInputValue(elementID: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  return inputElement.value;
}

export function logger(message: string): void {
  console.log(message);
}

export function translateMouseCoordsToBoardCoords(
    canvas_width: number,
    canvas_height: number,
    cols: number,
    rows: number,
    mouse_x: number,
    mouse_y: number
): Coord {
    // Translate the given mouse coord to cell coordinates
    let col_width: number = canvas_width / cols;
    let row_height: number = canvas_height / rows;
    let cell_x = Math.floor(mouse_x / col_width);
    let cell_y = Math.floor(mouse_y / row_height);
    return new Coord(cell_x, cell_y);
}

export class SystemColors {
    static BLACK: string = '#000000';
    static WHITE: string = '#FFFFFF';
    static GREEN: string = '#90EE90';
    static RED: string = '#FF0000';
    static YELLOW: string = '#F5F527';
    static ORANGE: string = '#FF4500';
    static BLUE: string = '#0000FF';
    static LIGHT_PURPLE: string = '#F0E3FE';
}

export class SystemKeys {

    // Arrow Keys
    static LEFT_ARROW: number = 37;
    static UP_ARROW: number = 38;
    static RIGHT_ARROW: number = 39;
    static DOWN_ARROW: number = 40;

    // Added VIM motion keys
    static VIM_LEFT: number = 72;
    static VIM_UP: number = 75;
    static VIM_RIGHT: number = 76;
    static VIM_DOWN: number = 74;

    static ONE: number = 49;
    static PAD_ONE: number = 97;
    
    static TWO: number = 50;
    static PAD_TWO: number = 98;
    
    static THREE: number = 51;
    static PAD_THREE: number = 99;
    
    static FOUR: number = 52;
    static PAD_FOUR: number = 100;

}

