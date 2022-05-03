const dropdown = document.querySelector('.fam-site__down');
const active = document.querySelector('.swiper-slide-active');
const slides = document.querySelectorAll('.swiper-slide');
const btns = document.querySelector('.swiper-button-next');
const eventbg = document.querySelector('.event');



$(()=>{
    // 네비게이션바 호버시 드롭다운
    $(".navbar").find(".navbar__smenu").hover(function(){
      $(".smenu").css({'display':'block'});
      $(".navbar__bg").animate({'height':'300px'},300).css({'border-bottom':'1px solid #ccc'});
      $(".smenu li").animate({'height':'50px'},300);
    },
      function(){
          $(".smenu").css({'display':'none'});
          $(".navbar__bg").animate({'height':'0px'},200).css({'border-bottom':'0px solid #ccc'});
          $(".smenu li").animate({'height':'0px'},100);
    })

    // 패밀리사이트 드롭다운
    $('.fam-site__drop').click((e)=>{
        e.preventDefault();
        $(dropdown).toggle();
    })
    // 롤링배너
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
        on: {
            activeIndexChange: function () {
                let pc = page[this.realIndex];
              $('.event').css({'background-color': pc});
            }
          },
      });
});


var page = ['#FF8D9A','#E13469','#FFD900','#2B51B5','#FDA31B']
