$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
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
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

