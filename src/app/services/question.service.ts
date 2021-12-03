import { QuestionAnswer } from 'src/app/models/question';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { PrizeInfo } from '../models/prize-info';
import { ToastController } from '@ionic/angular';
import { Premios } from './premios.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  // [x: string]: any;
  public questionCount: number = 0;
  public totalCorrectAnswer: number = 0;
 public questions: Question[] = [
  {
    title:'A Lei de Diretrizes e Bases-LDB - Lei nº 9.394/96 – preconiza que os sistemas de ensino devem assegurar aos alunos currículo, métodos, recursos e organização específicos para atender às suas necessidades.',
    answers: [
      {description:'Certo', isRight:true},
      {description:'Errado', isRight:false},
    ],
    id:1
  },
  {
    title:'A Lei n° 10.436/2002 reconhece a Língua Brasileira de Surdos como meio legal de escrita, determinando que sejam garantidas formas institucionalizadas de apoiar seu uso e difusão, bem como a inclusão da disciplina de Libras.',
    answers: [
      {description:'Certo', isRight:false},
      {description:'Errado', isRight:true},
    ],
    id:2
  },
  {
    title:'O Plano de Desenvolvimento da Educação-PDE - Lei nº 6.094/2007 – traz como eixos a acessibilidade arquitetônica dos prédios escolares, a implantação de salas de recursos multifuncionais e a formação docente para o atendimento educacional especializado.',
    answers: [
      {description:'Certo', isRight:true},
      {description:'Errado', isRight:false},
    ],
    id:3
  },
  {
    title: 'Aprovada pela Assembleia Legislativa do Estado de Alagoas, a Convenção Sobre Direitos das Pessoas com Deficiência estabelece um sistema de educação inclusiva em todos os níveis. ',
    answers: [
      {description:'Certo', isRight:false},
      {description: 'Errado', isRight:true}
    ],
    id:4
  },
  {
    title: 'Dentre as finalidades do NAPNE - Núcleo de Atendimento às Pessoas com Necessidades Específicas - estão incentivar, mediar e facilitar no processo de ensino e aprendizagem de alunos com necessidades específicas.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:5
  },
  {
    title: 'São considerados alunos com necessidades específicas, segundo o NAPNE do Instituto Federal de Alagoas, estudantes com transtornos globais do desenvolvimento e com altas habilidades/superdotação, de acordo com o Decreto nº 7.611/2011.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:6
  },
  {
    title: 'Além da cultura da “educação para a convivência”, o NAPNE tem como objetivos: /n\
    a. Sensibilizar a comunidade escolar quanto à inclusão e os direitos de todos à educação /n\
    b. Atendimento e acompanhamento dos alunos com necessidades específicas /n\
    c. Atividades voltadas à formação de professores e técnicos',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:7
  },
  {
    title: 'Sobre as terminologias adequadas e recomendadas pelo NAPNE do Instituto Federal de Alagoas: /n\
    a. Pessoa com deficiência física /n\
    b. Pessoa com deficiência visual /n\
    c. Pessoa cega total',
    answers: [
      {description:'Certo', isRight:false},
      {description: 'Errado', isRight:true}
    ],
    id:8
  },
  {
    title: 'Ainda sobre as recomendações do NAPNE, é correto quando orienta que evite referir-se à pessoa com deficiência pela sigla PcD, porque não se deve usar siglas para chamar seres humanos.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:9
  },
  {
    title: 'A recomendação orientada aos profissionais ao lidar com alunos com necessidades específicas é que o papel do professor seja de mediador/facilitador/orientador do saber e do ensino/aprendizagem.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:10
  },
  {
    title: 'Sobre os alunos com deficiência visual não é recomendado que o professor ou profissional auxiliar modifique os móveis de lugar.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:11
  },
  {
    title: 'Ainda sobre os alunos com deficiência visual, não é necessário em sala de aula um profissional auxiliar que ensine em Braile.',
    answers: [
      {description:'Certo', isRight:false},
      {description: 'Errado', isRight:true}
    ],
    id:12
  },
  {
    title: 'Recomenda-se para o professor na mediação do aluno com deficiência física esteja atento à adaptação do mobiliário para o conforto do aluno.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:13
  },
  {
    title: 'Na mediação em relação ao aluno com deficiência auditiva, o professor deve desenvolver competências linguísticas, metalinguísticas e cognitivas, levando o aluno ao conhecimento da língua portuguesa escrita.',
    answers: [
      {description:'Certo', isRight:true},
      {description: 'Errado', isRight:false}
    ],
    id:14
  },
  {
    title: 'Para o trabalho com alunos com deficiência intelectual, recomenda-se ao professor que estimule habilidades sociais e interpessoais; evite comparações; planeje metodologia de ensino com recursos diversificados, dando ao conteúdo um significado prático/instrumental; priorize a   instrução verbal com uso de recursos visuais e auditivos; e não utilize relógio e quadros referenciais com rotinas, alfabetos e números.',
    answers: [
      {description:'Certo', isRight:false},
      {description: 'Errado', isRight:true}
    ],
    id:15
  },
  {
    title: 'Para promover a educação inclusiva, precisamos:',
    answers: [
      {description:'Enfrentar os mecanismos de exclusão existentes no sistema educacional, ampliando-o, diversificando suas ofertas, aprimorando sua cultura e práticas pedagógicas e, principalmente, articulando-o com todas as políticas públicas.', isRight:true},
      {description: 'Criar a cultura da inclusão com urgência, para que todos os alunos com necessidades educacionais específicas tenham condições de conviverem com crianças consideradas no padrão que se convencionou chamar de normalidade.', isRight:false},
      {description: 'Incluir concretamente, colocando os alunos com necessidades educacionais específicas nas turmas de ensino regular, pois a integração, realizada há um longo tempo no sistema, está superada e não oferece os benefícios da convivência.', isRight:false},
      {description: 'Inserir o aluno com necessidades educacionais específicas numa turma de alunos ditos normais, como meio fundamental de garantir o exercício do convívio entre as diferenças, numa sociedade plural como a brasileira.', isRight:false},

    ],
    id:16
  },
  {
    title: 'Sobre a educação inclusiva nas escolas, assinale a alternativa correta:',
    answers: [
      { description: 'Escola inclusiva é, aquela que garante a qualidade de ensino educacional a cada um de seus alunos, reconhecendo e respeitando a diversidade e respondendo a cada um de acordo com suas potencialidades e necessidades;', isRight:true },
      {description: 'A escola somente poderá ser considerada inclusiva quando estiver direcionada para tratar os alunos de forma indiferente em todos os aspectos;', isRight:false},
      {description: 'A escola é aquela que garante a preferência no ensino educacional ao aluno destaque, tratando todos de forma genérica sem haver necessidade de tratamento diferenciado em nenhum aspecto;', isRight:false},
      {description: 'Em toda escola inclusiva, o aluno está sujeito a segregação, de modo a garantir a sua caminhada no processo de aprendizagem e de construção das competências necessárias para o exercício pleno da cidadania.', isRight:false}
    ],
    id:17
  },
  {
    title: 'A Educação Inclusiva não deve ser confundida como Educação Especial, porém, a segunda esta inclusa na primeira. Em outras palavras, a Educação Inclusiva é a forma de:',
    answers: [
      {description: 'Promover a aprendizagem e o desenvolvimento de todos.', isRight:true },
      {description: 'Inclusão de jovens e adultos no ensino médio.', isRight:false},
      {description: 'Promover a aprendizagem de crianças somente na educação infantil.', isRight:false},
      {description: 'Inclusão de crianças no ensino fundamental.', isRight:false}
    ],
    id:18
  },
  {
    title: 'O conceito de educação inclusiva surgiu a partir de 1994, com a Declaração de Salamanca. A ideia da educação inclusiva é que as crianças com necessidades educacionais específicas sejam incluídas em:',
    answers: [
      {description: 'Quaisquer escolas de ensino regular.', isRight:true },
      {description: 'Apenas institutos de atendimentos especiais.', isRight:false},
      {description: 'Somente escolas específicas para crianças com deficiências.', isRight:false},
      {description: 'Quaisquer unidades de atendimento para educação especial.', isRight:false}
    ],
    id:19
  },
  {
    title: 'De acordo com a Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, não podemos afirmar que:',
    answers: [
      {description: 'na perspectiva da educação inclusiva, a educação especial passa a integrar a proposta pedagógica da escola regular, promovendo o atendimento às necessidades educacionais específicas dos alunos, transtornos globais de desenvolvimento e altas habilidades/superdotação.', isRight:false },
      {description: 'constitui um paradigma educacional fundamentado na concepção de direitos humanos, que conjuga igualdade e diferença como valores indissociáveis, e que avança em relação à ideia de equidade formal ao contextualizar as circunstâncias históricas da produção da exclusão dentro e fora da escola.', isRight:false},
      {description: 'o atendimento educacional especializado tem como função identificar, elaborar e organizar recursos pedagógicos e de acessibilidade que eliminem as barreiras para a plena participação dos alunos, considerando suas necessidades específicas.', isRight:false},
      {description: 'para atuar na educação especial, o professor deve ter como base da sua formação, inicial e continuada, conhecimentos gerais para o exercício da docência, bem como conhecimentos gerais da área.', isRight:true}
    ],
    id:20
  },
  {
    title: 'A Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, propõe, exceto:',
    answers: [
      {description: 'Que no contexto escolar, todos aprendem a viver coletivamente, a repartir tarefas e dividir responsabilidades, pois a valorização da diversidade de talentos humanos é um exercício que desenvolve as ações dos alunos e que resulta do trabalho em grupos heterogêneos.', isRight:false },
      {description: 'Que a escola contemple todos os alunos, mesmo aqueles com severas limitações, que não conseguem aprender os conteúdos escolares, mas que se beneficiem da convivência com os outros alunos. Por conseguinte, os alunos, nestas condições, podem receber, como complemento, o Atendimento Educacional Especializado.', isRight:false},
      {description: 'A mudança de valores, atitudes e práticas educacionais para atender a todos os estudantes, sem nenhum tipo de discriminação, assegurando-lhes uma educação de qualidade.', isRight:false},
      {description: 'Que a intencionalidade da educação seja voltada diretamente para a preparação dos indivíduos para o desempenho de funções específicas: mão de obra qualificada para o mercado de trabalho, ou seja, funções atreladas ao desenvolvimento econômico do país.', isRight:true}
    ],
    id:21
  }, 
  {
    title: 'São objetivos da Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, exceto:',
    answers: [
      {description: 'Segregação social;', isRight:true},
      {description: 'Atendimento educacional especializado;', isRight:false},
      {description: 'Participação da família e da comunidade;', isRight:false},
      {description: 'Articulação intersetorial na implementação das políticas públicas.', isRight:false}
    ],
    id:22
  },
  {
    title: 'A Declaração de Salamanca é um documento internacional que apresenta proposições sobre: ',
    answers: [
      {description: 'Propostas de educação em Direitos Humanos.', isRight:false},
      {description: 'Orientações de Educação para o trabalho coletivo e sustentável.', isRight:false},
      {description: 'Propostas para uma Educação inovadora para o século XXI', isRight:false},
      {description: 'Perspectivas para uma educação inclusiva', isRight:true}
    ],
    id:23
  },
  {
    title: 'As necessidades básicas de aprendizagem dos alunos com necessidades educacionais específicas requerem atenção especial. É preciso tomar medidas que garantam a igualdade de acesso à educação a todos, independentemente das especificidades apresentadas. Sendo assim, sobre a Educação Inclusiva é correto afirmar:',
    answers: [
      {description: 'A educação inclusiva tem como prioridade a prática pedagógica tradicional, preparando os alunos para que consigam inserir-se no exigente e competitivo mercado de trabalho.', isRight:false },
      {description: 'A Educação Inclusiva reconhece que todas as escolas e sistemas de educação precisam mudar no sentido de encontrar respostas para as necessidades individuais de todos os educandos, com ou sem especificidades.', isRight:true },
      {description: 'A educação inclusiva é aquela que mantém os educandos em escolas especiais, com ensino adaptado.', isRight:false },
      {description: 'A Educação Inclusiva reconhece que todas as escolas e sistemas de educação precisam mudar no sentido de incluir avaliações padronizadas no processo de ensino aprendizagem, propondo um currículo de base tradicional.', isRight:false },
    ],
    id:24
  },
  {
    title: 'A perspectiva da educação inclusiva traz como premissa a prevalência de um único sistema educativo para todos, ou seja, a inclusão de',
    answers: [
      {description:'Todo e qualquer tipo de especificidade ou alta habilidade, na escola de educação especial.', isRight:false},
      {description: 'Todas as crianças com deficiências mentais e físicas, na escola de educação especial.', isRight: false},
      {description: 'Todas as crianças com necessidades educacionais específicas na escola regular.', isRight: true},
      {description: 'Crianças surdas e cegas na escola de educação especial, a partir do ensino obrigatório de Braille e da Língua de Sinais.', isRight: false}
    ],
    id:25
  },
  {
    title: 'O Atendimento Educativo Especializado – AEE, previsto na Política Nacional de Educação Inclusiva, tem como uma de suas características:',
    answers: [
      {description: 'a oferta facultativa pelos sistemas de ensino.', isRight:false},
      {description: 'o atendimento preferencial em escolas especiais.', isRight:false},
      {description: 'a independência em relação ao projeto político pedagógico da escola.', isRight:false},
      {description: 'a identificação, elaboração e organização de recursos pedagógicos e de acessibilidade.', isRight:true}
    ],
    id:26
  },   
  {
    title: 'A Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, foi elaborada tendo como um de seus preceitos que:',
    answers: [
      {description: 'uma das estratégias mais eficazes na educação especial é a terminalidade específica do ensino fundamental.', isRight:false},
      {description: 'o conhecimento se constrói sem resultar na promoção de alguns alunos e na marginalização de outros no processo escolar.', isRight:true},
      {description: 'ambientes escolares inclusivos são fundamentados na identidade normal ou natural e na aceitação das diferentes.', isRight:false},
      {description: 'o atendimento educacional especializado deve se constituir em um grande e complexo sistema educacional paralelo.', isRight:false},
    ],
    id:27
  },
  { // questão 13
    title: 'Considerando a Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, assinale a opção correta.',
    answers: [
      {description: 'A transversalidade da educação especial é uma exigência da educação básica.', isRight:false},
      {description: 'Não requer atendimento educacional especializado, pois o aluno deve inserir-se no contexto regular de ensino.', isRight:false},
      {description: 'Não tem condições de garantir a continuidade da escolarização nos níveis mais elevados do ensino.', isRight:false},
      {description: 'Requer a formação de professores para o atendimento educacional especializado e demais profissionais da educação para a inclusão escolar.', isRight:true},
    ],
    id:28
  },
  { //questao 14
    title: 'De acordo com a Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, é correto afirmar que: ',
    answers: [
      {description: 'a educação especial deve ser organizada de forma paralela à educação comum, pois essa é a forma mais apropriada para a aprendizagem dos alunos que apresentam especificidades.', isRight:false},
      {description: 'a inclusão escolar tem início no ensino fundamental, e sua oferta deve ocorrer, preferencialmente, em centros educacionais em interface com os serviços de saúde e assistência social.', isRight:false},
      {description: 'o atendimento educacional especializado, em função da complexidade na elaboração e organização de recursos pedagógicos específicos, restringe-se ao ensino fundamental.', isRight:false},
      {description: 'a educação especial atua de forma articulada com o ensino comum, orientando para o atendimento às especificidades dos alunos.', isRight:true},
    ],
    id:29
  },
  { // questão 15
    title: 'São princípios expressos na Lei de Diretrizes e Bases da Educação Nacional, exceto:',
    answers: [
      {description: 'Valorização da experiência extraescolar.', isRight:false},
      {description: 'Incentivo à educação inclusiva.', isRight:true},
      {description: 'Vinculação entre a educação escolar, o trabalho e as práticas sociais.', isRight:false},
      {description: 'Consideração com a diversidade étnico-racial.', isRight:false},
    ],
    id:30
  },
  { //questão 16
    title: 'A Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, orienta que a avaliação pedagógica da educação inclusiva deve ser concebida como processo dinâmico tanto em relação ao conhecimento prévio e o nível atual de desenvolvimento do aluno quanto em relação às possibilidades de aprendizagem futura, configurando uma ação pedagógica:',
    answers: [
      {description: 'Cumulativa e somativa, recolhendo elementos que comprovem a deficiência apresentada.', isRight:false},
      {description: 'Processual e formativa, prevalecendo os aspectos qualitativos.', isRight:true},
      {description: 'Cumulativa e classificatória, prevalecendo os aspectos comparativos.', isRight:false},
      {description: 'Processual e somativa, prevalecendo os aspectos quantitativos.', isRight:false},
    ],
    id:31
  },
  { //questão 17
    title: 'A Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, considera que a educação inclusiva é uma ação política, cultural, social e pedagógica, desencadeada em defesa do direito de todos os alunos de estarem juntos, aprendendo e participando, sem nenhum tipo de discriminação. Nesse sentido, dentre os objetivos previstos na referida política, encontra-se promover: ',
    answers: [
      {description: 'A educação especial, organizada de forma paralela à educação comum, como a maneira mais apropriada para o atendimento do aluno com necessidades educacionais específicas. ', isRight:false},
      {description: 'A escolarização do aluno com necessidades educacionais específicas na educação básica como prioridade.', isRight:false},
      {description: 'A transversalidade da educação especial desde a educação infantil até a educação superior.', isRight:true},
      {description: 'A individualização dos programas escolares, adaptando os currículos e os objetivos educacionais.', isRight:false},
    ],
    id:32
  },
  
  
];


  private questionPremios = [
    1000, //1
    2000,
    3000,
    4000,
    5000, //5 //cada participante vai responder 10 perguntas somente
    10000, //10
    20000,
    30000,
    3000,
    3000,
  ];

  
  constructor(private toastCtrl: ToastController) {
    this.questions.sort((a,b) => 0.5 - Math.random());
   }

   ngOnInit(){
    //  this.nativeAudio.preloadSimple('certo.wav', 'assets/certo.wav').then(err => { console.log(err)});
    //  this.nativeAudio.preloadSimple('errou.wav', 'assets/errou.wav');
     

    //  this.nativeAudio.preloadComplex('suspense.wav', 'assets/suspense.wav', .2 , 1, 0).then(() => {
    //   this.nativeAudio.loop('backAudio');
    //  });
   }

   






  //  stopQuestion() {
  //    switch(this.questions.forEach(this.questions.answers == false)
  //  }
   proximaQuestao(): Question {
    const randomIndex: number = Math.floor(Math.random() * this.questions.length);
    this.questionCount++;
   console.log(this.getPrizeInfo());
    return this.questions.splice(randomIndex, 1)[0];
  }

  decidiParar(answer){
      if(answer.isRight){
        if(answer.isRight == 1){
        this.questionCount++;
        alert('Voce acertou 1 questão');
        }
        if(answer == 2){
        alert('Voce acertou 2 questão');
        }
      }
  }

  getPrizeInfo(): Premios {
    const curQuestionPrize  = this.questionPremios[this.questionCount -1];
    const acumulado = this.getPrizeInfo[this.questionCount -2];
    return {
      correctAnswer: curQuestionPrize,
      wrongAnswer: this.questionCount === 1 || this.questionCount  === 16 ? 0:acumulado/2, //logica padrao se errar
      quit: this.questionCount === 1 ? 0 : acumulado
    }
  }

  

  }