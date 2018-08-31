var desc = document.querySelectorAll('.desc');
var lang = document.querySelectorAll('.langue');




        desc[0].style.opacity = 1;
        lang[0].style.opacity = 1;
        desc[1].style.opacity = 0;
        lang[1].style.opacity = 1;



for (var i = 0; i < lang.length; i++) {

    var functionName = "test"+i;
    lang[0].addEventListener("click",test0);
    lang[1].addEventListener("click",test1);
}



function test0(){
    console.log("clicked"+ this.id);

    var bugElement = document.getElementById(this.id);
    desc[0].style.opacity = 0;
    desc[1].style.opacity = 1;
    lang[0].style.color = "rgb(225, 225, 225)";
    lang[1].style.color = "rgb(150, 150, 150)";
    lang[0].style.textDecoration = "underline";
    lang[1].style.textDecoration = "none";


}

function test1(){
    console.log("clicked"+ this.id);
    desc[0].style.opacity = 1;
    desc[1].style.opacity = 0;
    lang[0].style.color = "rgb(150, 150, 150)";
    lang[1].style.color = "rgb(225, 225, 225)";
    lang[0].style.textDecoration = "none";
    lang[1].style.textDecoration = "underline";

}
