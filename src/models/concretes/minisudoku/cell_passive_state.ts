
import { CellState } from '../../abstracts/component_state';
import { ActiveCellState } from './cell_active_state';

//
// The Passive State of a game cell
//

export class PassiveCellState extends CellState {

    constructor() {
        super();
        this.name = 'Passive';
    }

    public clicked(): void {
        this.context.transitionTo(new ActiveCellState());
    }

}
