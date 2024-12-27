document.addEventListener("DOMContentLoaded", function () {

    const scrollTopButton = document.getElementById("scrollTopButton");

    function toggleScrollTopButton() {
        const contactSection = document.getElementById("sectContact");
        const rect = contactSection.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            scrollTopButton.style.display = "flex";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", toggleScrollTopButton);

    $("#scrollTopButton").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
});