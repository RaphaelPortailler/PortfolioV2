let applyTextShadow = () => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        document.querySelectorAll(".text3d").forEach(link => {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.3}px ${i * 0.3}px 0 #909F90`;
            }
            link.style.textShadow = shadow;
        });

        let projectsElement = document.getElementById("h1MyProjects");
        if (projectsElement) {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.3}px ${i * 0.3}px 0 #909F90`;
            }
            projectsElement.style.textShadow = shadow;
        }
    } else {
        document.querySelectorAll(".text3d").forEach(link => {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.5}px ${i * 0.5}px 0 #909F90`;
            }
            link.style.textShadow = shadow;
        });

        let contactElement = document.getElementById("h1Contact");
        if (contactElement) {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.5}px ${i * 0.5}px 0 #909F90`;
            }
            contactElement.style.textShadow = shadow;
        }

        let aboutElement = document.getElementById("h1About");
        if (aboutElement) {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.5}px ${i * 0.5}px 0 #909F90`;
            }
            aboutElement.style.textShadow = shadow;
        }

        let projectsElement = document.getElementById("h1MyProjects");
        if (projectsElement) {
            let shadow = "";
            for (let i = 0; i < 10; i++) {
                shadow += (shadow ? "," : "") + `${-i * 0.5}px ${i * 0.5}px 0 #909F90`;
            }
            projectsElement.style.textShadow = shadow;
        }
    }
};

applyTextShadow();

window.addEventListener("resize", applyTextShadow);