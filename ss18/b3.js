let username = prompt("Nhập tên người dùng:");

if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu:");
    if (password === "TheMaster") {
        console.log("Welcome");
        document.write("Welcome");
        alert("Welcome");
    } else if (password === null) {
        console.log("Cancelled");
        document.write("Cancelled");
        alert("Cancelled");
    } else {
        console.log("Wrong password");
        document.write("Wrong password");
        alert("Wrong password");
    }
} else if (username === null) {
    console.log("Cancelled");
    document.write("Cancelled");
    alert("Cancelled");
} else {
    console.log("I Don’t know you");
    document.write("I Don’t know you");
    alert("I Don’t know you");
}
