const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

const tap = document.querySelector('.tap');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  tap.classList.remove('active');
}));

window.onclick = function global(event) {
  if (event.target === tap) {
    tap.style.display = 'none';
    window.location.reload();
  }
};

// ######## Array of objects for project card pop-up data ########

const modalContent = [
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
  {
    modalImg: 'imege/Snapshoot-Portfolio.svg',
    modalName: 'Keeping track of hundreds of components',
    alt: 'project img',
    technologies: ['Ruby', 'Css', 'javaScript'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    links: [
      'https://github.com/MuhmmdUsama',
      'https://github.com/MuhmmdUsama/Portfolio',
    ],
  },
];

// ################# Create HTML  modal temblet

function openModal(ind) {
  const section = document.querySelector('.Proj-container');
  const overlay = document.querySelector('.overlay');

  const modalHtml = `
  <div class='modal'>

  <button type='button' class='modal__exit'>
    &times;
  </button>

  <img src='${modalContent[ind].modalImg}' alt='${modalContent[ind].alt}' class='modal__img'>

  <h3 class='modal__name'>${modalContent[ind].modalName}</h3>

  <ul class='card__list modal__tech'>
    <li>${modalContent[ind].technologies[0]}</li>
    <li>${modalContent[ind].technologies[1]}</li>
    <li>${modalContent[ind].technologies[2]}</li>
  </ul>

  <p class='modal__description'>
    ${modalContent[ind].description}
  </p>

  <div class='modal__buttons'>
    <a href='${modalContent[ind].links[0]}' class='btn btn--green'>See Live <img src='imege/see-live.svg' alt=''></a>
    <a href='${modalContent[ind].links[1]}' class='btn btn--green'>Source <img src='imege/see-source.svg' alt=''></a>
  </div>

  </div>
`;

  section.insertAdjacentHTML('afterbegin', modalHtml);
  overlay.classList.remove('hidden');

  const closeModalIcon = document.querySelector('.modal__exit');
  const modal = document.querySelector('.modal');

  // When the user clicks on (x), close the modal

  closeModalIcon.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.classList.add('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Proj-container .See-Project').forEach((btn, ind) => {
    btn.addEventListener('click', () => {
      openModal(ind);
    });
  });
});
