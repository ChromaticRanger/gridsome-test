
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';

//
// SudokuCell extends GameCell
//
export class SudokuCell extends AbstractBoardComponent {
    
    public getComponent(coord: Coord, comptype: ComponentType, canvas_width: number, canvas_height: number): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }
    public getComponents(coord: import("../../coord").Coord): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }
    
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

