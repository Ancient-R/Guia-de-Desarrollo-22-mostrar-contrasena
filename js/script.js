// Localizamos los inputs mediante Id
const showPass = document.getElementById('input-show-pass');
const inputPass = document.getElementById('input-password');

// Evento al input de tipo check
showPass.addEventListener('change', () => {
    
    // verificamos que si es de tipo password (su valor inicial), lo cambie a tipo text (para poder mostrar la contraseña)
    if( inputPass.type === 'password') inputPass.type='text';
    // si su valor inicial es de tipo text, entonces lo cambia a tipo password
    else inputPass.type="password"
});