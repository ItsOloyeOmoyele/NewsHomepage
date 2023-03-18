const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const nav = document.querySelector(".mobile-nav");
const cover = document.querySelector(".cover")

openBtn.addEventListener("click", function() {
    nav.classList.toggle("mobile-nav-show");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    cover.classList.toggle("show-cover")

})

closeBtn.addEventListener("click", function() {
    nav.classList.toggle("mobile-nav-show");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    cover.classList.toggle("show-cover")
})

