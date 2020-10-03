
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';

//
// SudokuUserValue extends FixedValue which is a leaf component of a composite
// heirarchy. It represents a value entered by a user during completion of a sudoku puzzle.
//
export class SudokuUserValue extends AbstractBoardComponent {

    public getComponent(coord: Coord, comptype: ComponentType, canvas_width: number, canvas_height: number): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }
    public getComponents(coord: import("../../coord").Coord): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }
    
    constructor(value: string, color: string) {
        super();
    }

    public handleKey(keycode: number): void {
        // console.log(`SudokuUserValue: Key Pressed was: ${keycode}`);
    }

    public clicked(): void {
        // console.log('SudokuUserValue was clicked');
    }

    public draw(): void {
        console.log('SudokuUserValue: is being drawn');
    }
    
}
