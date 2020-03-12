// 이론을 끝내고 실제로 만들어보자 .

const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}`: seconds 
    }`;
    // 이렇게 if -- else 를 사용하지 않고 작게 사용하는 것을 
    // mini if 또는 ternary operator(삼항 연산자) 라고 부름.
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();

// SetInterval을 배워보자.


