window.addEventListener('DOMContentLoaded', event=>{
    let fade = document.getElementById('fade')

    fade.style.top = "100%"
    fade.style.height = '0%'
    fade.style.transition = "2s"
    setTimeout(function () {
        fade.style.display = 'none'
    }, 2000);
})