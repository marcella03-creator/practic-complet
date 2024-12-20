const tarjeta = document.querySelector('.tarjeta');

// Efecto 3D dinámico al mover el mouse
tarjeta.addEventListener('mousemove', (event) => {
  const { offsetWidth: width, offsetHeight: height } = tarjeta;
  const { offsetX: x, offsetY: y } = event;

  // Calcular rotación basado en la posición del mouse
  const rotacionX = ((y / height) - 0.5) * 20;
  const rotacionY = ((x / width) - 0.5) * -20;

  // Aplicar rotación en la tarjeta
  tarjeta.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`;
});

// Restablecer la animación cuando se sale del área
tarjeta.addEventListener('mouseleave', () => {
  tarjeta.style.transform = 'rotateX(0) rotateY(0)';
});
