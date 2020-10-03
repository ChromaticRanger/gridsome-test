
import { IClickable } from '../../interfaces/IClickable';
import { IKeyHandler } from '../../interfaces/IKeyHandler';
import { IDrawable } from '../../interfaces/IDrawable';
import { IDrawComponent } from '../../interfaces/IDrawComponent';
import { IClickComponent } from '../../interfaces/IClickComponent';
import { ComponentType } from '../../models/componenttype';
import { Coord } from '../coord';
// import { SystemColors } from '../../utility';
import { IMediator } from '../../interfaces/IMediator';
import { CellState } from './component_state';

export abstract class AbstractBoardComponent implements 
    IDrawable, IClickable, IKeyHandler {

    protected mediator!: IMediator;
   
    public rows: number     = 0;
    public cols: number     = 0;
    public x_pos: number    = 0;
    public y_pos: number    = 0;
    public color: string    = '#FFFFFF';
    public highlight: string = '#FFFFFF'; 
    public value: string    = '';
    public name: string     = '';
    public id: string       = '';
    public level: string    = '';
        
    public parent!: AbstractBoardComponent;
    public children: AbstractBoardComponent[] = [];
    
    // And the ability to add and remove from the collection
    public add(
        component: AbstractBoardComponent
    ): void {
        this.children.push(component);
    }
    
    public remove(
        component: AbstractBoardComponent
    ): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    public setParent(
        parent: AbstractBoardComponent
    ) {
        this.parent = parent;
    }

    public getParent(): AbstractBoardComponent { 
        return this.parent;
    }


    // Return the component type requested at the given coords
    public abstract getComponent(
        coord: Coord, 
        comptype: ComponentType,
        canvas_width: number,
        canvas_height: number
    ) : AbstractBoardComponent; 

    // Return all components that occupy the given coords
    public abstract getComponents(
        coord: Coord
    ) : AbstractBoardComponent[];

    public abstract handleKey(keycode: number): void;

    public abstract clicked(clicker: IClickComponent): void;
    public abstract draw(drawer: IDrawComponent): void;

}

