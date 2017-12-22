$(document).ready(loadPage);
var target = 0;

var loadPage = function(){
  // declarando variables de los elementos
   var previous = $(".previous");

   var buttons = $(".control");
   console.log(buttons);
   var next = $(".next");

   // creando eventos para cada elemento
   buttons.click(changeImage);
   previus.click(previousImage);
   next.click(nextImage);

var changeImage = function (){
  target = parseInt($(this).data("target"));
  showImage(target);
 }

var previousImage = function (e){
  e.preventDefault();
  target = target - 1;
  target =(data<0) ? 4:target;
  showImage(target);
 }

 var nextImage = function (e){
   e.preventDefault();
   target = target + 1;
   target =(data>4) ? 0:target;
   showImage(target);
  }

 var showImage = function (target){
   var lastSlide = $("div.active");
   var slide = $("div[data-slide='" + target + "'] ");
   lastSlide.removeClass("active");
   slide.addClass("active");
 }
}
