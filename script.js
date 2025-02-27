let teksArray = ["Halo!", "Selamat Datang!", "Bagaimana kabarmu?", "Semangat!", "Klik lagi!"];
let index = 0;

function gantiTeks() {
    index = (index + 1) % teksArray.length;
    document.getElementById("teks").innerText = teksArray[index];
}