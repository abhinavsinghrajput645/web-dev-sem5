function register(callback) {
    setTimeout(() => {
        console.log("register here");
        callback();
    }, 2000);
}

function login(callback) {
    setTimeout(() => {
        console.log("login here");
        callback();
    }, 3000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("fetch data from DB");
        callback();
    }, 4000);
}

function displayData(callback) {
    setTimeout(() => {
        console.log("display data");
        callback();
    }, 1000);
}
//callback hell problem
register(function () {
    login(function () {
        getData(function () {
            displayData(function () {
                console.log("call another application");
            });
        });
    });
});