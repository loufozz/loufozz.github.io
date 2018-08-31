var art = document.querySelectorAll('.artWork');

for (var i = 0; i < art.length; i++){
        art[i].style.filter = "blur(5px)";

    }

    for (var j = 0; j < art.length; j++) {
      (function(j){
          art[j].addEventListener("mousemove",function(e){
             var position = art[j].getBoundingClientRect();
              var centerX = position.left + (position.right - position.left)/2;
              var centerY = position.top + (position.bottom - position.top)/2;
              var distanceX = Math.abs(e.clientX - centerX);
              var distanceY = Math.abs(e.clientY - centerY);
              //var distance = Math.sqrt((mouseX - centerX)*(mouseX - centerX) + (mouseY - centerY)*(mouseY - centerY));
              var currentDistX = distanceX/(art[j].getBoundingClientRect().width/2);
              var currentDistY = distanceY/(art[j].getBoundingClientRect().height/2);
              //art[j].style.filter = "blur((distance/(art[j].getBoundingClientRect().width/2))px)";

              var pixels = currentDistX;
              art[j].style.filter = "blur(0px)";
              art[j].style.width = "27vw";

              console.log(pixels);

      })

        art[j].addEventListener("mouseout",function(){
          art[j].style.filter = "blur(5px)";
          art[j].style.width = "25vw";

        })
      })(j)

    }


    ;
