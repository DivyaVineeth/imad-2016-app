console.log('Loaded!');
//change the text of the main-text
var element=document.getElementById('main-text');
element.innerHTML="New girl";  

//move image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+6;
    img.style.marginLeft= marginLeft + 'px';  
}
img.onclick=function (){
    var interval=setInterval(moveRight,70);
  
    
};