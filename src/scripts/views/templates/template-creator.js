import CONFIG from '../../globals/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const createRestoItemTemplate = (restaurants) => `
    <div class="card-meal" tabIndex="0">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
      <div class="card-body">
      <h3>${restaurants.rating}⭐️</h3>
      <h4 class="item__name"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h4>
      </div>
    </div>
`

const createRestoDetailTemplate = (restaurants) => `
  <h2 class="restaurant__title">${restaurants.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="restaurant__info">
    <h3>Address</h3>
    <p>${restaurants.address}</p>
    <h3>City</h3>
    <p>${restaurants.city}</p>
    <h3>Rating</h4>
    <p>${restaurants.rating}⭐️</3>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurants.description}</p>
  </div>
`
const createMenuFoodTemplate = (restaurants) => `
  <h4>${restaurants.name}</h4>
`

const createReviewFoodTemplate = (restaurants) => `
  <h4>${restaurants.name} - ${restaurants.date}</h4>
  <p>${restaurants.review}</p>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate, createReviewFoodTemplate, createLikedButtonTemplate, createMenuFoodTemplate }
