document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Simular un registro en la base de datos (esto debería ser una llamada a tu backend)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert('Este correo ya está registrado');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'index.html';
});
