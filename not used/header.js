class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <img src="img/logo.png" alt="Logo">
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-header', HeaderComponent);
console.log('header.js load');