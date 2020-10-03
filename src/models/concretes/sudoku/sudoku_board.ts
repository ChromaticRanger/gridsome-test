
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';

//
// Sudoku board extends the Composite GameBoard
// So contains the array of cells and declares itself as a composite
//
export class SudokuBoard extends AbstractBoardComponent {

    public getComponent(coord: Coord, comptype: ComponentType, canvas_width: number, canvas_height: number): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }

    public getComponents(coord: import("../../coord").Coord): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    constructor() {
        super();
    }

    public handleKey(keycode: number): void {
        // console.log();
        // console.log(`Sudoku Board: Key Pressed was: ${keycode}`);
        // super.handleKey(keycode);
    }

    public clicked(): void {
        // console.log();
        // console.log('Sudoku Board: Board was clicked');
        // console.log('Finding game cell and passing click down');
        // // implement finding the cell that was clicked on
        // super.clicked();
    }

    public draw(): void {
        console.log();
        console.log('Sudoku Board: Drawing Board');
        // draw children using GameBoard default implementation
        this.draw();
    }
}

