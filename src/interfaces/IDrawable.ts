
import { IDrawComponent } from './IDrawComponent';

export interface IDrawable {
    draw(drawer: IDrawComponent): void;
}

