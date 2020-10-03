
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { MiniSudokuBoard } from './minisudoku_board';
import { MiniSudokuBackground } from './minisudoku_background';
import { MiniSudokuDecoration } from './minisudoku_decoration';
import { MiniSudokuFixedValue } from './minisudoku_fixedvalue';
import { MiniSudokuUserValue } from './minisudoku_uservalue';
import { translateMouseCoordsToBoardCoords } from '../../../utility';
import { MiniSudokuCell } from './minisudoku_cell';
import { IMediator } from '../../../interfaces/IMediator';
import { DrawEvent } from '../../events';

//
// MiniSudokuGame extends Game which is a Composite
//
export class MiniSudokuGame extends AbstractBoardComponent {
    
    constructor(
        name: string,
        id: string,
        level: string,
        mediator: IMediator,
    ) {
        super();
        this.name = name;
        this.id = id;
        this.rows = 4;
        this.cols = 4;
        this.level = level;
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

        // Default to returning the game itself
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
                result = <MiniSudokuGame>this;
                break;
            }
                
            case ComponentType.Board: {
                result = <MiniSudokuBoard>this.children[0];
                break;
            }

            case ComponentType.Cell: {
                for (const cell of this.children[0].children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        result = <MiniSudokuCell>cell;
                        break;
                    }
                }
                break;
            }

            case ComponentType.Background: {
                for (const cell of this.children[0].children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuBackground>realcell.Background;
                        break;
                    }
                }
                break;
            }

            case ComponentType.Decoration: {
                for (const cell of this.children[0].children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuDecoration>realcell.Decoration;
                    }
                }
                break;
            }

            case ComponentType.FixedValue: {
                for (const cell of this.children[0].children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
                        const realcell = <MiniSudokuCell>cell;
                        result = <MiniSudokuFixedValue>realcell.FixedValue;
                    }
                }
                break;
            }

            case ComponentType.UserValue: {
                for (const cell of this.children[0].children) {
                    if (cell.x_pos === cell_coords.x && 
                        cell.y_pos === cell_coords.y) {
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

    public getComponents(
        coord: Coord
    ): AbstractBoardComponent[] {
        // TODO Return all children at the given coords
        // At the cell level this will actually be all children as they
        // are stacked inside each other.
        return this.children;
    }

    handleKey(keycode: number): void {} 

    public clicked(clicker: IClickComponent): void {
        clicker.clickGame(this);
    }
    
    // Default implementation will simply log that the cell is being drawn
    public draw(drawer: IDrawComponent): void {
        this.mediator.notify(this, new DrawEvent('draw', 0));
    }

}
