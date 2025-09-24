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
    
    }
});




const slides = document.querySelectorAll(".landing .box");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active")); 
  slides[index].classList.add("active");
  index = (index + 1) % slides.length; 
}

showSlide();
setInterval(showSlide, 3000);


let links = document.querySelector(".links"); 
    let menu = document.querySelector(".menu");

    menu.onclick = function(){
     if (links.style.opacity === "0" || !links.style.opacity){
        links.style.opacity = 1
    }else{
        links.style.opacity = 0
    }
    }

   let link = document.querySelectorAll(".links div");
let cards = document.querySelectorAll(".cards-container .card");

link.forEach((div) => {
    div.addEventListener("click" , removeActive)
    div.addEventListener("click" , manageBox)
})

function removeActive(){
    link.forEach((div) => {
        div.classList.remove("active");
        this.classList.add("active");
    })
}

function manageBox(){
    cards.forEach((card) => {
        card.style.display = "none";
    })
  
document.querySelectorAll(this.dataset.dog).forEach((ele) => {
    ele.style.display = "block";
})
}



//   cards.forEach(card => {
//     if (window.scrollY >= card.offsetTop) {
//       card.style.opacity = 2;
//     } 

//   });
// };



// let observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//     } else {
//       entry.target.style.opacity = 0;
//     }
//   });
// }, {
//   threshold: 0.1 // يعني لازم 10% من الكارد يظهر عشان يتفعل
// });

// cards.forEach(card => observer.observe(card));

let serves = new IntersectionObserver(carr => {
    carr.forEach(ele => {
        if(ele.isIntersecting){
            ele.target.style.opacity = 1
        }else{
            ele.target.style.opacity = 0
        }
    })
   threshold: 0.1 
})
cards.forEach(card => serves.observe(card) )


let boxes = document.querySelectorAll(".boxes-cont")

let loop = new IntersectionObserver (loops =>{
    loops.forEach(e =>{
        if(e.isIntersecting){
            e.target.style.opacity = 1 
        }
         else{
            ele.target.style.opacity = 0
        }
    })
     threshold: 1.1 
} )

boxes.forEach(card => serves.observe(card) )

