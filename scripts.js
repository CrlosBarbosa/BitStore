// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    menuHamburguer.addEventListener('click', function() {
        menu.classList.toggle('menu-aberto');

        // Adiciona a classe 'fadeIn' para animar o surgimento
        if (menu.classList.contains('menu-aberto')) {
            menu.classList.add('fadeIn');
        } else {
            // Remove a classe 'fadeIn' quando o menu é fechado
            menu.classList.remove('fadeIn');
        }
    });

    // Popup script
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');

    // Show popup after 1 second
    setTimeout(() => {
        popup.style.display = 'block';
        popup.classList.add('fadeIn'); // Adiciona a classe para animar o surgimento do popup
    }, 1000);

    // Close popup when clicking on close button
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };

    // Close popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
});
