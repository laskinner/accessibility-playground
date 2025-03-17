document.getElementById('counterBtn').addEventListener('mousedown', function() {
    let count = parseInt(document.getElementById('count').innerText);
    document.getElementById('count').innerText = count + 1;
});

document.getElementById('resetBtn').addEventListener('mousedown', function() {
    if (Math.random() > 0.5) { // 50% chance of working
        document.getElementById('count').innerText = '0';
    }
});
