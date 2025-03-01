let toan = Number(prompt("Nhập điểm Toán:"));
let van = Number(prompt("Nhập điểm Văn:"));
let anh = Number(prompt("Nhập điểm Anh:"));

if ([toan, van, anh].some(d => isNaN(d) || d < 0 || d > 10)) {
    console.log("Vui lòng nhập điểm hợp lệ (0-10).");
} else {
    let dtb = (toan + van + anh) / 3;
    let xeploai = dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
    console.log(`Điểm trung bình: ${dtb.toFixed(2)}\nXếp loại học lực: ${xeploai}`);
    document.write(`Điểm trung bình: ${dtb.toFixed(2)}<br>Xếp loại học lực: ${xeploai}`);
    alert(`Điểm trung bình: ${dtb.toFixed(2)}\nXếp loại học lực: ${xeploai}`);
}