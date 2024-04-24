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