
const container = document.querySelector('.container');
const fireworks = new Fireworks(container, {
  autoresize: true,
  particles: 80,
  trace: 3,
  explosion: 5,
  sound: {
    enabled: true,
    files: [
      '/public/sound/explosion0.mp3',
      '/public/sound/explosion1.mp3',
      '/public/sound/explosion2.mp3'
    ],
    volume: {
      min: 5,
      max: 10
    }
  }
});
// Inicia los fuegos artificiales


window.addEventListener('DOMContentLoaded',(event) => {
    fireworks.start();
});


const texto = document.getElementById('msg');


window.addEventListener('DOMContentLoaded',(event) => {
    setTimeout(()=>{
        texto.classList.add('boom-animation');
    },100);
});

const botones = document.getElementById('botones');
botones.classList.add('hidden');

window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        texto.classList.add('hidden');
        botones.classList.remove('hidden');  // Hacer visibles los botones
        botones.classList.add('boom-animation');  // Aplicar animación de boom
    }, 4000); // Esperar 15 segundos
});

const links = {
    b1: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b2: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b3: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b4: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b5: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b6: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b7: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    b8: 'https://www.youtube.com/watch?v=vG0vOjXiNAg',
    // Agregar más enlaces según sea necesario
  };
  
  // Función para abrir el enlace según el id del botón
  function openLink(id) {
    const url = links[id];  // Obtener el enlace desde el diccionario
    if (url) {
      window.open(url, '_blank');  // Abrir el enlace en una nueva pestaña
    } else {
      console.error("No se encontró el enlace para este botón.");
    }
  }

  document.querySelectorAll('[id^="b"]').forEach(button => {
    // Agregar el evento de clic a cada botón
    button.addEventListener('click', function() {
      openLink(button.id);  // Llamar a openLink con el id del botón
    });
  });


