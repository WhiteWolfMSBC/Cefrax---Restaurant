  // Pop Up Chat Button


  function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
});


// boder Overapping

const back = document.getElementById("border-back");
const front = document.getElementById("border-front");

function spinBorder() {
  back.style.transform = "translate(-50%, -50%) rotate(1395deg)";
  front.style.transform = "translate(-50%, -50%) rotate(1395deg)";
  setTimeout(programmeLoaded, 20000);
}
function programmeLoaded() {
  document.getElementById("p").innerHTML = "Loaded";
}


// autoplay video

var x = document.getElementById("myVideo").autoplay;



// Toggle Content slidebar

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}


// Image Zoom







