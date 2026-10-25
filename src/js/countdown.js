/**
 * Contagem regressiva para o slide de intervalo.
 *
 * Marcação:
 *   <section class="slide--break" data-chrome="hidden">
 *     <p class="eyebrow">Intervalo</p>
 *     <div class="countdown" data-minutes="15"></div>
 *     <p class="muted">Voltamos às 21:20</p>
 *   </section>
 *
 * A contagem começa quando o slide aparece e para ao sair dele.
 * No último minuto o número muda de cor; ao zerar, mostra "Voltando".
 */

const format = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export function initCountdowns(reveal) {
  let timer = null;

  const stop = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  const start = (el) => {
    stop();
    const total = Math.round(Number(el.dataset.minutes || 15) * 60);
    const endsAt = Date.now() + total * 1000;
    el.classList.remove('is-ending', 'is-done');

    const tick = () => {
      const left = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      el.textContent = left > 0 ? format(left) : el.dataset.doneText || 'Voltando';
      el.classList.toggle('is-ending', left > 0 && left <= 60);
      el.classList.toggle('is-done', left === 0);
      if (left === 0) stop();
    };

    tick();
    timer = setInterval(tick, 250);
  };

  document.querySelectorAll('.reveal .countdown').forEach((el) => {
    el.textContent = format(Math.round(Number(el.dataset.minutes || 15) * 60));
  });

  const handle = (slide) => {
    const el = slide?.querySelector('.countdown');
    if (el) start(el);
    else stop();
  };

  reveal.on('slidechanged', (event) => handle(event.currentSlide));
  handle(reveal.getCurrentSlide());
}
