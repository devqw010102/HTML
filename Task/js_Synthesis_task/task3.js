let textarea = document.getElementById('textarea');
let charCount = document.getElementById('charCount');

textarea.addEventListener('input', function() {
    let current = textarea.value.length;
    charCount.textContent = current;
});