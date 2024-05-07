const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber=movielists[i].querySelectorAll("img").length;
    let  clickcounter=1;
    arrow.addEventListener("click", () => {
        clickcounter++;
        if(itemNumber-(4+clickcounter)>=0){
            currentTransform = movielists[i].computedStyleMap().get("transform")[0].x.value;
            movielists[i].style.transform = `translateX(${currentTransform - 300}px)`;
        }
        else{
            movielists[i].style.transform ="translateX(0)";
            clickcounter=0;
        }
    }); 
   console.log(movielists[i].querySelectorAll("img").length);
});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".containe, .movie-title, .movie-list-title,.toggle,nav ul li a:hover,nav,.Navigation,nav,.button,.container,nav ul li a,.active,h1,.parg,.basmala");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});






         
