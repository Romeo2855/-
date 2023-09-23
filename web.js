var more = document.getElementsByClassName("more");
var recycle = document.getElementsByClassName("recycle");
var det1 = document.getElementsByClassName("details");
var det2 = document.getElementsByClassName("details2");
for(var i = 0;i < more.length;i++){
    more[i].index=i;
    more[i].onclick = function(){
        det1[this.index].style.display = "none";
        det2[this.index].style.display = "block";
    }
}
for(var i = 0;i < more.length;i++){
    recycle[i].index=i;
    recycle[i].onclick = function(){
        det2[this.index].style.display = "none";
        det1[this.index].style.display = "block";
    }
}
var spans = document.getElementsByClassName("nine")
for(var i = 0;i < spans.length;i++){
    spans[i].onclick = function(){
        if(this.style.color == "black" || this.style.color == "") this.style.color = "#1989FA";
        else this.style.color = "black";
    }
}


var texts = document.getElementsByClassName("text");
var kks = document.getElementsByClassName("kk");
var index1 = 0;
var lastindex1 = 0;
var leftBtn1 = document.getElementById("leftBtn1");
var rightBtn1 = document.getElementById("rightBtn1");
var clearAct = function(){
    texts[lastindex1].id = '';
    kks[lastindex1].className = 'kk';
}
var goIndex1 =function(){
    clearAct();
    texts[index1].id = 'act';
    kks[index1].className = "kk acti";
}
var goLeft1 = function(){
    lastindex1 = index1;
    if(index1 == 0) index1 = 6;
    else index1--;
    goIndex1();
}
var goRight1 = function(){
    lastindex1 = index1;
    if(index1 == 6) index1 = 0;
    else index1++;
    goIndex1();
}
for(var i = 0;i < kks.length;i++){
    kks[i].onclick = function(){
        var kkIndex = this.getAttribute("data-index");
        lastindex1 = index1;
        index1 = kkIndex;
        goIndex1();
    }
}
leftBtn1.onclick = function(){
    goLeft1();
}
rightBtn1.onclick = function(){
    goRight1();
}




var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point");
var btnLeft = document.getElementById("leftBtn");
var btnRight = document.getElementById("rightBtn");
var index = 0;
var time = 0;
var lastindex = 0;
var clearActive = function(){
    items[lastindex].className = 'item';
    points[lastindex].className = 'point';
}
var goIndex = function(){
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}
var goLeft = function(){
   lastindex = index;
   if(index == 0) index = 2;
   else index--;
   goIndex();
}
var goRight = function(){
   lastindex = index;
    if(index == 2) index = 0;
    else index++;
    goIndex();
}
btnLeft.onclick = function(){
    goLeft();
    time = 0;
}
btnRight.onclick = function(){
    goRight();
    time = 0;
}
for(i = 0;i < points.length;i++){
    points[i].onclick = function(){
        var pointIndex = this.getAttribute("data-index");
        lastindex = index;
        index = pointIndex;
        goIndex();
        time = 0;
    }
}
var timer;
function play(){
    timer = setInterval(function(){
        time++;
        if(time == 20){
            goRight();
            time = 0;
        }
    },100)
}
play();
