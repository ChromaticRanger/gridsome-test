
import { AbstractBoardComponent } from '../models/abstracts/abstract_boardcomponent';
import { IEvent } from '../interfaces/IEvent';

// 
// IMediator
//

export interface IMediator {
    notify(sender: AbstractBoardComponent, event: IEvent): void;
}
