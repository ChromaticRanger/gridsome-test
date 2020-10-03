
import { IMediator } from '../../interfaces/IMediator';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { IEvent } from '../../interfaces/IEvent';

export class MockMediator implements IMediator {

    notify(sender: AbstractBoardComponent, event: IEvent): void {
        throw new Error("Method not implemented.");
    }

}
