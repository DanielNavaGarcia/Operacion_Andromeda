  $('.banners-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
  });

  $(document).ready(function(){
    $('.carousel-games').slick({
    slidesToShow: 5,
    dots:true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
    });   
  });

  $('.productos-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2500
  });