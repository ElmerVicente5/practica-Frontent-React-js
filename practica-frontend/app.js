document.addEventListener("DOMContentLoaded", () => {
    console.log("Práctica de Frontend Cargada");
  
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
      if (name === '' || message === '') {
        alert('Por favor, complete todos los campos.');
      } else {
        alert(`Gracias, ${name}! Hemos recibido tu mensaje.`);
      }
    });
  });
  