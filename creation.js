document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var age = document.getElementById("age").value;
    fetch('/register', {
        method:'POST',
        headers: {'Content-Type': 'application/json',},
        body : JSON.stringify({signupEmail: email, signupPassword: password,lastName: lastName,firstName: firstName,age: age}),
    }
    )
    .then(response => response.json())
    .then(data => {
        if (data.success){
            window.location.href = '/';
        } else {
            alert('Identifiants incorrects!');
        }
    });

});
