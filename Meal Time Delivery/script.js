var button = document.getElementById("placeorder").addEventListener('click',
    orderbtn);
var ch = document.querySelector('.check');

function orderbtn() {
    document.querySelector(".cart-container").style.opacity = "0.6";
    document.querySelector(
        ".check").style.opacity = "1";
    setTimeout(() => {
        ch.remove();
        document.querySelector('.cart-container').style.opacity = "1";
    }, 1000);
}