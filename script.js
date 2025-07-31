function lanzarConfeti() {
    // Crea múltiples partículas de confeti
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 5000);
    }
}
