//---------------------------------------------------------------------BUTTON PRESS----------------------------------------------------------------
var len = document.querySelectorAll(".drum").length;
var i = 0;
for (i =0; i < len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    triggerEvent(this.innerHTML);
    buttonAnimation(this.innerHTML)
    });
}

//---------------------------------------------------------------------KEY PRESS-------------------------------------------------------------------

document.addEventListener("keydown", function(event){
    triggerEvent(event.key);
    buttonAnimation(event.key)
});

//-------------------------------------------------------------------SWITCH PRESS------------------------------------------------------------------

function triggerEvent(key){
    switch (key) {
        case "w":
            var w_audio = new Audio("sounds/tom-1.mp3");
            w_audio.play();
            break;
        
        case "a":
            var w_audio = new Audio("sounds/snare.mp3");
            w_audio.play();
            break;
            
        case "s":
            var w_audio = new Audio("sounds/tom-2.mp3");
            w_audio.play();
            break;

        case "d":
            var w_audio = new Audio("sounds/kick-bass.mp3");
            w_audio.play();
            break;

        case "j":
            var w_audio = new Audio("sounds/tom-3.mp3");
            w_audio.play();
            break;

        case "k":
            var w_audio = new Audio("sounds/crash.mp3");
            w_audio.play();
            break;

        case "l":
            var w_audio = new Audio("sounds/tom-4.mp3");
            w_audio.play();
            break;
                                                        
        default:
            console.log("Wrong key pressed!");
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+ key);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}