let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Vui lòng nhập độ dài hợp lệ.");
} else if (a + b > c && a + c > b && b + c > a) {
    console.log("Đây là một tam giác hợp lệ.");

    if (a === b && b === c) {
        console.log("Tam giác đều.");
    } else if (a === b || a === c || b === c) {
        console.log("Tam giác cân.");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        console.log("Tam giác vuông.");
    } else {
        console.log("Tam giác thường.");
    }
} else {
    console.log("Ba cạnh không tạo thành tam giác.");
}