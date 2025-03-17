document.getElementById('counterBtn').addEventListener('mousedown', function() {
    let count = parseInt(document.getElementById('count').innerText);
    document.getElementById('count').innerText = count + 1;
});
