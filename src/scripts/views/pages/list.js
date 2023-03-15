import ListResto from '../../data/listresto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const List = {
  async render () {
    return `
    <div class="home" id="home">
        <div class="home-left">
            <h1>Foodiary</h1>
            <p>
                Foo(D)iary - Menemukan kuliner terbaik di siantero negeri
            </p>
            <button onclick="location.href='#meal';">Recommendation</button>
        </div>
          <div class="home-right">
            <img src="https://alterpov.my.id/photos/pasta.png" alt="Pasta">
          </div>
    </div>
    <div id="meal" tabIndex="0">
        <h2>Our Recomendation</h2>
        <span>Rekomendasi restoran dari kami</span>
        <div id="listMeal" class="row"></div>
    </div>
    <div id="feature">
        <h2>What's good?</h2>
        <span>Mengapa Anda harus melihat Foodiary</span>
        <div class="feature">
            <div class="feature-point">
                <img src="https://alterpov.my.id/sub/assets/photos/spaguetti.png" alt="Lots of Menu">
                <h3>Lots of Menu</h3>
                <p>Pilihan <i>kuliner</i> yang banyak dan beragam serta <em>up to date</em></p>
            </div>
            <div class="feature-point">
                <img src="https://alterpov.my.id/sub/assets/photos/lowest-price.png" alt="Affordable Price">
                <h3>Affordable Price</h3>
                <p>Harga yang murah dengan rasa yang di atas rata-rata</p>
            </div>
            <div class="feature-point">
                <img src="https://alterpov.my.id/sub/assets/photos/planet-earth.png" alt="Around the World">
                <h3>Around the World</h3>
                <p>Berbagai kuliner lokal dan mancanegara</p>
            </div>
        </div>
    </div>

    <div id="about">
        <div class="about-left">
            <article>
                <h3>Menawarkan rasa yang nikmat tanpa melukai dompet Anda</h3>
                <p>Foodiary ada untuk memberikan rekomendasi pilihan kuliner yang beragam dengan beragam jenis kuliner baik kuliner Nusantara, maupun luar negeri.</p>
            </article>
        </div>
        <div class="about-right">
            <div class="slider">
                <img src="https://alterpov.my.id/photos/tasty-appetizing-classic-italian-spaghetti-pasta-with-tomato-sauce-cheese-parmesan-basil-plate-ingredients-cooking-pasta-white-marble-table-flat-lay-top-view-copy-space.jpg" class="active" alt="spaghetti tomato">
                <img src="https://alterpov.my.id/photos/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg" alt="penne pasta">
                <img src="https://alterpov.my.id/photos/traditional-delicious-gulas-dish-composition.jpg" alt="dish composition">
            </div>
        </div>
    </div>

    <div id="comment">
        <h2>What they said</h2>
        <span>Testimoni dari para pembaca Foodiary</span>
        <div class="review-container">
            <div class="review-card">
                <blockquote>&quot;Foodiary memiliki rekomendasi masakan yang luar biasa nikmat. Tidak hanya satu atau dua, tapi hampir seluruhnya.&quot;</blockquote>
                <div class="review-identity">
                    <img src="https://alterpov.my.id/sub/assets/photos/cust1.png" alt="John Doe">
                    <div class="review-name">
                        <h3>John Doe</h3>
                        <h4>Customer</h4>
                    </div>
                </div>
            </div>
            <div class="review-card">
                <blockquote>&quot;Rekomendasi masakannya tidak ada duanya. Ditambah dengan keragaman detail makanan serta tempat yang nyaman, sangat cocok untuk mencari makan siang ataupun makan malam.&quot;</blockquote>
                <div class="review-identity">
                    <img src="https://alterpov.my.id/sub/assets/photos/cust2.png" alt="Serena Williams">
                    <div class="review-name">
                        <h3>Serena Williams</h3>
                        <h4>Customer</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `
  },

  async afterRender () {
    const restaurants = await ListResto.listRestaurant()
    const restoContainer = document.querySelector('#listMeal')
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant)
    })
  }
}

export default List
