
import { IDrawComponent } from '../../interfaces/IDrawComponent';
import { AbstractDrawer } from '../abstracts/abstractdrawer';
import { CanvasManager } from '../../managers/canvasmanager';
// import { SystemColors } from '../../utility';
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';
import { MiniSudokuBackground } from '../concretes/minisudoku/minisudoku_background';
import { MiniSudokuGame } from '../concretes/minisudoku/minisudoku_game';
import { MiniSudokuBoard } from '../concretes/minisudoku/minisudoku_board';
import { MiniSudokuDecoration } from '../concretes/minisudoku/minisudoku_decoration';
import { MiniSudokuFixedValue } from '../concretes/minisudoku/minisudoku_fixedvalue';
import { MiniSudokuUserValue } from '../concretes/minisudoku/minisudoku_uservalue';
import { PassiveCellState } from '../concretes/minisudoku/cell_passive_state';

//
// MiniSudokuDrawer
//
export class MiniSudokuDrawer extends AbstractDrawer {

    private readonly LINE_WEIGHT: number = 1;
    private readonly ROW_TOTAL: number = 4;
    private readonly COL_TOTAL: number = 4;
    private readonly FONT_PROPORTION_THIRD = 3;
    
    constructor(cm: CanvasManager) { 
        super();
        this.cm = cm;
    }
   
    //
    // Draw details about the game. Its name, id, level and such things
    //
    drawGame(game: MiniSudokuGame): void {
        // this.cm.drawString(`${game.name} : Level: ${game.level} : ID: ${game.id}`);
        for (const child of game.children) {
            child.draw(this);
        }
    }    
   
    //
    // Draw the game board / playing area
    //
    drawBoard(board: MiniSudokuBoard): void {
        
        this.cm.drawGrid(
            board.rows,         // 4
            board.cols,         // 4 
            this.LINE_WEIGHT,   // 1
            board.color
        );
        
        for (const child of board.children) {
            child.draw(this);
        }

    }
   
    //
    // Draw a specific cell of the game board
    //
    drawCell(cell: MiniSudokuCell): void {
        // In mini sudoku the cell doesnt need to be drawn itself
        // as everything sits inside the grid box
        for (const child of cell.children) {
            child.draw(this);
        }
    }
   
    //
    // Draw the background color of the cell
    // 
    drawBackground(background: MiniSudokuBackground): void {
        // To draw the background of a cell we need to know what cell we are in
        // The parent of background is the cell itself which holds it
        // coordinates.
        let parent_cell = <MiniSudokuCell>background.getParent();
        
        // draw background based on current active or passive state
        switch (parent_cell.state.name) {
            
            case 'Active': {

                // Draw the active background
                this.cm.drawCellBackground(
                    parent_cell.x_pos, 
                    parent_cell.y_pos,
                    this.ROW_TOTAL,
                    this.COL_TOTAL,
                    this.LINE_WEIGHT,
                    background.highlight
                );

                // Turn off all other cells that are currently active
                // Get the board
                const board: MiniSudokuBoard = <MiniSudokuBoard>parent_cell.getParent();

                for (const cell of board.children) {
                    let this_cell = <MiniSudokuCell>cell;
                    if(this_cell !== parent_cell) {
                        // set it to passive and redraw it
                        this_cell.transitionTo(new PassiveCellState());  
                        this_cell.draw(this);
                    }
                }

                break;

            }

            case 'Passive': {
                this.cm.drawCellBackground(
                    parent_cell.x_pos, 
                    parent_cell.y_pos,
                    this.ROW_TOTAL,
                    this.COL_TOTAL,
                    this.LINE_WEIGHT,
                    background.color 
                );        
                break;
            }
            
            default: {
                // 
            }
                
        }
//        for (const child of background.children) {
//            child.draw(this);
//        }
    }

    //
    // Draw any decoration the cell has
    //
    drawDecoration(decor: MiniSudokuDecoration): void {
        // Mini Suduko does not have any decoration
    }
   
    //
    // Draw any fixed values that his cell has
    //
    drawFixedValue(fixed: MiniSudokuFixedValue): void {
        let parent_cell = fixed.getParent();
        this.cm.drawCellValue(
            parent_cell.x_pos,
            parent_cell.y_pos,
            this.ROW_TOTAL,
            this.COL_TOTAL,
            fixed.value,
            this.FONT_PROPORTION_THIRD,
            fixed.color
        );
    }
   
    //
    // Draw any user entered values that have been entered in this cell
    //
    drawUserValue(userVal: MiniSudokuUserValue): void {
        let parent_cell = userVal.getParent();
        this.cm.drawCellValue(
            parent_cell.x_pos,
            parent_cell.y_pos,
            this.ROW_TOTAL,
            this.COL_TOTAL,
            userVal.value,
            this.FONT_PROPORTION_THIRD,
            userVal.color
        );
    }

}
