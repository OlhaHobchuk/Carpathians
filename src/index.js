// import 'swiper/scss';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.nextEl',
    prevEl: '.prevEl',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Mobile-menu

const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.open-mobile__button');
const closeMenuBtn = document.querySelector('.close-mobile__button');
const title = document.querySelector('.hero__title');
const tittleTab = document.querySelector('.hero__titleTab');
const subTittle = document.querySelector('.hero__subtitleTab');
const description = document.querySelector('.hero__subtitle');
const button = document.querySelector('.hero__button');
const logo = document.querySelector('.menu__logo-link');
const navLink = document.querySelectorAll('.mobile-menu__nav-link');
const navLinkTab = document.querySelectorAll('.tablet-menu__nav-link');

const toggleMenu = () => {
  if (mobileMenu.classList.contains('is-open')) {
    closeMenuBtn.classList.add('is-open');
    openMenuBtn.style.display = 'none';
    title.style.opacity = 0;
    description.style.opacity = 0;
    tittleTab.style.opacity = 0;
    subTittle.style.opacity = 0;
    button.style.opacity = 0;
    logo.style.opacity = 0;
    mobileMenu.classList.remove('is-open');
  } else {
    openMenuBtn.style.display = 'block';
    closeMenuBtn.classList.remove('is-open');
    mobileMenu.classList.add('is-open');
    title.style.opacity = 1;
    description.style.opacity = 1;
    tittleTab.style.opacity = 1;
    subTittle.style.opacity = 1;
    button.style.opacity = 1;
    logo.style.opacity = 1;
  }

  const scrollLockMethod = () => {
    mobileMenu.classList.contains('is-open')
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
};

const closeMenu = event => {
  openMenuBtn.style.display = 'block';
  closeMenuBtn.classList.remove('is-open');
  mobileMenu.classList.add('is-open');
  title.style.opacity = 1;
  subTittle.style.opacity = 1;
  tittleTab.style.opacity = 1;
  description.style.opacity = 1;
  button.style.opacity = 1;
  logo.style.opacity = 1;
  console.log('hi');
};

navLink.forEach(item => {
  item.addEventListener('click', closeMenu);
});

navLinkTab.forEach(item => {
  item.addEventListener('click', closeMenu);
});

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Modal with tour info

(() => {
  const firstTourSection = document.querySelector('.firstTour__section');
  const firstTourCloseButton = document.querySelector(
    '.firstTour__close-button'
  );
  const modalFirstTour = document.querySelector('.firstTour__container');
  const openToursInfoButton = document.querySelector(
    '[data-first-tour-modal-open]'
  );
  const firstToursTabInfoButton = document.querySelector(
    '[data-first-tour-modalTab-open]'
  );

  const firstToursDescInfoButton = document.querySelector(
    '[data-first-tour-modalDesc-open]'
  );

  const openFirstToutInfoModal = event => {
    firstTourSection.classList.remove('is-hidden');
  };

  const closeFirstToutInfoModal = event => {
    firstTourSection.classList.add('is-hidden');
  };

  openToursInfoButton.addEventListener('click', openFirstToutInfoModal);
  firstTourCloseButton.addEventListener('click', closeFirstToutInfoModal);
  firstToursTabInfoButton.addEventListener('click', openFirstToutInfoModal);
  firstToursDescInfoButton.addEventListener('click', openFirstToutInfoModal);
})();

// secondTourModal

(() => {
  const secondTourSection = document.querySelector('.secondTour__section');
  const secondTourCloseButton = document.querySelector(
    '.secondTour__close-button'
  );
  const openToursMobInfoButton = document.querySelector(
    '[data-second-tour-modalMob-open]'
  );
  const openToursInfoButton2 = document.querySelector(
    '[data-second-tour-modalTab2-open]'
  );
  const openToursInfoButton1 = document.querySelector(
    '[data-second-tour-modalTab1-open]'
  );

  const secondToursDescInfoButton = document.querySelector(
    '[data-second-tour-modalDesc-open]'
  );

  const openSecondToutInfoModal = () => {
    secondTourSection.classList.remove('is-hidden');
  };

  const closeSecondToutInfoModal = () => {
    secondTourSection.classList.add('is-hidden');
  };

  openToursInfoButton1.addEventListener('click', openSecondToutInfoModal);
  openToursMobInfoButton.addEventListener('click', openSecondToutInfoModal);
  openToursInfoButton2.addEventListener('click', openSecondToutInfoModal);
  secondTourCloseButton.addEventListener('click', closeSecondToutInfoModal);
  secondToursDescInfoButton.addEventListener('click', openSecondToutInfoModal);
})();

// thirdTourModal
(() => {
  const thirdTourSection = document.querySelector('.thirdTour__section');
  const thirdTourCloseButton = document.querySelector(
    '.thirdTour__close-button'
  );
  const thirdToursMobInfoButton = document.querySelector(
    '[data-third-tour-modalMob-open]'
  );
  const thirdToursTabInfoButton = document.querySelector(
    '[data-third-tourTab-open]'
  );

  const thirdToursDescInfoButton = document.querySelector(
    '[data-third-tour-modalDesc-open]'
  );

  const openThirdTourInfoModal = event => {
    thirdTourSection.classList.remove('is-hidden');
  };

  const closeThirdTourInfoModal = event => {
    thirdTourSection.classList.add('is-hidden');
  };

  thirdTourCloseButton.addEventListener('click', closeThirdTourInfoModal);
  thirdToursMobInfoButton.addEventListener('click', openThirdTourInfoModal);
  thirdToursTabInfoButton.addEventListener('click', openThirdTourInfoModal);
  thirdToursDescInfoButton.addEventListener('click', openThirdTourInfoModal);
})();
