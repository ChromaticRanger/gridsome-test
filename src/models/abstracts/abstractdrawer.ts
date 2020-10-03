
import { IDrawComponent } from '../../interfaces/IDrawComponent';
import { CanvasManager } from '../../managers/canvasmanager';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';

export abstract class AbstractDrawer implements IDrawComponent {

    public cm: CanvasManager;

    public abstract drawGame(game: AbstractBoardComponent): void;    
    public abstract drawBoard(board: AbstractBoardComponent): void; 
    public abstract drawCell(cell: AbstractBoardComponent): void;
    public abstract drawBackground(background: AbstractBoardComponent): void;
    public abstract drawDecoration(decor: AbstractBoardComponent): void; 
    public abstract drawFixedValue(fixed: AbstractBoardComponent): void;
    public abstract drawUserValue(userVal: AbstractBoardComponent): void;

}
