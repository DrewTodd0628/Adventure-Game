import { Component, HostListener, OnInit } from '@angular/core';
import { PlayerControllerService } from '../service/player-controller.service';
import { WorldGeneratorService } from '../service/world-generator.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit {
  public type: string = 'grass';
  public x: number = 0;
  public y: number = 0;
  public strips: string[][] = [];
  public layers: string[][][] = [];
  constructor(
    private worldGen: WorldGeneratorService,
    private pController: PlayerControllerService
  ) {}

  ngOnInit(): void {
    this.layers = this.worldGen.getOverWorld();
  }

  ngAfterViewInit() {
    this.pController.addController();
    // document.addEventListener('keydown', this.keyPress);
  }
}
