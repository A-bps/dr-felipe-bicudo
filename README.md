# Dr. Felipe Bicudo

Prévia para avaliação da página institucional de cirurgia plástica e transplante capilar. A home, o catálogo, as páginas de procedimento e o blog fazem parte do mesmo site. O blog reúne os textos e as datas de publicação dos artigos originais. O agendamento da prévia usa o WhatsApp único confirmado.

[Abrir a prévia no GitHub Pages](https://a-bps.github.io/dr-felipe-bicudo/)

## Rodar no Windows

Requer Node.js 22.23.4+ ou uma versão LTS mais recente compatível com Astro. Ambiente verificado com Node.js 24.16.0 e npm 11.13.0. Na pasta deste projeto:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra [http://127.0.0.1:4186/](http://127.0.0.1:4186/). Os links externos precisam de conexão com a internet.

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

O build gera a pasta `dist`. Para iniciar `preview`, encerre o servidor de desenvolvimento ou execute `npm.cmd exec -- astro preview --host 127.0.0.1 --port 4187` para manter os dois em paralelo. O build padrão inclui `noindex, nofollow`, robots de bloqueio e sitemap vazio para revisão local.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/pages/index.astro` | Composição da página |
| `src/components/` | Marca, navegação, rodapé, ícones e endereços das unidades |
| `src/pages/procedimentos/index.astro` | Catálogo por área |
| `src/pages/[slug].astro` e `src/procedures.ts` | Páginas, conteúdo educativo e caminhos de procedimento |
| `src/layouts/Site.astro` | Metadados, fontes e dados estruturados |
| `src/content.ts` | Informações públicas, navegação e destinos |
| `src/styles/site.css` | Estilos globais e navegação compartilhada |
| `src/styles/home.css` | Capa, índice de procedimentos e layout da home |
| `public/media/` | Imagens otimizadas para a prévia privada |

Astro estático, TypeScript e CSS nativo. Os componentes são renderizados em HTML no build. A navegação móvel usa um elemento nativo com um pequeno script para fechar o menu ao escolher uma seção ou apertar Escape. Manrope é servida localmente. O botão fixo de WhatsApp faz parte do layout compartilhado e aparece em todas as páginas. O vídeo de transplante abre no player ao clicar em assistir.

## Prévia pública

O GitHub Actions gera a versão estática a cada atualização na branch `main` e publica no GitHub Pages. A prévia usa `noindex` e é destinada à avaliação.

## Créditos

O ícone do WhatsApp vem de [Bootstrap Icons](https://icons.getbootstrap.com/icons/whatsapp/) sob [licença MIT](docs/licenses/bootstrap-icons.txt). As imagens e a identidade visual pertencem aos respectivos titulares.