
import { AbstractKeyer } from '../abstracts/abstractkeyhandler';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { CanvasManager } from '../../managers/canvasmanager';

export class MiniSudokuKeyHandler extends AbstractKeyer {
    
    constructor(cm: CanvasManager) { 
        super();
        this.cm = cm;
    }

    public keyGame(game: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }    

    public keyBoard(board: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public keyCell(cell: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public keyBackground(background: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public keyDecoration(decor: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public keyFixedValue(fixed: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
    public keyUserValue(userVal: AbstractBoardComponent): void {
        throw new Error("Method not implemented.");
    }
    
}
