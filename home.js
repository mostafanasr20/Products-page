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

    // const slides = document.querySelectorAll(".slide");
    // let index = 0;

    // function showSlide() {
    //   slides.forEach(slide => slide.classList.remove("active"));
    //   slides[index].classList.add("active");
    //   index = (index + 1) % slides.length;
    // }

    // setInterval(showSlide, 4000)


    // const slides = document.querySelectorAll(".slide")

    // let index = 0

    // function  showSlide(){
    //   slides.forEach(slide => slide.classList.remove("active"))
    //   slides[index].classList.add("active")
    //   index = (index + 1) % slides.length

    //   setInterval(showSlide, 4000)
    // }

    // console.log(showSlide())


const slides = document.querySelectorAll(".slide")
let index = 0


function showSlide(){
  slides.forEach(slide => slide.classList.remove("active"))
  slides[index].classList.add("active")
  index = (index + 1) % slides.length
  setInterval(showSlide , 4000)
}

console.log(showSlide())