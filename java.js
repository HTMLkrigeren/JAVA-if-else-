// Oppgave 1
console.log("Oppgave 1")
var tekst1 = "hallo "
var tekst2 = "hadde"

console.log(tekst1 + tekst2)

// Oppgave 2
console.log("Oppgave 2")
var tallet = -2;

if (tallet >= 0) {
    console.log("Tallet er posetivt")
} else if (tallet <0) {
    console.log("Tallet er negativt")
}

// Oppgave 3
console.log("Oppgave 3")
var tall1 = 28;
var tall2 = 10;

if (tall1 > tall2) {
    console.log("tall1 er størst")
} else if (tall2 > tall1) {
    console.log("tall2 er størst")
} else {
    console.log("tallene er like")
}

// Oppgave 4
console.log("Oppgave 4")
var Tall1 = 100;
var Tall2 = 285;
var Tall3 = 500;


if (Tall1 > Tall2 && Tall1 > Tall3) {
    console.log("Tall1 er strøst");
    
} else if (Tall2 > Tall1 && Tall2 > Tall3) {
    console.log("Tall2 er strøst");
    
}else if (Tall3 > Tall1 && Tall3 > Tall2) {
    console.log("Tall3 er strøst");
    
}

// Oppgave 5
console.log("Oppgave 5")
var elev = 49; // velg hvor mange poeng 0 - 100
if (elev < 0 || elev > 100) {
    console.log("noe er feil, må være mellom 0-100.")
} else if (elev >= 50) {
    console.log("Elev har beståd")
} else if (elev < 50) {
    console.log("Elev har ikke beståt")
} 

// Oppgave 6
console.log("Oppgave 6")
var dagnummer = 4; // velg en dag

if (dagnummer > 7 || dagnummer < 1) {
    console.log("Noe er feil, må være mellom 1-7")
} else if (dagnummer == 1) {
    console.log("Mandag")
} else if (dagnummer == 2) {
    console.log("Tirsdag")
} else if (dagnummer == 3) {
    console.log("Onsdag")
} else if (dagnummer == 4) {
    console.log("Torsdag")
} else if (dagnummer == 5) {
    console.log("Fredag")
} else if (dagnummer == 6) {
    console.log("Lørdag")
} else if (dagnummer == 7) {
    console.log("Søndag")
}

// Oppgave 7
console.log("Oppgave 7")
var celsius = 99; // Celcius her
var fahrenheit = (celsius * 9/5) + 32;

if (celsius >= -273.15) {
    console.log(celsius + "C er lik " + fahrenheit + "F");
} else if (celsius < -273.15) {
    console.log("Temperaturen kan ikke være lavere enn -273.15C");
} else {
    console.log("noe er feil");
}

// Oppgave 8
console.log("oppgave 8")

var karakter1 = 70; // skriv et tall mellom 0-100
var karakter2 = 20;

if (karakter1 > 100 || karakter1 < 0 || karakter2 > 100 || karakter2 < 0) {
    console.log("karakterene må være innenfor 0-100") 
} else if ((karakter1 + karakter2) / 2 < 50) {
    console.log((karakter1 + karakter2) / 2)
    console.log("du har ikke bestått")
} else if (karakter1 < 100 || karakter1 > 0 || karakter2 < 100 || karakter2 > 0) {
    console.log((karakter1 + karakter2) / 2 )
    console.log("du har bestått")
} else ("feil")

// Oppgave 9
console.log("Oppgave 9")

var nummer1 = 90; // skriv forskjellige tall
var nummer2 = 200;
var nummer3 = 102;

if (nummer1 < nummer2 && nummer1 < nummer3) {
    console.log("Nummer1 er minst")
} else if (nummer2 < nummer1 && nummer2 < nummer3) {
    console.log("Nummer2 er minst")
} else if (nummer3 < nummer1 && nummer3 < nummer2) {
    console.log("Nummer3 er minst")
} else ("Feil")

// Oppgave 10 
console.log("Oppgave 10")

var bokstav = "b"

if (bokstav == "A" || bokstav == "E" || bokstav == "I" || bokstav == "O" || bokstav == "U" || bokstav == "Æ" || bokstav == "Ø" || bokstav == "Å" || bokstav == "a" || bokstav == "e" || bokstav == "i" || bokstav == "o" || bokstav == "u" || bokstav == "æ" || bokstav == "ø" || bokstav == "å") {
    console.log("bokstaven er en vokal")
} else if (bokstav == "B" || bokstav == "C" || bokstav == "D" || bokstav == "F" || bokstav == "G" || bokstav == "H" || bokstav == "J" || bokstav == "K" || bokstav == "L" || bokstav == "M" || bokstav == "N" || bokstav == "P" || bokstav == "Q" || bokstav == "R" || bokstav == "S" || bokstav == "T" || bokstav == "V" || bokstav == "W" || bokstav == "X" || bokstav == "Y" || bokstav == "Z" || bokstav == "b" || bokstav == "c" || bokstav == "d" || bokstav == "f" || bokstav == "g" || bokstav == "h" || bokstav == "j" || bokstav == "k" || bokstav == "l" || bokstav == "m" || bokstav == "n" || bokstav == "p" || bokstav == "q" || bokstav == "r" || bokstav == "s" || bokstav == "t" || bokstav == "v" || bokstav == "w" || bokstav == "x" || bokstav == "y" || bokstav == "z") {
    console.log("Bokstaven er ikke en vokal")
} else {
    console.log("Du må skrive en bokstav fra albhabetet!!!!!!")
}
    // B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z

// Oppgave 11
console.log("Oppgave 11")
// Oppgave 11 er i HTML SCRiPT
function FargeSkifte() {
    var color = document.getElementById('farge').value; // henter id til inputen
    document.getElementById('tekst').style.color = color; //getelementbyid henter id, style.color = color skifter farge man kan skifte det ut med style.fontfamily = font family så kan man skifte font.
}