
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { translateMouseCoordsToBoardCoords } from '../../../utility';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { MiniSudokuBackground } from './minisudoku_background';
import { MiniSudokuDecoration } from './minisudoku_decoration';
import { MiniSudokuFixedValue } from './minisudoku_fixedvalue';
import { MiniSudokuUserValue } from './minisudoku_uservalue';
import { MiniSudokuCell } from './minisudoku_cell';
import { MiniSudokuGame } from './minisudoku_game';
import { IMediator } from '../../../interfaces/IMediator';
import { DrawEvent } from '../../events';

//
// MiniSudoku board extends the Composite GameBoard
// So contains the array of cells and declares itself as a composite
//
export class MiniSudokuBoard extends AbstractBoardComponent {

    private _activeCell!: MiniSudokuCell;

    constructor(
        parent: AbstractBoardComponent,
        mediator: IMediator,
    ) {
        super();
        this.name = 'Board';
        this.parent = parent;
        this.id = this.getParent().id;
        this.rows = this.getParent().rows;
        this.cols = this.getParent().cols;
        this.color = '#000000'; // TODO make the color user definable
        this.x_pos = 0;
        this.y_pos = 0;
        this.mediator = mediator;
    }
    
    public getComponent(
        coord: Coord, 
        comptype: ComponentType,
        canvas_width: number,
        canvas_height: number
    ): AbstractBoardComponent {

        let result: AbstractBoardComponent;

        // Default to returning the board itself
        result = this;
        
        const cell_coords: Coord = translateMouseCoordsToBoardCoords(
            canvas_width,
            canvas_height,
            this.cols,
            this.rows,
            coord.x,
            coord.y
        ); 

        switch(comptype) {

            case ComponentType.Game: {
                result = <MiniSudokuGame>this.getParent();
                break;
            }
            
            case ComponentType.Board: {
                result = <MiniSudokuBoard>this;
                break;
            }

            case ComponentType.Cell: {
                for (const cell of this.children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        result = <MiniSudokuCell>cell;
                        break;
                    }
                }
                break;
            }

            case ComponentType.Background: {
                for (let cell of this.children) {
                    // look through the cells
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        // Return this cells background
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuBackground>realcell.Background;
                        break;
                    }
                }
                break;
            }
                
            case ComponentType.Decoration: {
                for (const cell of this.children) {
                    // look through the cells
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        // Return this cells decoration
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuDecoration>realcell.Decoration;
                    }
                }
                break;
            }

            case ComponentType.FixedValue: {
                for (const cell of this.children) {
                    // look through the cells
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        // Return this cells Fixed Value
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuFixedValue>realcell.FixedValue;
                    }
                }
                break;
            }

            case ComponentType.UserValue: {
                for (const cell of this.children) {
                    // look through the cells
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        // Return this cells User Value
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuUserValue>realcell.UserValue;
                    }
                }
                break;
            }

            default: {
                // Famous last words, really should not get here
                result = this;
            }
        }

        return result;
    }

    //
    // Accessors
    //
    get ActiveCell(): MiniSudokuCell { return this._activeCell; }
    set ActiveCell(cell: MiniSudokuCell) { this._activeCell = cell; }

    public getComponents(
        coord: Coord
    ): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    public handleKey(keycode: number): void {}

    public clicked(clicker: IClickComponent): void {
        clicker.clickBoard(this);
    }

    public draw(drawer: IDrawComponent): void {
        this.mediator.notify(this, new DrawEvent('draw', 0));
    }

}
