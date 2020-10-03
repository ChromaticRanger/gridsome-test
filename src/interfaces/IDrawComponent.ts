
import { AbstractBoardComponent } from "../models/abstracts/abstract_boardcomponent";

//
// This interface will represent the Visitor pattern methods
// that a drawer needs to draw a full game board of any type
//
export interface IDrawComponent {
    drawGame(game: AbstractBoardComponent): void;
    drawBoard(board: AbstractBoardComponent): void;
    drawCell(cell: AbstractBoardComponent): void;
    drawBackground(background: AbstractBoardComponent): void;
    drawDecoration(decor: AbstractBoardComponent): void;
    drawFixedValue(fixed: AbstractBoardComponent): void;
    drawUserValue(userVal: AbstractBoardComponent): void;
}
