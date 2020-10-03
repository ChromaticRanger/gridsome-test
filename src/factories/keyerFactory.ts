
import { GameType } from '../models/gametypes';
import { IKeyComponent } from '../interfaces/IKeyComponent';
import { MiniSudokuKeyHandler } from '../models/keyhandlers/minisudokukeyer';
import { CanvasManager } from '../managers/canvasmanager';

export class KeyerFactory {

    public static getKeyer(game: GameType, cm: CanvasManager): IKeyComponent {
        
        switch (game) {

            case GameType.AnaCross:
            {
                return new MiniSudokuKeyHandler(cm);
            }
            case GameType.CodeWord:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.CrossSum:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.Futoshiki:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.Kakuro:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.MiniSudoku:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.Nonogram:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.Sudoku:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            case GameType.WordSearch:
            {
                return new MiniSudokuKeyHandler(cm);
                break;
            }
            default: {
                return new MiniSudokuKeyHandler(cm);
                break;
            }

        }
    }
}
