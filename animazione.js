import gsap from gsap;

const IMAGE_URL = "https://static.wixstatic.com/media/801d74_25233d4e6d2b4c61af76af42a9aeed0a~mv2.jpg";

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