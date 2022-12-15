import { Injectable } from '@angular/core';
import overworld from '../../assets/worlds/overworld.json';

@Injectable({
  providedIn: 'root',
})
export class WorldGeneratorService {
  constructor() {}

  getOverWorld(): string[][][] {
    let layers: string[][][] = [];
    overworld.world.forEach((l) => layers.push(l));
    return layers;
  }
}
