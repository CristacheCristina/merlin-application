var typed3 = new Typed('.hello', {
    strings: ['Hello Merlin :)',
        'Welcome to your magical music chamber!',
        'Touch the drum and unleash your creativity! '
    ],
    typeSpeed: 30,
    backSpeed: 30,
    smartBackspace: true, // this is a default
    loop: false
});
window.onload = ()=>{
    setInterval(toggleDrum(), 8000)
}
function toggleDrum() {
    document.querySelector('.drum-btn').classList.remove('toggle')
}
