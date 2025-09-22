
        let canciones = [];
        let id = 1;

        function guardarCancion() {
            let cancion = document.getElementById("cancion").value;
            let cantante = document.getElementById("cantante").value;
            let discografica = document.getElementById("discografica").value;
            let duracion = document.getElementById("duracion").value;
            let nacionalidad = document.getElementById("nacionalidad").value;

            if (!cancion || !cantante || !discografica || !duracion || !nacionalidad) {
                alert("Por favor complete todos los campos");
                return;
            }

            // Crear objeto
            let nuevaCancion = { id, cancion, cantante, discografica, duracion, nacionalidad };

            // Mostrar confirmación con alert
            let mensaje = 
                "InfoSong.cancion = " + nuevaCancion.cancion + "\n" +
                "InfoSong.cantante = " + nuevaCancion.cantante + "\n" +
                "InfoSong.discografica = " + nuevaCancion.discografica + "\n" +
                "InfoSong.duracion = " + nuevaCancion.duracion + "\n" +
                "InfoSong.nacionalidad = " + nuevaCancion.nacionalidad + "\n\n" +
                "¿Es esta información correcta?";
            
            if (confirm(mensaje)) {
                canciones.push(nuevaCancion);
                id++;
                mostrarCanciones();

                // Limpiar campos
                document.getElementById("cancion").value = "";
                document.getElementById("cantante").value = "";
                document.getElementById("discografica").value = "";
                document.getElementById("duracion").value = "";
                document.getElementById("nacionalidad").value = "";
            }
        }

        function mostrarCanciones() {
            let tbody = document.querySelector("#tablaCanciones tbody");
            tbody.innerHTML = "";

            canciones.forEach(c => {
                let fila = `
                    <tr>
                        <td>${c.id}</td>
                        <td>${c.cancion}</td>
                        <td>${c.cantante}</td>
                        <td>${c.discografica}</td>
                        <td>${c.duracion}</td>
                        <td>${c.nacionalidad}</td>
                        <td><button class="btn-play" onclick="dalePlay(${c.id})">¡Dale Play!</button></td>
                    </tr>
                `;
                tbody.innerHTML += fila;
            });
        }

        function dalePlay(id) {
            let c = canciones.find(x => x.id === id);
            document.getElementById("infoCancion").innerText =
                `🎵 Canción: ${c.cancion} | 🎤 Cantante: ${c.cantante} | 💿 Discográfica: ${c.discografica} | ⏱ Duración: ${c.duracion} | 🌍 Nacionalidad: ${c.nacionalidad}`;
        }
    