document.getElementById('counterBtnmd').addEventListener('mousedown', function() {
    let count = parseInt(document.getElementById('countmd').innerText);
    document.getElementById('countmd').innerText = count + 1;
});

document.getElementById('counterBtnclick').addEventListener('click', function() {
    let count = parseInt(document.getElementById('countclick').innerText);
    document.getElementById('countclick').innerText = count + 1;
});
