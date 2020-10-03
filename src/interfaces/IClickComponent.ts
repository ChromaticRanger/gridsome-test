
import { AbstractBoardComponent } from "../models/abstracts/abstract_boardcomponent";

export interface IClickComponent {
    clickGame(game: AbstractBoardComponent): void;
    clickBoard(board: AbstractBoardComponent): void;
    clickCell(cell: AbstractBoardComponent): void;
    clickBackground(background: AbstractBoardComponent): void;
    clickDecoration(decor: AbstractBoardComponent): void;
    clickFixedValue(fixed: AbstractBoardComponent): void;
    clickUserValue(userVal: AbstractBoardComponent): void;
}
