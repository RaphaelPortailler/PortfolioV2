document.addEventListener('DOMContentLoaded', () => {

    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('linkContact');
    const aboutTarget = document.getElementById('h1About');
    const contactTarget = document.getElementById('h1Contact');

    function smoothScroll(target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = linearInterpolation(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function linearInterpolation(t, b, c, d) {
            return b + (c * (t / d));
        }

        requestAnimationFrame(animation);
    }

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll(aboutTarget);
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll(contactTarget);
    });
});