import $ from 'jquery'
window.$ = $

const slideshow = () =>
  setInterval(() => {
    changeSlide('next')
  }, 2000)

const changeSlide = (direction) => {
  const currentImg = $('.active')
  const nextImg = currentImg.next()
  const previousImg = currentImg.prev()

  if (direction === 'next') {
    if (nextImg.length) { nextImg.addClass('active') } else { $('.slider img').first().addClass('active') }
  } else {
    if (previousImg.length) { previousImg.addClass('active') } else { $('.slider img').last().addClass('active') }
  }

  currentImg.removeClass('active')
}

export default slideshow()
