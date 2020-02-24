
let greeting = document.querySelector("#userGreeting");
let loginForm = document.querySelector("#loginForm");
let loginMessage = document.querySelector("#loginMessage");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let galleryWrapper = document.querySelector("#jsonGallery");

let config = {
    serverHost: "localhost",
    serverPort: 3000,
    loginRoute: "login",
    galleryRoute: "gallery",
    imageRoute: "image",
    localUserInfo: "wt19user",
    cookieExpiry: 3600000,
    standardGreeting: `<h1>Hello guest!</h1>`
}

let user; // for loading user information such as user name, token etc. from document.cookie
let jsonGallery = new JsonGallery(galleryWrapper);

function init() {
    // user = JSON.parse(localStorage.getItem(config.localUserInfo));
    let cookie = document.cookie;
    if (cookie) {
        let cookieVar = cookie.split("=");
        cookieVar[0] = config.localUserInfo
        user = JSON.parse(cookieVar[1]);
        greeting.innerHTML = `<h1>Hello ${user.first_name} ${user.last_name}! (<a href='#' onclick='logout();'>logout</a>)</h1>`;
        loginForm.style.display = 'none';
        jsonGallery.load({onFail: (msg) => {
                if (msg && msg.message === "Authentication failed") logout();
                else greeting.innerHTML += "Failed to retrieve gallery!";
            }
        });
    }
    else {
        loginForm.style.display = 'block';
    }
}

function checkValidInput(){
    loginMessage.innerHTML = "";
    let validInput = true;
    if (!email.checkValidity()) {
        loginMessage.innerHTML += "Please enter valid email address! <br>";
        validInput = false;
    }
    if (!pass.checkValidity()) {
        loginMessage.innerHTML += "Please enter a password!";
        validInput = false;
    }
    return validInput;
}

function createCookie(jsonData) {
    let now = new Date();
    let time = now.getTime();
    time += config.cookieExpiry;
    now.setTime(time);
    document.cookie =
        config.localUserInfo + '=' + JSON.stringify(jsonData) +
        '; expires=' + now.toUTCString() +
        '; path=/';
}
function deleteCookie() {
    document.cookie = config.localUserInfo + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

// TODO EX2.a:
// login a user storing retrieved response (user data + token) as a cookie (see function createCookie)
// Hint: Send credentials as json body, e.g. {user: email.value, pass: pass.value}
function login() {
    if (!checkValidInput()) return;

    let loginUrl = `http://${config.serverHost}:${config.serverPort}/${config.loginRoute}`;
    loginMessage.innerHTML = "TODO EX2: log in user"; // replace with your code
    init(); // call on success
}

function logout() {
    greeting.innerHTML = config.standardGreeting;
    deleteCookie();
    jsonGallery.deinit();
    init();
}

// init page
init();
