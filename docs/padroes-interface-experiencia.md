# Padrões de interface e experiência

Este documento é a referência visual e de experiência das duas apresentações. Tudo que estiver aqui já está implementado em `src/styles/` e `src/js/`. Quem constrói os slides **usa as classes e os tokens existentes** e não cria estilos soltos.

A referência estética são as apresentações de conferências de tecnologia bem cuidadas (keynotes de produto, talks de engenharia em eventos como Config, Next.js Conf e GitHub Universe): fundo escuro e calmo, tipografia grande e confiante, uma ideia por slide, muito respiro, cor usada com intenção e dados apresentados com precisão.

---

## 1. Princípios

1. **Uma ideia por slide.** Se o slide precisa de duas frases para ser explicado, são dois slides. Slides são baratos; atenção da plateia não.
2. **O slide apoia a fala, não a substitui.** O texto completo vai nas notas do apresentador (`<aside class="notes">`). Na tela fica só o que a plateia precisa ver: a frase, o número, a pergunta.
3. **Legível do fundo da sala.** O telão pode estar a 10–15 metros da última fileira. Nada abaixo de 28 px no canvas de 1920 × 1080, exceto rótulos em mono maiúsculo (22 px).
4. **Cor com significado.** Violeta é destaque. Verde, âmbar e vermelho só aparecem quando significam algo (resultado bom, alerta, erro). Nunca use cor só para enfeitar.
5. **Revelar, não despejar.** Listas, cartas de contexto, colunas de tabela e nós da árvore aparecem um de cada vez, no ritmo da fala, com fragmentos.
6. **Conversa, não aula.** Slides de pergunta são grandes, limpos e ficam na tela enquanto a sala responde. Use a tecla `B` (tela preta) quando a conversa precisar de toda a atenção.
7. **Consistência acima de criatividade.** Os mesmos componentes, nas mesmas posições, nos dois dias. O Dia 2 é visualmente uma continuação do Dia 1.

---

## 2. Canvas, grid e área segura

| Item | Valor | Token / classe |
| --- | --- | --- |
| Canvas | 1920 × 1080 (16:9). O reveal.js escala para o telão. | config em `src/js/deck.js` |
| Margem lateral | 128 px | `--safe-x` |
| Margem superior | 112 px | `--safe-top` |
| Margem inferior | 120 px (rodapé e número ficam abaixo dela) | `--safe-bottom` |
| Grid | 12 colunas implícitas; layouts prontos `grid-2`, `grid-3`, `grid-60-40` | `--grid-gap: 48px` |
| Espaçamento | Escala de 8: 8, 16, 24, 32, 48, 64, 96, 128 | `--space-1` a `--space-8` |

Regras:

- Conteúdo de slide **alinhado à esquerda**. Centralizado só na capa, se desejado, nunca em listas.
- Título sempre no mesmo ponto (topo da área segura), para o olho não procurar.
- Elementos nunca encostam nas margens nem entre si: mínimo de 32 px entre blocos.
- Se o projetor da sala tiver resolução 4:3 ou 16:10, o reveal.js adiciona faixas; a área segura garante que nada importante seja cortado.

---

## 3. Tipografia

Três famílias, todas instaladas localmente pelo npm (funcionam sem internet):

| Papel | Fonte | Uso |
| --- | --- | --- |
| Display | **Space Grotesk** (variável) | Títulos, frases de impacto, perguntas, números grandes |
| Texto | **Inter** (variável) | Texto corrido, listas, tabelas |
| Mono | **JetBrains Mono** (variável) | Rótulos (eyebrow, badges), código SQL, eventos, números alinhados, rodapé |

Escala (px no canvas 1920 × 1080):

| Token | Tamanho | Uso | Limite |
| --- | --- | --- | --- |
| `--fs-hero` | 140 | Título da capa | até ~8 palavras |
| `--fs-kpi` | 160 | Número de destaque | 1 a 3 números por slide |
| `--fs-statement` | 96 | Afirmação ou pergunta à sala | até ~16 palavras |
| `--fs-h1` | 76 | Abertura de ato/capítulo | até ~8 palavras |
| `--fs-h2` | 56 | Título de slide de conteúdo | 1 linha, até ~7 palavras |
| `--fs-h3` | 40 | Subtítulo, título de card | 1 a 2 linhas |
| `--fs-body` | 36 | Texto e listas | até 3 itens de 1 linha |
| `--fs-code` | 30 | SQL e eventos | até ~8 linhas |
| `--fs-small` | 28 | Legendas, tabelas, fontes | **mínimo de leitura** |
| `--fs-label` | 22 | Eyebrow e badges (mono, maiúsculo) | só rótulos curtos |

Regras:

- Títulos em frase (só a primeira letra maiúscula), sem ponto final. Perguntas terminam com "?".
- Títulos dizem a conclusão, não o tema: "85% se perdiam no cadastro" e não "Funil de cadastro".
- `<em>` destaca uma palavra em violeta (não itálico). Use no máximo uma vez por slide.
- `<strong>` só para números ou termos que a fala vai repetir.
- Comprimento de linha: no máximo ~36 caracteres em frases grandes e ~52 em texto (o CSS já limita).
- Números sempre com separador brasileiro (90.000; R$ 724,5 mil; 15%) e `font-variant-numeric: tabular-nums` em tabelas.

---

## 4. Cor

Tema **escuro** como padrão (identidade do evento, roxo-escuro `#1A0B2E`) e tema **claro** pronto para salas muito iluminadas. A tecla `T` alterna os dois e a escolha fica salva no notebook.

### Tema escuro (padrão)

| Token | Hex | Contraste sobre o fundo | Uso |
| --- | --- | --- | --- |
| `--bg` | `#0E0B16` | — | Fundo de todos os slides (com brilho violeta sutil no canto) |
| `--surface` | `#17131F` | — | Cards, colunas, notas do quadro |
| `--surface-2` | `#211B2C` | — | Áreas de quadro, código inline |
| `--border` | `#2E2740` | — | Bordas padrão |
| `--text` | `#F5F3F7` | 17,7 : 1 | Texto principal |
| `--text-muted` | `#B9B2C5` | 9,5 : 1 | Texto secundário |
| `--text-dim` | `#8E869C` | 5,6 : 1 | Rótulos, rodapé (só em tamanhos grandes ou mono) |
| `--accent` | `#A78BFA` | 7,2 : 1 | Destaque, eyebrow, item atual, caminho da árvore |
| `--positive` | `#4ADE80` | 11,2 : 1 | Resultado bom, "acerto" |
| `--warning` | `#FBBF24` | 11,7 : 1 | Alerta, "dados fictícios", contagem no fim |
| `--critical` | `#F87171` | 7,0 : 1 | Queda, erro, "erro" |
| `--info` | `#7DB4FA` | 9,1 : 1 | "Case real" |

### Tema claro (alternativa)

Mesmos papéis, valores em `src/styles/tokens.css`. Todos os pares texto/fundo têm contraste de 5,4:1 ou mais.

### Regras de cor

- **Proporção:** ~85% neutros, ~10% violeta, ~5% cores de estado.
- **Um destaque por slide.** Se tudo é violeta, nada é.
- Cores de estado nunca são o único sinal: sempre acompanham texto ("Erro", "−5pp", "Dados fictícios").
- **QR codes sempre escuros sobre branco**, em qualquer tema (o componente `.qr__code` já garante).
- Imagens e logos de terceiros não são recoloridos; use a versão para fundo escuro quando houver.

---

## 5. Movimento

| Elemento | Comportamento | Implementação |
| --- | --- | --- |
| Troca de slide | Fade rápido (~200 ms) | `transition: 'fade'`, `transitionSpeed: 'fast'` |
| Itens de lista, cartas, colunas | Surgem de baixo, um por vez | `class="fragment fade-up"` |
| Destaque progressivo | O item anterior recua para 40% | `class="fragment fade-up dim-past"` |
| Árvore de métricas e funil | Construção em etapas entre slides iguais | `data-auto-animate` + `data-id` nos nós |
| Linhas de código | Destaque linha a linha | `data-line-numbers="1|2-3|4"` |
| Notas do quadro | Entram com leve subida | automático |

Proibido: zoom, giro, cubo, transições 3D, efeitos de digitação, fundos animados, GIFs decorativos. Movimento existe para guiar a atenção, nunca para decorar.

---

## 6. Cromo do deck

- **Barra de progresso** de 6 px no rodapé, em violeta.
- **Rodapé** em mono: `WORK IN TECH 2026 · DIA 1 · PALESTRA · {ATO ATUAL}`. O ato vem do atributo `data-act` da seção de topo.
- **Número do slide** `c/t` no canto inferior direito, discreto.
- `data-chrome="hidden"` em um slide (ou seção) esconde rodapé e número: use na capa, em afirmações de impacto, perguntas, intervalo e encerramento.
- Sem setas de navegação na tela (`controls: false`): a navegação é por passador ou teclado.

---

## 7. Catálogo de componentes e tipos de slide

Cada tipo tem marcação de referência. Use exatamente estas classes.

### 7.1 Capa — `slide--cover`

```html
<section class="slide--cover" data-chrome="hidden">
  <p class="eyebrow">Work in Tech 2026 · Dia 1</p>
  <h1>Todos os testes passaram. O produto falhou.</h1>
  <p class="subtitle">Discovery e métricas de produto para quem constrói software</p>
  <div class="meta"><span>Guilherme Storti</span><span>Product Manager · Turbi</span></div>
</section>
```

### 7.2 Abertura de ato ou capítulo — `slide--section`

Número grande em mono, título e a pergunta-guia do ato.

```html
<section class="slide--section" data-chrome="hidden">
  <span class="section-number">01</span>
  <h1>Explore o problema, não a solução</h1>
  <p class="section-question">Qual problema é real?</p>
</section>
```

### 7.3 Afirmação — `slide--statement`

Uma frase. Use para falas-guia que precisam ficar na memória.

```html
<section class="slide--statement" data-chrome="hidden">
  <p class="statement">A faculdade constrói o seu <em>como</em>. O mercado cobra o seu <em>por quê</em>.</p>
</section>
```

### 7.4 Pergunta aberta à sala — `slide--question`

Fica na tela enquanto a sala responde. Rótulo fixo "Pergunta para a sala".

```html
<section class="slide--question" data-chrome="hidden">
  <span class="question-label">Pergunta para a sala</span>
  <p class="question">Por que vocês abriram o app de delivery da última vez?</p>
</section>
```

### 7.5 Conteúdo — padrão

Eyebrow + título + até 3 itens.

```html
<section>
  <p class="eyebrow">Ato 1 · Pesquisar sem se enganar</p>
  <h2>Três regras de entrevista</h2>
  <ol>
    <li class="fragment fade-up dim-past">Pergunte sobre o passado, não sobre o futuro</li>
    <li class="fragment fade-up dim-past">Peça a última vez que aconteceu</li>
    <li class="fragment fade-up dim-past">Fale menos de 20% do tempo</li>
  </ol>
  <aside class="notes">Fala-guia completa aqui.</aside>
</section>
```

### 7.6 Comparação — `split`

Problema × solução, antes × depois, pergunta ruim × boa.

```html
<div class="split">
  <div class="split__col split__col--muted"><span class="split__label">Pergunta ruim</span>…</div>
  <div class="split__col split__col--highlight"><span class="split__label">Versão boa</span>…</div>
</div>
```

### 7.7 Case pessoal — `case`

O formato "Quando eu estava na…". Sempre com badge de **Erro** ou **Acerto**, empresa, papel e a lição em uma frase.

```html
<div class="case">
  <div class="case__meta">
    <span class="badge badge--erro">Erro</span>
    <span class="case__company">Mogno AI</span>
    <span class="case__role">PM Sênior</span>
  </div>
  <div>
    <p class="case__story">Lançamos funcionalidades que eu achava essenciais. Quase ninguém usava.</p>
    <p class="case__lesson">Sem métrica, teríamos insistido por meses.</p>
  </div>
</div>
```

### 7.8 Tabela de dados — `table.data`

Cabeçalho em mono, números à direita (`class="num"`), linha de destaque com `is-highlight`. Máximo de 6 linhas e 4 colunas na tela. Barras proporcionais opcionais com `<span class="bar" style="width: 31%"></span>`.

### 7.9 Código — `pre > code.language-sql`

SQL e plano de eventos. Até ~8 linhas, nomes em português como no roteiro. Destaque progressivo com `data-line-numbers`.

### 7.10 Números de destaque — `kpis`

1 a 3 números, cada um com rótulo curto. Use `kpi__value--critical`, `--positive` ou `--accent` só quando a cor carregar significado.

```html
<div class="kpis">
  <div><span class="kpi__value">90 mil</span><span class="kpi__label">downloads por mês</span></div>
  <div><span class="kpi__value kpi__value--critical">15%</span><span class="kpi__label">concluem o cadastro</span></div>
</div>
```

### 7.11 Linha do tempo — `timeline`

Usada na abertura do Dia 1 (carreira). Linha horizontal com marcos alternados acima e abaixo; cada marco tem ponto, haste e texto (cargo + empresa). A animação (`src/js/timeline.js`) roda uma única vez quando o slide aparece: a linha avança até cada ponto, a haste cresce e o texto surge; depois a trilha fica estática, mesmo voltando ao slide. O último marco recebe `is-current` (único destaque em violeta).

```html
<div class="timeline" role="list">
  <div class="timeline__stop" role="listitem">
    <span class="timeline__dot"></span><span class="timeline__stem"></span>
    <div class="timeline__label"><span class="timeline__role">Product Owner</span><span class="timeline__org">Accountfy</span></div>
  </div>
</div>
```

### 7.12 Diagramas — árvore de métricas e funil

- **Árvore:** SVG inline com `class="diagram"`; nós em `<g class="node">` (destaque: `is-highlight`), arestas em `<path class="edge">`. Construída em 3–4 slides com `data-auto-animate`, da raiz até as causas. Leitura da esquerda (negócio) para a direita (técnico). O caminho do problema fica em violeta.
- **Funil:** componente HTML `.funnel` com linhas `.funnel__row` (rótulo, barra com largura proporcional ao valor, número). A etapa com maior queda recebe `is-drop`.
- Diagramas nunca como imagem: sempre HTML/SVG, para escalar sem perder nitidez e seguir o tema.

### 7.13 Cartas de contexto — `cards-reveal`

As cartas A–I do roteiro. Cada carta é um fragmento revelado quando a sala faz a pergunta certa.

```html
<div class="cards-reveal">
  <div class="context-card fragment fade-up">
    <span class="context-card__letter">A</span>
    <span class="context-card__trigger">"Por que agora?"</span>
    <p class="context-card__body">O reitor viu um chatbot no app de outra universidade num congresso.</p>
  </div>
</div>
```

### 7.14 Frase literal de usuário — `quote`

Para frases ditas na sala ou em entrevistas.

### 7.15 Intervalo — `slide--break`

```html
<section class="slide--break" data-chrome="hidden">
  <p class="eyebrow">Intervalo</p>
  <div class="countdown" data-minutes="15"></div>
  <p class="muted">Pergunta para o café: …</p>
</section>
```

### 7.16 Encerramento com QR codes — `qr-grid`

Até 3 QR codes de 300 px, com rótulo e dica. Os arquivos ficam em `assets/qrcodes/` (PNG com margem branca própria: use `.qr__code.qr__code--png`).

### 7.17 Badges

| Classe | Texto | Quando |
| --- | --- | --- |
| `badge--ficticio` | Dados fictícios | **Obrigatório** em todo slide com números inventados (case condutor, Campus+, exemplos) |
| `badge--real` | Case real, números fictícios | Case do cadastro (Ato 4.2) |
| `badge--erro` / `badge--acerto` | Erro / Acerto | Cases pessoais |

Posição padrão do selo de dados: canto superior direito, com `class="badge badge--ficticio data-stamp"`.

### 7.18 Componentes de apoio

Todos em `src/styles/components.css`:

| Classe | Uso |
| --- | --- |
| `tr.fragment.custom.mark` | Linha de tabela que já está na tela e ganha destaque só quando o fragmento avança (destacar depois da fala) |
| `ol.questions` + `.questions__origin` | As três perguntas, com a parada da carreira de origem (slide idêntico nos dois dias) |
| `ul.checklist` | Checklist "antes de abrir o editor" |
| `.ladder` + `.ladder__step` (`is-current`, `is-missing`) | Escada de evidência em quatro degraus |
| `p.template` (`--long`) + `.slot` | Modelos com lacunas: frase-problema, hipótese, modelo de fala |
| `.formula` + `__term`, `__value`, `__label`, `__op` | Contas na tela (estimativas, quanto vale 1 ponto, horas da secretaria) |
| `.floors` + `.floor` | Os três andares de métricas |
| `ol.flow` | Estrutura do argumento em etapas |
| `ul.tags` | Respostas esperadas curtas, trabalhos, gambiarras |
| `.message` | E-mail da reitoria e cartas longas |
| `ol.chapters` | Mapa dos capítulos do Dia 2 |
| `ul.pipeline` | Pipeline de CI do gancho do Dia 1 |
| `.source` | Fonte de dado público no pé do slide |
| `.grid-2x2`, `.label`, `.list--small`, `.mt-4/5/6` | Layout e rótulos auxiliares |

No SVG (`.diagram`): `node__title`, `node__value`, `node__text`, `tier`, `op`, `caption` e `chart__*` para o gráfico do gancho. Nunca use `transform` num `<g>` animado: posicione por coordenadas absolutas.

---

## 8. Imagens, logos e ícones

- **Fonte única:** tudo em `assets/` (ver `assets/README.md`). Nada carregado da internet.
- **Formatos:** SVG para logos e ícones; WebP ou PNG para fotos e QR codes (máx. 2560 px no maior lado, até ~500 KB).
- **Fotos:** sem banco de imagens genérico (pessoas apontando para telas, apertos de mão).
- **Logos:** nunca distorcer, recolorir ou aplicar sombra.
- **Ícones:** traço único (estilo Lucide), 2 px, na cor do texto. No máximo 1 ícone por bloco de texto. Emojis não são usados.
- **Prints de produtos reais** (Juicero, Segway etc.): opcionais; se usados, em card com borda e legenda com a fonte.

---

## 9. Dados e gráficos

- Tabelas e números iguais aos do roteiro, sem arredondar diferente.
- Toda visualização responde uma pergunta escrita no título.
- Gráficos de barra começam em zero. Sem 3D, sem pizza.
- Comparações lado a lado usam a mesma escala.
- Uma série em destaque (violeta); as demais em neutro (`--border-strong`).
- Fontes de dados públicos (casos como Quibi, Fire Phone) aparecem como `small` no rodapé do slide.

---

## 10. Interação com a sala (sem nada além do notebook e do telão)

| Necessidade do roteiro | Como acontece na apresentação |
| --- | --- |
| "Levante a mão" | Slide `slide--question` grande; você conta e diz o número em voz alta |
| "Anote no quadro" | As respostas esperadas do roteiro já estão no slide e aparecem como fragmento depois que a sala fala |
| Pergunta aberta | `slide--question` + `B` (tela preta) se quiser foco total na conversa |
| Cartas reveladas | `cards-reveal` com fragmentos, avançando com o passador |
| Exercício em duplas | Slide com as perguntas ruins + cronômetro na visão do apresentador |
| Conta ao vivo | `slide--question` com a pergunta + slide seguinte com a conta pronta (`.formula`) |
| Intervalo | `slide--break` com contagem regressiva |
| Material para levar | QR code do repositório no slide de agradecimento |

---

## 11. Visão do apresentador

- Tecla `S` abre a janela do apresentador no notebook: slide atual, próximo, notas e cronômetro.
- Notas seguem o padrão: **fala-guia** entre aspas, depois **respostas esperadas**, depois **tempo do bloco** e **transição**.

```html
<aside class="notes">
  <p><strong>Fala-guia:</strong> "Um requisito é a resposta para uma pergunta que alguém fez antes."</p>
  <p><strong>Esperado da sala:</strong> …</p>
  <p><strong>Tempo:</strong> 10 min (1.1) · <strong>Próximo:</strong> software é meio.</p>
</aside>
```

---

## 12. Checklist de qualidade por slide

- [ ] Uma ideia, um título que é a conclusão.
- [ ] Nada abaixo de 28 px (exceto rótulos mono de 22 px).
- [ ] No máximo 3 itens de lista ou 6 linhas de tabela.
- [ ] Um único destaque de cor.
- [ ] Números inventados com badge "Dados fictícios".
- [ ] Fala completa nas notas, não na tela.
- [ ] Fragmentos na ordem em que a fala acontece.
- [ ] Testado em 1920 × 1080 e em tela cheia, nos dois temas.
