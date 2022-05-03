$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:true,
        dots:false,
      }
    },
   {
     breakpoint:768,
     settings:{
       slidesToShow:1,
       slidesToScroll:1,
       infinite:true,
       dots:false,
     }
   }
  ]
});


$(document).ready(function(){
  $(".close").click(function(){
    $(".top-bar").hide(1200);
  });
});