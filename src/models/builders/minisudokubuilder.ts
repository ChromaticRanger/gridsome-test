
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
import { ActiveCellState } from '../concretes/minisudoku/cell_active_state';
import { Coord } from '../coord';
import { ComponentType } from '../componenttype';

//
// A builder that will be responsible for building a MiniSuduko game board
//
export class MiniSudokuBuilder implements IBuilder {

    private mediator: IMediator;

    constructor(
        mediator: IMediator
    ) {
        this.mediator = mediator; 
    }

    public build(
        data: any,
        width: number,
        height: number
    ): AbstractBoardComponent {

        const id: string = data.id;
        const level: string = data.level; 
        const name: string = data.name;

        const rows = data.data.rows;

        // Create a Game object
        // TODO Get the game from a real data source and build dynamically
        let game = new MiniSudokuGame(name, id, level, this.mediator);

        // Add a board to the game
        let board = new MiniSudokuBoard(game, this.mediator);

        // Add rows to the board
        for (let i:number = 0; i < rows.length; i++) {
            let row = rows[i];
            for (let j:number = 0; j < row.length; j++) {                
                let cell = new MiniSudokuCell(board, j, i, this.mediator, new PassiveCellState());
                cell.add(new MiniSudokuBackground(cell, SystemColors.WHITE, SystemColors.LIGHT_PURPLE, this.mediator));
                cell.add(new MiniSudokuDecoration(cell, SystemColors.BLACK, "", this.mediator));
                cell.add(new MiniSudokuFixedValue(cell, SystemColors.BLACK, row[j], this.mediator));
                cell.add(new MiniSudokuUserValue(cell, SystemColors.BLUE, "", this.mediator));
                board.add(cell);
            }
        }

        // Now go through each cell and tell it its neighbours
        for (let i: number = 0; i < board.children.length; i++) {
            let cell = <MiniSudokuCell>board.children[i];
            let up_factor = (i + 12) % board.children.length;
            let down_factor = (i + 4) % board.children.length;
            let left_factor = i - 1;
            if (cell.x_pos == 0) left_factor = (i - 1) + 4;
            let right_factor = i + 1;
            if (cell.x_pos == 3) right_factor = i - 3;

            cell.Up    = <MiniSudokuCell>board.children[up_factor];
            cell.Down  = <MiniSudokuCell>board.children[down_factor];
            cell.Left  = <MiniSudokuCell>board.children[left_factor];
            cell.Right = <MiniSudokuCell>board.children[right_factor];
        }

        game.add(board);

        return game;

    }
}

