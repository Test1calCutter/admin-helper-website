window.addEventListener('DOMContentLoaded', event=>{
    let fade = document.getElementById('fade')

    let staff = document.getElementById("staff")
    let bot = document.getElementById("bot")

    staff.addEventListener('click', event=>{
        fade.style.top = '100%'
        fade.style.top = '0%'
        fade.style.transition = '0.8s'
        setTimeout(function () {
            window.location.assign('staff/index.html')
        }, 800);
    })
    bot.addEventListener('click', event=>{
        fade.style.top = '100%'
        fade.style.top = '0%'
        fade.style.transition = '0.8s'
        setTimeout(function () {
            window.location.assign('bot/index.html')
        }, 800);

    })
})