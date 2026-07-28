function waitfordelay(delay) {
    let start = Date.now();
    while (Date.now() - start < delay) {
        // Wait
    }
}

function register() {
    console.log("register here");
    waitfordelay(2000);
}

function login() {
    console.log("login here");
    waitfordelay(3000);
}

function getData() {
    console.log("fetch data from DB");
    waitfordelay(4000);
}

function displayData() {
    console.log("display data");
    waitfordelay(1000);
}

register();
login();
getData();
displayData();
console.log("call another application");