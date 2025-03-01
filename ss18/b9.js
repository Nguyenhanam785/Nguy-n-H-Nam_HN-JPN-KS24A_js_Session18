let hours = parseInt(prompt("Nhập giờ (0-23):"));
let minutes = parseInt(prompt("Nhập phút (0-59):"));
let seconds = parseInt(prompt("Nhập giây (0-59):"));

if (
    isNaN(hours) || isNaN(minutes) || isNaN(seconds) || 
    hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59
) {
    console.log("Vui lòng nhập giá trị hợp lệ.");
} else {
    let period = hours >= 12 ? "PM" : "AM";
    let hour12 = hours % 12 === 0 ? 12 : hours % 12;
    let formattedTime = 
        (hour12 < 10 ? "0" : "") + hour12 + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + " " + period;

    console.log("Giờ 12h:", formattedTime);
}