import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.scss'],
})
export class TortaComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  voltar(){
    this.modalCtrl.dismiss();
  }

}
