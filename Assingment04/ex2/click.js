var clickCount = 0
document.getElementById("myBtn").addEventListener("click",
    function () {
        alert(++clickCount);
    });