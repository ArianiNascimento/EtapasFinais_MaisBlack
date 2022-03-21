$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})

let changeIcon = function (icon){

    icon.classList.toggle('fa-times-circle')
}