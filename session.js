function logIn(){
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Simular autenticación (esto debería ser una llamada a tu backend)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
    
        if (!user) {
            alert('Correo o contraseña incorrectos');
            return;
        }
    
        // Redirigir al dashboard
        alert('Inicio de sesión exitoso');
        window.location.href = 'hello.html';
    });
    
    
  }