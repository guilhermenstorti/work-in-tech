# Todos os testes passaram, mas o produto falhou

## Dia 2 · Workshop (27/10, 19h00–22h30)

A turma inteira constrói, junto com você e ao vivo no quadro, um único case longo: da demanda que chega pronta até a decisão defendida com dados. Cada capítulo retoma um bloco do Dia 1 e o coloca em prática. Ninguém trabalha sozinho, ninguém forma grupo e ninguém é avaliado: a sala conversa, debate e decide junto.

### O case: Campus+

A Universidade Horizonte (fictícia) lançou há um ano o Campus+, o app oficial dos alunos. A turma vai fazer o papel do time de desenvolvimento do app. Todos os números são fictícios.

| Ficha do case |  |
| --- | --- |
| Alunos ativos | 12.000 |
| O que o app faz hoje | Notas, frequência, boletos, carteirinha digital e abertura de requerimentos |
| Downloads do app | 10.500 |
| Usuários ativos no mês | 4.200 (35% dos alunos) |
| Secretaria acadêmica | 3.000 atendimentos por mês, no balcão, por e-mail e por WhatsApp |
| Tempo médio de atendimento | 10 minutos |
| Fila no início do semestre | Mais de 40 minutos |

**Por que esse case:** todos na sala já usaram um sistema acadêmico e uma secretaria. O discovery ao vivo é real, porque os usuários estão ali.

**Mapa: o que cada capítulo pratica do Dia 1**

| Capítulo | O que acontece no case | Base do Dia 1 |
| --- | --- | --- |
| 1 · A demanda chegou | A reitoria pede um chatbot com IA | Ato 1.1, 1.2 e 3.2 |
| 2 · Discovery ao vivo | A sala é entrevistada como usuária | Ato 1.3 e 1.4 |
| 3 · Detetive de dados | Consultas nos dados da secretaria | Ato 3.3 e 3.4 |
| 4 · O tamanho do problema | Números, frase-problema e hipótese | Ato 1.5 e 1.6 |
| 5 · Explorar soluções | Alternativas, quatro riscos e menor teste | Ato 2 |
| 6 · Métricas e árvore | Funil, armadilhas, árvore e eventos | Ato 4 |
| 7 · Defender a decisão | O argumento para reitoria, alunos e time | Ato 5 |

### Como conduzir

- **Um quadro com 7 áreas**, uma por capítulo, projetado o tempo todo (Miro, FigJam ou Slides). No fim, o quadro é o case completo.
- **Ritmo de cada capítulo:** você revela uma carta ou um dado → faz uma pergunta aberta → a sala responde e debate → você registra no quadro → fecha ligando ao conceito do Dia 1.
- **Cartas e dados ficam prontos em slides**, revelados na ordem. Você só mostra a carta quando alguém faz a pergunta que leva a ela.
- **Respostas esperadas** aparecem neste roteiro como referência para você, não como gabarito. Se a sala chegar a outra conclusão bem argumentada, siga com ela.
- **Fala-guia de abertura:** "Hoje vocês são o time de desenvolvimento do Campus+. Eu sou a reitoria, os dados e, às vezes, o usuário. Ninguém vai ser avaliado: a gente vai construir isso junto."

| Horário | Capítulo | Min |
| --- | --- | --- |
| 19:00 | Abertura | 10 |
| 19:10 | 1 · A demanda chegou | 25 |
| 19:35 | 2 · Discovery ao vivo | 30 |
| 20:05 | 3 · Detetive de dados | 25 |
| 20:30 | Intervalo | 15 |
| 20:45 | 4 · O tamanho do problema | 25 |
| 21:10 | 5 · Explorar soluções | 30 |
| 21:40 | 6 · Métricas e árvore | 30 |
| 22:10 | 7 · Defender a decisão | 15 |
| 22:25 | Encerramento | 5 |

### 19:00 · Abertura (10 min)

- **Retomada (4 min):** as três perguntas do Dia 1 e o checklist "antes de abrir o editor".
- **Apresentar o case (4 min):** a ficha do Campus+ e o papel da turma.
- **Combinado (2 min):** "Discordem, contem experiências, defendam ideias. O quadro é de vocês."

### 19:10 · Capítulo 1 · A demanda chegou (25 min)

**Base do Dia 1:** problema vs. solução (1.1), software é meio (1.2), questionar a demanda (3.2).

**Slide · O e-mail da reitoria:** "Pessoal, todo mundo está colocando IA nos apps. Queremos um chatbot com IA no Campus+ até o início do próximo semestre, para acabar com as filas da secretaria."

**Passo 1 · O primeiro impulso (5 min).** Pergunta aberta: "Vocês são o time do Campus+. Qual é a primeira coisa que vocês fariam?" Deixe surgir tudo: modelo de linguagem, base de conhecimento, stack. Registre na coluna "espaço da solução" do quadro. Depois pergunte: "Repararam em qual coluna a gente começou?"

**Passo 2 · Perguntas à reitoria (10 min).** A sala usa o banco de perguntas do Ato 3.2. Cada boa pergunta revela uma carta:

| A sala pergunta algo como… | Carta revelada |
| --- | --- |
| "Por que agora?" | A: "O reitor viu um chatbot no app de outra universidade num congresso." |
| "Qual problema isso resolve?" | B: "As filas da secretaria passam de 40 minutos no início do semestre." |
| "Como vamos saber se funcionou?" | C: "Ninguém definiu. O objetivo é 'menos fila'." |
| "Temos algum dado?" | D: "A secretaria registra cada atendimento com um motivo. Ninguém nunca olhou." |

**Passo 3 · Para que vocês "contratam" a secretaria? (8 min).** Pergunta aberta: "Pensem na última vez que vocês foram à secretaria. Foram resolver o quê?" Colete histórias reais e agrupe no quadro em "trabalhos". Respostas esperadas: comprovar matrícula para estágio ou passe de transporte, resolver boleto, corrigir nota ou frequência, trancamento ou aproveitamento de disciplina, perguntar o andamento de algo já pedido.

**Fechamento (2 min) · Fala-guia:** "O chatbot é uma solução. A fila é um sintoma. A gente ainda não sabe qual é o problema."

**Fica no quadro:** a demanda reescrita como pergunta: "Por que os alunos precisam ir à secretaria, e quais desses motivos o Campus+ poderia resolver?"

### 19:35 · Capítulo 2 · Discovery ao vivo (30 min)

**Base do Dia 1:** pesquisar sem se enganar (1.3), caça à gambiarra (1.4).

**Fala-guia de entrada:** "Os usuários do Campus+ estão nesta sala. Vamos entrevistá-los."

**Passo 1 · Montar as perguntas (8 min).** A sala sugere perguntas; você escreve no quadro e aplica o detector de viés: é sobre o passado ou o futuro? Comportamento ou opinião? Exemplo esperado de pergunta ruim: "Vocês usariam um chatbot da secretaria?" Reescrita: "Me conta a última vez que você precisou de algo da secretaria. O que aconteceu?"

**Passo 2 · A entrevista (12 min).** Você faz as perguntas boas para a sala. 3 a 5 voluntários respondem de onde estão; depois pergunte "aconteceu com mais alguém?" e deixe outros completarem. Registre no quadro as frases literais, não interpretações.

**Passo 3 · Caça à gambiarra (5 min).** "Como vocês resolvem isso hoje sem passar pela secretaria?" Respostas esperadas: usar o print de uma declaração antiga, pedir a um conhecido que trabalha lá, perguntar no grupo da turma, ir pessoalmente "só para perguntar se ficou pronto", mandar o mesmo e-mail várias vezes.

**Passo 4 · Escada de evidência (5 min).** Classificar o que ouvimos: opinião ou relato de comportamento passado? Mostrar que ainda faltam os dois degraus de cima: dado de uso e compromisso.

**Fala-guia de saída:** "Em 20 minutos vocês fizeram mais discovery do que muito projeto faz em um semestre. Mas são 30 pessoas numa sala. Isso vale para 12 mil alunos? Vamos aos dados."

**Fica no quadro:** as 3 a 5 dores mais citadas, as frases literais e as gambiarras.

**Se a sala trouxer uma dor dominante diferente** (por exemplo, boleto): registre e use como contraste no capítulo 3: "vamos ver se os dados confirmam".

### 20:05 · Capítulo 3 · Detetive de dados (25 min)

**Base do Dia 1:** detetive de dados (3.3), a engenharia como fonte de discovery (3.4).

**Rodada 1 · O que pedir ao sistema? (3 min).** Pergunta aberta: "Que dado vocês consultariam primeiro?" Conduza até "os motivos dos atendimentos", a carta D do capítulo 1.

**Rodada 2 · A primeira consulta (7 min).**

```sql
SELECT motivo, COUNT(*) AS atendimentos
FROM atendimentos_secretaria
WHERE criado_em >= '2026-09-01'
GROUP BY motivo
ORDER BY atendimentos DESC;
```

| Motivo | Atendimentos/mês | % |
| --- | --- | --- |
| Declaração de matrícula | 960 | 32% |
| Status de requerimento | 720 | 24% |
| Boleto e financeiro | 540 | 18% |
| Notas e frequência | 360 | 12% |
| Aproveitamento de disciplinas | 240 | 8% |
| Outros | 180 | 6% |

- **Perguntas abertas:** "Bate com o que vocês contaram?" e "Em quais desses um chatbot ajudaria? Em quais não?"

**Rodada 3 · Aprofundando nas declarações (8 min).** Uma segunda consulta, sobre os pedidos de declaração feitos pelo portal:

| Tempo até a declaração ficar pronta | Pedidos/mês | Procuraram a secretaria antes de receber |
| --- | --- | --- |
| Até 1 dia | 210 (15%) | 10% |
| De 1 a 3 dias | 630 (45%) | 45% |
| Mais de 3 dias | 560 (40%) | 70% |

| Para que a declaração foi pedida | % |
| --- | --- |
| Estágio | 55% |
| Passe de transporte | 25% |
| Outros | 20% |

- **Leitura esperada:** são 1.400 pedidos por mês, e quase 700 viram contato com a secretaria antes da entrega. Praticamente todo o motivo "status de requerimento" vem daqui.
- **O "trabalho" real:** não é "ter uma declaração", é "não perder a vaga de estágio". A empresa costuma pedir para "até sexta".

**Rodada 4 · Um sinal de engenharia (4 min).** Carta E, do log do portal: "A página 'Meus requerimentos' recebe em média 6 acessos por pedido de declaração antes de ela ficar pronta." Pergunta: "O que isso diz sobre quem está do outro lado da tela?" Resposta esperada: ansiedade e falta de status.

**Fechamento (3 min) · Fala-guia:** "A reitoria pediu um chatbot para a fila. Os dados dizem que mais da metade da fila, 56%, é uma declaração que o sistema já tem todos os dados para gerar." **Nuance:** boleto e notas somam 30%. Ali, talvez, um assistente faça sentido depois.

**Fica no quadro:** as duas tabelas, o sinal do log e o "trabalho" real.

### 20:30 · Intervalo (15 min)

Slide com a pergunta para conversar no café: "Quantos de vocês já precisaram de uma declaração para estágio com prazo apertado?"

### 20:45 · Capítulo 4 · O tamanho do problema (25 min)

**Base do Dia 1:** métricas de discovery (1.5), hipótese como assert (1.6).

**Passo 1 · Dados da sala (3 min).** Mãos levantadas: "Quem precisou de declaração no último ano? Para estágio? Quem foi à secretaria só para perguntar se estava pronta?" Anote os números no quadro: é dado real, coletado ali.

**Passo 2 · As 5 dimensões, com a sala (8 min).** Respostas esperadas:

| Dimensão | No case Campus+ |
| --- | --- |
| Alcance | 1.400 pedidos de declaração por mês, mais os números da sala |
| Frequência | Picos no início do semestre e nas temporadas de estágio |
| Intensidade | 40% esperam mais de 3 dias; risco de perder a vaga de estágio |
| Alternativa atual | Ir à secretaria, insistir por e-mail, pedir a um conhecido |
| Disposição | Alunos já gastam deslocamento e até 40 minutos de fila |

**Passo 3 · A conta ao vivo (5 min).** Declaração + status = 1.680 atendimentos por mês × 10 minutos = 16.800 minutos = **280 horas por mês**. Pergunta: "Quantas pessoas em tempo integral isso dá?" Resposta: quase duas pessoas da secretaria só para isso.

**Passo 4 · A frase-problema, escrita pela sala (5 min).** Versão esperada: "Alunos que precisam comprovar matrícula, principalmente para estágio, esperam até mais de 3 dias pela declaração sem saber o status. Os 1.400 pedidos por mês geram cerca de 1.680 atendimentos na secretaria, ou 280 horas mensais. Hoje resolvem indo à secretaria ou insistindo por e-mail."

**Passo 5 · A hipótese (4 min).** "Acreditamos que alunos que precisam de declaração para estágio perdem tempo e prazos porque a emissão é lenta e sem status. Saberemos que estamos certos se os atendimentos sobre declaração e status caírem pela metade em 2 meses." **Debate:** "Metade é ambicioso ou tímido? Por quê?"

**Fica no quadro:** a tabela das 5 dimensões, a conta, a frase-problema e a hipótese.

### 21:10 · Capítulo 5 · Explorar soluções (30 min)

**Base do Dia 1:** pelo menos três soluções, os quatro riscos e o menor teste (Ato 2).

**Passo 1 · Chuva de soluções (8 min).** Pergunta aberta: "Quantas formas diferentes existem de resolver isso?" Regra: pelo menos uma sem software. Se não surgirem, sugira você:

1. Chatbot com IA (a demanda original).
2. Tela de status do pedido com notificação.
3. Declaração gerada na hora no app, com QR de autenticidade.
4. Balcão expresso só para declarações (sem software).
5. Enviar a declaração automaticamente a todos no início do semestre.

**Passo 2 · Os quatro riscos, em debate (12 min).** A sala dá as notas de 1 a 3 e você preenche. Uma leitura possível:

| Alternativa | Vão usar? | Conseguem usar? | Dá para construir? | Vale a pena? | Total |
| --- | --- | --- | --- | --- | --- |
| Chatbot com IA | 2 | 2 | 1 | 2 | 7 |
| Status + notificação | 3 | 3 | 3 | 2 | 11 |
| Declaração na hora com QR | 3 | 3 | 2 | 3 | 11 |
| Balcão expresso | 2 | 3 | 3 | 1 | 9 |
| Declaração para todos no início | 1 | 3 | 3 | 2 | 9 |

- **O empate é proposital** e gera o melhor debate: o status resolve a ansiedade; a declaração na hora elimina a espera, e com ela a necessidade de status.
- **A voz do dev no risco "dá para construir?":** "Os dados da declaração já existem no sistema acadêmico? Como uma empresa confia num PDF?" Carta F: "O sistema acadêmico tem uma API de leitura. Hoje a secretaria copia os dados dele para um modelo de documento de texto." A sala percebe que o trabalho da secretaria é copiar e colar.

**Passo 3 · O menor teste (10 min).** Pergunta aberta: "Antes de dois meses de desenvolvimento, qual o teste mais barato que responde se isso funciona?" Respostas esperadas:

- **Mágico de Oz:** um botão "Gerar declaração" no Campus+, só para o curso de ADS, por duas semanas. Por trás, a secretaria emite manualmente em até 1 hora e envia.
- **Discovery sem código:** ligar para 5 empresas que contratam estagiários e perguntar se aceitam declaração com QR de autenticidade.

Carta G, resultado do piloto (D+14, 800 alunos de ADS):

| Resultado do piloto | Valor |
| --- | --- |
| Pedidos pelo botão | 140 |
| Entregues em até 1 hora | 95% |
| Atendimentos de declaração e status do curso | de 64 para 18 (−72%) |
| Empresas que aceitariam o QR | 5 de 5 |

**Fala-guia:** "O piloto não tinha uma linha de código de geração de PDF. Tinha um botão e uma pessoa. E respondeu a pergunta mais cara." **Debate:** "O chatbot morreu?" Resposta esperada: não. Os dados mostram por onde começar.

**Fica no quadro:** as 5 alternativas, a tabela de riscos, o menor teste e o resultado do piloto.

### 21:40 · Capítulo 6 · Métricas e árvore (30 min)

**Base do Dia 1:** os três andares, árvore de métricas, ler dados, armadilhas e eventos (Ato 4).

**Passo 1 · A armadilha (4 min).** Carta H: "A reitoria comemora: o Campus+ passou de 10 mil downloads!" Pergunta: "É uma boa notícia?" Resposta esperada: métrica de vaidade. Só 4.200 alunos usam o app no mês, 35% do total.

**Passo 2 · Os três andares (3 min).** A sala sugere métricas para o case e você as coloca no andar certo: técnico, produto ou negócio.

**Passo 3 · Ler o funil do piloto (5 min).**

| Etapa | Pessoas |
| --- | --- |
| Viram o botão "Gerar declaração" | 520 |
| Tocaram no botão | 160 |
| Confirmaram os dados | 140 |
| Receberam a declaração | 133 |
| Baixaram ou compartilharam | 128 |

Pergunta: "Onde vocês investigariam?" Debate esperado: a maior queda está entre ver e tocar no botão (31%). Ele está escondido, ou a maioria simplesmente não precisava de declaração naquele dia? As duas leituras são possíveis, e a sala propõe como verificar.

**Passo 4 · A árvore, construída pela sala (10 min).** Estrutura esperada, de cima para baixo:

- **Raiz (negócio):** horas da secretaria com declaração e status = atendimentos × 10 minutos (hoje, 280 h/mês).
- **Galho 1 (produto):** pedidos de declaração feitos no balcão ← % dos pedidos feitos pelo app.
- **Galho 2 (produto):** contatos perguntando o status ← tempo até a declaração ficar pronta ← % emitidas em até 5 minutos.
- **Folhas técnicas:** tempo de resposta da API do sistema acadêmico, taxa de falha na geração do PDF, disponibilidade da página de validação do QR, dados cadastrais desatualizados que geram declaração errada.
- **Lado do aluno:** tempo até ter a declaração, de dias para minutos, e a vaga de estágio garantida.
- **Projeção ilustrativa:** se o −72% do piloto se repetir na universidade inteira, são cerca de 1.210 atendimentos a menos por mês, ≈ 200 horas liberadas.

**Passo 5 · Eventos, como um dev (5 min).** A sala nomeia os eventos no padrão objeto\_ação. Resposta esperada:

| Evento | Quando dispara | Propriedades |
| --- | --- | --- |
| declaracao\_botao\_visto | O botão aparece na tela | curso |
| declaracao\_solicitada | O aluno confirma o pedido | finalidade (estágio, transporte, outro) |
| declaracao\_emitida | O PDF fica pronto | tempo\_ms |
| declaracao\_falhou | A geração dá erro | erro |
| declaracao\_baixada | O aluno baixa ou compartilha | canal |
| declaracao\_validada | Alguém lê o QR de autenticidade | — |

**Destaque:** o último evento mede se as empresas estão de fato usando a declaração. É um evento que só um dev pensaria em instrumentar.

**Passo 6 · As métricas finais (3 min).**

- **Sucesso:** % de declarações emitidas em até 5 minutos (meta: 95%).
- **Resultado:** atendimentos de declaração e status −50% em 2 meses.
- **Proteção:** % de declarações com dado incorreto (abaixo de 1%) e atendimentos de outros motivos sem subir.
- **Acompanhamento:** D+1, D+7 e D+30.

**Fica no quadro:** a árvore, a tabela de eventos e as métricas.

### 22:10 · Capítulo 7 · Defender a decisão (15 min)

**Base do Dia 1:** três plateias e a estrutura do argumento (Ato 5).

**Situação:** "Vocês vão à reitoria dizer que o primeiro passo não é o chatbot. Como dizer isso sem parecer que estão recusando?" Debate rápido, retomando as três atitudes do Ato 3.2.

**A sala escreve o argumento para três plateias (10 min).** Versões esperadas, com custos fictícios:

- **Para a reitoria:** "56% dos atendimentos da secretaria são sobre declaração de matrícula e o status dela. Num piloto de duas semanas com o curso de ADS, a emissão pelo app reduziu esses atendimentos em 72%. Na universidade toda, isso libera cerca de 200 horas da secretaria por mês e diminui a fila no início do semestre. Custo estimado: 4 semanas de 2 devs. Risco: a validade do documento, mitigada com o QR de autenticidade, que as empresas consultadas aceitaram. Pedido: liberar para todos os cursos neste semestre e medir em D+30. O assistente com IA entra depois, focado em boleto e notas, guiado pelos mesmos dados."
- **Para os alunos:** "Precisa de declaração para o estágio? Gere no Campus+ em segundos, com QR que a empresa valida na hora."
- **Para o time técnico:** "Integração de leitura com o sistema acadêmico, geração de PDF com QR, uma página pública de validação e seis eventos instrumentados. Nenhuma escrita no sistema acadêmico."

**A pergunta difícil (3 min).** Carta I, a reitoria responde: "Mas a outra universidade já tem IA. Não vamos ficar para trás?" Debate aberto. Resposta esperada: "Vamos usar IA onde ela resolve. Com a declaração resolvida, os dados mostram que boleto e notas somam 30% dos atendimentos: ali um assistente pode ajudar."

**Fala-guia:** "Repare que o argumento não diz 'não'. Diz 'primeiro isto, por causa disto, e depois aquilo'."

### 22:25 · Encerramento (5 min)

- **O quadro inteiro na tela:** da demanda "chatbot" à decisão "declaração na hora", passando por entrevista, dados, tamanho, soluções, métricas e argumento. "Esse é o caminho de um produto. Vocês percorreram em três horas."
- **Onde usar:** no próximo refinamento do estágio, no TCC, numa entrevista de emprego ("conte um projeto pelo problema, não pela stack") e, nesta semana, no hackathon.
- O case completo e o guia de bolso chegam por link.
- **QR codes** do Vina News e do The Product Path, mais o LinkedIn.

### Ajustes de tempo e de sala

| Situação | Ajuste |
| --- | --- |
| Atraso de 10 min | Chuva de soluções em 5 min e pular a alternativa "declaração para todos" |
| Atraso de 20 min | Também pular o funil do piloto (capítulo 6) e ir direto para a árvore |
| Sala silenciosa | Abrir cada capítulo com uma história sua curta; voltar a quem já falou antes |
| Turma acima de 60 pessoas | Um monitor anota no quadro enquanto você conduz a conversa |

## Material prático

O participante sai com dois materiais.

| Material | O que é | Formato |
| --- | --- | --- |
| O case Campus+ completo | O quadro construído pela turma, da demanda à decisão | Link ou PDF, enviado depois |
| Guia de bolso do tech lead | Uma página de consulta com as perguntas e modelos do método | 1 página em PDF |

### Estrutura do quadro do case

1. A demanda e a pergunta certa.
2. O que ouvimos: frases, gambiarras e escada de evidência.
3. O que os dados mostraram.
4. O tamanho do problema e a hipótese.
5. Soluções, riscos e o menor teste.
6. Métricas, árvore e eventos.
7. O argumento para cada plateia.

### Guia de bolso do tech lead

- Banco de perguntas para levar à mesa (problema, evidência, sucesso, alternativa).
- Três regras de entrevista e a escada de evidência.
- Frase-problema e hipótese.
- As 5 dimensões do problema.
- Sinais de engenharia que viram discovery.
- Os três andares de métricas e um exemplo de árvore.
- Plano de eventos no padrão objeto\_ação.
- Estrutura do argumento e as três regras de dados.
- Checklist "antes de abrir o editor".
