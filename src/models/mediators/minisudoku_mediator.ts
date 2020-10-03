
import { IMediator } from '../../interfaces/IMediator';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { IDrawComponent } from '../../interfaces/IDrawComponent';
import { IClickComponent } from '../../interfaces/IClickComponent';
import { MiniSudokuGame } from '../concretes/minisudoku/minisudoku_game';
import { MiniSudokuBoard } from '../concretes/minisudoku/minisudoku_board';
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';
import { MiniSudokuBackground } from '../concretes/minisudoku/minisudoku_background';
import { MiniSudokuDecoration } from '../concretes/minisudoku/minisudoku_decoration';
import { MiniSudokuFixedValue } from '../concretes/minisudoku/minisudoku_fixedvalue';
import { MiniSudokuUserValue } from '../concretes/minisudoku/minisudoku_uservalue';
import { IKeyComponent } from '../../interfaces/IKeyComponent';
import { IEvent } from '../../interfaces/IEvent';
import { DrawEvent, ClickEvent, KeyEvent } from '../events';
import { SystemKeys } from '../../utility';

//
// The Mediator that will control the communication between components in
// a Mini Sudoku game
//

export class MiniSudokuMediator implements IMediator {

    private drawer: IDrawComponent; 
    private clicker: IClickComponent; 
    private keyer: IKeyComponent;
    private _board: MiniSudokuBoard;

    constructor(
        drawer: IDrawComponent,
        clicker: IClickComponent,
        keyer: IKeyComponent
    ) {
        this.drawer = drawer;
        this.clicker = clicker;
        this.keyer = keyer;
    }

    notify(sender: AbstractBoardComponent, event: IEvent): void {

        switch (true) {

            case (event instanceof DrawEvent): {

                switch (true) {

                    case (sender instanceof MiniSudokuGame):  {
                        this.drawer.drawGame(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuBoard):  {
                        this.drawer.drawBoard(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuCell):  {
                        this.drawer.drawCell(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuBackground):  {
                        this.drawer.drawBackground(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuDecoration):  {
                        this.drawer.drawDecoration(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuFixedValue):  {
                        this.drawer.drawFixedValue(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuUserValue):  {
                        this.drawer.drawUserValue(sender);
                        break;
                    }

                    default: {}

                }

                break;

            }

            case (event instanceof ClickEvent): {

                switch (true) {

                    case (sender instanceof MiniSudokuGame):  {
                        this.drawer.drawGame(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuBoard):  {
                        this.drawer.drawBoard(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuCell):  {
                        //
                        // The cell has been clicked, redraw it and children
                        // using the current state 
                        let cell: MiniSudokuCell = <MiniSudokuCell>sender
                        this._board = <MiniSudokuBoard>cell.getParent();
                        this.move(cell);
                        break;
                    }

                    case (sender instanceof MiniSudokuBackground):  {
                        this.drawer.drawBackground(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuDecoration):  {
                        this.drawer.drawDecoration(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuFixedValue):  {
                        this.drawer.drawFixedValue(sender);
                        break;
                    }

                    case (sender instanceof MiniSudokuUserValue):  {
                        this.drawer.drawUserValue(sender);
                        break;
                    }

                    default: {}

                }

                break;

            }
        
            case (event instanceof KeyEvent): {

                switch (true) {

                    case (sender instanceof MiniSudokuGame):  {
                        break;
                    }

                    case (sender instanceof MiniSudokuBoard):  {
                        break;
                    }

                    case (sender instanceof MiniSudokuCell):  {

                        let cell: MiniSudokuCell = <MiniSudokuCell>sender
                        this._board = <MiniSudokuBoard>cell.getParent();

                        // get the active cell
                        cell = this._board.ActiveCell;
                        
                        switch (event.code) {

                            case SystemKeys.VIM_LEFT:
                            case SystemKeys.LEFT_ARROW: {
                                this.move(cell.Left);
                                break;
                            }

                            case SystemKeys.VIM_UP:
                            case SystemKeys.UP_ARROW: {
                                this.move(cell.Up);
                                break;
                            }

                            case SystemKeys.VIM_RIGHT:
                            case SystemKeys.RIGHT_ARROW: {
                                this.move(cell.Right);
                                break;
                            }

                            case SystemKeys.VIM_DOWN:
                            case SystemKeys.DOWN_ARROW: {
                                this.move(cell.Down);
                                break;
                            }

                            case SystemKeys.PAD_ONE:
                            case SystemKeys.ONE: {

                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "1";
                                    this.drawer.drawCell(sender);
                                }
                                    
                                break;
                            }
                            
                            case SystemKeys.PAD_TWO:
                            case SystemKeys.TWO: {
                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "2";
                                    this.drawer.drawCell(sender);
                                }
                                break;
                            }

                            case SystemKeys.PAD_THREE:
                            case SystemKeys.THREE: {
                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "3";
                                    this.drawer.drawCell(sender);
                                }
                                break;
                            }
                            
                            case SystemKeys.PAD_FOUR:
                            case SystemKeys.FOUR: {
                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "4";
                                    this.drawer.drawCell(sender);
                                }
                                break;
                            }

                            default: {
                                break;
                            }

                        }

                        break;
                    }

                    case (sender instanceof MiniSudokuBackground):  {
                        break;
                    }

                    case (sender instanceof MiniSudokuDecoration):  {
                        break;
                    }

                    case (sender instanceof MiniSudokuFixedValue):  {
                        break;
                    }

                    case (sender instanceof MiniSudokuUserValue):  {
                        break;
                    }

                    default: {}
                }

                break;

            }

            default: {}

        }

    }

    public move(cell: MiniSudokuCell) {
        cell.state.clicked()    
        this._board.ActiveCell = cell;
        this.drawer.drawCell(cell);
    }

}
