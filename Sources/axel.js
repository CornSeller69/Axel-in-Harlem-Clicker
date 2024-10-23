var mus_01 = new Audio('Materials/mus_01.mp3'); // Disclaimer: Plik JS znajduje się w folderze Sources/, jednakże nie cofamy się przy użyciu '../', jako, iż skrypt *w teorii* odpalany jest z lokalizacji pliku HTML (przynajmniej tak na to wygląda podczas prób odtworzenia audio)
mus_01.volume = '0.4';
mus_01.currentTime = 0;
var mus_store = new Audio('Materials/mus_store.wav');
mus_store.volume = '0.2';
mus_store.currentTime = 0;
let points = 0;
let pts = document.getElementById("cash");
let musicT = 0;
var mus_purchase = new Audio('Materials/mus_purchase.mp3');
function purchaseDelay() {
    document.getElementsByClassName("purchase-buttons").disabled = true; // Pamiętaj aby przypinać odpowiednie przyciski pod klasę obok wymienioną!!
    alert(recentlyPurchased + " has been purchased!");
    mus_purchase.play();
    setTimeout(function() {
        mus_purchase.pause();
        mus_purchase.currentTime = 0;
        document.getElementsByClassName("purchase-buttons").disabled = false;
      }, 4000);
}
let recentlyPurchased;

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


//  Usuń kod poniżej po wprowadzeniu właściwego sklepu  \\
function tempAccess() {document.getElementById("temporary_div").style.visibility = 'visible';}
function close_tempAccess() {document.getElementById("temporary_div").style.visibility = 'hidden';}

function temp_getPianoGuy() {
    recentlyPurchased = "Piano Gentleman";
    purchaseDelay();
    document.getElementById("piano_guy").style.visibility = 'visible';
}

function temp_getConcernedCitizens() {
    recentlyPurchased = "Concerned Citizens";
    purchaseDelay();
    document.getElementById("the_concerned").style.visibility = 'visible';
}

//  Usuń kod powyżej po wprowadzeniu właściwego sklepu  \\