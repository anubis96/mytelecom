let image = document.getElementById('image_flottant');
var images = ['lan.png', 'network.png', 'windowsusers.webp', 'files.jpg'];

setInterval(function(){
    let random = Math.floor(Math.random() * 3);
    image.src = images[random];
}, 3000);
/*
var i = 0;
function slideShow(){
    document.getElementById("image_flottant").src= images[i];

    if(i<images.length-1){
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("slideShow()", 2000);

}
window.onload = slideShow;
*/
