/* SMOOTH NAV OPEN */
$(document).ready(function(){
  $(".menuMobile").click(function(){
    $("#ul-navbar").animate({
      height: 'toggle'
    });
  });
});

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
          if(document.body.clientWidth > 1000){
            document.querySelector("nav ul").style.display="flex"
          }else{
            document.querySelector("nav ul").style.display="none"
          }
          const targetId = this.getAttribute('href').substring(1); 
          const targetElement = document.getElementById(targetId);  

          if (targetElement) {
              const targetPosition = targetElement.offsetTop - 165; 
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth' 
              });
          }
      });
  });
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('#main-header');
  if (window.scrollY > 200) {
      header.classList.add('header-scroll');
      
  } else {
      header.classList.remove('header-scroll');
  }
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
