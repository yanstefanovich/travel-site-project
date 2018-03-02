import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalBtn = $('.open-modal');
    this.closeModalBtn = $('.modal__close');
    this.modal = $('.modal');

    this.events();
  }

  events() {
    // Click the open modal
    this.openModalBtn.click(this.openModal.bind(this));

    // Click the close modal
    this.closeModalBtn.click(this.closeModal.bind(this));

    // Push any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--reveal');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--reveal');
  }
}

export default Modal;
