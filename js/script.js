document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    // Obtener el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const todayIndex = new Date().getDay() - 1; // Ajustar índice para que coincida con Lunes como 0
    console.log(todayIndex);
    // Resaltar el día actual
    days.forEach((day, index) => {
        if (index === todayIndex) {
            day.classList.add('highlight');
        }
        day.querySelectorAll('.day ul li').forEach((item) => {
            item.addEventListener('click', () => {
                const exercise = item.getAttribute('data-exercise');
                // Cambia la ruta de la imagen del ejercicio
                modalImg.src = `img/${exercise}.jpg`;
                modal.style.display = 'block';
            });
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});