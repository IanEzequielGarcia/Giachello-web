import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/10981076_1792140091011989_3183092730530913781_o.jpg?alt=media&token=b3f26076-db33-452e-a355-1cca8a5972e1',
    };
    this.slides[1] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/1147655_1406535209572481_1645586144_o.jpg?alt=media&token=6c78487e-f461-4f32-b418-a9ef774edb92',
    }
    this.slides[2] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/10974301_1792137671012231_3174899646738802232_o.jpg?alt=media&token=dd7d0b01-2494-4d85-ac68-375ac7ba6e22',
    }
    this.slides[3] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/1146853_1792138167678848_9022478942069390528_o.jpg?alt=media&token=5cb01932-635a-4b99-a827-e2f00f39af90',
    }
  }
}
