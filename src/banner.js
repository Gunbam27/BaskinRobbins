const br = document.getElementById('bigRound');
const brctx = br.getContext('2d');
const sr = document.getElementById('smallRound');
const srctx = sr.getContext('2d');
const tr = document.getElementById('twoRound');
const trctx = tr.getContext('2d');
const bnimg =document.querySelector('.bnimg')
let colornum = 0;
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
    var color = ['#FEEEDA','#EB9B22','#643725','#5AE9C0','#EA6469']
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
    srctx.arc(490, 430, 400, 0, 2*Math.PI);
    srctx.fillStyle = '#EE7F83';
    srctx.fill();
}
// 왼쪽 위 작은원 & 아래작은원
function twoRound(){
    // 왼쪽 위 작은원
    trctx.beginPath();
    trctx.arc(140,75, 70, 0, 2*Math.PI);
    trctx.fillStyle = '#FEEEDA';
    trctx.fill();
    // 왼쪽 아래 큰원
    trctx.beginPath();
    trctx.arc(100, 150, 100, 0, 2*Math.PI);
    trctx.fillStyle = '#FEEEDA';
    trctx.fill();
}

$(()=>{
    var $banner = $(".image").find("ul");
    var $bannerWidth = $banner.children().outerWidth();
    var $bannerLength = $banner.children().length;
    console.log($bannerLength);
    // 3초마다 함수 실행
    rollingId = setInterval(function() { rollingStart();bigRound();}, 5000);

    function rollingStart() {
        $banner.css("width", $bannerWidth + "px");
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({left: + $bannerWidth + "px"},400, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
}); 
