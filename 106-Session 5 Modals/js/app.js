const overlay = document.querySelector('.overlay');

let currOpened;

function openModal(id){
  const modal = document.getElementById(id);
  currOpened = modal;
  modal.classList.add('modal__body--opened');
  overlay.classList.add('overlay--opened');
}

function closeModal(id){
  const modal = document.getElementById(id);
  modal.classList.remove('modal__body--opened');
  overlay.classList.remove('overlay--opened');
}

function overlayCloseFunc(){
  overlay.classList.remove('overlay--opened');
  currOpened.classList.remove('modal__body--opened');
}