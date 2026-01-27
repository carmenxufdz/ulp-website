// ======= Sticky Header con detección de página y tema
document.addEventListener('DOMContentLoaded', function () {
  const ud_header = document.querySelector('.ud-header');
  const backToTop = document.querySelector('.back-to-top');
  const imgModoOscuro = document.getElementById('img-modo-oscuro');
  const imgModoClaro = document.getElementById('img-modo-claro');
  const isHomePage = window.location.pathname === '/';

  if (!ud_header || !imgModoOscuro || !imgModoClaro) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > ud_header.offsetTop) {
      ud_header.classList.add('sticky-header');
      ud_header.classList.remove(
        'absolute',
        'bg-gradient-to-bl',
        'from-[#01576C]/80',
        'from-30%',
        'via-[#012C5F]/85',
        'via-70%',
        'to-[#012C5F]/95',
        'dark:bg-none',
        'bg-transparent',
        'z-40'
      );

      document.body.classList.add('sticky-active');

      if (isHomePage) {
        if (document.documentElement.classList.contains('dark')) {
          imgModoOscuro.classList.remove('hidden');
          imgModoClaro.classList.add('hidden');
        } else {
          imgModoOscuro.classList.add('hidden');
          imgModoClaro.classList.remove('hidden');
        }
      }
    } else {
      ud_header.classList.remove('sticky-header');
      ud_header.classList.add(
        'absolute',
        'bg-gradient-to-bl',
        'from-[#01576C]/80',
        'from-30%',
        'via-[#012C5F]/85',
        'via-70%',
        'to-[#012C5F]/95',
        'dark:bg-none',
        'bg-transparent',
        'z-40'
      );

      document.body.classList.remove('sticky-active');

      if (isHomePage) {
        imgModoOscuro.classList.remove('hidden');
        imgModoClaro.classList.add('hidden');
      } else {
        if (document.documentElement.classList.contains('dark')) {
          imgModoOscuro.classList.remove('hidden');
          imgModoClaro.classList.add('hidden');
        } else {
          imgModoOscuro.classList.add('hidden');
          imgModoClaro.classList.remove('hidden');
        }
      }
    }

    if (backToTop) {
      backToTop.style.display = window.scrollY > 50 ? 'flex' : 'none';
    }
  });
});
