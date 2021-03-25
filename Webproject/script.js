$(function() {
  
    var count = $('.slide').length,
        i = 1,
        j=0;
    
    function nextSlide() {
      if (i < count && j==0) {
        $('.active').removeClass('active').next('.slide').addClass('active');
        i++;
      }
    }
    
    function prevSlide() {
      if (i > 1 && j==0 ) {
        $('.active').removeClass('active').prev('.slide').addClass('active');
        i--;
      }
    }
    function togglePopup(){
      if(j==0){
        j=1;
        document.getElementById("popup-1").classList.toggle("active");
      }
      
    }  
    function exit(){
      if(j==1){
        j=0;
        document.getElementById("popup-1").classList.toggle("active");
      }
      
    }      
    window.onkeyup = function(e) {
      if (e.keyCode == 37) {
        nextSlide();
      }
      if (e.keyCode == 39) {
        prevSlide();
      }
      if (e.keyCode == 32){
        togglePopup();
      }
      if (e.keyCode == 38){
        exit();
      }
    }
  
  });