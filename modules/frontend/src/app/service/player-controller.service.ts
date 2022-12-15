import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerControllerService {
  leftBlocked: boolean = false;
  rightBlocked: boolean = false;
  topBlocked: boolean = false;
  bottomBlocked: boolean = false;
  tileSize: number = 32;
  constructor() {}

  public addController(): void {
    document.addEventListener('keydown', this.keyPress);
  }

  // @HostListener('document:keyup', ['$event'])
  // onKeyUp(ev: KeyboardEvent) {
  //   // do something meaningful with it
  //   console.log(`The user just pressed ${ev.key}!`);
  // }

  private keyPress(e: any): void {
    let speed: number = 4;
    let elem: HTMLElement = document.getElementById('world')!;
    if (e.keyCode == 39 && !this.rightBlocked) {
      let initX = elem.offsetLeft;
      elem.style.left = initX + -speed + 'px';
    } //right arrow
    if (e.keyCode == 37 && !this.leftBlocked) {
      let initX = elem.offsetLeft;
      elem.style.left = initX + speed + 'px';
    } //left arrow
    if (e.keyCode == 38 && !this.topBlocked) {
      let initY = elem.offsetTop;
      elem.style.top = initY + speed + 'px';
    } //up arrow
    if (e.keyCode == 40 && !this.bottomBlocked) {
      let initY = elem.offsetTop;
      elem.style.top = initY + -speed + 'px';
    } //down arrow

    // Stops player from moving in direction of collision
    let pPos = document
      .getElementsByClassName('player')[0]
      .getBoundingClientRect();
    document
      .querySelectorAll('[ng-reflect-type="tree"]')!
      .forEach((e, index) => {
        if (
          (!this.leftBlocked &&
            !this.rightBlocked &&
            !this.topBlocked &&
            !this.bottomBlocked) ||
          index == 0
        ) {
          let obstacle = e.firstChild as HTMLElement;
          let oPos = obstacle.getBoundingClientRect();

          let leftHit =
            oPos.right + 2 < pPos.right + 2 &&
            oPos.right + 2 > pPos.left - 2 &&
            oPos.bottom > pPos.top &&
            oPos.top < pPos.bottom;

          let rightHit =
            oPos.left - 2 > pPos.left - 2 &&
            oPos.left - 2 < pPos.right + 2 &&
            oPos.bottom > pPos.top &&
            oPos.top < pPos.bottom;

          let topHit =
            oPos.bottom + 1 < pPos.bottom + 1 &&
            oPos.bottom + 1 > pPos.top - 1 &&
            oPos.left < pPos.right &&
            oPos.right > pPos.left;

          let bottomHit =
            oPos.top - 1 > pPos.top - 1 &&
            oPos.top - 1 < pPos.bottom + 1 &&
            oPos.left < pPos.right &&
            oPos.right > pPos.left;

          if (oPos != undefined && pPos != undefined) {
            if (leftHit) {
              console.log('hit from left');
              this.leftBlocked = true;
            } else if (this.leftBlocked) {
              this.leftBlocked = false;
            }

            if (rightHit) {
              console.log('hit from right');
              this.rightBlocked = true;
            } else if (this.rightBlocked) {
              this.rightBlocked = false;
            }

            if (topHit) {
              console.log('hit from top');
              this.topBlocked = true;
            } else if (this.topBlocked) {
              this.topBlocked = false;
            }

            if (bottomHit) {
              console.log('hit from bottom');
              this.bottomBlocked = true;
            } else if (this.bottomBlocked) {
              this.bottomBlocked = false;
            }
          }
        }
      });
  }

  // public moveT(x: number, y: number): void {
  //   console.log('move');
  //   let elem: HTMLElement = document.getElementById('world')!;
  //   let initX = elem.offsetLeft;
  //   let initY = elem.offsetTop;

  //   elem.style.top = initY + y + 'px';
  //   elem.style.left = initX + x + 'px';
  // }

  // private keyPress(e: any): void {
  //   console.log('keypress');
  //   console.log(e.keyCode);
  //   if (e.keyCode == 39) {
  //     moveTo(2, 0);
  //     console.log('move was called');
  //   } //right arrow
  //   if (e.keyCode == 37) {
  //     moveTo(-2, 0);
  //   } //left arrow
  //   if (e.keyCode == 38) {
  //     moveTo(0, -2);
  //   } //up arrow
  //   if (e.keyCode == 40) {
  //     moveTo(0, 2);
  //   } //down arrow
  // }
}
