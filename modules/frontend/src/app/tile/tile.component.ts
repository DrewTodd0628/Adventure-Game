import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() type!: string;
  @Input() level!: number;
  @Input() x!: number;
  @Input() y!: number;
  // @Input() sizeX!: number;
  // @Input() sizeY!: number;
  @ViewChild('tile')
  tile!: ElementRef;
  sizeX: number = 32;
  sizeY: number = 32;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Unit of measurement conversion, Pixels to Meters.
    this.x = 32 * this.x;
    this.y = 32 * this.y;

    if (this.type == 'tree') {
      this.sizeY = 64;
    }

    this.tile.nativeElement.style.backgroundImage =
      'url("../../../assets/images/' + this.type + '.png")';
    this.tile.nativeElement.style.zIndex = this.level;
    this.tile.nativeElement.style.left = this.x + 'px';
    this.tile.nativeElement.style.top = this.y + 'px';
    this.tile.nativeElement.style.width = this.sizeX + 'px';
    this.tile.nativeElement.style.height = this.sizeY + 'px';
  }
}
