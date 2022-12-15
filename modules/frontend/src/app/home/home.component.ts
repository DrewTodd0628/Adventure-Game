import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlayerControllerService } from '../service/player-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public save: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('/api/save/0', { responseType: 'text' })
      .subscribe((response) => {
        if (response) {
          console.log(JSON.parse(response));
          this.save = response;
        } else {
          alert('Failed to query list.');
          this.save = 'Failed to fetch game save.';
        }
      });
  }
}
