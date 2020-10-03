
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';

//
// Anagramcross board extends the Composite GameBoard
// So contains the array of cells and declares itself as a composite
//
export class AnagramcrossBoard extends AbstractBoardComponent {
    
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
    
    constructor() {
        super();
    }

    public handleKey(keycode: number): void {}
    public clicked(): void {}
    public draw(drawer: IDrawComponent): void {}

}

