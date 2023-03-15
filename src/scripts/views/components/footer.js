class Footer extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
            <footer>Copyright &copy;2023 Foodiary</footer>
        `
  }
}

customElements.define('end-footer', Footer)
