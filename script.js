document.addEventListener('DOMContentLoaded', function() {
    // Charger les données d'identification si elles sont présentes dans le localStorage
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      document.querySelector('[name="email"]').value = localStorage.getItem('email');
      document.querySelector('[name="password"]').value = localStorage.getItem('password');
      // Cocher automatiquement "Remember Me" si les identifiants sont enregistrés
      document.querySelector('[name="checkbox"]').checked = true;
    }
  
    // Écouter l'événement de soumission du formulaire
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.querySelector('[name="email"]').value;
      const password = document.querySelector('[name="password"]').value;
      const rememberMe = document.querySelector('[name="checkbox"]').checked;
  
      if (email === "admin@gmail.com" && password === "admin") {
        // Si "Remember Me" est coché, sauvegarder les identifiants
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
        } else {
          // Sinon, supprimer les identifiants sauvegardés
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        window.location.href = 'acceuil.html'; // Redirection vers la page d'accueil
      } else {
        alert('Identifiants incorrects!');
      }
    });
  });
  
