if (window.matchMedia("(min-width: 1024px)").matches) {
    const logoContainer = document.querySelector("#divLogo");
    const logo = logoContainer.querySelector("img");

    logoContainer.addEventListener("mousemove", (event) => {
        const rect = logoContainer.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        const intensity = 70;
        const rotateX = (y / rect.height) * intensity;
        const rotateY = (x / rect.width) * -intensity;

        logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        const glowX = event.clientX - rect.left;
        const glowY = event.clientY - rect.top;

        logoContainer.style.setProperty("--x", `${glowX}px`);
        logoContainer.style.setProperty("--y", `${glowY}px`);
    });

    logoContainer.addEventListener("mouseleave", () => {
        logo.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
}