const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fix = document.querySelector("#fixed")
var con = document.querySelector("#container")
con.addEventListener("mouseenter", function(){
    fix.style.display = "block"
})

var con = document.querySelector("#container")
con.addEventListener("mouseleave", function(){
    fix.style.display = "none"
})

// var box = document.querySelector(".box")
// box.addEventListener("mouseenter", function(){
//    var image= box.getAttribute("data-image")
//    fix.style.backgroundImage = `url(${image})`//template literals. 
// })

var box = document.querySelectorAll(".box")
box.forEach(function(e){
     e.addEventListener("mouseenter", function(){
       var image =  e.getAttribute("data-image")
       fix.style.backgroundImage = `url(${image})`
    })
})

function clickAnimation(){
    var h2 = document.querySelector("#topleft h2")
var box = document.querySelector("#squre")
var h1 = document.querySelector("#topleft h1")
var h3 = document.querySelector("#topleft h3")


h1.addEventListener("click", function(){
    box.style.display = "block"
   var photo = h1.getAttribute("data-pic")
    box.style.backgroundImage = `url(${photo})`
    h1.style.color = "white"
    h3.style.color = "grey"
    
})

h2.addEventListener("click", function(){
    box.style.display = "block"
   var photo1 = h2.getAttribute("data-pic")
    box.style.backgroundImage = `url(${photo1})`
    h2.style.color = "white"
    h1.style.color = "grey"
})

h3.addEventListener("click", function(){
    box.style.display = "block"
   var photo1 = h3.getAttribute("data-pic")
    box.style.backgroundImage = `url(${photo1})`
    h3.style.color = "white"
    h2.style.color = "grey"
})

}
clickAnimation()


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var load = document.querySelector("#loader")
  setTimeout(function(){
   load.style.top = "-100%"
  }, 4000)