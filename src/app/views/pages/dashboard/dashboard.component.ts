import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/first-driving-lesson.jpg?alt=media',
      title: 'TITULO DE PRUEBA',
      subtitle: 'SUBTITULO DE PRUEBA',
    };
    this.slides[1] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/girl-happy-passing-test.jpg?alt=media',
      title: 'TITULO DE PRUEBA',
      subtitle: 'SUBTITULO DE PRUEBA',
    }
    this.slides[2] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/instructor-in-car.jpg?alt=media',
      title: 'TITULO DE PRUEBA',
      subtitle: 'SUBTITULO DE PRUEBA',
    }
  }
  onSlideChange(event:any){
    console.log(event);
  }
}
