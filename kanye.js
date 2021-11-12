function getKanye() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showKanye(data))
}

function showKanye(data) {
    document.getElementById('quotes')
    const p = document.createElement('p');
    p.innerText = data.quote;
    quotes.appendChild(p);
    console.log(data.quote)
}