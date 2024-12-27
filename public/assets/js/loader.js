window.addEventListener("load", function() {
    const loader = document.getElementById('loader');
    const loadingPercentage = document.getElementById('loading-percentage');

    let percent = 0;
    const duration = 2000;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
        percent += increment;
        loadingPercentage.textContent = `${Math.floor(percent)}%`;

        if (percent >= 100) {
            clearInterval(interval);
            loader.classList.add('hide');
        }
    }, intervalTime);

    loader.addEventListener("transitionend", () => {
        loader.style.display = 'none';
        document.querySelector('main').style.display = 'block';
    });
});