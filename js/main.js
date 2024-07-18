$(function(){
    
///////menu///////////
      $('.menu_btn').on('click', function(e) {
      e.preventDefault;
      $('.menu_ul').toggleClass('active');
    });
    
     
    
    $(window).resize(function() {
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
        }
    })
    
    
       //////////////////////////////////////////для изменения menu
    
       function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = $(".menu");
                header1 = $(".menu_navbar");
                header2 = $(".applications li");
            if (distanceY > shrinkOn) {
                header.addClass("sma");
                header1.addClass("sma1");
                header2.addClass("sma2");
            } else {
                if ( header.hasClass("sma"), header1.hasClass("sma1"), header2.hasClass("sma2")) {
                    header.removeClass("sma");
                    header1.removeClass("sma1");
                    header2.removeClass("sma2");
                }
            }
        });
    }
    window.onload = init();
    
    
    /////////////меню верх. вниз ////////////
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    mywindow.scroll(function() {
        if(mywindow.scrollTop() > mypos)
        {
            $('.menu').fadeOut();  
        }
        else
        {
            $('.menu').fadeIn();
        }
        mypos = mywindow.scrollTop();
     });
    
    ////////////////////////////////////
    
    
    
///////menu end ///////////


/////////////////header fon/////////////////


function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        
        layer.style.transform = `translateX(${event.clientX*speed/1000}px) translateY(${event.clientY*speed/1000}px)`
    });
     
    
   /*  Ð¿Ð¾ Y  
    this.querySelectorAll('.layar').forEach(layar => {
        let speed = layar.getAttribute('data-speed');
        layar.style.transform = `translateY(${event.clientY*speed/1000}px)`
    }); */
 }
 
 document.addEventListener('mousemove', parallax);


/////////////////header fon end/////////////





///////////////////////////popular-hotels////////////////////



$('.slider1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


///////////////////////////popular-hotels end///////////////







///////////////////////////popular slider////////////////////



$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


///////////////////////////popular slider end///////////////



  })