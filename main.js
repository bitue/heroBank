
//action is here even 
document.getElementById("login").addEventListener("click", function (event) {
    let email = document.getElementById("email").value

    let pass = document.getElementById("pass").value
    if (email == "a" && pass == "1") {
        window.location.href = "banking.html"

    }

})