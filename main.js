var typed = new Typed(".text", {
    strings: ["Full Stack Developer"],
    typeSpeed: 38,
    backSpeed: 50,
    backDelay: 1800,
    loop: true
});
const toggle=document.getElementById("theme-toggle");

toggle.addEventListener("change",function(){

    document.body.classList.toggle("light-mode");

});