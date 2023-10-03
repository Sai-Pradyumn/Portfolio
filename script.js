// let open = document.getElementsByClassName("open");
// let close = document.getElementsByClassName("close");
// let menulinks = document.getElementsByClassName("menulinks");
let openn = document.getElementById("openn");
let closee = document.getElementById("closee");
let menulinks = document.getElementById("menulinks");



openn.addEventListener("click",function(){
    openn.style.display = "none";
    closee.style.display = "flex";
    menulinks.style.display = "block";
} );

closee.addEventListener("click",function(){
    openn.style.display = "block";
    closee.style.display = "none";
    menulinks.style.display = "none";
});