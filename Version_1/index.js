// INTERESTS
const cards = document.querySelectorAll('.cards')
for (let cardGroup of cards) {
  let indivCards = cardGroup.querySelectorAll('.card')
  for (let card of indivCards) {
    card.addEventListener('click', () => {
      for (let kard of indivCards) {
        kard.classList.remove('active')
      }
      card.classList.add('active')
    })
  }
}

const container = document.querySelector('#content-container')
const topics = document.querySelectorAll('.topic')
const categories = document.querySelectorAll('.category')
container.addEventListener('scroll', () => {
  for (let i = topics.length - 1; i > 0; i--) {
    for (let j = 0; j < categories.length; j++) {
      categories[i].classList.remove('active')
    }
    if (container.scrollTop > topics[i].offsetTop) {
      categories[i].classList.add('active')
      break
    }
  }
})

for (let topicGroup of topics) {
  console.log(topicGroup.offsetTop)
}
