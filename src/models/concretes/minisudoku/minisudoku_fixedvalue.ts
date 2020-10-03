
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { MiniSudokuCell } from './minisudoku_cell';
import { MiniSudokuBackground } from './minisudoku_background';
import { MiniSudokuDecoration } from './minisudoku_decoration';
import { MiniSudokuUserValue } from './minisudoku_uservalue';
import { IMediator } from '../../../interfaces/IMediator';
import { DrawEvent } from '../../events';

//
// MiniSudokuFixedValue extends FixedValue which is a leaf component of a composite
// heirarchy. It represents a given value at the start of a sudoku puzzle.
//
export class MiniSudokuFixedValue extends AbstractBoardComponent {

    constructor(
        parent: AbstractBoardComponent,
        color: string, 
        value: string,
        mediator: IMediator,
    ) {
        super();
        this.name = 'Fixed Value';
        this.parent = parent,
        this.rows = this.getParent().rows;
        this.cols = this.getParent().cols;
        this.x_pos = this.getParent().x_pos;
        this.y_pos = this.getParent().y_pos;
        this.value = value;
        this.color = color;
        this.mediator = mediator;
    }
    
    public getComponent(
        coord: Coord, 
        comptype: ComponentType,
        canvas_width: number,
        canvas_height: number
    ): AbstractBoardComponent {

        let result: AbstractBoardComponent;
        result = this;

        switch (comptype) {
            
            case ComponentType.Game: {
                result = this.parent.parent.parent;
                break;
            }
            
            case ComponentType.Board: {
                result = this.parent.parent;
                break;
            }
            
            case ComponentType.Cell: {
                result = this.parent;
                break;
            }

            case ComponentType.Background: {
                const cell: MiniSudokuCell = <MiniSudokuCell>this.parent;
                result = cell.Background;
                break;
            }

            case ComponentType.Decoration: {
                const cell: MiniSudokuCell = <MiniSudokuCell>this.parent;
                result = cell.Decoration;
                break;
            }

            case ComponentType.FixedValue: {
                result = this;
                break;
            }

            case ComponentType.UserValue: {
                const cell: MiniSudokuCell = <MiniSudokuCell>this.parent;
                result = cell.UserValue;
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
        throw new Error("Method not implemented.");
    }

    public handleKey(keycode: number): void {}

    public clicked(clicker: IClickComponent): void {
        clicker.clickFixedValue(this);
    }

    public draw(drawer: IDrawComponent): void {
        this.mediator.notify(this, new DrawEvent('draw', 0));
    }
    
}
