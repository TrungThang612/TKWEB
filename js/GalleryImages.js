// moreBtn
const moreBtn = document.getElementById("js-btn-more");
const moreBlog = document.querySelectorAll(".blog-more");
var countMore = 0;

moreBtn.addEventListener("click", function showMore() {
  for (let i = 0; i < 3; i++)
    moreBlog[countMore++].style.display = "block";
  if (countMore == moreBlog.length) moreBtn.style.display = "none";
});

//Gallery
const images = document.getElementsByClassName('imagesrc')
const prevBtn =document.getElementById('prev')
const nextBtn =document.getElementById('next')
const closeBtn = document.getElementById('close')
const galleryImg = document.getElementById('imagezoom')
const gallery = document.getElementById('gallery')

var current =0;

function showGallery (){
//Chon anh khi chuyen toi va lui
  if (current == 0){
    prevBtn.classList.add('hide')
  }else{
    prevBtn.classList.remove('hide')
  }

  if (current == images.length - 1){
    nextBtn.classList.add('hide')
  }else{
    nextBtn.classList.remove('hide')
  }
// Thay src anh vao
  galleryImg.src = images[current].src
  gallery.classList.add('show')
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click",
      function () {
          current = i
          showGallery()
      });
}



closeBtn.addEventListener('click', function(){
  gallery.classList.remove('show')
})



document.addEventListener('keydown',
function(){
    gallery.classList.remove('show')
})

prevBtn.addEventListener('click',
function(){
  if (current > 0){
    current--
    showGallery()
  }
})

nextBtn.addEventListener('click',
function(){
  if (current < images.length - 1){
    current++
    showGallery()
  }
})

document.onkeydown = function(event) {
  var e = event || window.event
  if (e.keyCode == '37' && currentIndex >0) { //LEFT
    currentIndex--
    showGalley()
  } else if (e.keyCode == '39' && currentIndex< images.length - 1) { //RIGHT
    currentIndex++
    showGalley()
  }
}