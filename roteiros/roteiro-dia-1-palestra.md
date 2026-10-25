# Todos os testes passaram, mas o produto falhou

## Dia 1 · Palestra (26/10, 19h00–22h30)

Sete blocos em 3h30, com intervalo às 21h05. Cada bloco traz objetivo, slides sugeridos, fala-guia, interação, case e transição.

| Horário | Bloco | Min |
| --- | --- | --- |
| 19:00 | Abertura e timeline de carreira | 20 |
| 19:20 | Ato 1 · Explore o problema, não a solução | 55 |
| 20:15 | Ato 2 · Explore soluções antes de escolher | 20 |
| 20:35 | Ato 3 · Onde o dev entra no discovery | 30 |
| 21:05 | Intervalo | 15 |
| 21:20 | Ato 4 · Como saber se funcionou | 45 |
| 22:05 | Ato 5 · Defenda a ideia | 15 |
| 22:20 | Fechamento e perguntas | 10 |

### 19:00 · Abertura (20 min)

**Objetivo:** criar identificação com o problema, ganhar credibilidade pela trajetória e prometer um método. A ordem é identificação → credibilidade → vulnerabilidade → promessa.

**1. Gancho (2 min).** Slide: pipeline de CI todo verde ao lado de um gráfico de uso zerado. Título: "Todos os testes passaram. O produto falhou." Pausa de 5 segundos antes de falar.

**2. Identificação (3 min).** "Levanta a mão quem já fez um projeto que funcionava perfeitamente e ninguém usou." Convide duas ou três pessoas a contar em voz alta: "O que era o projeto? Por que vocês acham que ninguém usou?" Depois, pergunta aberta à sala: "No último projeto de vocês, o que veio primeiro: a tecnologia ou o problema?" Anote no quadro as palavras-chave das histórias; elas voltam no fechamento.

**3. Timeline de carreira contada pelos erros (6 min).**

- **Fala-guia de entrada:** "Deixa eu contar como eu cheguei aqui. Mas não vou contar pelos acertos. Cada parada dessa linha tem um erro que me ensinou uma pergunta. Essas perguntas são a palestra de hoje."
- **Slide:** uma linha do tempo horizontal, uma parada por vez. Cada parada mostra cargo, o que você fazia e a lição, que vira um ato da palestra. *(Confirmar os anos.)*

| Parada | O que eu fazia | O que aprendi (errando) | Vira |
| --- | --- | --- | --- |
| 2016 · Dev (front-end web, ERP ADVPL/Protheus, indústria) | Entregava exatamente o que estava na especificação | "Funciona na minha máquina" não é entrega, e entrega não é valor | Abertura |
| Estratégia e BI (holding com 10+ empresas) | Montava dados e indicadores do zero | Dado sem contexto não serve para nada | Ato 4 |
| Product Owner (Accountfy) | Cuidava do backlog de um produto com churn alto | Roadmap sem discovery é achismo | Ato 1 |
| Product Manager (Accountfy, IA) | Liderava squads de IA e analytics | Produto sem métrica é esperança | Ato 4 |
| PM Sênior (Mogno AI) | Lancei um produto de IA do zero | Nada disso funciona sem argumento e alinhamento | Ato 5 |
| Hoje · PM (Turbi) | Mobilidade em expansão na América Latina | — | — |

- **Mensagem de carreira (fala-guia):** "Quase ninguém imagina que um caminho em tecnologia pode virar negócio. Eu não abandonei o código: ele virou a minha vantagem. Eu entendo o que o time técnico fala, e consigo traduzir para quem decide."

**4. O erro de abertura (4 min).** Zoom na primeira parada: a história de algo bem construído que não gerou valor. *(Pendente: ver Pendências.)* Termina com: "Estava tudo certo. Só faltou eu perguntar para que servia."

**5. Promessa (3 min).** As três perguntas na tela, cada uma ligada a uma parada da timeline. "Até o fim da noite vocês vão saber responder cada uma. Amanhã, vão colocar a mão na massa."

**6. Combinado (2 min).** "Isto é uma conversa, não uma aula. Interrompam, discordem, contem as experiências de vocês. Perguntas e histórias a qualquer momento, com a mão levantada."

**Transição:** "Vamos começar pelo erro mais comum de todos, que foi o meu primeiro: começar pela solução."

### 19:20 · Ato 1 · Explore o problema, não a solução (55 min)

**Objetivo:** o aluno sai sabendo separar problema de solução, entender que software é meio e não fim, entrevistar sem viés e dar tamanho a um problema com números.

#### 1.1 Por que pulamos para a solução (10 min)

- **Situação:** o projeto que começa com "vamos fazer um app em React com IA" antes de alguém perguntar "para quem?".
- **Slide de duas colunas:** "espaço do problema" (quem sofre, qual dor, com que frequência) e "espaço da solução" (tela, stack, feature). Projetos de faculdade nascem na coluna da direita.
- **Por que nascem ali, e por que isso não é um defeito:** a graduação existe para construir a sua camada técnica. Stack atual, lógica robusta, arquitetura refinada: isso é necessário e é o que dá base a um profissional sênior. Na disciplina, o problema chega dado pelo professor; o exercício é o "como".
- **O que muda no mercado:** tudo é investimento. Uma sprint de um time pequeno custa dezenas de milhares de reais em salários, e a empresa espera retorno. Código excelente que resolve o problema errado é investimento perdido.
- **Fala-guia:** "A faculdade constrói o seu 'como'. O mercado vai cobrar o seu 'por quê'. Quem domina os dois é raro, e é isso que leva alguém a tech lead."
- **Fala-guia:** "Um requisito é a resposta para uma pergunta que alguém fez antes. Hoje a gente vai aprender a fazer essa pergunta."
- **Provocação (introduz o Ato 3):** "E quando a demanda já chega pronta, de cima para baixo: 'o diretor quer um chat no app'?" Três perguntas na tela, sem aprofundar ainda:
  1. Qual problema isso resolve?
  2. Como sabemos que esse problema existe?
  3. Como vamos saber se resolveu?
- "Guardem essas três. Daqui a pouco vamos ver como levar isso para a mesa sem virar o chato da reunião."
- **Case Mogno (quase-erro):** "A gente tinha certeza de que o valor era ter IA. O discovery mostrou que a dor era ter IA dentro do fluxo de trabalho, sem fricção. Isso mudou o posicionamento inteiro."

#### 1.2 Software é meio, não fim (14 min)

- **Conceito:** ninguém quer o software; a pessoa quer progredir numa situação. O software é "contratado" para isso.
- **Fala-guia:** "A gente se apaixona pela lógica, pela arquitetura, pela complexidade do que constrói. Mas se o software não resolve um problema, ou resolve pior do que o usuário já resolve hoje, ele não tem serventia prática. Por mais bonito que seja o código."
- **Exemplos de soluções tecnicamente impecáveis que não resolveram (slide por exemplo, 1 min cada):**

| Produto | O que era tecnicamente | O que deu errado |
| --- | --- | --- |
| Juicero (2016) | Espremedor de suco conectado ao Wi-Fi, com engenharia sofisticada, vendido a centenas de dólares | Jornalistas mostraram que apertar o saquinho de suco com as mãos dava o mesmo resultado. Resolvia pior que a alternativa |
| Segway (2001) | Veículo com autoequilíbrio por giroscópios, uma façanha de engenharia | Para trajetos curtos, andar e pedalar já resolviam, mais baratos e sem regras de onde circular. Ficou num nicho (turismo, segurança) |
| Quibi (2020) | Streaming de vídeos curtos premium, com mais de US$ 1,7 bilhão captados | As pessoas já tinham vídeos curtos de graça em outras plataformas. Fechou em menos de um ano |
| Google Glass (2013) | Óculos com tela e câmera, à frente do seu tempo | Não havia um trabalho claro no dia a dia do consumidor, e havia atrito de privacidade. Saiu do varejo e ficou restrito a usos corporativos |
| O sistema interno que ninguém usa (cenário comum) | Um sistema novo para substituir a planilha do setor | O time continua na planilha, porque ela é mais flexível. A alternativa atual venceu |

- **Fala-guia de fechamento dos exemplos:** "Em todos esses casos, a engenharia funcionou. O que faltou foi alguém perguntar: isso é melhor do que o que a pessoa já faz hoje?"
- **Exemplo do case condutor:** o mesmo carro atende duas contratações. "Chegar a um compromisso sem depender de ninguém" leva ao aluguel por hora. "Ter um carro sem as dores de comprar" leva à assinatura. Problemas diferentes geram produtos diferentes.
- **Exploração com a plateia: o app de delivery (5 min).**
  - Pergunta: "Pensem na última vez que vocês abriram um app de delivery. Por que abriram?" Ouvir 4 ou 5 respostas.
  - Projetar as respostas agrupadas em "trabalhos" diferentes, cada um levando a decisões de produto diferentes:

| Trabalho para o qual o app foi "contratado" | O que o produto precisa otimizar |
| --- | --- |
| "Estou com fome e sem tempo" | Tempo de entrega, botão "pedir de novo" |
| "Está chovendo e não quero sair de casa" | Frete, acompanhamento do pedido em tempo real |
| "Quero me recompensar depois de uma semana pesada" | Descoberta: fotos, novidades, avaliações |
| "Preciso alimentar a família gastando pouco" | Preço: cupons, combos, filtro por valor |
| "Vou pedir para a turma toda" | Coordenação: pedido em grupo, dividir a conta |

- **Fala-guia:** "Se o time acha que o trabalho é 'comida', melhora o cardápio. Se descobre que é 'não perder tempo', melhora a entrega e o 'pedir de novo'. Mesma tecnologia, decisões opostas."
- **Fala-guia:** "E o concorrente do app de delivery não é só o outro app. É o miojo, a marmita, cozinhar."
- **Pergunta final:** "Qual era o 'miojo' do último projeto de vocês? O que as pessoas já usavam no lugar dele?"

* **Case Accountfy AI:** "Encontrei chatbots que funcionavam tecnicamente. O problema não era a IA, era a experiência em volta dela."

#### 1.3 Pesquisar sem se enganar (13 min)

- **Três regras na tela:**
  1. Pergunte sobre o passado, não sobre o futuro.
  2. Peça a última vez que aconteceu.
  3. Fale menos de 20% do tempo.
- **Fala-guia:** "Todo mundo responde 'sim' para 'você usaria?'. É de graça dizer sim. O passado não mente."
- **Exercício em duplas com quem estiver ao lado (4 min):** reescrever as três perguntas ruins abaixo.
- **Debrief (5 min):** 2 ou 3 voluntários leem. Depois você mostra as versões abaixo, uma pergunta por slide.

| Pergunta ruim | Por que engana | Versões boas |
| --- | --- | --- |
| "Você usaria um app que avisa quando o ônibus atrasa?" | É hipotética, induz o sim e já embute a solução | "Me conta a última vez que o ônibus atrasou e isso te atrapalhou. O que aconteceu?" · "Como você descobre hoje se o ônibus está vindo?" · "Quanto tempo antes você sai para compensar?" · "O que você fez da última vez que perdeu um compromisso por isso?" |
| "Você acha que estudar com IA ajuda?" | Pede opinião genérica, cabe em sim ou não, não revela comportamento | "Qual foi a última vez que você usou IA para estudar? Para qual matéria e o que pediu?" · "O que você fez com a resposta depois?" · "Teve alguma vez que você desistiu de usar? O que aconteceu?" · "Como você estudava esse tipo de conteúdo antes?" |
| "Quanto você pagaria por isso?" | Preço hipotético não vale nada; as pessoas chutam para agradar | "Você já pagou por algo para resolver isso? O quê, quanto?" · "Quanto tempo você gasta por semana com esse problema?" · "O que você já tentou e abandonou? Por quê?" · "Se isso sumisse amanhã, o que você faria?" |

- **Sinal de alerta:** elogio ("que ideia legal!") é ruído. Comportamento e compromisso são sinal.
- **Escada de evidência (slide):** opinião < relato de comportamento passado < dado de uso < compromisso real (pagou, se inscreveu, deixou o contato).
- **Case FP&A:** "O churn subia e a tentação era falar com quem estava satisfeito. Fui falar com quem cancelou. Eles mostraram que quem passava dos primeiros 60 dias ficava. O problema era a entrada no produto." Resultado: −85% no tempo de onboarding, −5pp de churn mensal.

#### 1.4 Caça à gambiarra (3 min)

- **Pergunta:** "Qual gambiarra vocês usam hoje na faculdade? Planilha, grupo de WhatsApp, print, alarme?"
- **Fala-guia:** "Toda gambiarra é um problema real que alguém já está pagando para resolver, com tempo ou esforço. Gambiarra é ouro em discovery."

#### 1.5 Métricas de discovery: dar tamanho ao problema (12 min)

- **Conceito:** antes de existir produto, já dá para medir o problema.
- **As 5 dimensões (slide):**

| Dimensão | Pergunta | Fonte rápida |
| --- | --- | --- |
| Alcance | Quantas pessoas têm o problema? | Dados públicos, base de clientes, contagem |
| Frequência | Com que frequência acontece? | Entrevistas, logs |
| Intensidade | Quanto custa em tempo, dinheiro ou frustração? | Entrevistas, observação |
| Alternativa atual | Como resolvem hoje e quanto custa? | Entrevistas (a gambiarra) |
| Disposição | Já gastam algo para resolver? | Comportamento observado |

- **Estimativa ao vivo (5 min):** montar a conta com números chutados pela plateia. Exemplo: alunos que dependem de ônibus × atrasos por semana × minutos perdidos = horas perdidas por mês.
- **Fala-guia:** "'O ônibus atrasa' é uma reclamação. 'Mil e trezentas horas perdidas por mês' é um problema."
- **Engenharia já mede o problema (introdução, aprofundado no Ato 3):** muitos sinais de discovery já estão nos sistemas que vocês constroem.

| Sinal de engenharia | O que revela sobre o problema |
| --- | --- |
| Taxa de erro ou timeout numa etapa | Usuários travando ali: alcance e intensidade |
| Buscas sem resultado nos logs | Demanda não atendida: o que procuram e não encontram |
| Mesma ação repetida em poucos segundos | Frustração, fluxo confuso |
| Tickets de suporte por categoria | Frequência e intensidade de cada dor |
| Exportação para planilha ou CSV | O usuário termina o trabalho fora do produto: uma gambiarra |
| Endpoints ou funcionalidades nunca chamados | Solução sem problema |

- **Fala-guia:** "Vocês são as pessoas com mais acesso a esses dados na empresa. Isso é poder em uma discussão de produto."
- **Frase-problema com número (slide):** "\[Quem\] perde \[quanto\] \[com que frequência\] porque \[causa\]. Hoje resolvem com \[alternativa\], que custa \[X\]."
- **Case Euphoria:** "Na pandemia, a inadimplência era uma sensação ruim da diretoria. Quando os dados mostraram onde e quanto ela pesava, deu para agir." Resultado: −32,5%.

#### 1.6 A hipótese como assert (3 min)

- **Slide:** "Acreditamos que \[quem\] tem \[problema\] porque \[evidência\]. Saberemos que estamos certos se \[métrica\] chegar a \[valor\]."
- **Fala-guia:** "É o teste unitário do negócio. Vocês escrevem o assert antes do código."

**Transição:** "Agora vocês têm um problema real. A tentação é sair codando a primeira ideia. Vamos segurar mais 20 minutos."

### 20:15 · Ato 2 · Explore soluções antes de escolher (20 min)

**Objetivo:** o aluno entende que a primeira solução raramente é a melhor e aprende a comparar alternativas.

- **Regra (slide):** pelo menos três formas diferentes de resolver antes de escolher uma.
- **Os quatro riscos de qualquer solução:**
  1. Vão usar?
  2. Conseguem usar?
  3. Dá para construir?
  4. Vale a pena para o negócio?
- **O menor teste (5 min):** qual a coisa mais barata que testa a hipótese? Protótipo de tela, planilha, um formulário, às vezes nem é software.
- **Fala-guia:** "O MVP não é a versão capenga do produto. É o menor experimento que responde a sua pergunta."
- **Case Accountfy FP&A (escolha):** para o onboarding lento, a solução óbvia era mais gente do suporte acompanhando o cliente. A escolhida foi redesenhar a entrada no produto.
- **Case Accountfy AI (falha herdada):** "Quando cheguei, encontrei vários chatbots, cada um escolhido isoladamente, sem conversar entre si. Cada solução fazia sentido sozinha; juntas, confundiam o usuário."
- **Interação (3 min):** "Problema: alunos perdem prazo de entrega de trabalho. Me deem três soluções diferentes, e só uma pode ser um app."

#### Exemplos não óbvios do Ato 2

Use 2 ou 3 por tabela, conforme o tempo; os demais ficam de reserva para as perguntas.

**A solução óbvia vs. a que resolveu.** Nenhuma das soluções que funcionaram era mais tecnologia; era entender melhor o problema.

| Situação | Solução óbvia | O que resolveu | Lição |
| --- | --- | --- | --- |
| Moradores de um prédio reclamam da demora do elevador (história clássica da área, contada há décadas) | Trocar por um elevador mais rápido | Espelhos ao lado do elevador; as reclamações caíram | O problema era o tédio da espera, não a velocidade |
| Aeroporto de Houston: passageiros reclamam da demora das malas | Mais carregadores. A espera caiu para cerca de 8 minutos e as reclamações continuaram | Afastar o desembarque das esteiras: as pessoas andam mais e ficam menos tempo paradas. As reclamações quase sumiram | Espera parada pesa mais que o tempo total |
| Passageiros reclamam da espera pelo ônibus | Mais ônibus, caro e lento de implantar | Previsão de chegada em tempo real. Estudos com o app OneBusAway, em Seattle, mostraram espera percebida menor | Às vezes resolver é informar, não acelerar |
| Case condutor: "não sei se minha reserva deu certo" | Um chat com atendente | Tela de status e notificação | É a mesma dor das cartas de contexto do Ato 3 |

**Fala-guia:** "Se esses times tivessem ido direto para a primeira solução, teriam gastado muito dinheiro para resolver o problema errado."

**Do físico ao digital: o mesmo princípio em produtos reais.** Depois de cada exemplo físico, mostre o "irmão" em software. É aqui que a plateia de dev se reconhece.

| Princípio | Case real em software | O que o time fez | Leitura para devs |
| --- | --- | --- | --- |
| Mudar a percepção da espera (elevador) | Instagram, nos primeiros anos | Começava a enviar a foto em segundo plano enquanto a pessoa ainda escrevia a legenda. Ao tocar em "compartilhar", a publicação parecia instantânea | Performance percebida também é engenharia: otimizar o momento em que o usuário espera, não só o tempo total |
| Mudar a percepção da espera (elevador) | Telas-esqueleto (skeleton screens), popularizadas por apps como Facebook e LinkedIn | A estrutura da página aparece antes do conteúdo carregar | O mesmo tempo de carregamento parece menor |
| A espera parada pesa mais (Houston) | Interface otimista, como o botão de curtir | A tela reage na hora, antes de o servidor confirmar, e só desfaz se der erro | Uma decisão de arquitetura tomada para resolver uma percepção, não um gargalo |
| Informar em vez de acelerar (ônibus) | Domino's Pizza Tracker (2008) | Mostra as etapas do pedido (preparo, forno, saiu para entrega) sem a pizza ficar pronta mais rápido | Virou referência de produto: transparência de status como funcionalidade |
| Informar em vez de acelerar (ônibus) | Apps de transporte mostrando o carro se aproximando no mapa | Ver o motorista chegando torna a espera tolerável | Um evento de localização e um mapa resolvem ansiedade, não tempo |
| Mudar a experiência em vez de adicionar gente (Houston) | Accountfy FP&A (seu case) | Solução óbvia: mais gente do suporte acompanhando o onboarding. O que foi feito: redesenhar a entrada no produto. Tempo de onboarding −85% | Escalar com produto, não com pessoas |

**Fala-guia:** "O elevador, o aeroporto e o Instagram resolveram o mesmo problema: a espera. Só um deles precisou de um engenheiro para isso."

**O menor teste, na prática.**

| Quem | Pergunta a testar | Menor teste |
| --- | --- | --- |
| Zappos (1999) | As pessoas compram sapato pela internet sem experimentar? | O fundador fotografou sapatos de lojas locais e publicou num site. Quando alguém comprava, ele ia à loja, comprava e enviava. Nenhum estoque |
| Dropbox (2007–2008) | As pessoas querem sincronizar arquivos desse jeito? | Um vídeo mostrando o produto antes de ele estar pronto. A lista de espera saltou de cerca de 5 mil para 75 mil pessoas |
| Burbn, que virou Instagram (2010) | Qual parte do app as pessoas realmente usam? | Os dados de uso mostraram que só o compartilhamento de fotos importava. O time cortou todo o resto |

**Fala-guia:** "Repare no Instagram: a melhor solução foi tirar funcionalidades. Remover também é solução."

**Como o menor teste aparece no dia a dia de quem desenvolve:**

| Técnica | Como funciona | Parente de | Case real |
| --- | --- | --- | --- |
| Porta pintada (fake door) | Um botão para uma funcionalidade que ainda não existe. Ao clicar, aparece "em breve" e o clique é medido | Dropbox | Buffer (2010): uma página com planos e preços antes do produto existir. Quem clicava em "planos" via que ainda não estava pronto e deixava o e-mail |
| Mágico de Oz (concierge) | A interface parece automática, mas uma pessoa faz o trabalho nos bastidores | Zappos | A própria Zappos: o "sistema" de estoque era o fundador indo à loja |
| Análise de uso antes de construir mais | Uma consulta mostra quais funcionalidades as pessoas realmente usam | Instagram | Accountfy AI (seu case): dados de uso guiaram a consolidação dos chatbots |
| Spike técnico com prazo | Um teste de horas, com critério de sucesso definido antes, decide uma dúvida técnica | — | Mogno AI (seu case) |
| Feature flag para uma fatia | Libera para uma parte dos usuários e compara com quem não recebeu | — | Prática comum em times de produto maduros |

**Fala-guia:** "Vocês já sabem fazer tudo isso: um botão, um evento, uma flag, uma consulta. A diferença é usar essas ferramentas para aprender antes de construir, e não só para entregar."

**Os quatro riscos, um exemplo para cada.**

| Risco | Exemplo | O que aconteceu |
| --- | --- | --- |
| Vão usar? | Amazon Fire Phone (2014) | Tela com efeito 3D sofisticado. Vendeu pouco e a empresa registrou uma baixa contábil de cerca de US$ 170 milhões |
| Conseguem usar? | Google Wave (2009) | Colaboração em tempo real impressionante, mas as pessoas não entendiam para que servia. O desenvolvimento foi encerrado em 2010 |
| Dá para construir? | Mogno AI (seu case) | Dois testes de poucas horas decidiram entre duas arquiteturas antes de investir semanas |
| Vale a pena para o negócio? | MoviePass (2017–2019) | Cinema ilimitado por cerca de US$ 10 por mês. Os usuários amaram, mas cada sessão custava à empresa mais que a mensalidade. A empresa quebrou |

**Fala-guia:** "O MoviePass é o lembrete mais caro: o usuário amar não basta. A solução precisa passar nos quatro riscos."

**O que alguém do time técnico poderia ter sinalizado em cada risco:**

- **Fire Phone (vão usar?):** "Que tarefa do dia a dia o efeito 3D torna mais fácil?" Uma pergunta de problema, não de tecnologia.
- **Google Wave (conseguem usar?):** era uma ferramenta de colaboração liberada por convites; muita gente entrava e não tinha com quem colaborar. Um teste com grupos reais, que já trabalham juntos, teria mostrado isso cedo.
- **MoviePass (vale a pena?):** uma consulta simples nos dados de uso, cruzando frequência de idas ao cinema com o custo de cada ingresso, mostraria que os usuários mais engajados eram os que mais davam prejuízo.
- **Mogno (dá para construir?):** foi exatamente o papel do teste técnico de poucas horas.

**Fala-guia:** "Em três desses quatro casos, a resposta estava numa pergunta simples ou numa consulta nos dados. Quem tem acesso a isso? Vocês." É a ponte para o Ato 3.

**Transição:** "Quem responde o risco 'dá para construir?'. Vocês. É aqui que o dev entra no jogo."

### 20:35 · Ato 3 · Onde o dev entra no discovery (30 min)

**Objetivo:** o aluno sai sabendo questionar uma demanda sem travar o time, usar dados de engenharia como evidência e conduzir o discovery quando não há time de produto.

#### 3.1 Por que o dev precisa estar no discovery (5 min)

- Quem constrói enxerga restrições e possibilidades que ninguém mais vê.
- O dev tem acesso a dados (logs, banco) que respondem perguntas de discovery.
- Times maduros trabalham em trio: produto, design e engenharia.
- **Fala-guia:** "O dev que só recebe tarefa fica sempre no fim da fila das decisões. O dev que pergunta 'qual problema isso resolve?' é chamado para a conversa antes de a tarefa existir."

**Quando quem constrói enxerga o que ninguém via:**

| Caso | O que aconteceu | Lição |
| --- | --- | --- |
| Gmail (2004) | Começou como projeto de um engenheiro do Google, Paul Buchheit. Com 1 GB de espaço e busca rápida, quando os concorrentes ofereciam poucos megabytes, mudou a pergunta de "como organizar e apagar e-mails" para "nunca apague, procure" | Uma possibilidade técnica virou proposta de valor e não só isso: benchmarking de mercado |
| Slack (2013) | O time fazia um jogo online, o Glitch, que não deu certo. A ferramenta interna que os próprios devs criaram para se comunicar virou o produto | Os devs eram os primeiros usuários da dor, e perceberam |

#### 3.2 Quando a demanda chega pronta, de cima para baixo (10 min)

- **Situação:** "O diretor quer um chat dentro do app até o fim do mês."
- **Fala-guia:** "Questionar não é recusar. É proteger o investimento da empresa e o tempo do time."
- **Três atitudes:** curiosidade em vez de oposição; pergunta antes de opinião; alternativa junto com a dúvida.
- **Banco de perguntas (slide):**

| Sobre | Perguntas para levar à mesa |
| --- | --- |
| O problema | "Qual problema isso resolve? Para quem?" · "O que acontece hoje se não fizermos nada?", "Como o usuário resolve esse problema hoje?" |
| A evidência | "Como sabemos que esse problema existe?" · "Quantos usuários são afetados?" · "Temos dado, ticket ou entrevista sobre isso?" |
| O sucesso | "Como vamos saber, em um mês, que funcionou?" · "Qual número precisa mudar?" |
| A alternativa | "Existe uma versão menor que testa isso em dias, não semanas?" · "Isso já é resolvido de outro jeito, dentro ou fora do produto?" |

- **Modelo de fala:** "Quero entender melhor para construir a coisa certa. Olhei os dados e vi \[X\]. Faz sentido testarmos \[versão menor\] e medir \[Y\] antes de investir \[Z semanas\]?"
- **O que evitar:** "isso não faz sentido", "quem pediu isso?", estimar o esforço sem perguntar o porquê.

**Pedidos clássicos e o problema que costuma estar por trás (slide):**

| O pedido | A pergunta que revela | O problema real mais comum |
| --- | --- | --- |
| "Exportar para Excel" | "O que você faz com a planilha depois?" | Um relatório ou cálculo que o produto não entrega |
| "Mais filtros na busca" | "O que você procurava da última vez e não achou?" | A busca não entende o que a pessoa digita |
| "Um aplicativo" (quando já existe o site) | "O que você tenta fazer pelo celular e não consegue?" | Uma única tarefa que não funciona bem no navegador do celular |
| "Notificação por e-mail de tudo" | "O que acontece quando você perde esse aviso?" | Medo de perder um prazo específico; um aviso só resolve |
| "Um dashboard" | "Que decisão você vai tomar olhando para ele?" | Uma pergunta só, que um número ou alerta responde |

**Fala-guia:** "O pedido é uma pista, não a especificação. Trate como um bug report: o usuário descreve o sintoma, vocês investigam a causa."

#### 3.3 Detetive de dados (6 min)

**Objetivo:** mostrar, na prática, que a resposta para "qual problema isso resolve?" muitas vezes está a duas consultas de distância, e que quem sabe fazer essas consultas é o dev. Todos os dados são fictícios.

**Slide 1 · A demanda (30 s):** "O diretor quer um chat dentro do app até o fim do mês. O concorrente lançou um."

**Rodada 1 · O que consultar primeiro? (1 min).** Pergunta aberta à sala: "Antes de estimar, o que vocês investigariam?" Ouça as sugestões. Se a conversa travar, mostre quatro caminhos na tela:

1. Quantas semanas o chat leva para ficar pronto.
2. Qual biblioteca de chat usar.
3. Por que os usuários procuram o suporte hoje.
4. Quantos usuários o concorrente tem.

Conduza a conversa até a opção 3. Se alguém defender outra, ótimo: peça o argumento, debata brevemente com a sala e siga com a 3.

**Rodada 2 · A primeira consulta (2 min).** Mostre a consulta e o resultado:

```sql
SELECT motivo, COUNT(*) AS chamados
FROM chamados_suporte
WHERE criado_em >= '2026-09-01'
GROUP BY motivo
ORDER BY chamados DESC;
```

| Motivo do chamado | Chamados | % |
| --- | --- | --- |
| Status da reserva | 1.240 | 31% |
| Cobrança ou estorno | 880 | 22% |
| Carro sujo ou com dano | 720 | 18% |
| Dificuldade para abrir o carro | 600 | 15% |
| Cadastro e CNH | 360 | 9% |
| Outros | 200 | 5% |

- **Pergunta à plateia:** "O que esse resultado diz sobre o chat?" Ouvir duas ou três respostas.
- Leitura: quase um terço das pessoas procura o suporte para saber algo que o próprio sistema já sabe.

**Rodada 3 · Aprofundando (2 min).** Uma segunda consulta, cruzando os chamados de status com os eventos da reserva:

| Quando o contato sobre status acontece | Chamados | % |
| --- | --- | --- |
| Até 10 minutos depois de reservar | 868 | 70% |
| Entre 10 minutos e 1 hora | 248 | 20% |
| Depois de 1 hora | 124 | 10% |

| Grupo | Taxa de cancelamento |
| --- | --- |
| Reservas sem contato com o suporte | 6% |
| Reservas com contato sobre status | 12% |

- **Leitura:** a dor real é a incerteza logo depois de reservar ("deu certo? onde está o carro?"), e ela dobra o cancelamento.
- **A solução que os dados sugerem:** confirmação imediata e uma tela de status, feitas em dias. Um chat colocaria uma pessoa para responder o que o sistema já sabe.
- **Nuance importante:** o dado não mata o chat. Ele mostra por onde começar. Cobrança e estorno (22%) talvez precisem mesmo de atendimento humano.

**Debrief (30 s) · Fala-guia:** "Ninguém aqui precisou de pesquisa de mercado. Foram duas consultas num banco que vocês mesmos modelariam. É isso que um dev traz para a mesa: a demanda chegou como 'chat', e saiu como 'incerteza depois da reserva', com número."

#### 3.4 A engenharia como fonte de discovery (5 min)

- Retomar a tabela de sinais do Ato 1.5 e mostrar como o dev ajuda na prática:
  1. Uma consulta no banco dimensiona o problema: quantos usuários passaram pela situação.
  2. Os logs mostram onde as pessoas travam.
  3. Um evento instrumentado antes da feature responde uma pergunta específica.
  4. Um teste técnico barato evita uma decisão cara.
- **Exemplo do case condutor:** é exatamente o que a plateia acabou de fazer no detetive de dados.
- **Case Mogno:** duas abordagens de arquitetura para um componente crítico. Em vez de debater por dias, dois testes de poucas horas com critério de sucesso definido antes. Resultado inequívoco, semanas de retrabalho economizadas.

**Exemplo não óbvio, Microsoft Office 2007:** a demanda era por mais funcionalidades. A telemetria de uso mostrou que a grande maioria dos pedidos era de funcionalidades que já existiam, só que as pessoas não as encontravam. O problema não era falta de recurso, era encontrá-lo, e a resposta foi redesenhar a interface (a faixa de opções). Dado de engenharia mudou a pergunta do produto.

**Fala-guia:** "Antes de construir a funcionalidade pedida, vale uma consulta: ela já existe? Quem usa? Às vezes o melhor código é o que vocês não precisam escrever."

#### 3.5 Quando não existe time de produto (4 min)

- **Situação:** startup early-stage, estágio em empresa que não tem uma grande maturidade em tech, freela, projeto pessoal, TCC, hackathon. O discovery passa a ser seu.
- O briefing é ponto de partida, não o problema: ainda precisa ser investigado.
- Os usuários costumam estar perto: converse com cinco antes de codar.
- Reserve tempo de entendimento antes de abrir o editor.
- **Fala-guia:** "Vale inclusive para o hackathon desta semana: os primeiros 45 minutos de entendimento valem mais que qualquer linha de código."
- **Checklist "antes de abrir o editor":**

**Exemplos não óbvios, sem time de produto:**

| Caso | O que fizeram | Lição |
| --- | --- | --- |
| Airbnb (2009) | Os anúncios em Nova York quase não eram reservados. Os fundadores suspeitaram das fotos ruins, foram pessoalmente fotografar os imóveis, e a receita na cidade dobrou, segundo relatos dos próprios fundadores | Observar de perto vale mais que adivinhar de longe |
| Botão "Curtir" do Facebook | Nasceu como ideia num hackathon interno, em 2007, e só foi lançado em 2009, depois de muita discussão sobre o problema que resolvia | Hackathon gera ideia; discovery decide se ela vira produto |

- **Checklist "antes de abrir o editor":**

* [ ] Sabemos quem é o usuário?
* [ ] Falamos com pelo menos 5 pessoas?
* [ ] Temos um número que mostra o tamanho do problema?
* [ ] Sabemos como as pessoas resolvem hoje?
* [ ] Escrevemos a hipótese?

**Transição para o intervalo:** "Voltamos em 15 minutos para provar, com números, que deu certo."

### 21:05 · Intervalo (15 min)

Slide de intervalo com cronômetro e a pergunta para pensar: "Qual métrica do seu último projeto você acompanhou depois de entregar?"

### 21:20 · Ato 4 · Como saber se funcionou (45 min)

**Objetivo:** o aluno entende os três andares de métricas, constrói uma árvore de métricas e sabe o que acompanhar no dia a dia.

#### 4.1 Os três andares de métricas (5 min)

- **Situação:** o dev comemora "a API caiu de 800ms para 200ms!" e o diretor pergunta "e daí?".
- **Slide:**
  - **Técnico:** latência, taxa de erro, crash rate, uptime.
  - **Produto:** ativação, conversão no funil, retenção, adoção de funcionalidade.
  - **Negócio:** receita, churn, custo por cliente.
- **Fala-guia:** "Vocês já monitoram o servidor. Métrica de produto é monitorar o valor que chega no usuário."

#### 4.2 A árvore de métricas ao vivo (20 min)

**Case real, números fictícios.** As etapas intermediárias do cadastro aparecem sem números. Construída ao vivo, em quatro momentos.

**Momento 1 · O cenário (3 min).**

- Uma atualização recente do app mexeu no fluxo de cadastro, e uma pesquisa com usuários já apontava problemas na conversão.
- Na mesma época, um grande esforço de marketing e growth fez os downloads dispararem nas lojas da Apple e do Google: 90 mil por mês.
- **Pergunta à plateia:** "Downloads subindo muito. Está tudo bem?" Ouvir duas ou três respostas.

**Momento 2 · O funil (5 min).** As etapas do download até a primeira reserva, com a queda desenhada de forma ilustrativa: download → abriu o app → dados pessoais → validação da CNH → selfie → upload de documento → cadastro aprovado → primeira reserva no mês.

- Só três números na tela: **90 mil downloads**, **15% concluem o cadastro**, **7% fazem a primeira reserva no mesmo mês**.
- **Ativação** = primeira reserva no mesmo mês, o momento em que o usuário entende o valor do produto.
- **Fala-guia:** "De cada 100 pessoas que baixaram o app, 85 desistiram no cadastro. A gente estava pagando para encher um balde furado."

**Momento 3 · A árvore (8 min).** Montada de cima para baixo, da receita até as causas:

*Diagrama da árvore (ver o documento original):* "85% dos downloads se perdiam no cadastro antes de virar receita"

- **Negócio:** Receita mensal (≈ R$ 724,5 mil, novos usuários) = Primeiras reservas × Ticket médio
- **Negócio / produto:** Primeiras reservas (6.300 por mês) · Ticket médio (R$ 115)
- **Produto:** Downloads (90 mil por mês) × **Cadastro concluído (15% · 13.500)** × 1ª reserva no mês (≈ 47% de quem cadastrou)
- **Causas:** Marketing e growth → Downloads · Validação da CNH, Selfie e Upload de documento → Cadastro concluído (identificadas pela engenharia)
- **Caminho destacado:** Receita ← Primeiras reservas ← Cadastro concluído ← CNH, selfie e upload

O caminho destacado mostra o vazamento: etapas complexas do cadastro seguravam a conclusão em 15%, e isso limitava as primeiras reservas e a receita.

| Métrica | Valor |
| --- | --- |
| Downloads por mês | 90.000 |
| Concluíram o cadastro (15%) | 13.500 |
| Primeira reserva no mês (7% dos downloads) | 6.300 |
| Ticket médio | R$ 115 |
| Receita das primeiras reservas | ≈ R$ 724,5 mil por mês |

- **Interação:** "Quanto vale cada ponto percentual a mais de conclusão do cadastro?" Deixar a plateia chutar. Revelar: +1 ponto percentual = +900 cadastros. Mantida a proporção atual (cerca de 47% de quem conclui faz a primeira reserva), são +420 primeiras reservas, ≈ R$ 48 mil por mês, quase R$ 580 mil por ano. Só na primeira reserva.
- **Cenário ilustrativo:** se a conclusão do cadastro fosse de 15% para 20%, seriam cerca de 2.100 primeiras reservas a mais, ≈ R$ 241 mil por mês.

**Momento 4 · O que a engenharia encontrou (4 min).**

- Cruzando os eventos de cada etapa com a versão do app, a engenharia identificou etapas de complexidade no cadastro: validação da CNH, selfie e upload de documento.
- **Fala-guia:** "A pesquisa disse que havia um problema. Os dados de engenharia disseram onde."
- Ligação com o Ato 1.5: erro por etapa, retentativas e comparação entre versões são sinais de engenharia que viram métricas de discovery.
- *(Se puder contar: o que foi feito e qual foi o resultado.)*

**Lições do case:**

- **Métrica de vaidade:** os downloads subiam e pareciam sucesso; a ativação contava outra história. Liga com o 4.4.
- **Topo vs. meio do funil:** investir em aquisição sem consertar o cadastro é pagar para encher um balde furado.
- **Nem toda melhoria técnica sobe na árvore:** otimizar a busca de carros não adiantaria se 85% das pessoas nunca chegavam até ela. A árvore mostra onde o esforço de engenharia vira resultado.
- **Caminho inverso:** se a meta é aumentar a receita de novos usuários, a árvore mostra que a alavanca de maior impacto não era mais marketing, era o cadastro. É assim que o dev participa da estratégia.
- **Case Accountfy AI:** ninguém sabia quais funcionalidades de IA eram usadas. Um framework unificado de métricas e dashboards por squad conectaram o trabalho a resultado: −22% em tickets, +11% de receita via upsell ao mês.

#### 4.3 Ler dados sem se enganar (10 min)

- **Ativação é comportamento:** "fez a primeira reserva" vale mais que "baixou o app".
- **Funil projetado (dados fictícios):** ler junto com a plateia, etapa por etapa. "Onde vocês investigariam primeiro?"
- **Coorte projetada:** ler uma linha, depois uma coluna. "A turma de março retém melhor que a de janeiro. O que mudou?"
- **Case Mogno (falha):** "Lançamos funcionalidades que eu achava essenciais. Os dados mostraram que quase ninguém usava. Pivotamos. Doeu, mas sem métrica teríamos insistido por meses." A ativação de 54% só foi possível porque medimos desde o primeiro dia.

#### 4.4 Armadilhas (5 min)

- **Métricas de vaidade:** downloads e cadastros.
- **A média que esconde:** um grupo indo muito bem mascara outro indo muito mal.
- **Definições diferentes (case Euphoria):** "receita" era uma coisa diferente para cada departamento. "Um número errado em que todo mundo confia é pior que nenhum número."

#### 4.5 Métricas no dia a dia de quem programa (5 min)

- **Instrumentar é trabalho de engenharia.** Exemplo de plano de eventos na tela:

| Evento | Quando dispara | Propriedades |
| --- | --- | --- |
| reserva\_criada | Usuário confirma a reserva | carro\_id, duração, valor |
| pagamento\_aprovado | Gateway retorna sucesso | método, valor |
| carro\_aberto | Comando de abertura confirmado | tempo\_ms, tentativas |
| abertura\_falhou | Comando sem confirmação | erro, tentativas |

- **Pronto** = funciona + evento instrumentado + métrica de sucesso definida.
- **Acompanhar** em D+1, D+7 e D+30.
- **Métrica de proteção:** garantir que melhorar X não piorou Y.
- **Quando ainda não há dados de uso** (produto novo, MVP, projeto pessoal, hackathon): mostrar as métricas de discovery que dimensionam o problema, a métrica de sucesso com meta, a árvore ligando a solução ao impacto e, se possível, um teste rápido ("5 pessoas usaram o protótipo, 4 concluíram a tarefa").

**Transição:** "Vocês têm o problema, a solução e os números. Falta convencer alguém."

### 22:05 · Ato 5 · Defenda a ideia (15 min)

**Objetivo:** o aluno sabe transformar uma proposta técnica em argumento com dados, como um tech lead faz no dia a dia.

- **Situação (2 min):** "Precisamos refatorar o serviço de pagamento." Resposta da liderança: "Agora não, temos outras prioridades." Quem já ouviu isso?
- **Três plateias (3 min):**

| Quem | O que "compra" |
| --- | --- |
| Liderança e C-level | Impacto, custo e risco |
| Usuários | O problema deles, nas palavras deles, resolvido |
| Time técnico e pares | Viabilidade, esforço e o que se ganha |

- **Estrutura do argumento (3 min):** problema com número → evidência → proposta mínima → como vamos medir → impacto esperado → custo e risco → pedido.
- **Exemplo ao vivo com a árvore (4 min, números fictícios):** "2% dos pagamentos falham por timeout e metade desses usuários desiste. Em 10 mil reservas por mês, a R$ 115 cada, são 100 reservas e cerca de R$ 11,5 mil por mês, quase R$ 140 mil por ano. A refatoração leva 3 semanas. Proponho fazer agora e medir a taxa de falha em D+7."
- **Fala-guia:** "Repare que o argumento não fala de código. Fala de usuário, de dinheiro e de prazo. O código é o que vocês fazem; o argumento é como vocês conseguem fazê-lo."
- **Case FP&A:** o produto era visto como "complementar". Quando o churn caiu e a adoção subiu, os números mudaram a percepção sozinhos, e o produto virou pilar do portfólio.
- **Três regras de storytelling com dados (2 min):** um número por slide; sempre compare (antes e depois, ou contra a alternativa); sempre diga o "e daí?".
- **Fala-guia de fechamento do ato:** "O mesmo raciocínio serve para uma reunião de prioridade, uma entrevista de emprego, a defesa do TCC ou a apresentação de um hackathon."

### 22:20 · Fechamento e perguntas (10 min)

- **Volta às histórias da abertura (1 min):** retome as palavras-chave anotadas no quadro. "Lembram dos projetos que ninguém usou? Qual das três perguntas teria mudado essa história?" Deixe uma ou duas pessoas responderem.
- **As três perguntas e a timeline (2 min):** "Cada uma dessas perguntas foi um erro meu. Vocês podem pular essa parte."
- **Convite para amanhã (1 min):** "Amanhã vocês viram o time de desenvolvimento de um app e vamos construir juntos, do zero, a solução para um problema que vocês vivem todo semestre."
- **Lição de casa opcional:** observar um problema do próprio dia a dia e conversar com uma pessoa sobre ele usando as três regras.
- **QR codes** do Vina News e do The Product Path, mais o LinkedIn.
- **Perguntas da plateia (6 min).**
