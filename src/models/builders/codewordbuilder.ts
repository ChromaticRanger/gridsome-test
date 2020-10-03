
import { IBuilder } from '../../interfaces/IBuilder';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';

//
// A builder that will be responsible for building an Codeword game board
//

export class CodeWordBuilder implements IBuilder {
    build(): AbstractBoardComponent {
        throw new Error("Method not implemented.");
    }

}
