
//
// This interface will support composite pattern component collections
// that provide a handleKey method
//
export interface IKeyHandler {
    handleKey(keycode: number): void;
}
