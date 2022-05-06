const br = document.getElementById('bigRound');
const brctx = br.getContext('2d');
const sr = document.getElementById('smallRound');
const srctx = sr.getContext('2d');
const tr = document.getElementById('twoRound');
const trctx = tr.getContext('2d');
const bnimg =document.querySelector('.bnimg')
let colornum = 0;
let colornum_Tr =0;
let colornum_Sr=0;
var color = ['#FEEEDA','#EB9B22','#643725','#5AE9C0','#EE7F83']
var colorBg = ['#EE7F83','#FEEEDA','#EB9B22','#643725','#5AE9C0']



window.onresize=(function(){
    if(window.innerWidth<1440){
    br.width = window.innerWidth;
    // br.height = window.innerWidth;
    sr.width = Math.floor((window.innerWidth/250)*100);
    tr.width = Math.floor((window.innerWidth/400)*100);
    bigRound();
    smallRound();
    twoRound();
}else {
    br.width = 1395;
    sr.width = 782;
    tr.width = 320;
    bigRound();
    smallRound();
    twoRound();
}
});


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
    srctx.clearRect(0,0,sr.width,sr.height);
    srctx.beginPath();
    srctx.arc(480, 400, 430, 0, 2*Math.PI);
    srctx.fillStyle = colorBg[colornum_Sr];
    srctx.fill();
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



const text_slide =document.querySelector('.banner__slide');
const image_slide =document.querySelector('.banner__image-slide');
const bg_slide =document.querySelector('.banner__bg');
window.addEventListener('load', () =>{
    bigRound();
    smallRound();
    twoRound();
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
        console.log(sliBg);
        bg_slide.style.left = '-100%';
        bg_slide.style.transition = 'none';
        setTimeout(() => {
            bg_slide.appendChild(sliBg[0]);
            bg_slide.style.left = '0%';
            bg_slide.style.transition = '1s ease-out';
            
        }, 10); 
        }

    const autoCall = () => {
        autoI = setInterval(() => {slideText(),slideImage(),bigRound(),smallRound(),twoRound(),slideBg()}, 5000);
    };
    autoCall();
})


