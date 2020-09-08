let animation = anime({
    targets: 'h1',
    translateX: '40%',
    autoplay: false

})
document.querySelector('h1').addEventListener('mouseover',() => {animation.play();})