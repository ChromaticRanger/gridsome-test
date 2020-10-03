
import { IBuilder } from '../../interfaces/IBuilder';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { MiniSudokuGame } from '../concretes/minisudoku/minisudoku_game';
import { MiniSudokuBoard } from '../concretes/minisudoku/minisudoku_board';
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';
import { MiniSudokuBackground } from '../concretes/minisudoku/minisudoku_background';
import { MiniSudokuDecoration } from '../concretes/minisudoku/minisudoku_decoration';
import { MiniSudokuFixedValue } from '../concretes/minisudoku/minisudoku_fixedvalue';
import { MiniSudokuUserValue } from '../concretes/minisudoku/minisudoku_uservalue';
import { SystemColors } from '../../utility';
import { IMediator } from '../../interfaces/IMediator';
import { PassiveCellState } from '../concretes/minisudoku/cell_passive_state';

//
// A builder that will be responsible for building a MiniSuduko game board
//
export class TestGameBuilder implements IBuilder {

    private mediator: IMediator;

    constructor(mediator: IMediator) {
        this.mediator = mediator; 
    }

    public build(): AbstractBoardComponent {

        // Create a Game object
        // TODO Get the game from a real data source and build dynamically
        let game = new MiniSudokuGame('Mini Sudoku', '9', 'Hard', this.mediator);

        // Add a board to the game
        let board = new MiniSudokuBoard(game, this.mediator);

        // Add some cells to the board
        let cell_00 = new MiniSudokuCell(board, 0,0, this.mediator, new PassiveCellState());
        cell_00.add(new MiniSudokuBackground(cell_00, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_00.add(new MiniSudokuDecoration(cell_00, SystemColors.BLACK, "?", this.mediator));
        cell_00.add(new MiniSudokuFixedValue(cell_00, SystemColors.BLACK, "1", this.mediator));
        cell_00.add(new MiniSudokuUserValue(cell_00, SystemColors.BLUE, "16", this.mediator));

        let cell_10 = new MiniSudokuCell(board, 1,0, this.mediator, new PassiveCellState());
        cell_10.add(new MiniSudokuBackground(cell_10, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_10.add(new MiniSudokuDecoration(cell_10, SystemColors.BLACK, "?", this.mediator));
        cell_10.add(new MiniSudokuFixedValue(cell_10, SystemColors.BLACK, "2", this.mediator));
        cell_10.add(new MiniSudokuUserValue(cell_10, SystemColors.BLUE, "15", this.mediator));
        
        let cell_20 = new MiniSudokuCell(board, 2,0, this.mediator, new PassiveCellState());
        cell_20.add(new MiniSudokuBackground(cell_20, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_20.add(new MiniSudokuDecoration(cell_20, SystemColors.BLACK, "?", this.mediator));
        cell_20.add(new MiniSudokuFixedValue(cell_20, SystemColors.BLACK, "3", this.mediator));
        cell_20.add(new MiniSudokuUserValue(cell_20, SystemColors.BLUE, "14", this.mediator));
        
        let cell_30 = new MiniSudokuCell(board, 3,0, this.mediator, new PassiveCellState());
        cell_30.add(new MiniSudokuBackground(cell_30, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_30.add(new MiniSudokuDecoration(cell_30, SystemColors.BLACK, "?", this.mediator));
        cell_30.add(new MiniSudokuFixedValue(cell_30, SystemColors.BLACK, "4", this.mediator));
        cell_30.add(new MiniSudokuUserValue(cell_30, SystemColors.BLUE, "13", this.mediator));

        let cell_01 = new MiniSudokuCell(board, 0,1, this.mediator, new PassiveCellState());
        cell_01.add(new MiniSudokuBackground(cell_01, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_01.add(new MiniSudokuDecoration(cell_01, SystemColors.BLACK, "?", this.mediator));
        cell_01.add(new MiniSudokuFixedValue(cell_01, SystemColors.BLACK, "5", this.mediator));
        cell_01.add(new MiniSudokuUserValue(cell_01, SystemColors.BLUE, "12", this.mediator));
        
        let cell_11 = new MiniSudokuCell(board, 1,1, this.mediator, new PassiveCellState());
        cell_11.add(new MiniSudokuBackground(cell_11, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_11.add(new MiniSudokuDecoration(cell_11, SystemColors.BLACK, "?", this.mediator));
        cell_11.add(new MiniSudokuFixedValue(cell_11, SystemColors.BLACK, "6", this.mediator));
        cell_11.add(new MiniSudokuUserValue(cell_11, SystemColors.BLUE, "11", this.mediator));
        
        let cell_21 = new MiniSudokuCell(board, 2,1, this.mediator, new PassiveCellState());
        cell_21.add(new MiniSudokuBackground(cell_21, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_21.add(new MiniSudokuDecoration(cell_21, SystemColors.BLACK, "?", this.mediator));
        cell_21.add(new MiniSudokuFixedValue(cell_21, SystemColors.BLACK, "7", this.mediator));
        cell_21.add(new MiniSudokuUserValue(cell_21, SystemColors.BLUE, "10", this.mediator));
        
        let cell_31 = new MiniSudokuCell(board, 3,1, this.mediator, new PassiveCellState());
        cell_31.add(new MiniSudokuBackground(cell_31, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_31.add(new MiniSudokuDecoration(cell_31, SystemColors.BLACK, "?", this.mediator));
        cell_31.add(new MiniSudokuFixedValue(cell_31, SystemColors.BLACK, "8", this.mediator));
        cell_31.add(new MiniSudokuUserValue(cell_31, SystemColors.BLUE, "9", this.mediator));

        let cell_02 = new MiniSudokuCell(board, 0,2, this.mediator, new PassiveCellState());
        cell_02.add(new MiniSudokuBackground(cell_02, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_02.add(new MiniSudokuDecoration(cell_02, SystemColors.BLACK, "?", this.mediator));
        cell_02.add(new MiniSudokuFixedValue(cell_02, SystemColors.BLACK, "9", this.mediator));
        cell_02.add(new MiniSudokuUserValue(cell_02, SystemColors.BLUE, "8", this.mediator));
        
        let cell_12 = new MiniSudokuCell(board, 1,2, this.mediator, new PassiveCellState());
        cell_12.add(new MiniSudokuBackground(cell_12, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_12.add(new MiniSudokuDecoration(cell_12, SystemColors.BLACK, "?", this.mediator));
        cell_12.add(new MiniSudokuFixedValue(cell_12, SystemColors.BLACK, "10", this.mediator));
        cell_12.add(new MiniSudokuUserValue(cell_12, SystemColors.BLUE, "7", this.mediator));
        
        let cell_22 = new MiniSudokuCell(board, 2,2, this.mediator, new PassiveCellState());
        cell_22.add(new MiniSudokuBackground(cell_22, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_22.add(new MiniSudokuDecoration(cell_22, SystemColors.BLACK, "?", this.mediator));
        cell_22.add(new MiniSudokuFixedValue(cell_22, SystemColors.BLACK, "11", this.mediator));
        cell_22.add(new MiniSudokuUserValue(cell_22, SystemColors.BLUE, "6", this.mediator));
        
        let cell_32 = new MiniSudokuCell(board, 3,2, this.mediator, new PassiveCellState());
        cell_32.add(new MiniSudokuBackground(cell_32, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_32.add(new MiniSudokuDecoration(cell_32, SystemColors.BLACK, "?", this.mediator));
        cell_32.add(new MiniSudokuFixedValue(cell_32, SystemColors.BLACK, "12", this.mediator));
        cell_32.add(new MiniSudokuUserValue(cell_32, SystemColors.BLUE, "5", this.mediator));

        let cell_03 = new MiniSudokuCell(board, 0,3, this.mediator, new PassiveCellState());
        cell_03.add(new MiniSudokuBackground(cell_03, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_03.add(new MiniSudokuDecoration(cell_03, SystemColors.BLACK, "?", this.mediator));
        cell_03.add(new MiniSudokuFixedValue(cell_03, SystemColors.BLACK, "13", this.mediator));
        cell_03.add(new MiniSudokuUserValue(cell_03, SystemColors.BLUE, "4", this.mediator));
        
        let cell_13 = new MiniSudokuCell(board, 1,3, this.mediator, new PassiveCellState());
        cell_13.add(new MiniSudokuBackground(cell_13, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_13.add(new MiniSudokuDecoration(cell_13, SystemColors.BLACK, "?", this.mediator));
        cell_13.add(new MiniSudokuFixedValue(cell_13, SystemColors.BLACK, "14", this.mediator));
        cell_13.add(new MiniSudokuUserValue(cell_13, SystemColors.BLUE, "3", this.mediator));
        
        let cell_23 = new MiniSudokuCell(board, 2,3, this.mediator, new PassiveCellState());
        cell_23.add(new MiniSudokuBackground(cell_23, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_23.add(new MiniSudokuDecoration(cell_23, SystemColors.BLACK, "?", this.mediator));
        cell_23.add(new MiniSudokuFixedValue(cell_23, SystemColors.BLACK, "15", this.mediator));
        cell_23.add(new MiniSudokuUserValue(cell_23, SystemColors.BLUE, "2", this.mediator));
        
        let cell_33 = new MiniSudokuCell(board, 3,3, this.mediator, new PassiveCellState());
        cell_33.add(new MiniSudokuBackground(cell_33, SystemColors.WHITE, SystemColors.YELLOW,this.mediator));
        cell_33.add(new MiniSudokuDecoration(cell_33, SystemColors.BLACK, "?", this.mediator));
        cell_33.add(new MiniSudokuFixedValue(cell_33, SystemColors.BLACK, "16", this.mediator));
        cell_33.add(new MiniSudokuUserValue(cell_33, SystemColors.BLUE, "1", this.mediator));

        board.add(cell_00);
        board.add(cell_01);
        board.add(cell_02);
        board.add(cell_03);
        board.add(cell_10);
        board.add(cell_11);
        board.add(cell_12);
        board.add(cell_13);
        board.add(cell_20);
        board.add(cell_21);
        board.add(cell_22);
        board.add(cell_23);
        board.add(cell_30);
        board.add(cell_31);
        board.add(cell_32);
        board.add(cell_33);
        
        game.add(board);

        return game;

    }
}

