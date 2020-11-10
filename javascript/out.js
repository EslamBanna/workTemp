/* global console */
$(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    $('body').css('display', 'inherit');    
    });
window.onscroll = function (){
  'use strict';
var top = document.getElementById('totop');
    if (window.pageYOffset > 900)
        {
            top.style.fontSize = '50px';
            top.addEventListener('click', function(){
                scrollTo(0,0);
            })
        }
    else if (window.pageYOffset < 900){
            top.style.fontSize = '0px';        
    }
};
var ti = document.getElementById('time');
setInterval(function(){
 var z = new Date();
    ti.innerHTML = z;
    
},1000);
