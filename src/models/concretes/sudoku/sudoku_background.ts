
import { AbstractBackground } from '../../abstracts/abstract_background';

// 
// SudokuBackground extends Background which is a composite
//
export class SudokuBackground extends AbstractBackground {

    constructor(color: string) {
        super();
        this.color = color;
    }

    // Default implementation will simply log keycode that was pressed
    handleKey(keycode: number): void {
        // console.log(`SudokuBackground: Key Pressed was: ${keycode}`);
    }

    // Default implementation will simply log that the cell was clicked
    clicked(): void {
        // console.log(`SudokuBackground: was clicked`);
    }
    
    // Default implementation will simply log that the cell is being drawn
    draw(): void {
        console.log(`\tSudokuBackground: is being drawn in ${this.color}`);
        for (let x of this.children) {

        }
    }
}
