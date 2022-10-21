const imgs = []

imgs[1] = "./img/1.jpg"
imgs[2] = "img/2.jpg"
imgs[3] = "img/3.jpg"


window.onload = function() {

    const random = Math.floor(Math.random() * 3) + 1;

    document.body.style.backgroundImage = "url(" + imgs[random] + ")";
}

