const br = document.getElementById('bigRound');
const brctx = br.getContext('2d');
const sr = document.getElementById('smallRound');
const srctx = sr.getContext('2d');
const tr = document.getElementById('twoRound');
const trctx = tr.getContext('2d');
const bnimg =document.querySelector('.bnimg')
bigRound();
smallRound();
twoRound();

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
brctx.beginPath();
brctx.arc(1100, 450, 700, 0, 2*Math.PI);
brctx.fillStyle = '#FEEEDA';
brctx.fill();
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
})
