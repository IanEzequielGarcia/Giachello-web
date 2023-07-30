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
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/IMG-20210320-WA0013.jpg?alt=media&token=b418f4f0-0408-4728-aa50-b84b95e49566',
    }
    this.slides[3] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/FB_IMG_1616247684621.jpg?alt=media&token=14b77fe5-fbb6-435c-b332-350e76375a67',
    }
  }
}
