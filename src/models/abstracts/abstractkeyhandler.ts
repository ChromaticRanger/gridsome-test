
import { IKeyComponent } from '../../interfaces/IKeyComponent';
import { CanvasManager } from '../../managers/canvasmanager';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';

export abstract class AbstractKeyer implements IKeyComponent {

    public cm!: CanvasManager;

    public abstract keyGame(game: AbstractBoardComponent): void;    
    public abstract keyBoard(board: AbstractBoardComponent): void; 
    public abstract keyCell(cell: AbstractBoardComponent): void;
    public abstract keyBackground(background: AbstractBoardComponent): void;
    public abstract keyDecoration(decor: AbstractBoardComponent): void; 
    public abstract keyFixedValue(fixed: AbstractBoardComponent): void;
    public abstract keyUserValue(userVal: AbstractBoardComponent): void;

}
