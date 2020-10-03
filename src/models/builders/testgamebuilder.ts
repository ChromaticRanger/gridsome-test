
import { IBuilder } from '../../interfaces/IBuilder';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { MiniSudokuGame } from '../concretes/minisudoku/minisudoku_game';
import { MiniSudokuBoard } from '../concretes/minisudoku/minisudoku_board';
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';
import { MiniSudokuBackground } from '../concretes/minisudoku/minisudoku_background';
import { MiniSudokuDecoration } from '../concretes/minisudoku/minisudoku_decoration';
import { MiniSudokuFixedValue } from '../concretes/minisudoku/minisudoku_fixedvalue';
import { MiniSudokuUserValue } from '../concretes/minisudoku/minisudoku_uservalue';
// import { SystemColors } from '../../utility';
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
        cell_00.add(new MiniSudokuBackground(cell_00, '#FFFFFF', '#F5F527',this.mediator));
        cell_00.add(new MiniSudokuDecoration(cell_00, '#000000', "?", this.mediator));
        cell_00.add(new MiniSudokuFixedValue(cell_00, '#000000', "1", this.mediator));
        cell_00.add(new MiniSudokuUserValue(cell_00, '#0000FF', "16", this.mediator));

        let cell_10 = new MiniSudokuCell(board, 1,0, this.mediator, new PassiveCellState());
        cell_10.add(new MiniSudokuBackground(cell_10, '#FFFFFF', '#F5F527',this.mediator));
        cell_10.add(new MiniSudokuDecoration(cell_10, '#000000', "?", this.mediator));
        cell_10.add(new MiniSudokuFixedValue(cell_10, '#000000', "2", this.mediator));
        cell_10.add(new MiniSudokuUserValue(cell_10, '#0000FF', "15", this.mediator));
        
        let cell_20 = new MiniSudokuCell(board, 2,0, this.mediator, new PassiveCellState());
        cell_20.add(new MiniSudokuBackground(cell_20, '#FFFFFF', '#F5F527',this.mediator));
        cell_20.add(new MiniSudokuDecoration(cell_20, '#000000', "?", this.mediator));
        cell_20.add(new MiniSudokuFixedValue(cell_20, '#000000', "3", this.mediator));
        cell_20.add(new MiniSudokuUserValue(cell_20, '#0000FF', "14", this.mediator));
        
        let cell_30 = new MiniSudokuCell(board, 3,0, this.mediator, new PassiveCellState());
        cell_30.add(new MiniSudokuBackground(cell_30, '#FFFFFF', '#F5F527',this.mediator));
        cell_30.add(new MiniSudokuDecoration(cell_30, '#000000', "?", this.mediator));
        cell_30.add(new MiniSudokuFixedValue(cell_30, '#000000', "4", this.mediator));
        cell_30.add(new MiniSudokuUserValue(cell_30, '#0000FF', "13", this.mediator));

        let cell_01 = new MiniSudokuCell(board, 0,1, this.mediator, new PassiveCellState());
        cell_01.add(new MiniSudokuBackground(cell_01, '#FFFFFF', '#F5F527',this.mediator));
        cell_01.add(new MiniSudokuDecoration(cell_01, '#000000', "?", this.mediator));
        cell_01.add(new MiniSudokuFixedValue(cell_01, '#000000', "5", this.mediator));
        cell_01.add(new MiniSudokuUserValue(cell_01, '#0000FF', "12", this.mediator));
        
        let cell_11 = new MiniSudokuCell(board, 1,1, this.mediator, new PassiveCellState());
        cell_11.add(new MiniSudokuBackground(cell_11, '#FFFFFF', '#F5F527',this.mediator));
        cell_11.add(new MiniSudokuDecoration(cell_11, '#000000', "?", this.mediator));
        cell_11.add(new MiniSudokuFixedValue(cell_11, '#000000', "6", this.mediator));
        cell_11.add(new MiniSudokuUserValue(cell_11, '#0000FF', "11", this.mediator));
        
        let cell_21 = new MiniSudokuCell(board, 2,1, this.mediator, new PassiveCellState());
        cell_21.add(new MiniSudokuBackground(cell_21, '#FFFFFF', '#F5F527',this.mediator));
        cell_21.add(new MiniSudokuDecoration(cell_21, '#000000', "?", this.mediator));
        cell_21.add(new MiniSudokuFixedValue(cell_21, '#000000', "7", this.mediator));
        cell_21.add(new MiniSudokuUserValue(cell_21, '#0000FF', "10", this.mediator));
        
        let cell_31 = new MiniSudokuCell(board, 3,1, this.mediator, new PassiveCellState());
        cell_31.add(new MiniSudokuBackground(cell_31, '#FFFFFF', '#F5F527',this.mediator));
        cell_31.add(new MiniSudokuDecoration(cell_31, '#000000', "?", this.mediator));
        cell_31.add(new MiniSudokuFixedValue(cell_31, '#000000', "8", this.mediator));
        cell_31.add(new MiniSudokuUserValue(cell_31, '#0000FF', "9", this.mediator));

        let cell_02 = new MiniSudokuCell(board, 0,2, this.mediator, new PassiveCellState());
        cell_02.add(new MiniSudokuBackground(cell_02, '#FFFFFF', '#F5F527',this.mediator));
        cell_02.add(new MiniSudokuDecoration(cell_02, '#000000', "?", this.mediator));
        cell_02.add(new MiniSudokuFixedValue(cell_02, '#000000', "9", this.mediator));
        cell_02.add(new MiniSudokuUserValue(cell_02, '#0000FF', "8", this.mediator));
        
        let cell_12 = new MiniSudokuCell(board, 1,2, this.mediator, new PassiveCellState());
        cell_12.add(new MiniSudokuBackground(cell_12, '#FFFFFF', '#F5F527',this.mediator));
        cell_12.add(new MiniSudokuDecoration(cell_12, '#000000', "?", this.mediator));
        cell_12.add(new MiniSudokuFixedValue(cell_12, '#000000', "10", this.mediator));
        cell_12.add(new MiniSudokuUserValue(cell_12, '#0000FF', "7", this.mediator));
        
        let cell_22 = new MiniSudokuCell(board, 2,2, this.mediator, new PassiveCellState());
        cell_22.add(new MiniSudokuBackground(cell_22, '#FFFFFF', '#F5F527',this.mediator));
        cell_22.add(new MiniSudokuDecoration(cell_22, '#000000', "?", this.mediator));
        cell_22.add(new MiniSudokuFixedValue(cell_22, '#000000', "11", this.mediator));
        cell_22.add(new MiniSudokuUserValue(cell_22, '#0000FF', "6", this.mediator));
        
        let cell_32 = new MiniSudokuCell(board, 3,2, this.mediator, new PassiveCellState());
        cell_32.add(new MiniSudokuBackground(cell_32, '#FFFFFF', '#F5F527',this.mediator));
        cell_32.add(new MiniSudokuDecoration(cell_32, '#000000', "?", this.mediator));
        cell_32.add(new MiniSudokuFixedValue(cell_32, '#000000', "12", this.mediator));
        cell_32.add(new MiniSudokuUserValue(cell_32, '#0000FF', "5", this.mediator));

        let cell_03 = new MiniSudokuCell(board, 0,3, this.mediator, new PassiveCellState());
        cell_03.add(new MiniSudokuBackground(cell_03, '#FFFFFF', '#F5F527',this.mediator));
        cell_03.add(new MiniSudokuDecoration(cell_03, '#000000', "?", this.mediator));
        cell_03.add(new MiniSudokuFixedValue(cell_03, '#000000', "13", this.mediator));
        cell_03.add(new MiniSudokuUserValue(cell_03, '#0000FF', "4", this.mediator));
        
        let cell_13 = new MiniSudokuCell(board, 1,3, this.mediator, new PassiveCellState());
        cell_13.add(new MiniSudokuBackground(cell_13, '#FFFFFF', '#F5F527',this.mediator));
        cell_13.add(new MiniSudokuDecoration(cell_13, '#000000', "?", this.mediator));
        cell_13.add(new MiniSudokuFixedValue(cell_13, '#000000', "14", this.mediator));
        cell_13.add(new MiniSudokuUserValue(cell_13, '#0000FF', "3", this.mediator));
        
        let cell_23 = new MiniSudokuCell(board, 2,3, this.mediator, new PassiveCellState());
        cell_23.add(new MiniSudokuBackground(cell_23, '#FFFFFF', '#F5F527',this.mediator));
        cell_23.add(new MiniSudokuDecoration(cell_23, '#000000', "?", this.mediator));
        cell_23.add(new MiniSudokuFixedValue(cell_23, '#000000', "15", this.mediator));
        cell_23.add(new MiniSudokuUserValue(cell_23, '#0000FF', "2", this.mediator));
        
        let cell_33 = new MiniSudokuCell(board, 3,3, this.mediator, new PassiveCellState());
        cell_33.add(new MiniSudokuBackground(cell_33, '#FFFFFF', '#F5F527',this.mediator));
        cell_33.add(new MiniSudokuDecoration(cell_33, '#000000', "?", this.mediator));
        cell_33.add(new MiniSudokuFixedValue(cell_33, '#000000', "16", this.mediator));
        cell_33.add(new MiniSudokuUserValue(cell_33, '#0000FF', "1", this.mediator));

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

