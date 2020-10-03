
import { AbstractBoardComponent } from "../../abstracts/abstract_boardcomponent";
import { Coord } from "../../coord";
import { ComponentType } from "../../componenttype";

//
// AnagramcrossCell extends GameCell
//
export class AnagramcrossCell extends AbstractBoardComponent {

    constructor(x_pos: number, y_pos: number) {
        super();
        this.x_pos = x_pos;
        this.y_pos = y_pos;
    } 
    
    public getComponent(
        coord: Coord, 
        comptype: ComponentType
    ): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }

    public getComponents(
        coord: Coord
    ): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    // Default implementation will simply log keycode that was pressed
    handleKey(keycode: number): void {
        console.log(`AnagramcrossCell [${this.x_pos},${this.y_pos}]: Key Pressed was: ${keycode}`);
    }

    // Default implementation will simply log that the cell was clicked
    clicked(): void {
        console.log(`AnagramcrossCell [${this.x_pos},${this.y_pos}]: was clicked`);
    }
    
    // Default implementation will simply log that the cell is being drawn
    draw(): void {
        console.log(`AnagramcrossCell [${this.x_pos},${this.y_pos}]: is being drawn`);
    }

}

