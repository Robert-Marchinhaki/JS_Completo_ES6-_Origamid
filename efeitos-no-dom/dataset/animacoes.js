function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');


  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        const adicionarData = tabContent[index].dataset.anime;
        tabContent[index].classList.add('ativo', adicionarData);
      }

      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // forma alternativa
    // const topo = section.offsetTop
    // console.log(topo)
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

const sections = document.querySelectorAll('[data-anime="scroll"]');
  function initAnimacaoScroll() {
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
initAnimacaoScroll();