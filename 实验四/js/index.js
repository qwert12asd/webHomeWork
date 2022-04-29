function a() {
    m1.style.color = "red";
}
window.onload = function z() {
    var testLi = document.getElementById('ul-id').getElementsByTagName('li');
    for (var i = 0; i < testLi.length; i++) {
        testLi[i].addEventListener("click", function (num) {
            return function () {
                alert("这是第" + (num + 1) + "个li元素标签");
            }
        }(i))
    }
}
function b() {
    m2.innerHTML = gettime();
}
function c() {
    m3.classList.add('fn-active');
}
function d() {
    var Ee = document.getElementById("deletes");
    Ee.parentNode.removeChild(Ee);
}
function e() {
    window.open("https://www.taobao.com//", "win");
}

function f() {
    var li = document.createElement("li");
    li.value = "p9";
    document.body.appendChild(li);
}


function m() {
    var u = document.getElementById("ul-id");
    var createLi = document.createElement("li");
    var text = document.createTextNode("p9");
    createLi.appendChild(text);
    u.appendChild(createLi);
}

function g() {
    var a = document.getElementById("weight-s");
    a.style.width = "50%";
    a.style.height = "100%";
}

function gettime() {
    var date = new Date();
    var year = date.getFullYear();
    var moth = date.getMonth() + 1;
    var dates = date.getDate();
    var day = date.getDay();
    var flag1 = 1;
    var flag2 = 1;
    if (moth <= 10)
        flag1 = 0;
    if (dates <= 10)
        flag2 = 0;
    if (flag1 && flag2) {
        return year + '-' + moth + '-' + dates;
    }
    else if (flag1) {
        return year + '-' + moth + '-0' + dates;
    }
    else if (flag2)
        return year + '-0' + moth + '-' + dates;
    else
        return year + '-0' + moth + '-0' + dates;
}

function change() {
    var mywidth = document.getElementById("ddd").clientWidth;
    ddd.style.width = 1536 + "px";
}