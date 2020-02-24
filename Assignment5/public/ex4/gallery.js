function showImg(e) {
   document.querySelector("#displayDIV .bigIMG").src=e.target.dataset.large;
   document.querySelector("#displayDIV .desc").innerHTML=e.target.alt;
   document.getElementById("displayDIV").style.display="block";
}

function hideImg(e) {
   document.getElementById("displayDIV").style.display="none";
}

function getCurrentImageIdx() {
    let bigImgSrc = document.querySelector("#displayDIV > img").getAttributeNode("src").value;

    let smallImgs = document.querySelectorAll(".gallery > img");
    for(let i=0; i<smallImgs.length;i++) {
        if (smallImgs[i].dataset.large === bigImgSrc) return i+1; // nth-child starts at 1
    }

}

function prev() {
	let images = document.querySelectorAll('.gallery img');
	let pos = getCurrentImageIdx();
	pos -= 2;
    pos = (pos >= 0) ?  pos%images.length : images.length+pos; // JS implements negative modulo
	document.querySelector("#displayDIV .bigIMG").src=images[pos].dataset.large;
	document.querySelector("#displayDIV .desc").innerHTML=images[pos].alt;
}

function next() {
	let images = document.querySelectorAll('.gallery img');
	let pos = getCurrentImageIdx();
	pos = (pos)%images.length;
	document.querySelector("#displayDIV .bigIMG").src=images[pos].dataset.large;
	document.querySelector("#displayDIV .desc").innerHTML=images[pos].alt;
}

function playPause() {
	if (intervalID) {
		clearInterval(intervalID);
        intervalID = null;
	}
	else
		intervalID = setInterval(next,2000);
}


function initGallery()
{
    document.querySelector(".bigIMG").addEventListener("click", hideImg);

    let prevb = document.createElement("button");
    prevb.innerText="prev";
    prevb.addEventListener("click", prev);

    let nextb = document.createElement("button");
    nextb.innerText="next";
    nextb.addEventListener("click", next);

    let playPauseb = document.createElement("button");
    playPauseb.innerText="play/pause";
    playPauseb.addEventListener("click", playPause);

    let exitb = document.createElement("button");
    exitb.innerText="exit";
    exitb.addEventListener("click", hideImg);

    let controls = document.createElement("DIV");
    controls.appendChild(prevb);
    controls.appendChild(nextb);
    controls.appendChild(playPauseb);
    controls.appendChild(exitb);
    document.getElementById("displayDIV").appendChild(controls);

    let images = document.querySelectorAll('.gallery img');
    for (let i=0; i< images.length; i++) {
       images[i].addEventListener("click", showImg);
    }
}

let intervalID;

function ImageLoader() {
    this.method = "GET";
    this.url = location.href.replace("gallery.html","");
    this.file = "gallery.json";
}

ImageLoader.prototype = {
    constructor: ImageLoader,

    load: function()
    {
        var getReq = new XMLHttpRequest();
        
        getReq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.response);
                var gallery = document.getElementsByClassName("gallery")
                for (const key in myArr) {
                    if (myArr.hasOwnProperty(key)) {
                        var img = document.createElement("img")
                        img.setAttribute('src',myArr[key].dataSmall)
                        img.setAttribute('data-large',myArr[key].dataBig)
                        img.setAttribute('alt',myArr[key].description)
                        gallery[0].appendChild(img)        
                    }
                }
                initGallery()
            }
            
        }

        getReq.open('GET','http://localhost:3000/ex4/gallery.json',true)
        getReq.send()
        // Add your code here and call 'initGallery' after loading all images.
        
        
    }
}

imgLoader = new ImageLoader();
imgLoader.load();
