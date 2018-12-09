var oHeadDiv = document.getElementById("floor-tab-head");
var aLi = oHeadDiv.getElementsByTagName('li');
var oBodyDiv = document.getElementById('floor-tab-body');
var aUl = oBodyDiv.getElementsByTagName('ul');

for(var i=0;i<aLi.length;i++){
    aLi[i].zzz=i;
    aLi[i].onmouseover = function(){
        for(var j=0;j<aUl.length;j++){
            aLi[j].className = '';
            aUl[j].className = '';
        }
        this.className = 'selected';
        aUl[this.zzz].className = 'active';
    }

}
var oSlideBox = document.getElementsByClassName('slide-box')[0];
var oSlideTab = document.getElementById('slide-tab');
var aKi = oSlideTab.getElementsByTagName('li');
var oSlideImgBox = document.getElementById('slide-img-box');
var aImg = oSlideImgBox.getElementsByTagName('img');
var oNext = document.getElementById('next');
var iNow = 0;

for( var i=0; i<aKi.length;i++){
    aKi[i].index=i;
    aKi[i].onmouseover = function(){
        change(this.index);
        iNow = this.index;
    }
}
oNext.onclick = function(){
    
    iNow++;
    
    if(iNow >= aImg.length){
        iNow = 0;
    }
   change(iNow);
   
}
function change(idx){
    for(var j=0;j<aKi.length;j++){
            aKi[j].className ='';
            aImg[j].className = '';
        }
        aKi[idx].className = 'slide-li';
        aImg[idx].className = 'slide-li';
}
run();
// 划入的时候清掉定时器
oSlideBox.onmouseover = function(){
    clearInterval(timer);
}
// 划出开启新的定时器
oSlideBox.onmouseout= function(){
    run();
}
function run(){
    timer = setInterval(function(){
        oNext.onclick();
    },3000);
}