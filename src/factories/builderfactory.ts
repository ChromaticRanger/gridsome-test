
import { GameType } from '../models/gametypes';
import { IBuilder } from '../interfaces/IBuilder';  
import { AnaCrossBuilder } from '../models/builders/anacrossbuilder';
import { MiniSudokuBuilder } from '../models/builders/minisudokubuilder';
import { TestGameBuilder } from '../models/builders/testgamebuilder';
import { IMediator } from '../interfaces/IMediator';

//
// BuilderFactory will create an appropriate builder for a game. The builder
// will have a build method that assemblles that particular gaame.
//
export class BuilderFactory {

    public static getBuilder(
        game: GameType,
        mediator: IMediator
    ) : IBuilder {

        switch (game) {
                
            case GameType.AnaCross:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.CodeWord:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.CrossSum:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.Futoshiki:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.Kakuro:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.MiniSudoku:
            {
                return new MiniSudokuBuilder(mediator);
                break;
            }
            case GameType.Nonogram:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.Sudoku:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.WordSearch:
            {
                return new AnaCrossBuilder();
                break;
            }
            case GameType.TestGame:
            {
                return new TestGameBuilder(mediator);
                break;
            }
            default: {
                return new AnaCrossBuilder();
                break;
            }
                
        }
        
    }
}
