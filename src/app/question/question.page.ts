import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Question, QuestionAnswer } from 'src/app/models/question';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  respostaCerta: any;
  respostaErrada;

  desabilitado = false;
  desabilitado2 = false;
  curQuestion: Question;
  questionIndex: number = 0;
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router,
    private questionService: QuestionService,
    private nativeAudio: NativeAudio,
    ) {
    this.questionService.questions.sort((a, b) => 0.5 - Math.random());
  }
  ngOnInit(): void {
    //audios
    this.nativeAudio.preloadSimple('vaicomecar', '/assets/audios/vai-comecar.wav');
    this.nativeAudio.preloadSimple('errou', '/assets/audios/que-pena.wav');
    this.nativeAudio.preloadSimple('acertou', '/assets/certa-resposta.wav');
    this.nativeAudio.preloadSimple('possoPerguntar', '/assets/posso-perguntar');
    this.nativeAudio.preloadSimple('suspense', '/assets/suspense.wav');
    this.nativeAudio.loop('suspense');
    this.curQuestion = this.questionService.questions[this.questionIndex];
  }
  doAnswer(answer: QuestionAnswer) {
    this.nativeAudio.play('possoPerguntar');
    if (answer.isRight) {
      this.nativeAudio.play('acertou');
      // this.showToast();
      this.questionIndex++;
      this.curQuestion = this.questionService.questions[this.questionIndex];
    } else {
      this.erroAlert();
    }
  }



  doPulo() {
    // this.curQuestion = this.questions[this.questionIndex + 1];
    if (this.curQuestion = this.questionService.questions[this.questionIndex + 1]) {
      this.desabilitado = true;
    } else {
      this.questionService.questions[this.questionIndex];
    }
  }

  doTwoPulo() {
    if (this.curQuestion = this.questionService.questions[this.questionIndex + 2]) {
      this.desabilitado2 = true;
    } else {
      this.questionService.questions[this.questionIndex];
    }
  }

  /**  ====== ALERTAS ========  */

  showToast() {
    this.respostaCerta = this.toastCtrl.create({
      message: 'Aeeee, acertou.',
      duration: 1500
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errouMsg() {
    this.alertCtrl.create({
      message: 'Você errou, tente novamente para se tornar um campeão da inclusão!',
      buttons: ['OK']
    });
    setTimeout(function () {
      this.nativeAudio.play('errou');
      this.router.navigateByUrl['/home'];
    }, 3000);
  }


  async erroAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Você errou, tente novamente para se tornar um campeão da inclusão!',
      buttons: [
        // {
        //   text: 'Cancelar',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     console.log('Confirm Cancel: blah');
        //   }
        // }, 
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['/home']);
          }
        }
      ]
    });
    await alert.present();



    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
  async pararAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Tem certeza disso ?',
      message: 'se confirmar você irá desistir e voltará para o menu',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');

          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['/parar']);
          }
        }
      ],

    });

    await alert.present();

  }
}

