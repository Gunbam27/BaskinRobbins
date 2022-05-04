const br = document.getElementById('bigRound');
const brctx = br.getContext('2d');
const sr = document.getElementById('smallRound');
const srctx = sr.getContext('2d');
const tr = document.getElementById('twoRound');
const trctx = tr.getContext('2d');
const bnimg =document.querySelector('.bnimg')
let colornum = 0;
let colornum_Tr =0;
var color = ['#FEEEDA','#EB9B22','#643725','#5AE9C0','#EA6469']
window.addEventListener('load', () =>{
    bigRound();
    smallRound();
    twoRound();

})


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
    srctx.beginPath();
    srctx.arc(480, 400, 430, 0, 2*Math.PI);
    srctx.fillStyle = '#EE7F83';
    srctx.fill();
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

$(()=>{
    var $banner = $(".banner__slide");
    var $bannerWidth = $banner.width;
    // 3초마다 함수 실행
    rollingId = setInterval(function() { rollingStart();bigRound();twoRound();}, 5000);
    function rollingStart() {
        // $banner.css({left: "-100%"});
        $banner.animate({left: "100%"},1500, function() {
            $(this).append("<div class='slide__cont'>" + $(this).find("div:first").html()+ "</div>");
            $(this).find("div:first").remove();
            $(this).css({left: "0%"});
        });
    }
}); 
