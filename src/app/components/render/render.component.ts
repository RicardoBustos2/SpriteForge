import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    let base_image = new Image();

    let self = this;
    base_image.onload = function () {
      self.ctx.drawImage(base_image, 0, 0, 16, 24, 0, -20, 16 * 4, 24 * 4);
    }
    base_image.src = 'assets/img/base.png';
  }


}





