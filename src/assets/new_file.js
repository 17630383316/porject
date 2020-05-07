var i = 0, timer;
var sum = $(".image li").length;
$(function() {
$(".image li").eq(0).show();

$(".box").hover(function() {
    $(".arrow").show();
    clearInterval(timer);
}, function() {
    $(".arrow").hide();
    iLunbo();
})
iLunbo();
});

/*自动轮播*/
function iLunbo() {
timer = setInterval(function() {
    i++;
    if (i == sum - 1) {
      i = -1;
    }
    startLunbo();
}, 2000)
}

/*图片轮播和提示信息*/
function startLunbo() {
if (i == sum) {
    i = 0;
}
$(".image>li").eq(i).fadeIn().siblings().fadeOut();
}
export {
lun
}
