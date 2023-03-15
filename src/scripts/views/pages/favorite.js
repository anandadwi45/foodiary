import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
        <div id="favorite">
          <h2 class="favorite__title">Favorite Restaurant</h2>
          <span>Restoran yang Anda sukai</span>
          <div id="listFavorite" class="row"></div>
        </div>
      `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#listFavorite')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant)
    })
  }
}

export default Favorite
