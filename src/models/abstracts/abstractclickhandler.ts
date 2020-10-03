
import { IClickComponent } from '../../interfaces/IClickComponent';
import { CanvasManager } from '../../managers/canvasmanager';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';

export abstract class AbstractClickHandler implements IClickComponent {

    public cm!: CanvasManager;

    public abstract clickGame(game: AbstractBoardComponent): void;
    public abstract clickBoard(board: AbstractBoardComponent): void;    
    public abstract clickCell(cell: AbstractBoardComponent): void;
    public abstract clickBackground(background: AbstractBoardComponent): void;
    public abstract clickDecoration(decor: AbstractBoardComponent): void;
    public abstract clickFixedValue(fixed: AbstractBoardComponent): void;
    public abstract clickUserValue(userVal: AbstractBoardComponent): void;

}
