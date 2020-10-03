
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { IDrawComponent } from '../../../interfaces/IDrawComponent';

export class AnagramCrossGame extends AbstractBoardComponent {

    public getComponent(
        coord: Coord, 
        comptype: ComponentType
    ): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }    

    public getComponents(coord: Coord): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    public handleKey(keycode: number): void {
        throw new Error("Method not implemented.");
    }
    
    public clicked(clicker: IClickComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public draw(drawer: IDrawComponent): void {
        throw new Error("Method not implemented.");
    }

}
