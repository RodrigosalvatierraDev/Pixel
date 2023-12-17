document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.show-overlay');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      document.getElementById('overlay').style.display = 'flex';
      var destination = this.href;
      setTimeout(function () {
        window.location.href = destination;
      }, 2000);
    });
  });
});

// Descubre mas

document.getElementById('botonDescubrir').addEventListener('click', function () {
  // Tu lógica o función aquí
  alert('P I X E L\n\n Por favor registrese para mas informacion ¡Gracias!');
});



//Alertas//
function mostrarAlerta() {
  alert('P I X E L\n\nPara comprar este artículo, por favor REGISTRATE.');
}