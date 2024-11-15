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

function bootGame() {
    document.getElementById("menu").style.visibility = 'hidden';
    document.getElementById("click-area").style.pointerEvents = 'auto';
    mus_01.play();
    console.log("If you don't hear anything right now [music], that means script broke...lmao.");
}

function clicking() {
    points = points + earningsPerClick * multiplier;
    refreshMoney();
}

function openShop() {
    if (isMusic) {
        if (musicT == 0) {
            mus_01.pause();
            mus_store.currentTime = mus_01.currentTime;
            mus_store.play();
        } else if (musicT == 2) {
            mus_02.pause();
            mus_store.currentTime = mus_02.currentTime;
            mus_store.play();
        }
    }
    //document.getElementById("shop").style.visibility = 'visible';
    document.getElementById("shop").classList.add("visible");
document.getElementById("close-shop").addEventListener("click", function() {
  document.getElementById("shop").classList.remove("visible");
});

}

function closeShop() {
    if (isMusic) {
        mus_store.pause();
        //let a = mus_store.currentTime + 2700;  --- leaving this here just in case I need it because music fucks up again!!!!11!! <3
        if (!isPiano) {
        mus_01.currentTime = mus_store.currentTime;
        mus_01.play();
        musicT = 0;
        } else {
            mus_02.currentTime = mus_store.currentTime;
            mus_02.play();
            musicT = 2;
        }
    }
    //document.getElementById("shop").style.visibility = 'hidden';
    document.getElementById("shop").classList.remove("visible");
}

function getCowboy() {
    if (!cowboyOwned) {
        if (points >= 200) {
            points = points - 200.00;
            refreshMoney();
            recentlyPurchased = "Cowboy";
            purchaseDelay();
            document.getElementById("cowboy").style.visibility = 'visible';
            cowboyOwned = true;
            earningsPerClick = parseFloat((earningsPerClick + 0.1).toFixed(2));
            document.getElementById("buyCowboy").style.backgroundColor = 'gray';
        } else {alert();}
    } else {alert(but);}
}

function getPianoGuy() {
    if (!pianoGuyOwned) {
        if (points >= 500.50) {
            points = points - 500.50;
            refreshMoney();
            recentlyPurchased = "Piano Gentleman";
            purchaseDelay();
            document.getElementById("piano_guy").style.visibility = 'visible';
            pianoGuyOwned = true;
            multiplier = multiplier + 0.2;
            document.getElementById("buyPianoGuy").style.backgroundColor = 'gray';
            document.getElementById("buyPianoCover").disabled = false;
        } else {alert(brokeh);}
    } else {alert(but);}
}

function getConcerned() {
    if (!concernedOwned) {
        if (points >= 705.90) {
            points = points - 705.90;
            refreshMoney();
            recentlyPurchased = "Concerned Citizens";
            purchaseDelay();
            document.getElementById("the_concerned").style.visibility = 'visible';
            concernedOwned = true;
            earningsPerClick = parseFloat((earningsPerClick + 0.5).toFixed(2));
            document.getElementById("buyConcerned").style.backgroundColor = 'gray';
        } else {alert(brokeh);}
    } else {alert(but);}
}

function getFriends() {
    if (!friendsOwned) {
        if (points >= 1111.11) {
            points = points - 1111.11;
            refreshMoney();
            recentlyPurchased = "Friends";
            purchaseDelay();
            document.getElementById("friends").style.visibility = 'visible';
            friendsOwned = true;
            multiplier = multiplier + 0.3;
            document.getElementById("buyFriends").style.backgroundColor = 'gray';
        } else {alert(brokeh);}
    } else {alert(but);}
}

function getPhoto() {
    if (!oldPhotoOwned) {
        if (points >= 5050.55) {
            points = points - 5050.55;
            refreshMoney();
            recentlyPurchased = "Old Photo";
            purchaseDelay();
            document.getElementById("old_photo").style.visibility = 'visible';
            oldPhotoOwned = true;
            earningsPerClick = parseFloat((earningsPerClick + 1).toFixed(2));
            document.getElementById("buyPhoto").style.backgroundColor = 'gray';
        } else {alert(brokeh);}
    } else {alert(but);}
}

function getMGE() {
    if (!mgeOwned) {
        if (points >= 13010.99) {
            points = points - 13010.99;
            refreshMoney();
            recentlyPurchased = "MGE Buddy";
            purchaseDelay();
            document.getElementById("mge").style.visibility = 'visible';
            mgeOwned = true;
            multiplier = multiplier + 0.7;
            document.getElementById("buyMGE").style.backgroundColor = 'gray';
        } else {alert(brokeh);}
    } else {alert(but);}
}

function getPianoCover() {
    if (pianoGuyOwned) {
        if (!pianoCoverOwned) {
            if (points >= 3100) {
                points = points - 3100;
                refreshMoney();
                recentlyPurchased = "Piano Concert";
                purchaseDelay();
                pianoCoverOwned = true;
                isPiano = true;
                document.getElementById("buyPianoCover").style.backgroundColor = 'gray';
            } else {alert(brokeh);}
        } else {alert(but);}
    } else {alert(base);}
}

// Powyżej wstawiaj zakupy marketowe

function toggleMusic() {
    if (!isMusic) {
        if (musicT == 0 || musicT == 2) {
            if (!isPiano) {
                mus_01.play();
            } else {mus_02.play();}
        } else if (musicT == 1) {mus_store.play();}
        isMusic = true;
    } else if(isMusic) {
        mus_01.pause();
        mus_store.pause();
        mus_02.pause();
        isMusic = false;
    }
}

function refreshMoney() {
    pts.textContent = "Cash: " + points.toFixed(2) + "$";
}