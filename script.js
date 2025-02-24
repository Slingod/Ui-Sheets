document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    document.getElementById('mobile-menu').addEventListener('click', function() {
        document.querySelector('.navbar-menu').classList.toggle('active');
    });

    // Gestion de la modal (si vous avez un bouton pour l'ouvrir)
    var modal = document.getElementById("myModal");
    var closeBtn = document.querySelector(".close");

    // Exemple d'ouverture de la modal (vous pouvez ajouter un bouton pour cela)
    // document.getElementById("openModalBtn").addEventListener('click', function() {
    //     modal.style.display = "block";
    // });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
