import caImg from './images/ca.jpg';
import './index.css';


function createImage(imgUrl) {
  const img = new Image();

  img.src = imgUrl;

  return img;
}

const container = document.querySelector('.img-from-js');

container.appendChild(createImage(caImg));
