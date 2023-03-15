import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-source'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurantsIdb.putRestaurants({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurantsIdb.deleteRestaurants(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    await FavoriteRestaurantsIdb.deleteRestaurants(1)

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([])
  })
})
