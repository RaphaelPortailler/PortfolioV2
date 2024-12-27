document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const mainContent = document.querySelector("main");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 3000);

    loader.addEventListener("transitionend", () => {
        loader.style.display = "none";
        mainContent.style.display = "block";
    });
});