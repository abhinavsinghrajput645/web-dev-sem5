function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register here");
            resolve();
            // reject("Registration failed"); // Uncomment to test rejection
        }, 2000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login here");
            resolve();
        }, 3000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data from DB");
            resolve();
        }, 4000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display data");
            resolve();
        }, 1000);
    });
}

register()
    .then(() => login())
    .then(() => getData())
    .then(() => displayData())
    .then(() => {
        console.log("Call another application");
    })
    .catch((error) => {
        console.log(error);
    });