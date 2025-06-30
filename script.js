document.getElementById('action-btn').addEventListener('click', function() {
    const messageSection = document.getElementById('message');
    messageSection.classList.remove('hidden');
    this.textContent = '¡Disfruta!';
});
