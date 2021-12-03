import { FutebolComponent } from './../../componentes/futebol/futebol.component';
import { PerguntasCharadasComponent } from './../../componentes/perguntas-charadas/perguntas-charadas.component';
import { TortaComponent } from './../../componentes/torta/torta.component';
import { BiblicasComponent } from './../../componentes/biblicas/biblicas.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {
  title:any = "Perguntas..."
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
 async biblicas(){
    const biblica = await this.modalCtrl.create({
      component: BiblicasComponent,
      animated:true,
      mode:'ios',
      swipeToClose: true
    });
    return await biblica.present();
  }

  async torta(){
    const torta = await this.modalCtrl.create({
      component: TortaComponent,
      animated: true,
      mode: 'ios',
      swipeToClose: true
    });
    return await torta.present();
  }
  async charadas(){
    const charadas = await this.modalCtrl.create({
      component: PerguntasCharadasComponent,
      animated: true,
      mode: 'ios',
      swipeToClose: true
    });
    return await charadas.present();
  }
  async futebol(){
    const futebol = await this.modalCtrl.create({
      component: FutebolComponent,
      animated: true,
      mode: 'ios',
      swipeToClose: true
    });
    return await futebol.present();
  }
}
