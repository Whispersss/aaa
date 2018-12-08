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

var oSlideTab = document.getElementById('slide-tab');
var aKi = oSlideTab.getElementsByTagName('li');
var oSlideImgBox = document.getElementById('slide-img-box');
var aImg = oSlideImgBox.getElementsByTagName('img');

for( var i=0; i<aKi.length;i++){
    aKi[i].index=i;
    aKi[i].onmouseover = function(){
        for(var j=0;j<aKi.length;j++){
            aKi[j].className ='';
            aImg[j].className = '';
        }
        this.className = 'slide-li';
        aImg[this.index].className = 'slide-li';
    }
}
