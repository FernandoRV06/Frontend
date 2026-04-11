document.addEventListener("DOMContentLoaded", function () {

    const formularioLogin = document.getElementById("formulario-login");

    if (formularioLogin) {

        const inputUsuario   = document.getElementById("input-usuario");
        const inputPassword  = document.getElementById("input-password");
        const mensajeError   = document.getElementById("mensaje-error");
        const mensajeExito   = document.getElementById("mensaje-exito");
        const btnLogin       = document.getElementById("btn-login");

        formularioLogin.addEventListener("submit", async function (evento) {

            evento.preventDefault();

            const username = inputUsuario.value.trim();
            const password = inputPassword.value.trim();

            mensajeError.style.display = "none";
            mensajeExito.style.display = "none";

            if (username === "" || password === "") {
                mostrarError("Por favor llena todos los campos.");
                return;
            }

            btnLogin.disabled = true;
            btnLogin.textContent = "Verificando...";

            try {
                const respuesta = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                });

                const datos = await respuesta.json();

                if (respuesta.ok) {
                    mostrarExito(`¡Bienvenido, ${datos.user.username}!`);

                    sessionStorage.setItem("usuario", JSON.stringify(datos.user));

                    setTimeout(() => {
                        window.location.href = "profile.html";
                    }, 1000);

                } else {
                    mostrarError(datos.error || "Credenciales incorrectas.");
                }

            } catch (error) {
                console.error("Error de conexión:", error);
                mostrarError("No se pudo conectar con el servidor. ¿Está corriendo la API?");
            }

            btnLogin.disabled = false;
            btnLogin.textContent = "Ingresar";
        });

        function mostrarError(mensaje) {
            mensajeError.textContent = mensaje;
            mensajeError.style.display = "block";
        }

        function mostrarExito(mensaje) {
            mensajeExito.textContent = mensaje;
            mensajeExito.style.display = "block";
        }
    }

    const nombrePerfil = document.getElementById("nombre-dinamico");

    if (nombrePerfil) {
        const usuarioGuardado = sessionStorage.getItem("usuario");

        if (usuarioGuardado) {
            const usuario = JSON.parse(usuarioGuardado);
            nombrePerfil.textContent = usuario.username;
        }
    }

    const botonCambiarTexto = document.getElementById("btn-cambiar-texto");
    if (botonCambiarTexto) {
        botonCambiarTexto.addEventListener("click", function () {
            const parrafo = document.getElementById("parrafo-dinamico");
            parrafo.textContent = "¡Este texto fue cambiado por JavaScript!";
            parrafo.style.color = "green";
        });
    }

    const botonAlerta = document.getElementById("btn-alerta");
    if (botonAlerta) {
        botonAlerta.addEventListener("click", function () {
            alert("¡Hola! Esto es una alerta de JavaScript.");
        });
    }

    const botonToggle = document.getElementById("btn-toggle");
    if (botonToggle) {
        botonToggle.addEventListener("click", function () {
            const caja = document.getElementById("caja-toggle");
            if (caja.style.display === "none") {
                caja.style.display = "block";
                botonToggle.textContent = "Ocultar caja";
            } else {
                caja.style.display = "none";
                botonToggle.textContent = "Mostrar caja";
            }
        });
    }

});