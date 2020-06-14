var eventos = [];
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
    for (var i = 1; i < 3; i++) {
      html = `
                <h3 class="nombre"><a href="detalle.html?id=${ef[i-1].id}">${ef[i - 1].nombre}</a></h3>
                <p class="fecha">${ef[i - 1].fecha}</p>
                <p class="des">${ef[i - 1].descripcion}</p>
                `
      document.getElementById(`eventofuturo${i}`).innerHTML = html
    }
  })

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(respuesta => {
    var eventos = respuesta.eventos
    var eventosFiltrados = eventos.filter(item => {
      return item.fecha < respuesta.fechaActual
    })
    var eventosFiltrados = eventosFiltrados.sort((a, b) => {
      if (Date.parse(a.fecha) < Date.parse(b.fecha)) {
        return 1;
      }
      return -1;
    })
    var ef = eventosFiltrados;
    var html = [];
    for (var i = 1; i < 3; i++) {
        html = `
                <h3 class="nombre"><a href="detalle.html?id=${ef[i-1].id}">${ef[i - 1].nombre}</a></h3>
                <p class="fecha">${ef[i - 1].fecha}</p>
                <p class="des">${ef[i - 1].descripcion}</p>
                `
      document.getElementById(`eventopasado${i}`).innerHTML = html
    }
  })
});
