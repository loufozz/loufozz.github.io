var texts = document.querySelectorAll(".days h1");

var audios = [new Audio ('alixSon.mp3'), new Audio ('fatineSon.mp3'), new Audio ('tatiSon.mp3'), new Audio ('najiSon.mp3'), new Audio ('amalSon.mp3'), new Audio ('miraSon.mp3')];

for (var i = 0; i < texts.length; i++) {
  texts[i].style.opacity = 0;
}

for (var i = 0; i < audios.length; i++) {
  audios[i].loop = true;
  audios[i].play();
  audios[i].volume = 0;
}


for (var j = 0; j < texts.length; j++) {
  (function(j){
      texts[j].addEventListener("mousemove",function(e){
         var position = texts[j].getBoundingClientRect();
          var centerX = position.left + (position.right - position.left)/2;
          var distance = Math.abs(e.clientX - centerX);
          texts[j].style.opacity = 1- distance/(texts[j].getBoundingClientRect().width/2);
          
          var vol = 1- distance/(texts[j].getBoundingClientRect().width/2);
    
          if(vol < 0) vol = 0;
          if(vol > 1) vol = 1;
          if(audios[j] != null)
          {
            audios[j].volume = vol;
          }
  })
  
    texts[j].addEventListener("mouseout",function(){
      texts[j].style.opacity = 0;
      if(audios[j] != null)
          {
            audios[j].volume = 0;
          }
    })
  })(j)

}


window.onmousemove = function(e){
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  var background = document.body.style.backgroundColor;
  
  for (var i = 0; i < texts.length; i++) {
    var position = texts[i].getBoundingClientRect();
    var centerX = position.left + (position.right - position.left)/2;
    var centerY = position.top + (position.bottom - position.top)/2;
    
    var distance = Math.sqrt((mouseX - centerX)*(mouseX - centerX) + (mouseY - centerY)*(mouseY - centerY));
    var color = window.getComputedStyle( texts[i] ,null).getPropertyValue('background-color');
    var cWidth = document.body.clientWidth/255;
    var cHeight = document.body.clientHeight/255;
    var colorX = parseInt(mouseX / cWidth, 10);
    var colorY = parseInt(mouseY / cHeight, 10);
    var rgb = rgb(colorX, colorY, 10);
    background = rgb;
    // var color = getComputedStyle(texts[i]).backgroundColor;
    console.log(cWidth);
    // document.body.style.backgroundColor = color;
    // background = color;
  
  }
};
