
import { GameType } from '../models/gametypes';
import { IDrawComponent } from '../interfaces/IDrawComponent';
import { MiniSudokuDrawer } from '../models/drawers/minisudokudrawer';
import { CanvasManager } from '../managers/canvasmanager';

//
// DrawerFactory will create an appropriate drawer for a game.
//

export class DrawerFactory {

    public static getDrawer(game: GameType, cm: CanvasManager) : IDrawComponent {
        
        switch (game) {
                
            case GameType.AnaCross:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.CodeWord:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.CrossSum:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.Futoshiki:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.Kakuro:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.MiniSudoku:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.Nonogram:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.Sudoku:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            case GameType.WordSearch:
            {
                return new MiniSudokuDrawer(cm);
                break;
            }
            default: {
                return new MiniSudokuDrawer(cm);
                break;
            }
                
        }
    }
}
