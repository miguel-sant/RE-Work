const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1600
canvas.height = 900

c.rect(0, 0, canvas.width, canvas.height);
c.fillStyle = 'white';

const image = new Image;
image.src = './img/Pellet Town.png'

image.onload= () => {                      //Somente quando a imagem for carregada eu desenho ela
    c.drawImage(image, -900,-550)
}