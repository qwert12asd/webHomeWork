let up_span_1 = document.getElementsByClassName('up-lab-one')[0];
let up_span_2 = document.getElementsByClassName('up-lab-two')[0];
let up_span_3 = document.getElementsByClassName('up-lab-three')[0];
let down_span_1 = document.getElementsByClassName('down-lab-one')[0];
let down_span_2 = document.getElementsByClassName('down-lab-two')[0];
let down_span_3 = document.getElementsByClassName('down-lab-three')[0];
var num = 0;
var numbs = 8;
// let img1 = document.getElementsByClassName('enlarge-img')[0];
// let img2 = document.getElementsByClassName('enlarge-img')[1];
// let img3 = document.getElementsByClassName('enlarge-img')[2];
// let img4 = document.getElementsByClassName('enlarge-img')[3];
// const $ =(e)=>{return document.querySelector(e);}
// const on =(e,cb)=>{$(e).addEventListener('click',cb);}
// const f=()=>{$('.box').classList.add('hide')}
// img1.onclick=()=>{
//     $(".enlarge-img").click(function(){
//         var src = $(this).attr("src");
//         if(src.indexOf("border-rectangle.png") != -1) return false;
//         $('#bigint').attr("src", src);
//         $('#delete_image').attr("onclick", "sateishosai.deleteImageTmp('#" + $(this).attr("id") + "')");

//         var windowW = $(window).width();
//         var windowH = $(window).height();

//         var realWidth = $(this).prop("naturalWidth");
//         var realHeight = $(this).prop("naturalHeight");

//         var scale = 0.8;
//         var imgWidth = realWidth;
//         var imgHeight = realHeight;
//         if (realWidth > windowW * scale) {
//             imgWidth = windowW * scale;
//             mgHeight = imgWidth / realWidth * realHeight;
//             if (imgHeight > windowH * scale) {
//                 imgHeight = windowH * scale;
//                 imgWidth = imgHeight / realHeight * realWidth;
//             }
//         }
//         if (realHeight > windowH * scale) {
//             imgHeight = windowH * scale;
//             imgWidth = imgHeight / realHeight * realWidth;
//             if (imgWidth > windowW * scale) {
//                 imgWidth = windowW * scale;
//                     mgHeight = imgWidth / realWidth * realHeight;
//             }
//         }
//         $('#bigint').css("width",imgWidth);

//         var w = (windowW - imgWidth) / 2;
//         var h = (windowH - imgHeight) / 2;
//         $('#innerving').css({"top":h, "left":w});
//         $('#deldiv').css({"top" : h + imgHeight + 20, "left":windowW/2 - 30});
//         $('#outride').fadeIn("fast");
//     });
// }
// window.onload = function(){
//     var box=document.getElementById('container');
//     var imgs=box.getElementsByTagName('img');
//     var imgWidth = imgs[0].offsetWidth;
//     var exposeWidth = 210;
//     var boxWidth = imgWidth + (imgs.length -1) * exposeWidth;
//     box.style.width='px';
//     function SetImgsPos(){
//     for(var i = 1;i<imgs.length;i++){
//           imgs[i].style.left = imgWidth + exposeWidth*(i -1)+ 'px';
//           }
//         }
//         SetImgsPos();
//         var translate = imgWidth - exposeWidth;
//         for(var i=0;i<imgs.length;i++){
//           (function(i){
//             imgs[i].onmouseover = function(){
//               SetImgsPos();
//               for(var j=1;j<=i;j++){
//                 imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + 'px';
//               }
//             }
//           })(i);
//         }
//       }

$(function () {
    $(".enlarge-img").click(function () {
        $("#big-img").attr("src", $(this).attr("src"));
        $("#enlarge-div").fadeIn("fast");
        $("#enlarge-div").click(function () {
            $(this).fadeOut("fast");
        });
    });
});

up_span_1.onclick = () => {
    up_span_1.style.setProperty('background-color', 'rgb(243, 166, 67)');
    up_span_2.style.setProperty('background-color', 'antiquewhite');
    up_span_3.style.setProperty('background-color', 'antiquewhite');
    down_span_1.style.setProperty('display', 'inline-block');
    down_span_2.style.setProperty('display', 'none');
    down_span_3.style.setProperty('display', 'none');
}
up_span_2.onclick = () => {
    up_span_2.style.setProperty('background-color', 'rgb(243, 166, 67)');
    up_span_1.style.setProperty('background-color', 'antiquewhite');
    up_span_3.style.setProperty('background-color', 'antiquewhite');
    down_span_2.style.setProperty('display', 'inline-block');
    down_span_1.style.setProperty('display', 'none');
    down_span_3.style.setProperty('display', 'none');
}
up_span_3.onclick = () => {
    up_span_3.style.setProperty('background-color', 'rgb(243, 166, 67)');
    up_span_1.style.setProperty('background-color', 'antiquewhite');
    up_span_2.style.setProperty('background-color', 'antiquewhite');
    down_span_3.style.setProperty('display', 'inline-block');
    down_span_1.style.setProperty('display', 'none');
    down_span_2.style.setProperty('display', 'none');
}

$(function () {
    $('.right').off('click').on('click', function () {
        var len = $(".h").children().length;
        console.log(len);
        var tex = document.getElementsByClassName("d")[len - 1];
        console.log(tex);
        tex.remove();
        numbs--;
    });
});


function addDiv() {
    if (numbs < 10) {
        numbs++;
        $(".h").append('<div class="d">' +
            '<span class="left">' + numbs + '</span>' +
            '<span class="center"></span>' +
            '<span class="right">Delete</span>' +
            '</div>');
        $(".right").toggleClass('.right');
    }
}

$("span").delegate("div", "click", function () {
    $("p").slideToggle();
});


