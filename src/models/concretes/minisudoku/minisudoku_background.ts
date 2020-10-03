
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { MiniSudokuGame } from './minisudoku_game';
import { MiniSudokuCell } from './minisudoku_cell';
import { MiniSudokuDecoration } from './minisudoku_decoration';
import { MiniSudokuFixedValue } from './minisudoku_fixedvalue';
import { MiniSudokuUserValue } from './minisudoku_uservalue';
import { IMediator } from '../../../interfaces/IMediator';
import { DrawEvent } from '../../events';

// 
// MiniSudokuBackground extends Background which is a composite
//
export class MiniSudokuBackground extends AbstractBoardComponent {
    
    constructor(
        parent: AbstractBoardComponent,
        color: string,
        highlight: string,
        mediator: IMediator,
    ) {
        super();
        this.name = 'Background';
        this.parent = parent;
        this.rows = this.getParent().rows;
        this.cols = this.getParent().cols;
        this.x_pos = this.getParent().x_pos;
        this.y_pos = this.getParent().y_pos;
        this.color = color;
        this.highlight = highlight;
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

        switch(comptype) {

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
                result = this;
                break;
            }

            case ComponentType.Decoration: {
                // get the parent cell and look for the decoration component
                const cell: MiniSudokuCell = <MiniSudokuCell>this.parent;
                result = cell.Decoration;
                break;
            }

            case ComponentType.FixedValue: {
                // get the parent cell and look for the fixedvalue component
                const cell: MiniSudokuCell = <MiniSudokuCell>this.parent;
                result = cell.FixedValue;
                break;
            }

            case ComponentType.UserValue: {
                // get the parent cell and look for the uservalue component
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

    handleKey(keycode: number): void {}
    
    public clicked(clicker: IClickComponent): void {
        clicker.clickBackground(this);
    }

    public draw(drawer: IDrawComponent): void {
        this.mediator.notify(this, new DrawEvent('draw', 0));
    }
}
