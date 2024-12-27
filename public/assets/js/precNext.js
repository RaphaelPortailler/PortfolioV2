let nextButtons = document.querySelectorAll('.next');
let precButtons = document.querySelectorAll('.prec');

nextButtons.forEach(function(next) {
    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });
});

precButtons.forEach(function(prec) {
    prec.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            // Déplace le dernier élément au début de la liste
            let lastItem = items[items.length - 1];
            document.querySelector('.slide').insertBefore(lastItem, items[0]); // Insère le dernier élément avant le premier
        }
    });
});