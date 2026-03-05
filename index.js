const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.rect(0, 0, canvas.width, canvas.height);
c.fillStyle = "white";

const image = new Image();
image.src = "./img/Pellet Town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
    constructor() {
        
    }
}
function animate() {
    window.requestAnimationFrame(animate)
    c.drawImage(image, -745, -555);
    c.drawImage(
        playerImage,
        0,
        0, // aqui é o recorte
        playerImage.width / 4,
        playerImage.height,

        canvas.width / 2 - playerImage.width / 4 + 12,
        canvas.height / 2 - playerImage.height / 4, // aqui é como está atual
        playerImage.width / 4,
        playerImage.height,
    )
}
animate();
window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "w":
            console.log("w");
            break;
        case "a":
            console.log("a");
            break;
        case "s":
            console.log("s");
            break;
        case "d":
            console.log("d");
            break;
    }
});
};
