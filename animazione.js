import gsap from gsap;

const IMAGE_URL = "https://raw.githubusercontent.com/Erchicco/animazioneWix/main/IMG_8508.jpg?token=GHSAT0AAAAAACSDQE66TJTKZRM2E2YVRVUYZR54MCQ";

function createImage (name) {
    const imageElement = document.createElement("image");
    imageElement.src = IMAGE_URL;
    imageElement.id = 'ImmagineProva';
    document.body.append(imageElement);
    return imageElement;
  };

  const image = createImage("immagine1")

  gsap.to('#ImmagineProva', {
    duration: 1000,
    x:2000
  });

class HelloWorld extends HTMLElement { connectedCallback() { this.innerHTML = 'Hello World!'; } } customElements.define('hello-world', HelloWorld);
CustomElementRegistry.define('hello-world', HelloWorld);
