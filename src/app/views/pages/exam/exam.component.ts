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
        { "option": "Inicio de doble mano.", "correct": false },
        { "option": "Encrucijada (bifurcación).", "correct": true },
        { "option": "Estrechamiento (en una sola mano).", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b263.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Comienzo de autopista.", "correct": true },
        { "option": "Comienzo de ruta.", "correct": false },
        { "option": "Comienzo de semiautopista.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b24.jpg",
      "question": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
      "answer": [
        { "option": "Que no comience a cruzar la calzada.", "correct": false },
        { "option": "Si inició el cruce, que lo finalice con mucha precaución.", "correct": false },
        { "option": "Ambas respuestas, la A y la B son correctas.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b76.jpg",
      "question": "¿Qué indica esta demarcación amarilla en la calzada?",
      "answer": [
        { "option": "Que es un sector destinado a la detención y al estacionamiento de vehículos.", "correct": false },
        { "option": "Que se debe circular lentamente por su sector central.", "correct": false },
        { "option": "Que no se debe circular sobre ella.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b274.jpg",
      "question": "Indique qué significa esta señal:",
      "answer": [
        { "option": "Ruta Nacional N°5.", "correct": false },
        { "option": "Ruta Provincial N°5.", "correct": true },
        { "option": "Ruta Panamericana N°5.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b253.jpg",
      "question": "Esta señal vertical reglamentaria indica…",
      "answer": [
        { "option": "Que es un carril preferencial para ciclistas.", "correct": false },
        { "option": "Que es un carril de uso exclusivo para ciclistas.", "correct": true },
        { "option": "Que los ciclistas no pueden circular por este carril.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b259.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Prohibición de Girar a la Derecha.", "correct": false },
        { "option": "Prohibición de Cambiar de Carril.", "correct": true },
        { "option": "Prohibición de Adelantar.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg",
      "question": "¿Qué indica esta señal reglamentaria?",
      "answer": [
        { "option": "Inicio de calle de convivencia.", "correct": false },
        { "option": "Los peatones no deben circular por esa zona.", "correct": false },
        { "option": "Los peatones deben circular obligatoriamente por la derecha.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b272.jpg",
      "question": "¿Qué indica esta señal?",
      "answer": [
        { "option": "Se encuentra permitido detenerse en esa vía.", "correct": false },
        { "option": "Existencia de un estacionamiento vehicular, en las inmediaciones.", "correct": true },
        { "option": "Se encuentra permitido estacionar en esa vía.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b235.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Niños jugando.", "correct": false },
        { "option": "Zona escolar.", "correct": true },
        { "option": "Calle peatonal.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b122.jpg",
      "question": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
      "answer": [
        { "option": "Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.", "correct": true },
        { "option": "Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.", "correct": false },
        { "option": "No debe traspasarse ninguna de ellas.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b258.jpg",
      "question": "¿Qué indica esta señal reglamentaria?",
      "answer": [
        { "option": "Que no se puede circular a una velocidad inferior a 35 km/h en esa vía.", "correct": true },
        { "option": "Que la velocidad máxima es de 35 km/h en esa vía.", "correct": false },
        { "option": "Que la velocidad precautoria es de 35 km/h en esa vía.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b270.jpg",
      "question": "¿Qué significa esta señal?",
      "answer": [
        { "option": "Prohibición de estacionar en la entrada de terminal de ómnibus.", "correct": false },
        { "option": "Existencia de terminal de ómnibus, en las inmediaciones.", "correct": true },
        { "option": "Prohibición de detenerse en la entrada de terminal de ómnibus.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b72.jpg",
      "question": "¿Qué tipo de señal es la siguiente imagen?",
      "answer": [
        { "option": "Reglamentaria.", "correct": false },
        { "option": "Transitoria.", "correct": true },
        { "option": "Informativa.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/c6.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Máximo Largo Permitido.", "correct": false },
        { "option": "Señal preventiva de ancho limitado.", "correct": true },
        { "option": "Reducción de Calzada.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b252.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Sobrepasos por la derecha.", "correct": false },
        { "option": "Circulación exclusiva (camión).", "correct": false },
        { "option": "Tránsito pesado a la derecha.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b265.jpg",
      "question": "¿Qué indica esta señal?",
      "answer": [
        { "option": "Permitido girar hacia la izquierda.", "correct": false },
        { "option": "Dirección obligatoria hacia la izquierda.", "correct": false },
        { "option": "Dirección permitida hacia la izquierda.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/a2.jpg",
      "question": "¿Puede un motovehículo circular por el carril señalizado en esta imagen?",
      "answer": [
        { "option": "No, ya que es de uso exclusivo de bicicletas.", "correct": true },
        { "option": "Sí, ya que es un vehículo de 2 ruedas.", "correct": false },
        { "option": "Sí, siempre y cuando no circulen bicicletas.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b83.jpg",
      "question": "¿Cuál de estas señales es Reglamentaria?",
      "answer": [
        { "option": "La señal A.", "correct": false },
        { "option": "La señal B.", "correct": true },
        { "option": "La señal C.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b222.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Senda peatonal.", "correct": false },
        { "option": "Personas trabajando.", "correct": true },
        { "option": "Cruce peatonal de máximo peligro.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b230.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Túnel.", "correct": true },
        { "option": "Puente angosto.", "correct": false },
        { "option": "Altura mínima.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b226.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Camino resbaladizo.", "correct": false },
        { "option": "Camino sinuoso.", "correct": true },
        { "option": "Camino cuesta arriba.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b225.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Cruce de jinetes.", "correct": true },
        { "option": "Prohibición de circular con animales.", "correct": false },
        { "option": "Camino peligroso por presencia de animales sueltos.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/c7.jpg",
      "question": "¿A qué vehículos prohíbe pasar esta señal?",
      "answer": [
        { "option": "A los vehículos que tienen más de 4,10 metros de ancho.", "correct": false },
        { "option": "A los vehículos que tienen más de 4.100 kilogramos de peso.", "correct": false },
        { "option": "A los vehículos que tienen más de 4,10 metros de altura.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b271.jpg",
      "question": "¿Qué indica esta señal?",
      "answer": [
        { "option": "Prohibición de detenerse en las inmediaciones a la plaza.", "correct": false },
        { "option": "Prohibición de estacionar en las inmediaciones a la plaza.", "correct": false },
        { "option": "Existencia de una plaza, en las inmediaciones.", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b120.jpg",
      "question": "¿Se puede traspasar la siguiente señal horizontal?",
      "answer": [
        { "option": "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.", "correct": true },
        { "option": "Sólo cuando la vía tiene dos carriles por sentido de circulación.", "correct": false },
        { "option": "No, porque indica prohibición de sobrepaso.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b154.jpg",
      "question": "Como norma general, frente a esta señal, ¿está permitido detenerse para el ascenso o descenso de pasajeros?",
      "answer": [
        { "option": "No. Está prohibido estacionar y detenerse.", "correct": false },
        { "option": "Sí. Sólo está prohibido estacionar pero no detenerse.", "correct": true },
        { "option": "Según la hora en que quiera realizarse la detención.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/c8.jpg",
      "question": "¿A qué vehículos prohíbe pasar esta señal?",
      "answer": [
        { "option": "Aquellos cuyo ancho máximo supere el indicado.", "correct": true },
        { "option": "Aquellos cuya altura máxima, incluida la carga, supere la indicada.", "correct": false },
        { "option": "Aquellos cuya longitud máxima supere la indicada.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/c9.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Limitación de altura.", "correct": false },
        { "option": "Limitación de peso.", "correct": true },
        { "option": "Limitación de ancho.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b246.jpg",
      "question": "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
      "answer": [
        { "option": "Verdadero.", "correct": true },
        { "option": "Falso.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/a13.jpg",
      "question": "¿Para qué sirve la demarcación horizontal señalada?",
      "answer": [
        { "option": "Mejorar la visibilidad de los motovehículos e indicar la presencia de una zona de detención exclusiva de los mismos.", "correct": true },
        { "option": "Permitir la circulación exclusiva de los motovehículos por un carril.", "correct": false },
        { "option": "Señalizar que por allí está prohibida la circulación de motovehículos.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b82.jpg",
      "question": "¿Cuál de estas señales comunica “Prevención”?",
      "answer": [
        { "option": "La señal A.", "correct": false },
        { "option": "La señal B.", "correct": true },
        { "option": "La señal C.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b275.jpg",
      "question": "Indique qué significa esta señal:",
      "answer": [
        { "option": "Ruta Nacional N°3.", "correct": true },
        { "option": "Ruta Provincial N°3.", "correct": false },
        { "option": "Ruta Panamericana N°3.", "correct": false }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b245.jpg",
      "question": "Determine qué indica la señal que a continuación se presenta:",
      "answer": [
        { "option": "Cruce Ferroviario (por la derecha).", "correct": false },
        { "option": "Prohibición de Girar.", "correct": false },
        { "option": "Panel de Prevención (Curva).", "correct": true }
      ]
    },
    {
      "image": "https://www.testdeconducir.com.ar/images/preguntas/b269.jpg",
      "question": "¿Qué indica esta señal?",
      "answer": [
        { "option": "Existencia de un teatro, en las inmediaciones.", "correct": true },
        { "option": "Prohibición de estacionar en la puerta de un teatro.", "correct": false },
        { "option": "Prohibición de detenerse en la puerta de un teatro.", "correct": false }
      ]
    }
  ];
  

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
  }

  playAgain(){
    this.prevAnswered = [];
    this.prevAnswered.push(this.getRandom());
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

}

    
  
