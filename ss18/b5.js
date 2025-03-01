let years = Number(prompt("Nhập số năm kinh nghiệm:"));

if (years < 1) {
    console.log("Mới vào nghề");
} else if (years >= 1 && years <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (years >= 4 && years <= 6) {
    console.log("Chuyên viên");
} else {
    console.log("Quản lý");
}
