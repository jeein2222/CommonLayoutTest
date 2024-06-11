class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="copyright">
          &copy; 2023 My Website. All rights reserved.
        </div>
        <nav>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </footer>
    `;
  }
}

customElements.define('my-footer', FooterComponent);
console.log('footer.js load');