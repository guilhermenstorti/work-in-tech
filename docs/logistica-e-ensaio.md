# Logística, ensaio e plano B

**Premissa:** a sala terá o notebook do palestrante ligado a um telão. Nada mais: sem quadro branco, papel, impressão ou garantia de internet. Este guia garante que tudo funcione só com isso.

---

## 1. Antes do evento

- [ ] `npm install` feito com internet (é a única etapa que precisa de rede).
- [ ] `npm run evento` abre o painel e os dois decks **com o Wi-Fi desligado**.
- [ ] Na aba Network do navegador (F12), nenhuma requisição para fora de `localhost`.
- [ ] PDFs de backup gerados (seção 5) e salvos numa segunda mídia (pendrive ou nuvem acessível pelo celular).
- [ ] QR codes testados com o celular, a 5 metros de distância de um monitor, em tela cheia.
- [ ] Windows: atualizações pausadas, notificações desligadas (Assistente de Foco / "Não incomodar"), suspensão de tela desativada na tomada.
- [ ] Navegador: Chrome ou Edge atualizado; pop-ups liberados para `localhost` (a visão do apresentador abre em pop-up).
- [ ] Passador (clicker) testado: ele envia `PageDown`/`PageUp` ou setas, e o reveal.js aceita os dois.

## 2. Na sala (chegar 30 minutos antes)

1. Ligar o notebook na tomada e conectar ao telão (verificar o adaptador HDMI/USB-C).
2. Abrir um terminal na pasta do projeto e rodar `npm run evento`. O painel abre em `http://localhost:4173`.
3. **Testar o telão:**
   - Abrir um deck e conferir se o texto pequeno (28 px) é legível da última fileira.
   - Se a sala estiver muito clara e o fundo escuro parecer "lavado", apertar `T` para o tema claro. A escolha fica salva.
   - Se o projetor não for 16:9, verificar se nada importante foi cortado (a área segura deve proteger).
4. **Configurar a tela** (Windows: `Win + P`):

| Dia | Modo de tela | Por quê |
| --- | --- | --- |
| Dia 1 · Palestra | **Estender** | Visão do apresentador (`S`) no notebook, slides em tela cheia (`F`) no telão |
| Dia 2 · Workshop | **Estender** | Mesmo modo do Dia 1: as respostas esperadas já estão nos slides |

5. Com a tela estendida: abrir o deck, apertar `S` (abre a visão do apresentador), arrastar a janela principal para o telão e apertar `F`. A visão do apresentador fica no notebook.
6. Deixar o deck parado no slide de capa até começar.

## 3. Atalhos durante a apresentação

| Tecla | Ação |
| --- | --- |
| `→` `↓` `Espaço` `PageDown` | Avança (passador) |
| `←` `↑` `PageUp` | Volta |
| `S` | Visão do apresentador: notas, próximo slide, cronômetro |
| `F` | Tela cheia |
| `O` ou `Esc` | Visão geral, agrupada por ato (para pular para o apêndice nas perguntas) |
| `G` | Ir para um número de slide |
| `B` ou `.` | Tela preta: pausa para a conversa |
| `Alt` + clique | Zoom num ponto do slide (tabelas, SQL) |
| `T` | Alterna tema escuro/claro |
| `?` | Ajuda com todos os atalhos |

## 4. Plano B

| Problema | Saída |
| --- | --- |
| `npm run evento` não sobe | `npm run dev` (servidor de desenvolvimento, também offline) |
| Notebook trava ou não conecta ao telão | PDF de backup aberto em outro computador da sala |
| Visão do apresentador não abre | Liberar pop-ups para `localhost` ou seguir com as notas no celular (PDF com notas) |
| Projetor lava as cores | Tecla `T` (tema claro) |
| Passador falha | Teclado do notebook (`→`, `Espaço`) |
| Sem energia na tomada | Bateria cheia: o deck consome pouco; reduza o brilho do notebook |

### Como gerar o PDF de backup

1. Com `npm run evento` rodando, abra no Chrome:
   `http://localhost:4173/apresentacoes/dia-1-palestra/index.html?print-pdf`
2. `Ctrl + P` → Destino "Salvar como PDF" → Layout **Paisagem** → Margens **Nenhuma** → marcar **Gráficos de plano de fundo**.
3. Salvar como `dia-1-palestra.pdf`. Repetir para o Dia 2.
4. Para um PDF com as notas (para ler no celular): use `?print-pdf&showNotes=separate-page`.

## 5. Ensaio

- **Ensaio corrido de cada dia, cronometrado**, com a visão do apresentador aberta. Anote nos `<aside class="notes">` onde o tempo estourou.
- Metas de tempo:

| Dia 1 | Min | Dia 2 | Min |
| --- | --- | --- | --- |
| Abertura | 20 | Abertura | 10 |
| Ato 1 | 55 | Cap. 1 · A demanda chegou | 25 |
| Ato 2 | 20 | Cap. 2 · Discovery ao vivo | 30 |
| Ato 3 | 30 | Cap. 3 · Detetive de dados | 25 |
| Intervalo | 15 | Intervalo | 15 |
| Ato 4 | 45 | Cap. 4 · O tamanho do problema | 25 |
| Ato 5 | 15 | Cap. 5 · Explorar soluções | 30 |
| Fechamento | 10 | Cap. 6 · Métricas e árvore | 30 |
| | | Cap. 7 · Defender a decisão | 15 |
| | | Encerramento | 5 |
| **Total** | **210** | **Total** | **210** |

- Ensaie o Dia 2 **segurando as respostas esperadas**: avance o fragmento só depois de a sala falar. É a parte com mais risco de atraso.
