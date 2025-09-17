let breLoader = document.querySelector(".bre-loader");
let breLoaderBefore = document.querySelector(".bre-loader::before");
let breLoaderAfter = document.querySelector(".bre-loader::after");
let header = document.querySelector(".header")

window.addEventListener("load", function() {
     breLoader.classList.add("active")  
    breLoader.style.visibility = "hidden";

    header.classList.add("active")

    if(header.style.top == 0){
      header.style.background = "transparent"
      header.style.position = "fixed"
    
    }

});


 const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const prev = document.querySelector(".btn.left");
    const next = document.querySelector(".btn.right");

     let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));

    // تشغيل تلقائي
    setInterval(() => showSlide(index + 1), 3000)





