const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(1700, 600, 800, 0, 2*Math.PI);
ctx.fillStyle = '#FEEEDA';
ctx.fill();

ctx.beginPath();
ctx.arc(1800, 600, 600, 0, 2*Math.PI);
ctx.fillStyle = '#EE7F83';
ctx.fill();

ctx.beginPath();
ctx.arc(290, 380, 70, 0, 2*Math.PI);
ctx.fillStyle = '#FEEEDA';
ctx.fill();

ctx.beginPath();
ctx.arc(250, 460, 100, 0, 2*Math.PI);
ctx.fillStyle = '#FEEEDA';
ctx.fill();


$(()=>{
    $(".navbar").find(".navbar__smenu").hover().find(".smenu").css(display="block");
    $(".navbar").find(".navbar__bg").find(".navbar__smenu").hover().end().css(display="block");
    
})
