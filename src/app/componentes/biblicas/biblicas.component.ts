import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Question, QuestionAnswer } from 'src/app/models/perguntas';

@Component({
  selector: 'app-biblicas',
  templateUrl: './biblicas.component.html',
  styleUrls: ['./biblicas.component.scss'],
})
export class BiblicasComponent implements OnInit {
  perguntasBiblicas: Question[] = [
    {
      title: 'QUAIS SÃO OS LIVROS DO PENTATEUCO?',
      answers: [
        { descripiton: 'GÊNESIS, ÊXODO, LEVÍTICO, NÚMEROS E DEUTERONÔMIO.'}
      ]
    },
    {
      title: ' QUEM FORAM OS PATRIARCAS? ',
      answers: [
        { descripiton: 'ABRAÃO, ISAQUE E JACÓ.'}
      ]
    }
  ]
  curQuestion: Question;
  questionIndex: number = 0;
  
  constructor(private modalCrl: ModalController) { }
  
  ngOnInit() {}



  proximaQuestao(answer: QuestionAnswer){
    this.questionIndex++;
    // this.curQuestion = this.perguntasBiblicas[this.curQuestion];
  }
  
  

  voltar(){
    this.modalCrl.dismiss();
  }
}
