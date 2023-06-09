import API_ENDPOINT from '../globals/api-endpoint'

class ListResto {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async addReview (review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    const responseJson = await response.json()
    console.log(responseJson)
    return responseJson
  }
}

export default ListResto
