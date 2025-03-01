function numberToWords(num) {
    if (num < 0 || num > 999 || isNaN(num)) {
        return "Vui lòng nhập số trong khoảng 0 - 999.";
    }

    let ones = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    if (num === 0) return "Không";

    let hundred = Math.floor(num / 100);
    let ten = Math.floor((num % 100) / 10);
    let unit = num % 10;
    let words = "";

    if (hundred > 0) {
        words += ones[hundred] + " trăm";
        if (ten === 0 && unit !== 0) words += " linh";
    }

    if (ten > 0) {
        words += (words ? " " : "") + tens[ten];
        if (unit === 5) words += " lăm";
    }

    if (unit > 0 && ten !== 1) {
        words += (words ? " " : "") + ones[unit];
    }

    return words.charAt(0).toUpperCase() + words.slice(1);
}

let num = parseInt(prompt("Nhập số nguyên (0 - 999):"));
console.log(numberToWords(num));