
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';

// 
// SudokuBackground extends Background which is a composite
//
export class SudokuBackground extends AbstractBoardComponent {

    public getComponent(coord: Coord, comptype: ComponentType, canvas_width: number, canvas_height: number): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }
    public getComponents(coord: Coord): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

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
