"use-strict";
function Checker_Reg() {
    var truth_reg = true;
    var credintials = [] // struktura je username, password
    $("#reg :input").each(function () {
        var input = $(this)[0];
        console.log(input);
        if (input.value === "") {
            input.style.borderColor = "red";
            truth_reg = false;
        } else if (input.name === "username" || input.name === "password") {
            credintials.push(input.value);
        };

    });
    if (truth_reg === true) {
        window.open('app.html');
        console.log("Success!");
    } else {
        alert("Error!");
    }
    // ukládání pole do cookie
    document.cookie = credintials.join(",");
};

function Checker_Login() {
    var truth_login = false;
    // načítám data z cookie a ukládám je do proměnných
    var arr = document.cookie.split(",");
    var username;
    var password;
    $("#login :input").each(function () {
        var input2 = $(this)[0];
        if (input2.name === "username") {
            username = input2.value;
        }
        if (input2.name === "password") {
            password = input2.value;
        }
    });
    // Porovnávám přihlašovací údaje s údaji uloženými v cookie
    if (username === arr[0]) {
        truth_login = true;
    } else {
        truth_login = false;
    }
    if (truth_login && password === arr[1]) {
        console.log("Login successful");
    } else {
        truth_login = false
        alert("Incoreect login data");
    }

    if (truth_login === true) {
        window.open('app.html');
        
    }
};

/*
Test jak zavolat spravne v jQuerry button z modalu

$("#modal_reg").on('click', '#reg_submit', function () {
    var midVal = "IT WORKS!";
    console.log(midVal);
});
*/
$("#modal_reg").on('click', '#reg_submit', Checker_Reg);
$("#modal_login").on('click', '#login_submit', Checker_Login);
