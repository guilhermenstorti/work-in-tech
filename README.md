# Work in Tech 2026 · Todos os testes passaram, mas o produto falhou

*Discovery e métricas de produto para quem constrói software.*

Apresentações de **Guilherme Storti** no Work in Tech 2026, semana acadêmica dos cursos de TI da UniCesumar (Maringá). Este repositório é o material completo do evento: os slides dos dois dias e os roteiros com falas, dados e exemplos.

| Dia | Formato | Deck | Roteiro |
| --- | --- | --- | --- |
| 1 | Palestra (3h30) | [`apresentacoes/dia-1-palestra/`](apresentacoes/dia-1-palestra/index.html) | [`roteiros/roteiro-dia-1-palestra.md`](roteiros/roteiro-dia-1-palestra.md) |
| 2 | Workshop com o case Campus+ (3h30) | [`apresentacoes/dia-2-workshop/`](apresentacoes/dia-2-workshop/index.html) | [`roteiros/roteiro-dia-2-workshop.md`](roteiros/roteiro-dia-2-workshop.md) |

Feito com [reveal.js](https://revealjs.com) 6 e [Vite](https://vitejs.dev) 5. Depois do `npm install`, tudo roda **sem internet**: fontes, bibliotecas e imagens ficam no próprio projeto.

---

## Requisitos

- [Node.js](https://nodejs.org) **20.11 ou superior** (a versão de referência está em `.nvmrc`)
- [Git](https://git-scm.com)
- Chrome ou Edge atualizado

## Primeira vez: clonar e instalar

```bash
git clone https://github.com/guilhermenstorti/work-in-tech.git
cd work-in-tech
npm install
```

O `npm install` é a única etapa que precisa de internet. Quem usa o [nvm](https://github.com/nvm-sh/nvm) pode rodar `nvm use` antes, para pegar a versão do `.nvmrc`.

## Apresentar

```bash
npm run evento
```

O comando gera o build e abre o painel em `http://localhost:4173`, com os links para os dois decks. Deixe o terminal aberto enquanto apresenta.

1. Conecte o notebook ao telão e estenda a tela (Windows: `Win + P` → **Estender**).
2. No painel, abra o deck do dia.
3. Aperte `S` para abrir a visão do apresentador (slide atual, próximo, notas e cronômetro). Na primeira vez, permita pop-ups para `localhost`.
4. Arraste a janela dos slides para o telão e aperte `F` (tela cheia). A visão do apresentador fica no notebook e controla os slides.

### Atalhos

| Tecla | Ação |
| --- | --- |
| `→` `Espaço` `PageDown` | Avança (funciona com passador) |
| `←` `PageUp` | Volta |
| `S` | Visão do apresentador |
| `F` | Tela cheia |
| `O` ou `Esc` | Visão geral dos slides, agrupada por ato |
| `G` | Ir para um número de slide |
| `B` ou `.` | Tela preta |
| `T` | Alterna tema escuro e claro (a escolha fica salva) |
| `Alt` + clique | Zoom num ponto do slide |
| `?` | Lista todos os atalhos |

Dicas:

- Muitos slides revelam itens um por clique. No Dia 2, as respostas esperadas só aparecem no clique: pergunte, deixe a sala falar e então avance.
- A linha do tempo da abertura do Dia 1 se desenha sozinha (cerca de 10 s) e roda uma única vez.
- O cronômetro do intervalo começa quando o slide aparece.
- No Dia 1, o slide de agradecimento é o último da sequência. Depois dele vem um apêndice com exemplos de reserva, acessível pela visão geral (`O`).

### PDF de backup

Com o `npm run evento` rodando, abra no Chrome:

```
http://localhost:4173/apresentacoes/dia-1-palestra/index.html?print-pdf
```

Depois, `Ctrl + P` → **Salvar como PDF** → Paisagem, margens **Nenhuma** e **Gráficos de plano de fundo** marcado. Repita para `dia-2-workshop`. Para um PDF com as notas, acrescente `&showNotes=separate-page` ao endereço.

## Comandos

| Comando | O que faz | Endereço |
| --- | --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarga automática | `http://localhost:5173` |
| `npm run build` | Gera a versão final em `dist/` | — |
| `npm run preview` | Serve o conteúdo de `dist/` | `http://localhost:4173` |
| `npm run evento` | `build` + `preview` numa etapa só (use para ensaiar e apresentar) | `http://localhost:4173` |

Se o `npm run evento` falhar na hora, use `npm run dev`: ele também funciona sem internet.

## Estrutura

```
├── index.html                  Painel com os links para os decks e os atalhos
├── apresentacoes/
│   ├── dia-1-palestra/         Deck do Dia 1 (slides em <section>, falas em <aside class="notes">)
│   └── dia-2-workshop/         Deck do Dia 2
├── roteiros/                   Roteiros dos dois dias e o anexo de dados do Dia 1
├── src/
│   ├── js/                     deck.js (reveal.js e atalhos), timeline.js, countdown.js
│   └── styles/                 tokens.css (cores e tipografia), base.css, components.css
├── assets/qrcodes/             QR codes do slide de agradecimento
├── docs/
│   ├── padroes-interface-experiencia.md   Design system e catálogo de componentes
│   └── logistica-e-ensaio.md             Checklist da sala, ensaio e plano B
├── package.json                Dependências e comandos npm
└── vite.config.js              Build com três páginas (painel e dois decks)
```

## Editar ou criar a sua versão

### Mudar um slide

1. Rode `npm run dev` e abra o deck. O navegador recarrega a cada alteração salva.
2. Edite `apresentacoes/<dia>/index.html`. Cada bloco da apresentação é uma `<section data-act="…">` com os slides dentro.
3. Use as classes já existentes, descritas em [`docs/padroes-interface-experiencia.md`](docs/padroes-interface-experiencia.md). Cores e tamanhos ficam em `src/styles/tokens.css`.
4. Rode `npm run build` para conferir que tudo compila antes de apresentar.

### Usar este projeto como base para a sua apresentação

```bash
git clone https://github.com/guilhermenstorti/work-in-tech.git minha-apresentacao
cd minha-apresentacao
npm install
git remote set-url origin https://github.com/<seu-usuario>/<seu-repositorio>.git
git push -u origin main
```

Crie antes o repositório vazio no GitHub. Para publicar alterações depois:

```bash
git add .
git commit -m "Descreva a alteração"
git push
```

### Atualizar uma cópia já clonada

```bash
git pull
npm install
```

## Licença

MIT. Veja [`LICENSE`](LICENSE).
