export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5;


    function animaScroll() {
      sections.forEach(section =>  {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        // console.log(isSectionVisible);
        if(isSectionVisible)
          section.classList.add('ativo');
        else
          section.classList.remove('ativo');
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}