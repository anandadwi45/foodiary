import UrlParser from '../../routes/url-parser'
import ListResto from '../../data/listresto-source'
import { createMenuFoodTemplate, createRestoDetailTemplate, createReviewFoodTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-source'

const Detail = {
  async render () {
    return `
      <div id="restaurant" class="restaurant">
        
      </div>
      <div class="restaurant__menu">
        <div class="restaurant__food">
          <h3>Foods</h3>
          <div id="listFood"></div>
        </div>
        <div class="restaurant__drink">
          <h3>Drinks</h3>
          <div id="listDrink"></div>
        </div>
      </div>
      <div class="restaurant__review">
        <h3>Reviews</h3>
        <div id="listReview">
        </div>
      </div>
      <div class="restaurant__addreview" id="add-review">
        <h2 class="container-header text-center">Write your review</h2>
        <form class="form" action="#" id="form">
          <div class="form-group form-title">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group form-title">
            <label for="review">Review</label>
            <input type="text" id="review" name="review" required>
          </div>
          <input type="submit" id="submitReview" value="Submit" name="Submit" class="btn-submit">
        </form>
      </div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await ListResto.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    const foodContainer = document.querySelector('#listFood')
    const drinkContainer = document.querySelector('#listDrink')
    const reviewContainer = document.querySelector('#listReview')

    const nameReview = document.querySelector('#name')
    const contentReview = document.querySelector('#review')
    const buttonAddReview = document.querySelector('#submitReview')

    const foods = restaurant.menus.foods
    const drinks = restaurant.menus.drinks
    const reviews = restaurant.customerReviews

    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant)

    foods.forEach((food) => {
      foodContainer.innerHTML += createMenuFoodTemplate(food)
    })

    drinks.forEach((drink) => {
      drinkContainer.innerHTML += createMenuFoodTemplate(drink)
    })

    reviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewFoodTemplate(review)
    })

    buttonAddReview.addEventListener('click', async () => {
      const newReview = {
        id: url.id,
        name: nameReview.value,
        review: contentReview.value
      }

      await ListResto.addReview(newReview)
    })

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantsIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city
      }
    })
  }
}

export default Detail
