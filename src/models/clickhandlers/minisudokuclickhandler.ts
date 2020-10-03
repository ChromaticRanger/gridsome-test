
import { AbstractClickHandler } from '../abstracts/abstractclickhandler';
import { MiniSudokuGame } from '../concretes/minisudoku/minisudoku_game';
import { MiniSudokuBoard } from '../concretes/minisudoku/minisudoku_board';
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';
import { MiniSudokuBackground } from '../concretes/minisudoku/minisudoku_background';
import { MiniSudokuDecoration } from '../concretes/minisudoku/minisudoku_decoration';
import { MiniSudokuFixedValue } from '../concretes/minisudoku/minisudoku_fixedvalue';
import { MiniSudokuUserValue } from '../concretes/minisudoku/minisudoku_uservalue';

import { CanvasManager } from '../../managers/canvasmanager';

export class MiniSudokuClickHandler extends AbstractClickHandler {

    private readonly ROW_TOTAL: number = 4;
    private readonly COL_TOTAL: number = 4;
    
    constructor(cm: CanvasManager) { 
        super();
        this.cm = cm;
    }

    clickGame(game: MiniSudokuGame): void {
        console.log(`Clicked in ${game.name} has been activated.`);
    }
    
    clickBoard(board: MiniSudokuBoard): void {

    }
    
    clickCell(cell: MiniSudokuCell): void {
        console.log(`Cell clicked at ${cell.x_pos},${cell.y_pos} .`);
        console.log(`Fixed Value is ${cell.FixedValue.value}`);
        for (const child of cell.children) {
            child.clicked(this);
        }
    }
    
    clickBackground(background: MiniSudokuBackground): void {
        // console.log(`Background`);
        // background.draw
    }
    
    clickDecoration(decor: MiniSudokuDecoration): void {
        // console.log(`Decor`);
    }
    
    clickFixedValue(fixed: MiniSudokuFixedValue): void {
        // console.log(`Fixed Value`);
    }
    
    clickUserValue(userVal: MiniSudokuUserValue): void {
        // console.log(`User Value`);
    }

}
