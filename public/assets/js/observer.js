const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        rootMargin: "0px 0px -20% 0px"
    }
);
document.querySelectorAll('.appear').forEach(el => observer.observe(el));