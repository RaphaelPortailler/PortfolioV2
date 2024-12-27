if (window.matchMedia("(min-width: 1024px)").matches) {
    document.querySelectorAll('a[data-text]').forEach(anchor => {
        anchor.innerHTML = anchor.getAttribute('data-text')
            .split('')
            .map(letter => `<span>${letter}</span>`)
            .join('');
    });
}