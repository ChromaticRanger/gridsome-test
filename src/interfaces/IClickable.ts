
import { IClickComponent } from './IClickComponent';
//
// This interface will support composite pattern component collections
// that provide a clicked method
//
export interface IClickable {
    clicked(clicker: IClickComponent): void;
}
