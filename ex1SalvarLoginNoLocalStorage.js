function login () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (localStorage.getItem("user") === null) {
        let user = JSON.stringify({username: username, password: password})
        localStorage.setItem("user", user);
    }
    location.href = "ex1AppLoginStart2.html";
}

function logout () {
    localStorage.clear();
    location.href = "ex1AppLoginStart.html";
}