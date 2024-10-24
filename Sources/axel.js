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
    let buttons = document.getElementsByClassName("purchase-buttons") // Pamiętaj aby przypinać odpowiednie przyciski pod klasę obok wymienioną!!
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    mus_purchase.play();
    alert(recentlyPurchased + " has been purchased!");
    setTimeout(function() {
        mus_purchase.pause();
        mus_purchase.currentTime = 0;
        let buttons = document.getElementsByClassName("purchase-buttons") // Pamiętaj aby przypinać odpowiednie przyciski pod klasę obok wymienioną!!
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
      }, 2330);
}
let recentlyPurchased;
// Poniżej wstawiaj sprawdzania jakie decory z aktywnymi efektami są zakupione...
let cowboyOwned = false;

function bootGame() {
    document.getElementById("menu").style.visibility = 'hidden';
    document.getElementById("click-area").style.pointerEvents = 'auto';
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
    if (cowboyOwned) {
        points = points + 0.1;
    }
    pts.textContent = "Cash: " + points + "$";
}

function openShop() {
    mus_01.pause();
    mus_store.currentTime = mus_01.currentTime;
    mus_store.play();
    musicT = 1;
    //document.getElementById("shop").style.visibility = 'visible';
    document.getElementById("shop").classList.add("visible");
document.getElementById("close-shop").addEventListener("click", function() {
  document.getElementById("shop").classList.remove("visible");
});

}

function closeShop() {
    mus_store.pause();
    mus_01.currentTime - mus_store.currentTime;
    mus_01.play();
    musicT = 0;
    //document.getElementById("shop").style.visibility = 'hidden';
    document.getElementById("shop").classList.remove("visible");
}

function getCowboy() {
    if (!cowboyOwned) {
        if (points >= 200) {
            points = points - 200;
            recentlyPurchased = "Cowboy";
            purchaseDelay();
            document.getElementById("cowboy").style.visibility = 'visible';
            cowboyOwned = true;
            document.getElementById("buyCowboy").style.backgroundColor = 'gray';
        } else {alert("You're too poor for that, lmao.");}
    } else {alert("You already own this!");}
}

//  Usuń/Zrecyklinguj kod poniżej po wprowadzeniu właściwego sklepu  \\
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

function temp_getCowboy() {
    recentlyPurchased = "Cowboy";
    purchaseDelay();
    document.getElementById("cowboy").style.visibility = 'visible';
    cowboyOwned = true;
}

function temp_getPhoto() {
    recentlyPurchased = "Old Photo";
    purchaseDelay();
    document.getElementById("old-photo").style.visibility = 'visible';
}

function temp_getMGE() {
    recentlyPurchased = "MGE Buddy";
    purchaseDelay();
    document.getElementById("mge").style.visibility = 'visible';
}
//  Usuń kod powyżej po wprowadzeniu właściwego sklepu  \\