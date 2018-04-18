var fbBug = document.querySelectorAll('.bug');
var imageA = document.querySelectorAll('.alixArt');

console.log(fbBug);

for (var i = 0; i < imageA.length; i++){
        imageA[i].style.opacity = 0;
        imageA[i].style.position = "absolute";
    }
    
for (var i = 0; i < fbBug.length; i++) {
    fbBug[i].style.position = "absolute";
    fbBug[i].style.left = window.innerWidth/2 +"px";
    fbBug[i].style.top = window.innerHeight/2 + "px";
    var functionName = "test"+i;
    fbBug[0].addEventListener("click",test0);
    fbBug[1].addEventListener("click",test1);
    fbBug[2].addEventListener("click",test2);
    fbBug[3].addEventListener("click",test3);
}

function test0(){
    console.log("clicked"+ this.id);
    
    var bugElement = document.getElementById(this.id);
    imageA[0].style.left = fbBug[0].offsetLeft +"px";
    imageA[0].style.top = fbBug[0].offsetTop +"px";
    imageA[0].style.opacity = 1;
    imageA[1].style.opacity = 0;
    imageA[2].style.opacity = 0;
    imageA[3].style.opacity = 0;
   
    
}

function test1(){
    console.log("clicked"+ this.id);
    imageA[1].style.left = fbBug[1].offsetLeft +"px";
    imageA[1].style.top = fbBug[1].offsetTop +"px";
    imageA[0].style.opacity = 0;
    imageA[1].style.opacity = 1;
    imageA[2].style.opacity = 0;
    imageA[3].style.opacity = 0;
   
    
}

function test2(){
    console.log("clicked"+ this.id);
    imageA[2].style.left = fbBug[2].offsetLeft +"px";
    imageA[2].style.top = fbBug[2].offsetTop +"px";
    imageA[0].style.opacity = 0;
    imageA[1].style.opacity = 0;
    imageA[2].style.opacity = 1;
    imageA[3].style.opacity = 0;
   
    
}

function test3(){
    console.log("clicked"+ this.id);
    imageA[3].style.left = fbBug[3].offsetLeft +"px";
    imageA[3].style.top = fbBug[3].offsetTop +"px";
    imageA[0].style.opacity = 0;
    imageA[1].style.opacity = 0;
    imageA[2].style.opacity = 0;
    imageA[3].style.opacity = 1;
   
    
}

function loop(){
    for (var i = 0; i < fbBug.length ; i ++){
    
    
    var random = Math.random() * 4 - 1;  
    fbBug[i].style.left = parseFloat(fbBug[i].style.left)   + 2*(Math.random() * 2 - 1) + "px";
    fbBug[i].style.top =  parseFloat(fbBug[i].style.top)  +   2*(Math.random() * 2 - 1)+ "px";
    
    /*imageA[i].style.left = fbBug[i].offsetLeft +"px";
    imageA[i].style.top = fbBug[i].offsetTop +"px";*/

}

requestAnimationFrame(loop);
}

loop();

