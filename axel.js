var mus_01 = new Audio('Materials/mus_01.mp3'); // Disclaimer: Plik JS znajduje się w folderze Sources/, jednakże nie cofamy się przy użyciu '../', jako, iż skrypt *w teorii* odpalany jest z lokalizacji pliku HTML (przynajmniej tak na to wygląda podczas prób odtworzenia audio)
mus_01.volume = '0.4';
mus_01.currentTime = 0;
var mus_store = new Audio('Materials/mus_store.wav');
mus_store.volume = '0.2';
mus_store.currentTime = 0;
let points = 0;
let pts = document.getElementById("cash");
let musicT = 0;

function bootGame() {
    document.getElementById("menu").style.visibility = 'hidden';
    mus_01.play();
    setInterval(loopMusic, 135000);
    console.log("If you don't hear anything right now [music], that means script broke... Which is something I expected to happen lmao");
}

function loopMusic() {
    switch (musicT) {
        case 0:
            mus_01.currentTime = 0;
            mus_01.play();
            break;
        case 1:
            mus_store.currentTime = 0;
            mus_store.play();
            break;
    }
}

function clicking() {
    points++;
    pts.textContent = "Cash: " + points + "$";
}

function openShop() {
    mus_01.pause();
    mus_store.currentTime = mus_01.currentTime;
    mus_store.play();
    musicT = 1;
    document.getElementById("shop").style.visibility = 'visible';
}

function closeShop() {
    mus_store.pause();
    mus_01.currentTime - mus_store.currentTime;
    mus_01.play();
    musicT = 0;
    document.getElementById("shop").style.visibility = 'hidden';
}