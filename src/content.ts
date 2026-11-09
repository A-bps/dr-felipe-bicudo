export const site = 'https://drfelipebicudo.com.br';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
export const localPath = (path: string) => basePath + path;

export const doctor = {
  name: 'Dr. Felipe Bicudo',
  crm: 'CRM-SP 121227',
  rqe: 'RQE 33790',
  specialty: 'Cirurgia Plástica',
};

export const whatsappNumber = '+55 17 98147-9001';
export const whatsapp = 'https://wa.me/' + whatsappNumber.replace(/\D/g, '');
export const nav = [
  { id: 'sobre', href: '/#sobre', label: 'Sobre' },
  { id: 'procedimentos', href: '/procedimentos/', label: 'Procedimentos' },
  { id: 'clinicas', href: '/#clinicas', label: 'Clínicas' },
  { id: 'blog', href: '/blog/', label: 'Blog' },
  { id: 'contato', href: '/#contato', label: 'Contato' },
];

export const clinics = [
  {
    id: 'rio-preto', city: 'São José do Rio Preto',
    address: 'Georgina Business Park',
    complement: 'Torre Madri Norte, sala 308',
    postalCode: '15091-751',
    maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Georgina Business Park, Torre Madri Norte, sala 308, São José do Rio Preto, SP'),
  },
  {
    id: 'votuporanga', city: 'Votuporanga',
    address: 'Av. da Saudade, 2472',
    complement: 'Cidade Nova',
    postalCode: '15501-405',
    maps: 'https://goo.gl/maps/bWht3dM36gqqXh2i6',
  },
] as const;

export const procedures = [
  { kind: 'hair', category: 'Capilar', title: 'Transplante capilar', path: '/transplante-capilar/',
    summary: 'Entenda o procedimento e os fatores avaliados no planejamento do transplante.' },
  { kind: 'body', category: 'Contorno corporal', title: 'Lipoaspiração e abdominoplastia', path: '/lipoaspiracao-abdominoplastia/',
    summary: 'Conheça as diferenças entre os procedimentos e o que conversar na avaliação.' },
  { kind: 'breast', category: 'Cirurgia mamária', title: 'Prótese mamária', path: '/protese-de-mama/',
    summary: 'Saiba quais aspectos são considerados na escolha de uma prótese mamária.' },
] as const;

export const additional = [
  ['Bichectomia', '/bichectomia/'], ['Blefaroplastia', '/blefaroplastia/'],
  ['Ginecomastia', '/ginecomastia/'], ['Harmonização facial', '/harmonizacao-facial/'],
  ['Lifting de braço', '/lifting-de-braco/'], ['Lifting de coxa', '/lifting-de-coxa/'],
  ['Lipoaspiração', '/lipoaspiracao/'], ['Mamoplastia', '/mamoplastia/'],
  ['Ninfoplastia', '/ninfoplastia/'], ['Otoplastia', '/otoplastia/'],
  ['Cirurgia pós-bariátrica', '/pos-bariatrica/'], ['Procedimentos estéticos', '/procedimentos-esteticos/'],
  ['Prótese de glúteo', '/protese-de-gluteo/'], ['Rinoplastia', '/rinoplastia/'], ['Ritidoplastia', '/ritidoplastia/'],
] as const;

export const credentials = [
  ['2005', 'Graduação em Medicina', 'FAMERP'],
  ['2006–2007', 'Residência em Cirurgia Geral', 'FAMERP'],
  ['2008–2010', 'Residência em Cirurgia Plástica', 'FAMERP'],
];
