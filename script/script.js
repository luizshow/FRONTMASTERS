const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
      if(document.querySelector(".header--right nav ul").style.display == 'flex') {
          document.querySelector(".header--right nav ul").style.display = 'none'; 
      } else  {
          document.querySelector(".header--right nav ul").style.display = 'flex';
      }
  });
};
  window.onresize=function(){
if(document.body.clientWidth > 1000){
  document.querySelector("nav ul").style.display="flex"
  document.querySelector(".menuMobile").style.display="none"
  
}
else{
  document.querySelector(".menuMobile").style.display="flex"
  document.querySelector("nav ul").style.display="none"
}
}

/*SMOOTH SCROLL */

document.addEventListener('DOMContentLoaded', function () {
  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1); 
          const targetElement = document.getElementById(targetId);  

          if (targetElement) {
              const targetPosition = targetElement.offsetTop; 
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth' 
              });
          }
      });
  });
});

/*Partners*/

$(document).ready(function(){
  $('.partners-logos').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false,
     dots: false,
     pauseOnHover: false,
     responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
     }, {
         breakpoint: 520,
         settings: {
             slidesToShow: 3
         }
     }] 
  })
})
