// Banner Slide
const text_slide =document.querySelector('.banner__slide');
const image_slide =document.querySelector('.banner__image-slide');
const bg_slide =document.querySelector('.banner__bg');
const sr_slide = document.querySelector('.banner__smallRound');
// Canvas
const br = document.getElementById('bigRound');
const brctx = br.getContext('2d');
const tr = document.getElementById('twoRound');
const trctx = tr.getContext('2d');
// Indicator
const count = document.getElementsByClassName("count-down");
const indiSpan = document.querySelectorAll('.banner__indicator span');
// Count
let colornum_Sr = 0;
let colornum = 0;
let colornum_Tr =0;
let color_Indi =0;
// Color Array
var color = ['#FEEEDA','#EB9B22','#643725','#5AE9C0','#EE7F83']
var colorBg = ['#EE7F83','#FEEEDA','#EB9B22','#643725','#5AE9C0']



window.addEventListener('load', (e) =>{
    sr_slide.style.transition = 'all 0s';
    bigRound();
    smallRound();
    twoRound();
    indiColor();
    // 메인배너 슬라이드 텍스트
    const slideText = () => {
        let sliTxt = text_slide.querySelectorAll('li');
        text_slide.style.left = '-100%';
        text_slide.style.transition = 'none';
        setTimeout(() => {
            text_slide.appendChild(sliTxt[0]);
            text_slide.style.left = '0';
            text_slide.style.transition = '.6s ease-out';
        }, 10); /// 0.01초 시차! ////
        };
    // 메인배너 슬라이드 이미지    
    const slideImage = () => {
        let sliImg = image_slide.querySelectorAll('li');
        image_slide.style.left = '20%';
        image_slide.style.transition = 'none';
        setTimeout(() => {
            image_slide.style.left = '0';
            image_slide.style.transition = '.8s ease-out';
            image_slide.appendChild(sliImg[0]);
        }, 10); /// 0.01초 시차! ////
        };

    const slideBg = () => {
        let sliBg = bg_slide.querySelectorAll('.bg');
        bg_slide.style.left = '-100%';
        bg_slide.style.transition = 'none';
        setTimeout(() => {
            bg_slide.appendChild(sliBg[0]);
            bg_slide.style.left = '0%';
            bg_slide.style.transition = '1s ease-out';
        }, 10); 
        }

    const autoCall = () => {
        autoI = setInterval(() => {slideText(),slideImage(),indiColor(),bigRound(),smallRound(),twoRound(),slideBg()}, 5000);
    };
    autoCall();
})


// 오른쪽 큰원
function bigRound(){
    if(colornum===5){colornum=0};
    brctx.clearRect(0,0,br.width,br.height);
    brctx.beginPath();
    brctx.arc(1100, 450, 700, 0, 2*Math.PI);
    brctx.fillStyle = color[colornum];
    brctx.fill();
    colornum+=1;
}
// 오른쪽 작은원

function smallRound(){
    if(colornum_Sr===5){colornum_Sr=0};
    sr_slide.style.backgroundColor=colorBg[colornum_Sr]
    sr_slide.style.transition = 'all 1s ease-out';
    colornum_Sr+=1;
}
// 왼쪽 위 작은원 & 아래작은원
function twoRound(){
    // 왼쪽 위 작은원
    if(colornum_Tr===5){colornum_Tr=0};
    trctx.clearRect(0,0,tr.width,tr.height);
    trctx.beginPath();
    trctx.arc(140,75, 70, 0, 2*Math.PI);
    // 왼쪽 아래 큰원
    trctx.arc(100, 150, 100, 0, 2*Math.PI);
    trctx.fillStyle = color[colornum_Tr];
    trctx.fill();
    colornum_Tr+=1;
}


// 인디케이터 제목 색 바뀌는 기능
function indiColor(){
    if(color_Indi===5){color_Indi=0};
    indiSpan[color_Indi].classList.add('active');
    setTimeout(() => {
        indiSpan[color_Indi-1].classList.remove('active');
    }, 4900);
    color_Indi+=1;
}
// 인디케이터 불렛 색 바뀌는 기능
let bul =0;
let indi_ul = 0;
function updateBullet(){
    if(bul>3){bul=0;return;};
    let bullet = count[indi_ul].querySelectorAll('li');
    bullet[bul].classList.add('active');
    setTimeout(() => {
        for (let x of bullet) x.classList.remove('active');
    }, 3990);
    bul += 1;
}
setInterval(()=>{
    if(indi_ul===4){indi_ul=0;return;}
    indi_ul+=1;

        },5000)
setInterval(()=>{
        updateBullet();
        },1000)


