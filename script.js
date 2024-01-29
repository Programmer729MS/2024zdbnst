var loader;
function loadNow(opacity) {
    if(opacity <=0) {
        displayContent();
    }
    else {
        loader.style.opacity  = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05)
        }, 2000);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById(content).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
})


// Bottom Navigation Bar

function change(item){
    const button = document.querySelectorAll('ion-icon');
    button.forEach(function(obj){
        obj.classList.remove("active");
    });

    item.classList.add("active");
}

// aos animation

AOS.init();


// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

function load () {
    document.querySelector('.holder').classList.add('fade-out')
}

function fadeOut() {
    setInterval((load), 2000);
}

window.onload = fadeOut;
