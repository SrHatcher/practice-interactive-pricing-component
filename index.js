const mySlider = document.querySelector('.upper_level__range_input')

function slider(){
    let valPercent = (mySlider.value / mySlider.max) * 100

    mySlider.style.background = `linear-gradient(to right, var(--soft-cyan-full-slider-bar) ${valPercent}%, var(--empty-slider-bar) ${valPercent}%)`
}