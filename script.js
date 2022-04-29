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


  // OFF CANVAS
  const canvas = document.querySelector('.off-canvas')
const button = document.querySelector('.close')


button.addEventListener("click", _ => {
 // var canvasWidth = canvas.clientWidth;
canvas.classList.toggle('open')

})