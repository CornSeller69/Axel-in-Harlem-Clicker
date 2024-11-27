let points = 0;
let pts = document.getElementById("cash");
let recentlyPurchased;
let but = "You already own this!";
let brokeh = "You're too poor for that, lmao.";
let base = "Aight, You must own the base purchase to buy this, buddy...";
let earningsPerClick = 1;
let multiplier = 1;

let lang = 'en'; // język gry, defaultowo jest en (angielski)

// Muzyka:
    let musicT = 0; // sprawdza warian muzyki
    let isMusic = true; // upewnia się że muzyka ma grać
    let isPiano = false; // sprawdza czy ma grać wersja pianinowa
    let chosenT = 'normal'; // sprawdza jaki track został wybrany (domyślny/pianino)
    // mus_01
    const mus_01 = new Audio('Materials/mus_01.mp3'); // Disclaimer: Plik JS znajduje się w folderze Sources/, jednakże nie cofamy się przy użyciu '../', jako, iż skrypt *w teorii* odpalany jest z lokalizacji pliku HTML (przynajmniej tak na to wygląda podczas prób odtworzenia audio)
    mus_01.volume = '0.4';
    mus_01.currentTime = 0;
    mus_01.loop = true;
    // mus_02
    const mus_02 = new Audio('Materials/haunted_piano.mp3');
    mus_02.volume = '0.9';
    mus_02.currentTime = 0;
    mus_02.loop = true;
    //mus_store
    const mus_store = new Audio('Materials/mus_store.wav');
    mus_store.volume = '0.2';
    mus_store.currentTime = 0;
    mus_store.loop = true;
    //mus_purchase
    const mus_purchase = new Audio('Materials/mus_purchase.mp3');
    const mus_nope = new Audio('Materials/nope_4.mp3');
    const mus_srcb = new Audio('Materials/button.wav');

// Zakupione:
    let cowboyOwned = false;
    let pianoGuyOwned = false;
    let concernedOwned = false;
    let friendsOwned = false;
    let oldPhotoOwned = false;
    let mgeOwned = false;
    let pianoCoverOwned = false;