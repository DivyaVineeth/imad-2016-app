console.log('Loaded!');
//change the text of the main-text
var element=document.getElementById('main-text');
element.innerHTML="New girl";  

//move image
var img=document.getElemebtById('madi');
img.onClick=function(){
  img.style.marginleft='100px';  
    
};