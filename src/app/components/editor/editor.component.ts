import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public penX: number;
  public penY: number;
  public mouseDown: boolean;

  constructor() { }

  ngOnInit() {
    this.mouseDown = false;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log(event.clientX)
    console.log(event.clientY)
    if (this.mouseDown) {
      this.penX = event.clientX;
      this.penY = event.clientY;
      this.ctx.fillRect(this.penX - 20, this.penY - 20, 20, 20);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.mouseDown = true
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.mouseDown = false
  }
}
