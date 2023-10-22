// Ambil elemen gambar
var gambar = document.getElementById("gambar");
var isMirrored = false;

// Tambahkan event listener untuk mengontrol animasi saat klik
gambar.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar horizontal (mirror)
        gambar.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar2 = document.getElementById("gambar2");
gambar2.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar2 horizontal (mirror)
        gambar2.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar2.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar3 = document.getElementById("gambar3");
gambar3.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar3 horizontal (mirror)
        gambar3.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar3.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar4 = document.getElementById("gambar4");
gambar4.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar4 horizontal (mirror)
        gambar4.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar4.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar5 = document.getElementById("gambar5");
gambar5.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar5 horizontal (mirror)
        gambar5.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar5.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});
