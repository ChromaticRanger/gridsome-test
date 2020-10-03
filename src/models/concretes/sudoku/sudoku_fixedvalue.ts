
import { AbstractFixedValue } from '../../abstracts/abstract_fixedvalue';

//
// SudokuFixedValue extends FixedValue which is a leaf component of a composite
// heirarchy. It represents a given value at the start of a sudoku puzzle.
//
export class SudokuFixedValue extends AbstractFixedValue {
    
    constructor(value: string, color: string) {
        super();
        this.value = value;
        this.color = color;
    }

    public handleKey(keycode: number): void {
        // console.log(`SudokuFixedValue: Key Pressed was: ${keycode}`);
    }

    public clicked(): void {
        // console.log('SudokuFixedValue was clicked');
    }

    public draw(): void {
        console.log(`\tSudokuFixedValue: ${this.value} is being drawn in ${this.color}`);
    }
    
}
