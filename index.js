var nDrumBtn=document.querySelectorAll(".drum").length;
for (var i=0;i<nDrumBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnletter = this.innerHTML;
        play(btnletter);
        btnAnimation(btnletter);
       
    });
}

document.addEventListener("keydown", function(event){
    play(event.key);
    btnAnimation(event.key);
});

function play(btnletter) {
    switch(btnletter){
        case "w": 
        var audio = new Audio('sounds/crash.mp3');
        audio.play();break;
        case "a": 
        var audio = new Audio('sounds/kick.mp3');
        audio.play();break;
        case "s": 
        var audio = new Audio('sounds/snare.mp3');
        audio.play();break;
        case "d": 
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();break;
        case "j": 
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();break;
        case "k": 
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();break;
        case "l": 
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();break;
    }
  }

function btnAnimation(currentKey){
   var btn =  document.querySelector("."+currentKey);
   btn.classList.add("pressed")  ;
   setTimeout(function(){
    btn.classList.remove("pressed");
   }, 100);
}


