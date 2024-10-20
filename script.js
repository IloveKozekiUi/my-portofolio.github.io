document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.querySelector('ul.menu');
    if (menu.classList.contains('show')) {
        // Hide menu
        menu.classList.remove('show');
        menu.classList.add('hidden');
    } else {
        // Show menu
        menu.classList.remove('hidden');
        menu.classList.add('show');
    }
});
