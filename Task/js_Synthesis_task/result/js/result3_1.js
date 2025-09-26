let textarea = document.getElementById('textarea');
let charCount = document.getElementById('charCount');

textarea.addEventListener('input', f = () => charCount.textContent = textarea.value.length);