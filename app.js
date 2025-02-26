document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const botonAgregar = document.querySelector(".button-add");
    const botonSortear = document.querySelector(".button-draw");

    function agregarAmigo() {
        let nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Ese nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        
        amigos.forEach((amigo) => {
            let li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];

        resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
    }

    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);
});