let textarea = document.querySelector('textarea');
let count = document.querySelector('span');

textarea.addEventListener('keyup', f = () => count.innerHTML = textarea.value.length);