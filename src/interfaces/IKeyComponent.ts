
import { AbstractBoardComponent } from "../models/abstracts/abstract_boardcomponent";

export interface IKeyComponent {
    keyGame(game: AbstractBoardComponent): void;
    keyBoard(board: AbstractBoardComponent): void;
    keyCell(cell: AbstractBoardComponent): void;
    keyBackground(background: AbstractBoardComponent): void;
    keyDecoration(decor: AbstractBoardComponent): void;
    keyFixedValue(fixed: AbstractBoardComponent): void;
    keyUserValue(userVal: AbstractBoardComponent): void;
}
