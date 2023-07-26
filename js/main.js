let typed = new Typed('.text', {
    strings: [
        'Graphic designer',
        'Geography teacher'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let css = document.getElementById('paragraf');
function Anim() {
    css.style.display = 'block';
    css.style.animation = 'block 1s forwards';
}