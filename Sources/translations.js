let short = function(a) {return document.getElementById(a);}
let isPL = false;
let isPirate = false;
let isOwnLang = false;

function change2pl() { // ta funkcja tłumaczy wszystko na polski
    isPL = true;
    but = "Już to posiadasz!";
    brokeh = "Jesteś zbyt biedny na to, lmao.";
    base = "Ah, musisz wpierw zakupić produkt podstawowy, panie kolego...";
    short("t1").innerHTML = "GRAJ";
    short("creator").innerHTML = "Axel in Harlem: Clicker autorstwa CornSeller. Materiały tu użyte należą do Animan Studios.";
    short("cash").innerHTML = "Kasa: 0.00$";
    short("shop-").innerHTML = "SKLEP";
    short("t2").innerHTML = "---- sklep ----";
    short("t3").innerHTML = "Kowboj";
    short("t4").innerHTML = "Dumny kowboj, który zachaczył o Harlem na swojej drodze ku nieznanemu...<br>Aktywny efekt: +0.1$ na kliknięcie";
    short("buyCowboy").innerHTML = "Kup! (200$)";
    short("t5").innerHTML = "Dżentelmen Pianista";
    short("t6").innerHTML = "Ten koleżka wprowadzi dobry gust muzyczny do twojego Harlemu!<br>Aktywny efekt: +0.2 mnożnika kasy<br>Efekt ulepszenia: Zmienia muzykę na podkład pianinowy!";
    short("buyPianoGuy").innerHTML = "Kup! (500.50$)";
    short("buyPianoCover").innerHTML = "Ulepsz! (3100$)";
    short("t7").innerHTML = "Ludność Harlemu, którzy są zszokowani z tego co widzą! Nie spodziewali się zobaczenia takiej legendy jak Axel.<br>Aktywny efekt: +0.5$ na kliknięcie";
    short("t7b").innerHTML = "Zadziwieni Mieszkańcy";
    short("buyConcerned").innerHTML = "Kup! (705.90$)";
    short("t8").innerHTML = "Koledzy Axela";
    short("t9").innerHTML = "Najlepszy kumple Axela! Doprawdy, idą wszędzie tam gdzie on! Jacy wspaniali goście, czyż nie?<br>Aktywny efekt: +0.3 mnożnika kasy"
    short("buyFriends").innerHTML = "Kup! (1111.11$)";
    short("t10").innerHTML = "Stare Zdjęcie";
    short("t11").innerHTML = "Pamiątka rodzinna Axela. Ukazuje jego dziadka idącego tymi samymi ulicami Harlemu co on dzisiaj!<br>Aktywny efekt: +1$ na kliknięcie";
    short("buyPhoto").innerHTML = "Kup! (5050.55$)";
    short("t12").innerHTML = "Kolega MGE";
    short("t13").innerHTML = "Ten koleś nawet nie jest z tego uniwersum, ale jest fajny (i zgadza się, że Axel też jest bardzo fajny) więc postanowił poprostu się... tu pojawić!!<br>Aktywny efekt: +0.7 mnożnika kasy";
    short("buyMGE").innerHTML = "Kup! (13010.99$)";
}

function change2pirate() {
    isPirate = true;
    but = "Ye already own this!";
    brokeh = "Ye be too poor for that, har har!";
    base = "Aye, ye must own the base purchase to buy this, matey...";
    short("t1").innerHTML = "SAIL";
    short("creator").innerHTML = "Axel in Harlem: Clicker, by CornSeller. Materials used here be made by Animan Studios.";
    short("cash").innerHTML = "Dubloons: 0.00$";
    short("shop-").innerHTML = "SHOP";
    short("t2").innerHTML = "---- shop ----";
    short("t3").innerHTML = "Buccaneer";
    short("t4").innerHTML = "Proud buccaneer on his steed that stopped by Harlem on his parts unknown...<br>Active effect: +0.1 dubloons per click";
    short("buyCowboy").innerHTML = "Buy! (200 dubloons)";
    short("t5").innerHTML = "Piano Gentleman";
    short("t6").innerHTML = "This gentle soul will play on his piano to introduce good music taste to yer Harlem!<br>Active effect: +0.2 money multiplier<br>Upgrade effect: Changes background music to piano cover!";
    short("buyPianoGuy").innerHTML = "Buy! (500.50 dubloons)";
    short("buyPianoCover").innerHTML = "Upgrade! (3100 dubloons)";
    short("t7").innerHTML = "People of Harlem that be quite shocked at what they spy! They never thought such a legend as Axel would actually be encountered by them.<br>Active effect: +0.5 dubloons per click";
    short("t7b").innerHTML = "Concerned Citizens";
    short("buyConcerned").innerHTML = "Buy! (705.90 dubloons)";
    short("t8").innerHTML = "Axel's Mates";
    short("t9").innerHTML = "Axel's best mates! In fact, they go everywhere he goes! What fine lads, aren't they?<br>Active effect: +0.3 dubloon multiplier";
    short("buyFriends").innerHTML = "Buy! (1111.11 dubloons)";
    short("t10").innerHTML = "Old Photo";
    short("t11").innerHTML = "Axel's family treasure. It shows his grandpappy walkin' down the same streets of Harlem that he does now!<br>Active effect: +1 dubloon per click";
    short("buyPhoto").innerHTML = "Buy! (5050.55 dubloons)";
    short("t12").innerHTML = "MGE Mate";
    short("t13").innerHTML = "This bloke ain't even from this realm, but he's so cool (and agrees Axel also be very cool) that he decided to just... appear here!!<br>Active effect: +0.7 dubloon multiplier";
    short("buyMGE").innerHTML = "Buy! (13010.99 dubloons)";
}

function ownTrans() {
    isOwnLang = true;
    alert("Check this GitHub Wiki page for more informations about Translation Extension: https://github.com/CornSeller69/Axel-in-Harlem-Clicker/wiki/Insert-own-translation!","Dismiss"); // Dismiss wont work :(
    but = ownt1;
    brokeh = ownt2;
    base = ownt3;
    short("t1").innerHTML = ownt4;
    short("creator").innerHTML = ownt5;
    short("cash").innerHTML = ownt6;
    short("shop-").innerHTML = ownt7;
    short("t2").innerHTML = ownt8;
    short("t3").innerHTML = ownt9;
    short("t4").innerHTML = ownt10;
    short("buyCowboy").innerHTML = ownt11;
    short("t5").innerHTML =  ownt12;
    short("t6").innerHTML = ownt13;
    short("buyPianoGuy").innerHTML = ownt14;
    short("buyPianoCover").innerHTML = ownt15;
    short("t7").innerHTML = ownt16;
    short("t7b").innerHTML = ownt16b;
    short("buyConcerned").innerHTML = ownt17;
    short("t8").innerHTML = ownt18;
    short("t9").innerHTML = ownt19;
    short("buyFriends").innerHTML = ownt20;
    short("t10").innerHTML = ownt21;
    short("t11").innerHTML = ownt22;
    short("buyPhoto").innerHTML = ownt23;
    short("t12").innerHTML = ownt24;
    short("t13").innerHTML = ownt25;
    short("buyMGE").innerHTML = ownt26;
}