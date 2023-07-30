import { Component } from '@angular/core';

interface Quiz{
  image: string | null;
  question: string;
  answer: { option: string, correct: boolean } [];
}

interface Response {
  text: string;
  correct?: boolean;
}

interface Question {
  img: string;
  responses: Response[];
  text: string;
}


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {
  
  quizzes: Quiz[] = [
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b229.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        {
          "option": "Inicio de doble mano.",
          "correct": false
        },
        {
          "option": "Encrucijada (bifurcación).",
          "correct": true
        },
        {
          "option": "Estrechamiento (en una sola mano).",
          "correct": false
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b263.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        {
          "option": "Comienzo de autopista.",
          "correct": true
        },
        {
          "option": "Comienzo de ruta.",
          "correct": false
        },
        {
          "option": "Comienzo de semiautopista.",
          "correct": false
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b24.jpg",
      "question": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
      "answer": [
        {
          "option": "Que no comience a cruzar la calzada.",
          "correct": false
        },
        {
          "option": "Si inició el cruce, que lo finalice con mucha precaución.",
          "correct": false
        },
        {
          "option": "Ambas respuestas, la A y la B son correctas.",
          "correct": true
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b76.jpg",
      "question": "¿Qué indica esta demarcación amarilla en la calzada?",
      "answer": [
        {
          "option": "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
          "correct": false
        },
        {
          "option": "Que se debe circular lentamente por su sector central.",
          "correct": false
        },
        {
          "option": "Que no se debe circular sobre ella.",
          "correct": true
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b274.jpg",
      "question": "Indique qué significa esta señal:",
      "answer": [
        {
          "option": "Ruta Nacional N°5.",
          "correct": false
        },
        {
          "option": "Ruta Provincial N°5.",
          "correct": true
        },
        {
          "option": "Ruta Panamericana N°5.",
          "correct": false
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b253.jpg",
      "question": "Esta señal vertical reglamentaria indica…",
      "answer": [
        {
          "option": "Que es un carril preferencial para ciclistas.",
          "correct": false
        },
        {
          "option": "Que es un carril de uso exclusivo para ciclistas.",
          "correct": true
        },
        {
          "option": "Que los ciclistas no pueden circular por este carril.",
          "correct": false
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b259.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        {
          "option": "Prohibición de Girar a la Derecha.",
          "correct": false
        },
        {
          "option": "Prohibición de Cambiar de Carril.",
          "correct": true
        },
        {
          "option": "Prohibición de Adelantar.",
          "correct": false
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg",
      "question": "¿Qué indica esta señal reglamentaria?",
      "answer": [
        {
          "option": "Inicio de calle de convivencia.",
          "correct": false
        },
        {
          "option": "Los peatones no deben circular por esa zona.",
          "correct": false
        },
        {
          "option": "Los peatones deben circular obligatoriamente por la derecha.",
          "correct": true
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg",
      "question": "¿Qué indica esta señal reglamentaria?",
      "answer": [
        {
          "option": "Inicio de calle de convivencia.",
          "correct": false
        },
        {
          "option": "Los peatones no deben circular por esa zona.",
          "correct": false
        },
        {
          "option": "Los peatones deben circular obligatoriamente por la derecha.",
          "correct": true
        }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg",
      "question": "¿Qué indica esta señal reglamentaria?",
      "answer": [
        {
          "option": "Inicio de calle de convivencia.",
          "correct": false
        },
        {
          "option": "Los peatones no deben circular por esa zona.",
          "correct": false
        },
        {
          "option": "Los peatones deben circular obligatoriamente por la derecha.",
          "correct": true
        }
      ]
    }
  ]

  currentQuiz:number=0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered:any[] = [];
  result = false;
  resultStatus = 'Mostar puntaje';

  ngOnInit(): void {
    this.currentQuiz = this.getRandom();
    this.prevAnswered.push(this.currentQuiz);
  }

  getRandom(){
    return Math.floor(Math.random() * this.quizzes.length);
  }

  onAnswer(option: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      let newQuiz = this.getRandom();
      while(this.prevAnswered.includes(newQuiz) && this.prevAnswered.length < 10){
        newQuiz = this.getRandom();
      }
      this.currentQuiz = newQuiz;
        this.prevAnswered.push(this.currentQuiz);
        //this.actualizarBandera();
        this.answerSelected = false;
    }, 30);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }

  mostrarRespuesta(){
    this.result = true;
    let puntaje={
      puntos:0,
      uid:"",
      fecha:""
    }
    console.log(puntaje);
  }

  playAgain(){
    this.prevAnswered = [];
    this.prevAnswered.push(this.getRandom());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

}

    
  
