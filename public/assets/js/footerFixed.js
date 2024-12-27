if (window.matchMedia("(min-width: 1024px)").matches) {
    document.addEventListener('scroll', function () {
        const footer = document.querySelector('footer');
        const contactSection = document.getElementById('sectContact');

        const contactSectionRect = contactSection.getBoundingClientRect();

        if (contactSectionRect.top <= window.innerHeight && contactSectionRect.bottom >= 0) {
            footer.style.position = 'fixed';
        } else {
            footer.style.position = 'fixed';
        }
    });
}