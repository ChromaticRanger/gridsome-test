
import { MiniSudokuCell } from '../concretes/minisudoku/minisudoku_cell';

// 
// Abstract class will be the base of component state objects
//
export abstract class CellState {

    public name!: string;

    protected context!: MiniSudokuCell;

    public setContext(context: MiniSudokuCell) {
        this.context = context;
    }

    public abstract clicked(): void;

}
