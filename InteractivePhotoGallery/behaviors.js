document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.querySelector(".more").style.opacity = 1;
        });

        card.addEventListener("mouseleave", function () {
            this.querySelector(".more").style.opacity = 0;
        });
    });
});

window.onload = function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.height = window.innerHeight + 'px';
    });
};