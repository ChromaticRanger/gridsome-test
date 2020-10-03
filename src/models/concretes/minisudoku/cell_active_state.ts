
import { CellState } from '../../abstracts/component_state';
import { PassiveCellState } from './cell_passive_state';

//
// The Active State of a game cell
//

export class ActiveCellState extends CellState {

    constructor() {
        super();
        this.name = 'Active';
    }

    public clicked(): void {
        this.context.transitionTo(new PassiveCellState());
    }

}

