 // --- Carrusel ---
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function mostrarSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById('next').onclick = () => {
      index = (index + 1) % images.length;
      mostrarSlide();
    };

    document.getElementById('prev').onclick = () => {
      index = (index - 1 + images.length) % images.length;
      mostrarSlide();
    };

    setInterval(() => {
      index = (index + 1) % images.length;
      mostrarSlide();
    }, 5000);

    // --- Comentarios ---
    const form = document.getElementById('formComentario');
    const lista = document.getElementById('listaComentarios');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (nombre && mensaje) {
        const div = document.createElement('div');
        div.classList.add('comentario');
        div.innerHTML = `<h4>${nombre}</h4><p>${mensaje}</p>`;
        lista.prepend(div);

        form.reset();
      }
    });