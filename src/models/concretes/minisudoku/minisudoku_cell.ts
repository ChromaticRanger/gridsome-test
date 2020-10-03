
import { IDrawComponent } from '../../../interfaces/IDrawComponent';
import { IClickComponent } from '../../../interfaces/IClickComponent';
import { Coord } from '../../coord';
import { ComponentType } from '../../componenttype';
import { AbstractBoardComponent } from '../../abstracts/abstract_boardcomponent';
import { MiniSudokuBackground } from './minisudoku_background';
import { MiniSudokuDecoration } from './minisudoku_decoration';
import { MiniSudokuFixedValue } from './minisudoku_fixedvalue';
import { MiniSudokuUserValue } from './minisudoku_uservalue';
// import { translateMouseCoordsToBoardCoords } from '../../../utility';
import { IMediator } from '../../../interfaces/IMediator';
import { CellState } from '../../abstracts/component_state';
import { KeyEvent, ClickEvent, DrawEvent } from '../../events';

//
// MiniSudokuCell extends GameCell
//
export class MiniSudokuCell extends AbstractBoardComponent {
    
    private _background!: MiniSudokuBackground;
    private _decoration!: MiniSudokuDecoration;
    private _fixedValue!: MiniSudokuFixedValue;
    private _userValue!: MiniSudokuUserValue;
    private _isfixed!: boolean;

    private _up!: MiniSudokuCell;
    private _down!: MiniSudokuCell;
    private _left!: MiniSudokuCell;
    private _right!: MiniSudokuCell;

    public state!: CellState;

    constructor(
        parent: AbstractBoardComponent,
        x_pos: number, 
        y_pos: number,
        mediator: IMediator,
        state: CellState
    ) {
        super();
        this.name = 'Cell';
        this.parent = parent;
        this.rows = this.getParent().rows;
        this.cols = this.getParent().cols;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.mediator = mediator;
        this.transitionTo(state);
    } 

    public transitionTo(state: CellState): void {
        this.state = state;
        this.state.setContext(this);
    }

    add(component: AbstractBoardComponent): void {
        super.add(component);
        if (component instanceof MiniSudokuBackground) { this.Background = <MiniSudokuBackground>component; }
        else if (component instanceof MiniSudokuDecoration) { this.Decoration = <MiniSudokuDecoration>component; }
        else if (component instanceof MiniSudokuFixedValue) { this.FixedValue = <MiniSudokuFixedValue>component; }
        else if (component instanceof MiniSudokuUserValue) { this.UserValue = <MiniSudokuUserValue>component; }
    }

    public getComponent(
        coord: Coord, 
        comptype: ComponentType,
        canvas_width: number,
        canvas_height: number
    ): AbstractBoardComponent {

        let result: AbstractBoardComponent;

        // Default to returning the cell itself
        result = this;

        switch(comptype) {

            case ComponentType.Game: {
                result = this.getParent().getParent();
                break;
            }
            
            case ComponentType.Board: {
                result = this.getParent();
                break;
            }

            case ComponentType.Cell: {
                result = this;
                break;
            }

            case ComponentType.Background: {
                result = this.Background;
                break;
            }
                
            case ComponentType.Decoration: {
                result = this.Decoration;
                break;
            }

            case ComponentType.FixedValue: {
                result = this.FixedValue;
                break;
            }

            case ComponentType.UserValue: {
                result = this.UserValue;
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
    get Background(): MiniSudokuBackground { return this._background; }
    get Decoration(): MiniSudokuDecoration { return this._decoration; }
    get UserValue(): MiniSudokuUserValue { return this._userValue; }
    get FixedValue(): MiniSudokuFixedValue { return this._fixedValue; }
   
    get IsFixed(): boolean {
        if(this._fixedValue.value !== "")
            return true;
        else
            return false;
    }

    get Up(): MiniSudokuCell { return this._up; }
    get Down(): MiniSudokuCell { return this._down; }
    get Left(): MiniSudokuCell { return this._left; }
    get Right(): MiniSudokuCell { return this._right; }

    set Background(background: MiniSudokuBackground) { this._background = background; }
    set Decoration(decoration: MiniSudokuDecoration) { this._decoration = decoration; }
    set UserValue(uservalue: MiniSudokuUserValue) { this._userValue = uservalue; }
    set FixedValue(fixedvalue: MiniSudokuFixedValue) { this._fixedValue = fixedvalue; }

    set Up(cell: MiniSudokuCell) { this._up = cell; }
    set Down(cell: MiniSudokuCell) { this._down = cell; }
    set Left(cell: MiniSudokuCell) { this._left = cell; }
    set Right(cell: MiniSudokuCell) { this._right = cell; }

    public getComponents(
        coord: Coord
    ): AbstractBoardComponent[] {
        throw new Error("Method not implemented.");
    }

    public handleKey(keycode: number): void {
        this.mediator.notify(this, new KeyEvent('keyed', keycode));
    }

    public clicked(clicker: IClickComponent): void {
        this.mediator.notify(this, new ClickEvent('clicked', 0));
    }
    
    public draw(drawer: IDrawComponent): void {
        this.mediator.notify(this, new DrawEvent('draw', 0));
    }

}

