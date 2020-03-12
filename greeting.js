const form = document.querySelector('.js-form'),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
// queryselector는 모든 것 중 첫번째를 가져온다.
// queryselectorAll는 모든 것을 가져온다.

// local storage : 작은 정보를 너의 유저 컴퓨터에 저장하는 방법
// inspector => Local Storage를 보면 볼 수 있다.


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remobe(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
    
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
    
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();