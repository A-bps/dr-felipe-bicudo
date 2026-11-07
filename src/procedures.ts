import { additional, procedures } from './content';

export const procedureGroups = [
  { id: 'capilar', name: 'Capilar' },
  { id: 'mamas', name: 'Mamas' },
  { id: 'corpo', name: 'Contorno corporal' },
  { id: 'face', name: 'Face' },
  { id: 'estetica', name: 'Procedimentos estéticos' },
] as const;

type Group = (typeof procedureGroups)[number]['id'];

interface ProcedureNotes {
  group: Group;
  overview: string;
  questions: readonly [string, string, string];
}

type ProcedurePath = (typeof procedures)[number]['path'] | (typeof additional)[number][1];

const notes: Record<ProcedurePath, ProcedureNotes> = {
  '/transplante-capilar/': {
    group: 'capilar',
    overview: 'O transplante capilar redistribui folículos de uma área doadora para regiões com perda de cabelo. O planejamento considera a causa e a evolução da queda, a disponibilidade de folículos e a distribuição desejada.',
    questions: ['Qual é a causa da minha queda de cabelo?', 'O que a avaliação da área doadora ajuda a decidir?', 'Como a evolução da queda pode influenciar o planejamento e o acompanhamento?'],
  },
  '/lipoaspiracao-abdominoplastia/': {
    group: 'corpo',
    overview: 'A lipoaspiração remove gordura localizada. A abdominoplastia trata o excesso de pele e tecido na região abdominal e, em alguns casos, pode envolver a parede do abdômen. São procedimentos distintos. A avaliação ajuda a entender quando cada um pode ser considerado.',
    questions: ['O que explica a alteração de contorno no meu abdômen?', 'O que muda nos riscos e na recuperação quando os procedimentos são combinados?', 'Onde ficariam as cicatrizes e como seria o acompanhamento?'],
  },
  '/protese-de-mama/': {
    group: 'mamas',
    overview: 'A cirurgia com implantes mamários pode modificar o volume e a forma das mamas. A escolha do implante e da técnica leva em conta a anatomia, os tecidos da mama e os objetivos discutidos na consulta.',
    questions: ['Quais características do implante são relevantes para o meu caso?', 'O que devo saber sobre cicatrizes, exames e acompanhamento?', 'Como recebo e guardo os dados de rastreabilidade do implante?'],
  },
  '/bichectomia/': {
    group: 'face',
    overview: 'A bichectomia remove parte da bolsa de gordura de Bichat, situada em uma camada profunda da face. A avaliação ajuda a identificar o que contribui para o volume das bochechas e a discutir alternativas.',
    questions: ['Quais estruturas explicam o contorno das minhas bochechas?', 'Que efeitos a cirurgia pode ter no contorno da face ao longo do tempo?', 'Quais são os riscos específicos da região?'],
  },
  '/blefaroplastia/': {
    group: 'face',
    overview: 'A blefaroplastia é uma cirurgia das pálpebras. Pode envolver pele e bolsas de gordura, de acordo com as alterações avaliadas nas pálpebras superiores ou inferiores.',
    questions: ['Minha queixa está relacionada à pálpebra, à sobrancelha ou a outra estrutura?', 'O que preciso informar sobre meus olhos, sintomas e tratamentos?', 'Como seria o acompanhamento da cicatrização?'],
  },
  '/ginecomastia/': {
    group: 'mamas',
    overview: 'Ginecomastia é o aumento do tecido glandular mamário masculino. A consulta diferencia esse quadro do acúmulo de gordura e avalia possíveis causas antes de discutir as opções de tratamento.',
    questions: ['Como distinguir aumento glandular de outras causas?', 'Quais aspectos do meu histórico precisam de investigação?', 'Quando a cirurgia entra na conversa e como seria a recuperação?'],
  },
  '/harmonizacao-facial/': {
    group: 'estetica',
    overview: 'Harmonização facial é um termo usado para intervenções voltadas ao contorno e às proporções do rosto. A consulta começa pela queixa específica, pois técnicas, materiais e riscos variam.',
    questions: ['Que estrutura do rosto está relacionada à minha queixa?', 'Quais opções, inclusive adiar o procedimento, posso considerar?', 'Se houver uso de produto, como posso identificar o material e acompanhar possíveis reações?'],
  },
  '/lifting-de-braco/': {
    group: 'corpo',
    overview: 'O lifting de braço, ou braquioplastia, trata excesso de pele na parte superior dos braços. A quantidade e a localização da pele orientam a discussão sobre extensão das cicatrizes e recuperação.',
    questions: ['Qual região do braço seria tratada?', 'Onde ficaria a cicatriz e qual seria sua extensão?', 'Quando poderia retomar trabalho e atividades que exigem os braços?'],
  },
  '/lifting-de-coxa/': {
    group: 'corpo',
    overview: 'O lifting de coxa, também chamado de cruroplastia, trata excesso de pele nas coxas. A avaliação localiza a flacidez e considera como ela se distribui antes de discutir a técnica.',
    questions: ['Que parte da coxa poderia ser tratada?', 'Como a localização das incisões influencia a decisão?', 'Quais cuidados com mobilidade seriam discutidos para a recuperação?'],
  },
  '/lipoaspiracao/': {
    group: 'corpo',
    overview: 'A lipoaspiração é uma cirurgia de contorno corporal voltada à remoção de gordura localizada. Na avaliação, é importante distinguir gordura, excesso de pele e outras causas da alteração de contorno.',
    questions: ['Qual é a diferença entre tratar gordura localizada e tratar excesso de pele?', 'O que é possível discutir para as áreas que me preocupam?', 'Como meus antecedentes influenciam os riscos e a recuperação?'],
  },
  '/mamoplastia/': {
    group: 'mamas',
    overview: 'Mamoplastia é um termo amplo para cirurgias que alteram as mamas. Redução, aumento e remodelagem respondem a objetivos diferentes e são discutidos conforme a avaliação.',
    questions: ['Que tipo de cirurgia se relaciona com minha queixa?', 'Como a técnica pode influenciar cicatrizes e sensibilidade?', 'O que devo conversar sobre exames mamários e planos de gravidez?'],
  },
  '/ninfoplastia/': {
    group: 'corpo',
    overview: 'A ninfoplastia é uma cirurgia dos pequenos lábios vulvares. A avaliação é individual e considera queixas, variações anatômicas e possíveis causas de desconforto.',
    questions: ['Há outras causas para o desconforto que sinto?', 'Quais alternativas podem ser discutidas antes de uma cirurgia?', 'Que riscos e cuidados merecem atenção no meu caso?'],
  },
  '/otoplastia/': {
    group: 'face',
    overview: 'A otoplastia é uma cirurgia do pavilhão auricular. A consulta avalia a forma, a posição e a simetria das orelhas para discutir as mudanças pretendidas.',
    questions: ['Quais partes da orelha explicam a alteração percebida?', 'Como a simetria entre os lados entra no planejamento?', 'Quais cuidados e limitações temporárias fariam parte da recuperação?'],
  },
  '/pos-bariatrica/': {
    group: 'corpo',
    overview: 'Após perda importante de peso, a cirurgia plástica pode ser discutida para tratar excesso de pele. A região envolvida, a estabilidade do peso e a condição clínica ajudam a definir a conversa sobre etapas.',
    questions: ['Que condições precisam ser avaliadas antes de planejar uma cirurgia?', 'Como definir quais regiões discutir primeiro?', 'Quando pode fazer sentido dividir o tratamento em etapas?'],
  },
  '/procedimentos-esteticos/': {
    group: 'estetica',
    overview: 'As opções estéticas variam conforme a região e a queixa. Na avaliação, a conversa deve esclarecer a finalidade de cada técnica, suas limitações e os cuidados que ela exige.',
    questions: ['Que opções existem para a minha queixa?', 'Qual é o benefício esperado e quais são os riscos de cada opção?', 'O que preciso saber sobre materiais, cuidados e acompanhamento?'],
  },
  '/protese-de-gluteo/': {
    group: 'corpo',
    overview: 'A cirurgia com implantes glúteos é uma opção de alteração do volume e do contorno da região. A avaliação considera os tecidos, os objetivos e as exigências da recuperação.',
    questions: ['Quais opções devo comparar para o contorno glúteo?', 'Quais restrições de posição e movimento podem fazer parte do pós-operatório?', 'Como seria o acompanhamento do implante?'],
  },
  '/rinoplastia/': {
    group: 'face',
    overview: 'A rinoplastia modifica estruturas do nariz. Na consulta, forma e função são consideradas em conjunto, com atenção a queixas respiratórias, proporções da face e cirurgias anteriores.',
    questions: ['Que aspectos da forma e da respiração devem ser avaliados?', 'Como minha anatomia e eventuais cirurgias anteriores influenciam as opções?', 'Como é acompanhado o período de recuperação?'],
  },
  '/ritidoplastia/': {
    group: 'face',
    overview: 'A ritidoplastia, ou lifting facial, é uma cirurgia que pode tratar alterações de flacidez da face e do pescoço. A avaliação delimita as regiões a abordar e as mudanças que fazem sentido discutir.',
    questions: ['Quais regiões da face e do pescoço podem ser abordadas?', 'Onde as incisões costumam ser planejadas?', 'Que riscos e cuidados de recuperação devo esclarecer antes de decidir?'],
  },
};

const publishedProcedures = [
  ...procedures.map(({title,path}) => ({title,path})),
  ...additional.map(([title,path]) => ({title,path})),
];

export const procedurePages = publishedProcedures.map(({title,path}) => ({
  title,
  path,
  ...notes[path],
}));

export type ProcedurePage = (typeof procedurePages)[number];

export const procedureAliases = [
  { path: '/transplante-capilar-rio-preto/', canonical: '/transplante-capilar/' },
  { path: '/protese-de-mama-rio-preto/', canonical: '/protese-de-mama/' },
] as const;