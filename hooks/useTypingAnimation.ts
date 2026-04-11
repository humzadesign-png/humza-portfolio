'use client';

import { useEffect, useRef } from 'react';

const LATIN = 'humzadesign';
const URDU = 'حمزہ ڈیزائن';
const T_TYPE = 125;
const T_DEL = 72;
const T_PAUSE = 2600;
const T_GAP = 450;

export function useTypingAnimation(
  textRef: React.RefObject<HTMLSpanElement | null>,
  dotLatinRef: React.RefObject<HTMLSpanElement | null>,
  dotUrduRef: React.RefObject<HTMLSpanElement | null>,
  cursorRef?: React.RefObject<HTMLSpanElement | null>
) {
  const stateRef = useRef({ isUrdu: false, idx: 0, deleting: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const dotL = dotLatinRef.current;
    const dotU = dotUrduRef.current;
    if (!textEl || !dotL || !dotU) return;

    function hideDots() {
      dotL!.classList.remove('on');
      dotU!.classList.remove('on');
    }

    function showDot() {
      if (stateRef.current.isUrdu) {
        dotU!.classList.add('on');
        dotL!.classList.remove('on');
      } else {
        dotL!.classList.add('on');
        dotU!.classList.remove('on');
      }
    }

    function applyFont() {
      textEl!.className = stateRef.current.isUrdu ? 'logo-text urdu' : 'logo-text latin';
    }

    function tick() {
      const { isUrdu, deleting } = stateRef.current;
      const word = isUrdu ? URDU : LATIN;

      if (!deleting) {
        stateRef.current.idx++;
        textEl!.textContent = word.slice(0, stateRef.current.idx);
        hideDots();
        if (stateRef.current.idx === word.length) {
          showDot();
          stateRef.current.deleting = true;
          timerRef.current = setTimeout(tick, T_PAUSE);
        } else {
          timerRef.current = setTimeout(tick, T_TYPE);
        }
      } else {
        hideDots();
        stateRef.current.idx--;
        textEl!.textContent = word.slice(0, stateRef.current.idx);
        if (stateRef.current.idx === 0) {
          stateRef.current.deleting = false;
          stateRef.current.isUrdu = !stateRef.current.isUrdu;
          applyFont();
          timerRef.current = setTimeout(tick, T_GAP);
        } else {
          timerRef.current = setTimeout(tick, T_DEL);
        }
      }
    }

    applyFont();
    textEl.textContent = '';
    hideDots();
    timerRef.current = setTimeout(tick, 900);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [textRef, dotLatinRef, dotUrduRef]);
}
