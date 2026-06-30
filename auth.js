function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "1234") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid Username or Password";
    }
}
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
function checkLogin() {
    if (sessionStorage.getItem("loggedIn") != "true") {
        window.location.href = "index.html";
    }
}