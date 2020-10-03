
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';

// 
// AnagramcrossBackground extends Background which is a composite
//
export class AnagramcrossBackground extends AbstractBoardComponent {

    public getComponent(coord: Coord, comptype: ComponentType): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }

    public getComponents(coord: import("../../coord").Coord): import("../../abstracts/abstract_boardcomponent").AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    constructor(color: string) {
        super();
        this.color = color; 
    }

    // Default implementation will simply log keycode that was pressed
    handleKey(keycode: number): void {
        console.log(`AnagramcrossBackground: Key Pressed was: ${keycode}`);
    }

    // Default implementation will simply log that the cell was clicked
    clicked(): void {
        console.log(`AnagramcrossBackground: was clicked`);
    }
    
    // Default implementation will simply log that the cell is being drawn
    draw(): void {
        console.log(`AnagramcrossBackground: is being drawn`);
    }

}
