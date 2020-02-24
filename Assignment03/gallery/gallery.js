function showImg(e) {
   document.querySelector("#displayDIV .bigIMG").src=e.target.dataset.large;
   document.querySelector("#displayDIV .desc").innerHTML=e.target.alt;
   document.getElementById("displayDIV").style.display="block";
}

function hideImg(e) {
   e.currentTarget.style.display="none";
}

let images = document.querySelectorAll('.gallery img');
for (let i=0; i< images.length; i++) {
   images[i].addEventListener("click", showImg);
}
document.getElementById("displayDIV").addEventListener("click", hideImg);
