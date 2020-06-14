$(document).ready(function () {

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done (respuesta =>{
    eventos = respuesta.eventos;

  var id = location.search.match(/id=(\d)*/)[1]

  evento = eventos.find(elemento => {
    return elemento.id == id
  })

  var html = `<h2>${evento.nombre}</h2>
              <p id="eventoylugar">${evento.fecha} - ${evento.lugar}</p>
              <p>${evento.descripcion}</p>
              <p id="costo">Costo: ${evento.precio}</p>
              <p id="invitados">Invitados: ${evento.invitados}</p>
              `

  document.getElementById("contenedordetalle").innerHTML = html
  });

});
