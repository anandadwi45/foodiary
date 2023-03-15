import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants-source';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
 
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantsIdb,
    restaurant,
  });
};
 
export { createLikeButtonPresenterWithRestaurant };