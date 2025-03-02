const units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const specialTens = {1: "mười", 0: "linh"};

const n = parseInt(prompt("Nhập số (0-999): "), 10);
if (n >= 0 && n <= 999) {
    let hundreds = Math.floor(n / 100);
    let tens = Math.floor((n % 100) / 10);
    let ones = n % 10;

    let result = "";

    if (hundreds) {
        result += units[hundreds] + " trăm";
        if (tens === 0 && ones !== 0) {
            result += " " + specialTens[0];
        }
    }

    if (tens) {
        if (tens === 1) {
            result += " " + specialTens[1];
        } else {
            result += " " + units[tens] + " mươi";
        }
    }

    if (ones) {
        if (tens > 1 && ones === 5) {
            result += " lăm";
        } else if (tens > 0) {
            result += " " + units[ones];
        } else {
            result += " " + units[ones];
        }
    }

    console.log("Kết quả:", result.trim());
    document.write("Kết quả:", result.trim());
    alert("Kết quả:", result.trim());
} else {
    console.log("Vui lòng nhập số trong khoảng 0-999.");
    document.write("Vuiổi nhập số trong khoảng 0-999.");
    alert("Vuiổi nhập số trong khoảng 0-999.");
}