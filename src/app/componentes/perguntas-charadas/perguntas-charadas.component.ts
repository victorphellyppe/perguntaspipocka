import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perguntas-charadas',
  templateUrl: './perguntas-charadas.component.html',
  styleUrls: ['./perguntas-charadas.component.scss'],
})
export class PerguntasCharadasComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  voltar(){
    this.modalCtrl.dismiss();
  }

}
