let num = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(num)) {
    console.log("Vui lòng nhập một số hợp lệ.");
} else if (num % 2 === 0) {
    console.log(num + " là số chẵn.");
    document.write(num + " là số chẵn.");
    alert(num + " là số chẵn.");
} else {
    console.log(num + " là số lẻ.");
    document.write(num + " là số lẻ.");
    alert(num + " là số lẻ.");
}