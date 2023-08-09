/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function handleModal() {
    const buttonPrimary = document.querySelectorAll('.btn__modal--open');
    const modal = document.querySelector('.modal__controller'); 

    for (let i = 0; i < buttonPrimary.length; i++) {
        const button = buttonPrimary[i];

        button.addEventListener('click', () => {
            modal.showModal();
            closeModal();
        })
    }
}

function closeModal() {
    const button = document.querySelector('.btn__modal--close');
    const modal = document.querySelector('.modal__controller'); 

    button.addEventListener('click', () => {
        modal.close();
    })
}

handleModal(); 