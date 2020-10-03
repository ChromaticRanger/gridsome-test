
import { IBuilder } from '../../interfaces/IBuilder';
import { AbstractBoardComponent } from '../abstracts/abstract_boardcomponent';
import { AnagramcrossBoard } from '../concretes/anagramcross/anagramcross_board';

//
// A builder that will be responsible for building an AnaCross game board
//

export class AnaCrossBuilder implements IBuilder {

    build(): AbstractBoardComponent {
       return new AnagramcrossBoard(); 
    }
}
