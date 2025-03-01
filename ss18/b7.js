let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));

if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập số hợp lệ.");
} else {
    console.log("Số a:", a);
    console.log("Số b:", b);
    console.log("Tổng a + b =", a + b);
    console.log("Hiệu a - b =", a - b);
    console.log("Tích a * b =", a * b);
    console.log("Thương a / b =", b !== 0 ? (a / b) : "Không thể chia cho 0");

    if (a > b) {
        console.log("Số a lớn hơn số b.");
    } else if (a < b) {
        console.log("Số b lớn hơn số a.");
    } else {
        console.log("Hai số bằng nhau.");
    }
}