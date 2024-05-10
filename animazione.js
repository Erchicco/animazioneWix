class HelloWorld extends HTMLElement { connectedCallback() { this.innerHTML = 'Hello World!'; } } customElements.define('hello-world', HelloWorld);
CustomElementRegistry.define('hello-world', HelloWorld);
