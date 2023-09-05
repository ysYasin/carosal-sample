//
const carosulImgs = [
    'image/img1.webp',
    'image/img-2.jpg',
    'image/img3.jpg',
    'image/img4.jpg',
    'image/img5.jpg',
];
const caroselId = document.getElementById('caroselImg')
let imgIndex = 0;
setInterval(() => {
    if (imgIndex === carosulImgs.length) {
        imgIndex = 0;
    }
    let imgUrl = carosulImgs[imgIndex];
    caroselId.setAttribute('src', imgUrl);
    imgIndex++;

}, 1000 * 3)
// 
document.querySelector('.left').addEventListener('click', function () {
    if (imgIndex < 0) {
        imgIndex = carosulImgs.length - 1;
    }
    let imgUrl = carosulImgs[imgIndex];
    caroselId.setAttribute('src', imgUrl);
    imgIndex--;
})
document.querySelector('.right').addEventListener('click', function () {
    if (imgIndex === carosulImgs.length) {
        imgIndex = 0;
    }
    let imgUrl = carosulImgs[imgIndex];
    caroselId.setAttribute('src', imgUrl);
    imgIndex++;
})