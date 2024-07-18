var fullimage = document.getElementById("fullimage");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
    fullimage.style.display = "flex";
    fullimg.src = pic;
}

function closefullimg(){
    fullimage.style.display = "none";
}