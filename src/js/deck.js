/**
 * Inicialização compartilhada das duas apresentações.
 *
 * Uso (no index.html de cada apresentação):
 *   import { initDeck } from '../../src/js/deck.js';
 *   initDeck({ label: 'Dia 1 · Palestra' });
 *
 * Tudo aqui roda offline: reveal.js, plugins e fontes vêm do node_modules
 * e são empacotados pelo Vite.
 */
import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes';
import Highlight from 'reveal.js/plugin/highlight';
import Zoom from 'reveal.js/plugin/zoom';

import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';

import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/jetbrains-mono';

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';

import { initCountdowns } from './countdown.js';
import { initTimelines } from './timeline.js';

const THEME_KEY = 'wit:theme';

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.dataset.theme = stored;
    }
  } catch {
    /* armazenamento indisponível: mantém o tema padrão */
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignora */
  }
}

/** Atualiza o rótulo do ato no rodapé e esconde o cromo quando o slide pede. */
function syncChrome(slide) {
  if (!slide) return;
  const actEl = document.querySelector('.deck-footer__act');
  const stack = slide.closest('.slides > section');
  const act = slide.dataset.act || stack?.dataset.act || '';
  if (actEl) actEl.textContent = act;

  const hide = slide.dataset.chrome === 'hidden' || stack?.dataset.chrome === 'hidden';
  document.body.classList.toggle('hide-chrome', hide);
}

export function initDeck({ label = '' } = {}) {
  applyStoredTheme();

  const footerDeck = document.querySelector('.deck-footer__deck');
  if (footerDeck && label) footerDeck.textContent = label;

  const reveal = new Reveal({
    // Canvas fixo 16:9; o reveal.js escala para a resolução do telão.
    width: 1920,
    height: 1080,
    margin: 0,
    minScale: 0.2,
    maxScale: 2.0,

    // Navegação pensada para passador (clicker): uma sequência linear.
    // Seções aninhadas servem só para agrupar por ato na visão geral (O).
    navigationMode: 'linear',
    controls: false,
    progress: true,
    slideNumber: 'c/t',
    showSlideNumber: 'all',
    hash: true,
    jumpToSlide: true,
    overview: true,
    center: false,
    keyboard: true,
    touch: true,
    hideCursorTime: 2500,

    transition: 'fade',
    transitionSpeed: 'fast',
    backgroundTransition: 'none',
    autoAnimateDuration: 0.6,
    autoAnimateEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',

    // Exportação em PDF (backup): um fragmento por página não é necessário.
    pdfSeparateFragments: false,
    pdfMaxPagesPerSlide: 1,

    plugins: [Notes, Highlight, Zoom],
  });

  const ready = reveal.initialize().then(() => {
    syncChrome(reveal.getCurrentSlide());
    reveal.on('slidechanged', (event) => syncChrome(event.currentSlide));

    // T: alterna tema claro/escuro (use após testar o telão na sala).
    reveal.addKeyBinding({ keyCode: 84, key: 'T', description: 'Alternar tema claro/escuro' }, toggleTheme);

    initCountdowns(reveal);
    initTimelines(reveal);
    return reveal;
  });

  window.Reveal = reveal;
  return ready;
}
