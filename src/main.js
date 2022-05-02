const dropdown = document.querySelector('.fam-site__down');
const active = document.querySelector('.swiper-slide-active');
const slides = document.querySelectorAll('.swiper-slide');
const btns = document.querySelector('.swiper-button-next');
const eventbg = document.querySelector('.event');



$(()=>{
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
        on: {
            activeIndexChange: function () {
                let pc = page[this.realIndex];
              $('.event').css({'background-color': pc});
            }
          },
      });
});


var page = ['#FF8D9A','#E13469','#FFD900','#2B51B5','#FDA31B']
