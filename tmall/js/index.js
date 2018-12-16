function map2 (){
    var ofloorTabs = document.getElementsByClassName('floor-tabs')[0];
    var oHeadDiv = document.getElementById("floor-tab-head");
    var aLi = oHeadDiv.getElementsByTagName('li');
    var oBodyDiv = document.getElementById('floor-tab-body');
    var aUl = oBodyDiv.getElementsByTagName('ul');
    var iNow = 0;
    var timer;

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
    function run(){
        timer = setInterval(function(){
        iNow++;
        
        if(iNow >= aUl.length){
            iNow = 0;
        }
        for(var z=0;z<aLi.length;z++){
            aLi[z].className = '';
            aUl[z].className = '';
        }
        aLi[iNow].className = 'selected';
        aUl[iNow].className = 'active';
        },3000);
    }
    run();
    ofloorTabs.onmouseover = function(){
        clearInterval(timer);
    }
    ofloorTabs.onmouseout= function(){
        run();
    }
    

}
map2();



function map1 (){
    var oSlideBox = document.getElementsByClassName('slide-box')[0];
    var oSlideTab = document.getElementById('slide-tab');
    var aKi = oSlideTab.getElementsByTagName('li');
    var oSlideImgBox = document.getElementById('slide-img-box');
    var aImg = oSlideImgBox.getElementsByTagName('img');
    var oNext = document.getElementById('next');
    var iNow = 0;
    var timer;

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
    oSlideBox.onmouseover = function(){
        clearInterval(timer);
    }
    oSlideBox.onmouseout= function(){
        run();
    }
    function run(){
        timer = setInterval(function(){
            oNext.onclick();
        },3000);
    }

}
map1();