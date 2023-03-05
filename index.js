const mySlider = document.querySelector('.upper_level__range_input')
const billSpan = document.querySelector('.upper_level__bill_amount')
const viewsSpan = document.querySelector('.upper_level__pageviews_amount')
const checkbox = document.querySelector('.options__switch_input')


function slider(){
    let valPercent = (mySlider.value / mySlider.max) * 100

    changeSpans()

    mySlider.style.background = `linear-gradient(to right, var(--soft-cyan-full-slider-bar) ${valPercent}%, var(--empty-slider-bar) ${valPercent}%)`
}

function changeSpans(){
    const slideValue = mySlider.value
    
    if(checkbox.checked){
        let discount = data[slideValue].bill * 0.25
        let totalBill = data[slideValue].bill - discount

        billSpan.innerText = `$${totalBill}.00`
        viewsSpan.innerText = `${data[slideValue].pageviews} PAGEVIEWS`
        return
    }

    billSpan.innerText = `$${data[slideValue].bill}.00`
    viewsSpan.innerText = `${data[slideValue].pageviews} PAGEVIEWS`
}