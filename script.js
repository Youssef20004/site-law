const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector(".close-btn");
const navbar = document.querySelector(".navbar");
// const cardsContainer = document.querySelector('.sr');
// const scrollLeftBtn = document.querySelector('.scroll-left');
// const scrollRightBtn = document.querySelector('.scroll-right');

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.sr');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    function getCardWidth() {
        const card = cardsContainer.querySelector('.card');
        const style = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const gap = parseInt(style.marginRight) || 15; // لو فيه margin أو gap
        return cardWidth + gap;
    }

    // ✅ بعد الريلود يبدأ من الأول
    cardsContainer.scrollLeft = 0;

    scrollLeftBtn.addEventListener('click', () => {
        const scrollAmount = getCardWidth() * 2; // حرك كارتين
        cardsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        const scrollAmount = getCardWidth() * 2;
        cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // ✅ لما تعمل ريفريش يبدأ من أول كارتين
    window.addEventListener('load', () => {
        cardsContainer.scrollLeft = 0;
    });
});
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


menuBtn.addEventListener("click" , () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
})


{
    var x = 5;
    var x = "youssef"
    console.log(x)
}
console.log(x)

{
    let i = 10;
    let x = "youssef abderrhim";
    console.log(i);
}


{
    const y = 100;
    console.log(y);
}



// .text-main {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%; 
    // background: linear-gradient(180deg, rgba(15, 50, 97, 0.5), rgb(19, 27, 37, 1));
    // pointer-events: none; 
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center; 
    // align-items: center;
// }

