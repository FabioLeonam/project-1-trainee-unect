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

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

//Buttons
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextButton.addEventListener('click', () => {
  if(counter >= carouselImages.length -1) return
  carouselSlide.style.transition = "transform 0.6s ease-in-out"
  counter++
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevButton.addEventListener('click', () => {
  if(counter <= 0) return
  carouselSlide.style.transition = "transform 0.6s ease-in-out"
  counter--
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none"
    counter = carouselImages.length - 2
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none"
    counter = carouselImages.length - counter
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})