class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="logo">
            <a href="/"><img src="https://alterpov.my.id/sub/assets/photos/logo-foodiary.png" alt="Logo"></a>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/list">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://alterpov.my.id">About Us</a></li>
          </ul>
        </nav>
      `
  }
}

customElements.define('app-bar', AppBar)
