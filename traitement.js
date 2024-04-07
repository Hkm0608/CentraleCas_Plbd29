document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    fetch('/login', {
        method:'POST',
        headers: {'Content-Type': 'application/json',},
        body : JSON.stringify({email: email, password: password}),
    }
    )
    .then(response => response.json())
    .then(data => {
        if (data.success){
            window.location.href = '/accueil';
        } else {
            alert('Identifiants incorrects!');
        }
    });

});
