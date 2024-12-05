
// Destacar o link ativo no menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Abrir imagens em um modal
const galleryImages = document.querySelectorAll('.gallery');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;
        document.body.appendChild(modal);

        // Fechar modal ao clicar no "X" ou fora do modal
        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});

// Botão de voltar ao topo
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
  // Seleciona o botão e todas as imagens
  const button = document.getElementById('highlight-btn');
  const images = document.querySelectorAll('.gallery');

  // Adiciona o evento de clique ao botão
  button.addEventListener('click', () => {
    images.forEach(img => {
      img.classList.toggle('highlight'); // Alterna a classe 'highlight'
    });
  });
