$(document).ready(function () {

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(respuesta => {
    var eventos = respuesta.eventos
    var eventosFiltrados = eventos.filter(item => {
      return item.fecha > respuesta.fechaActual
    })

    var eventosFiltrados = eventosFiltrados.sort((a, b) => {
      if (Date.parse(a.fecha) < Date.parse(b.fecha)) {
        return -1;
      }
      return 1;
    })

    var ef = eventosFiltrados;
    var html = [];
    for (var i = 0; i < ef.length; i++) {
      html = `
              <div id="eventosfuturos">
                <h3 class="nombre"><a href="detalle.html?id=${ef[i].id}">${ef[i].nombre}</a></h3>
                <p class="fecha">${ef[i].fecha}</p>
                <p class="des">${ef[i].descripcion}</p>
              <div>
                `
      document.getElementById("containereventos").innerHTML += html
    }
  })
});
