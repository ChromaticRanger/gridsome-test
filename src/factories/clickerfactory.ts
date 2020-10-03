
import { GameType } from '../models/gametypes';
import { IClickComponent } from '../interfaces/IClickComponent';
import { MiniSudokuClickHandler } from '../models/clickhandlers/minisudokuclickhandler';
import { CanvasManager } from '../managers/canvasmanager';

//
// ClickerFactory will create an appropriate clicker for a game
//

export class ClickerFactory {

    public static getClicker(game: GameType, cm: CanvasManager) : IClickComponent {
        
        switch (game) {
                
            case GameType.AnaCross:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.CodeWord:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.CrossSum:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.Futoshiki:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.Kakuro:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.MiniSudoku:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.Nonogram:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.Sudoku:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            case GameType.WordSearch:
            {
                return new MiniSudokuClickHandler(cm);
                break;
            }
            default: {
                return new MiniSudokuClickHandler(cm);
                break;
            }
                
        }
    }
}

