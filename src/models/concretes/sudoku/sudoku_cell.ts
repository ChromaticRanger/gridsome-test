
import { AbstractGameCell } from '../../abstracts/abstract_gamecell';

//
// SudokuCell extends GameCell
//
export class SudokuCell extends AbstractGameCell {
    
    constructor(x_pos: number, y_pos: number) {
        super();
        this.x_pos = x_pos;
        this.y_pos = y_pos;
    } 

    // Default implementation will simply log keycode that was pressed
    handleKey(keycode: number): void {
        // console.log(`SudokuCell [${this.x_pos},${this.y_pos}]: Key Pressed was: ${keycode}`);
    }

    // Default implementation will simply log that the cell was clicked
    clicked(): void {
        // console.log(`SudokuCell [${this.x_pos},${this.y_pos}]: Cell was clicked`);
    }
    
    // Default implementation will simply log that the cell is being drawn
    draw(): void {
        console.log(`SudokuCell [${this.x_pos},${this.y_pos}]: Cell is being drawn`);
        this.draw();
    }

}

