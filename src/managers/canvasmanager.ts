
import { Rectangle } from "../models/rect";
import { Coord } from "../models/coord";
import { SystemColors } from "../utility";

export class CanvasManager {

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _width: number;
    private _height: number;
    private original_width: number;
    private original_height: number;


    constructor(
        canvas: HTMLCanvasElement,
        width: number,
        height: number
    ) {
        this._width = width;
        this._height = height;
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d")!;
        // this._ctx.translate(0.5, 0.5);
        this._canvas.width = width;
        this._canvas.height = height; 
    }

    get ctx(): CanvasRenderingContext2D { return this._ctx; }
    get width(): number { return this._canvas.width; }
    get height(): number { return this._canvas.height; }

    set width(newWidth: number) { this._canvas.width = newWidth; }
    set height(newHeight: number) { this._canvas.height = newHeight; }

    // Clear the canvas
    clear(): void {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); 
        }
    }

    // Draw a line on the canvas
    drawLine(
        thickness: number, 
        fx: number, 
        fy: number, 
        tx: number, 
        ty: number, 
        hex_color: string 
    ): void {
        this.ctx.beginPath();
        this._ctx.lineWidth = thickness;
        this._ctx.strokeStyle = hex_color;
        this.ctx.moveTo(fx, fy);
        this.ctx.lineTo(tx, ty);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    // Draw the contents of the rectangle
    drawText(
        rect: Rectangle, 
        hex_color: string
    ): void {

    }

    // Draw the given rectangle
    drawRectangle(
        rect: Rectangle, 
        hex_color: string
    ): void {
        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(
            rect.row_shift, 
            rect.col_shift, 
            rect.width, 
            rect.height
        );
    }

    drawCellBackground(
        row: number,
        col: number,
        row_total: number,
        col_total: number,
        line_weight: number,
        hex_color: string
    ): void {
        
        // Work out the distance to shift based on the width and height of the
        // canvas relative to the row and column being draw.
        let start_x = ((this.original_width / row_total) * row) + line_weight;
        let start_y = ((this.original_height / col_total) * col) + line_weight;
        let draw_width = (this.original_width / row_total) - line_weight;
        let draw_height = (this.original_height / col_total) - line_weight;

        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(
            start_x, 
            start_y,
            draw_width, 
            draw_height
        );

        // let bar1_start_x = start_x;
        // let bar1_start_y = (start_y + draw_width / 3);

        // let bar1_end_x = start_x + draw_width;
        // let bar1_end_y = start_y + draw_width / 3;
        // 
        // let bar2_start_x = start_x;
        // let bar2_start_y = start_y + (draw_width / 3) * 2;
        // 
        // let bar2_end_x = start_x + draw_width;
        // let bar2_end_y = start_y + (draw_width / 3) * 2;
        // 
        // this.drawLine(
        //     1,
        //     bar1_start_x, 
        //     bar1_start_y, 
        //     bar1_end_x, 
        //     bar1_end_y, 
        //     SystemColors.BLUE
        // );

        // this.drawLine(
        //     1,
        //     bar2_start_x, 
        //     bar2_start_y, 
        //     bar2_end_x, 
        //     bar2_end_y, 
        //     SystemColors.BLUE
        // );

        // let bbb = 0;

        // Draw the cell coordinated in the centre of the cell
        // this.ctx.fillStyle = SystemColors.BLACK;
        // this.ctx.font = '10pt Calibri';
        // this.ctx.fillText(`${row}:${col}`, start_x + draw_width / 2, start_y + draw_height / 2);

    }

    drawCellValue(
        row: number,
        col: number,
        row_total: number,
        col_total: number,
        fixed_value: string,
        proportion: number,
        hex_color: string
    ): void {

        let start_x = ((this.original_width / row_total) * row);
        let start_y = ((this.original_height / col_total) * col);
        let draw_width = (this.original_width / row_total);
        let draw_height = (this.original_height / col_total);

        this.ctx.fillStyle = hex_color;
        this.ctx.font = `${draw_height / proportion}pt Calibri`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        start_x = start_x + (draw_width / 2);
        start_y = start_y + (draw_height / 2) + 3;
        this.ctx.fillText(fixed_value, start_x, start_y);
    }

    // Draw a grid of the given size adjusting canvas
    // size if necessary to make the cells a uniform size
    drawGrid(
        width: number, 
        height: number, 
        thickness: number,
        hex_color: string
    ): void {

        // save original height and width as this is what we are going to draw
        // on
        this.original_width = this._width;
        this.original_height = this._height;
        
        // If the column or row amount does not divide evenly into the canvas size
        // then adjust the width so that it does
        let adjust_width  = this.original_width % width;
        let adjust_height = this.original_height % height
        
        // make the canvas slightly bigger than it needs to be
        if (adjust_width === 0)
            this._canvas.width = this._canvas.width + 1;
        if (adjust_height === 0)
            this._canvas.height = this._canvas.height + 1;

        // Subtract adjusted amounts from original values
        this.original_width -= adjust_width;
        this.original_height -= adjust_height;

        let row_height = this.original_height / height;
        let col_width  = this.original_width / width;
        
        // draw vertical lines
        for (let x = 0.5; x < this._canvas.width; x += col_width) {
            this.drawLine(
                thickness,
                x,
                0.5,
                x,
                this._canvas.height - 1,
                hex_color
            );
        }
        
        // draw horizontal lines
        for (let y = 0.5; y < this._canvas.height; y += row_height) {
            this.drawLine(
                thickness, 
                0.5,
                y, 
                this._canvas.width - 1, 
                y, 
                hex_color
            );
        }

    }

    // Fill rectangle
    fillRectangle(
        rect: Rectangle,
        hex_color: string
    ): void {
        
        this.ctx.fillStyle = hex_color;
        this.ctx.fillRect(rect.row_shift + 1, rect.col_shift + 1, rect.width - 1, rect.height - 1);

        // if (data.length - 1 != rect.coord.x && data[0].length -1 != rect.coord.y) {
        //     this.ctx.fillRect(rect.row_shift + 1, rect.col_shift + 1, rect.width - 1, rect.height - 1);
        // }
        // else if (data.length - 1 == rect.coord.x && data[0].length -1 == rect.coord.y) {
        //     this.ctx.fillRect(rect.row_shift + 1, rect.col_shift  + 1, rect.width - 2, rect.height - 2);
        // }
        // else if (data.length - 1 == rect.coord.x) {
        //     this.ctx.fillRect(rect.row_shift + 1, rect.col_shift + 1, rect.width - 1, rect.height - 2);
        // } else {
        //     this.ctx.fillRect(rect.row_shift + 1, rect.col_shift + 1, rect.width - 2, rect.height - 1);
        // }
    }

    // Get the mouse position relative to the canvas
    getMousePosition(
        evt: MouseEvent
    ): Coord {
        let rect: DOMRect = this._canvas.getBoundingClientRect();
        let coord: Coord = new Coord (
            evt.clientX - rect.left, 
            evt.clientY - rect.top
        );
        return coord;
    }

    drawString(
        text: string
    ) {
        this.ctx.font = '10pt Calibri';
        this.ctx.fillText(text, 0, 10);
    }

}
