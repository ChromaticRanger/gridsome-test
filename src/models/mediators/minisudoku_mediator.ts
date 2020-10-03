
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
// import { SystemKeys } from '../../utility';

//
// The Mediator that will control the communication between components in
// a Mini Sudoku game
//

export class MiniSudokuMediator implements IMediator {

    private drawer: IDrawComponent; 
    private clicker: IClickComponent; 
    private keyer: IKeyComponent;
    private _board!: MiniSudokuBoard;

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

                            case 72:
                            case 37: {
                                this.move(cell.Left);
                                break;
                            }

                            case 75:
                            case 38: {
                                this.move(cell.Up);
                                break;
                            }

                            case 76:
                            case 39: {
                                this.move(cell.Right);
                                break;
                            }

                            case 74:
                            case 40: {
                                this.move(cell.Down);
                                break;
                            }

                            case 97:
                            case 49: {

                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "1";
                                    this.drawer.drawCell(sender);
                                }
                                    
                                break;
                            }
                            
                            case 98:
                            case 50: {
                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "2";
                                    this.drawer.drawCell(sender);
                                }
                                break;
                            }

                            case 99:
                            case 51: {
                                if (!cell.IsFixed) {
                                    cell.UserValue.value = "3";
                                    this.drawer.drawCell(sender);
                                }
                                break;
                            }
                            
                            case 100:
                            case 52: {
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
