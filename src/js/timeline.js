/**
 * Linha do tempo animada (carreira, abertura do Dia 1).
 *
 * Marcação:
 *   <div class="timeline" role="list">
 *     <div class="timeline__stop" role="listitem">
 *       <span class="timeline__dot"></span>
 *       <span class="timeline__stem"></span>
 *       <div class="timeline__label">
 *         <span class="timeline__role">Product Owner</span>
 *         <span class="timeline__org">Accountfy</span>
 *       </div>
 *     </div>
 *     …
 *   </div>
 *
 * Comportamento:
 *   - A animação começa quando o slide aparece e mostra um marco por vez.
 *   - Roda uma única vez: ao terminar (ou ao sair do slide no meio), a trilha
 *     fica estática e completa, mesmo voltando ao slide depois.
 *   - Sem animação no PDF (?print-pdf) e com "reduzir movimento" ativado.
 */

const STEP_MS = 850;

export function initTimelines(reveal) {
  const timelines = [...document.querySelectorAll('.reveal .timeline')];
  if (timelines.length === 0) return;

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const printing = /print-pdf/i.test(window.location.search);

  timelines.forEach((timeline) => {
    const stops = [...timeline.querySelectorAll('.timeline__stop')];
    timeline.style.setProperty('--tl-n', String(stops.length));
    timeline.style.setProperty('--tl-step', `${STEP_MS}ms`);
    stops.forEach((stop, index) => stop.style.setProperty('--i', String(index)));
    if (!reduceMotion && !printing) timeline.classList.add('is-armed');
  });

  const finish = (timeline) => {
    clearTimeout(timeline.witTimer);
    timeline.classList.remove('is-armed', 'is-playing');
  };

  const play = (timeline) => {
    if (!timeline.classList.contains('is-armed') || timeline.classList.contains('is-playing')) return;
    timeline.classList.add('is-playing');
    const stops = timeline.querySelectorAll('.timeline__stop').length;
    // Último marco termina em (n × passo); o halo final dura 1,2 s.
    timeline.witTimer = setTimeout(() => finish(timeline), stops * STEP_MS + 1400);
  };

  reveal.on('slidechanged', (event) => {
    event.previousSlide?.querySelectorAll('.timeline').forEach(finish);
    event.currentSlide?.querySelectorAll('.timeline').forEach(play);
  });

  reveal.getCurrentSlide()?.querySelectorAll('.timeline').forEach(play);
}
