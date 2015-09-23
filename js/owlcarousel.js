// JavaScript Document

        
$(document).ready(function () {
  
    $(".owl-carousel").owlCarousel({
      afterInit : attachEvent
    });
  
  function attachEvent(elem){
    elem.parent().find('.next').on('click',function(){
      elem.trigger('owl.next')
    })
    elem.parent().find('.prev').on('click',function(){
      elem.trigger('owl.prev')
    })
  }
  
  
});