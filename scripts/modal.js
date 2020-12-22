function showModal(idModal){
  const modal = document.getElementById(idModal);
  if(modal){
    modal.classList.add('show');//adiciona a estilização (show) do css, ou seja, faz aparecer o modal.
    modal.addEventListener('click', (event)=>{
      event.preventDefault()
      if(event.target.id == 'cancel-modal'){
        modal.classList.remove('show')
      }
    })
  }
}

const questionButton = document.querySelector('.question');
questionButton.addEventListener('click', () => {
  showModal('background-modal')
})