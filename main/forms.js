document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.querySelector('input[type="submit"]').value = '¡Te escribiremos pronto';
});