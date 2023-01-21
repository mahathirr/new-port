import gsap from 'https://cdn.skypack.dev/gsap';
import splitting from 'https://cdn.skypack.dev/splitting';

const anchors = document.querySelectorAll('a');

for (const anchor of anchors) {
  const res = splitting({
    target: anchor,
    by: 'chars' });

  const icon = anchor.querySelector('svg');
  for (const char of [...res[0].chars, icon]) {
    if (char) {
      char.style.setProperty('--r', gsap.utils.random(-15, 15, 1));
      char.style.setProperty('--y', gsap.utils.random(-50, 25, 1));
      char.style.setProperty('--x', gsap.utils.random(-25, 25, 1));
    }
  }
}