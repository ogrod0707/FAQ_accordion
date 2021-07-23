

let accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++){
    accordions[i].addEventListener('click', function(){ // addEventListener - funkcja nasluchuje na zdarzenie 'click' i wykonuje funkcje
        this.classList.toggle('active') // po kliknieciu dodaje klase 'active', a po ponownym kliknieciu usuwa ją
    })
}