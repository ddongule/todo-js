// 자바스크립트를 쓰는 방법
// 1. Create 
// 2. Initialize
// let은 create나 initialize를 할 때에만 사용
// 3. Use


// var : let과 const가 없었을 때 쓰이던 것, 지금은 let으로 써주는 것이 좋다.
// let : 바꿀 수 있는 변수
// const : (상수) 바꿀 수 없는 변수
// 한 줄 주석 : // 
// 많은 줄 주석 : /* */

// console.log("I am working");

// 변수를 선언할 때에는 const를 사용
// 진짜 필요할 때에만 let을 사용
const what = "emojii"; // <- 이모티콘, 숫자, 텍스트 다 넣을 수 있음
// console.log(what);

// Boolean : True, False
const wat = true; // true = 1, false = 0

// Number 
const wnb = 111;

// Float
const flnu = 11.2;



// [데이터 정렬하기] - Array : how we store data in list 

// Camel Case를 사용해라
const monday = "Mon"
const tuesday = "Tue"
const wednesday = "Wed"
const thursday = "Thu"
const friday = "Fri"

// console.log(monday, tuesday, wednesday, thursday, friday);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];
// console.log(daysOfWeek);

// Array는 규칙을 가지고 있음
// console.log(daysOfWeek[2]) // Wed가 나오게 됨
// console.log(daysOfWeek[112]) // undefined가 나오게 됨

// [데이터 정렬하기] - Object
// Array와 Object의 다른 점 : Object에는 각 value에 이름을 줄 수 있음
// Object와 Array는 비슷하게 동작하지 않는다.
const mingInfo = {
    name:"ming",
    age:33, 
    gender:"Female",
    isPretty:true,
    favMovied: ["Aladdin", "Beauty and the Beast"],
    favFood : [
        {
            name:"Kimchi", 
            fatty:false
        }, 
        {
            name: "Cheese Burger", 
            fatty: true
        }
    ]
}
// using the keys that I labeled

mingInfo.gender = "Male"
// 이렇게 안에 데이터를 바꿀 수 있당!
// console.log(mingInfo.gender);
// console.log(mingInfo);

// console은 mingInfo와 같이 object이다.
// 다만 다른 점이 있다면 log 는 내장 function 인 것!

// 함수란?
// 어떤 것의 기능
// 어떤 걸 수행하려는 한 부분
// 내가 원하는 만큼 쓸 수 있는 코드 

// 안녕 하는 함수!를 만들어 보자.
// function sayHello(){
//     console.log("Hello!");
// }
// sayHello("여기 들어가는건 인자, 즉 argument");
// console.log("ming");

// 함수를 커스터마이징 하는 법
// 우리 함수는 인자(변수 같은 것)를 받아서 
// 우리가 주는 값을 저장시켜.

// function sayHello("인자가 들어갈 자리"){
//     console.log("Hello!");
// }

// function sayHello(potato){
//     console.log("Hello!", potato);
// }

// sayHello("여기 들어가는건 인자, 즉 argument");

// function sayHello(potato, chickin){
//     console.log("Hello!", potato, "you have", chickin);
// }
// sayHello("여기 들어가는건 인자, 즉 argument", 14);

// String을 쓰는 방법
// 1. `` 
// 2. "" 
// 3. ''

// 기존에 "" '' 를 사용하는 방법은 , 혹은 + 를 사용했어야 한다.
// 근데 계속 그렇게 하는 건 귀찮기도 하고, 힘드니까 `` (백틱)을 사용한다.
// 그러면 아래와 같이 쭉 이어 쓸 수 있다.
// function sayHello(name, age){
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// // 이제 console.log 와 return의 차이점을 공부해 보자.
// function sayHello(name, age){
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// function sayHello(name, age){
//     return `Hello ${name} you are ${age} years old`;
// }

// const greetMk = sayHello("Minkyung", 22);
// console.log(greetMk);

// 여기에서 greetMk 는 sayHello의 return 값과 같다.
// greetMk는 sayHello 함수의 return 값이다.
// sayHello가 아무것도 반환하지 않기 때문에 greetMk는 undefined가 된다.
// 두 개의 차이점을 알아야 한다.



// ----
// const calculator = {
//     plus : function(a, b){
//         return a + b;
//     }
// }

// const plus = calculator.plus(5,5); 
// console.log(plus)

// ----
// console.log 이외에도 브라우저에서 우리에게 제공하는 함수들이 있다.
// HTML을 다루는 함수들에 대해 공부를 좀 해보자.

// css와 같이 js에서도 속성을 선택해서 html을 바꿀 수 있다.

// console.log(document); 
// 현재 페이지의 html 도큐먼트를 보여준다.

// const title = document.getElementById("title");

// console.log(title);

// DOM : Document Object Module (문서 객체 모델) - HTML, XML 문서의 프로그래밍 interface 이다.
// 추가 설명 
// 내가 작성한 코드가 브라우저에 의해 파싱되면 DOM이 된다.
// 브라우저에서 지원하는 개발자 툴에서 보이는 것이 DOM이다.
// 즉, JS는 브라우저가 읽고 어떤 작업을 할 수 있는 언어이고, DOM은 이 작업이 이루어지는 장소이다.


// 자바스크립트는 나의 html 들을 가져와 객체로 만든다. 

// title.innerHTML = "Hi! from JS";
// 요렇게 하면 title 안의 글자가 이 바뀐다.
// console.dir(title);
// title.style.color = "red";

document.title = "coool";
// document.querySelector("#title")
// document.getElementByClassName("title")


// 지금까지 배운 것들 모두는 event 이다 . 

// function handleResize(){
//     console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize); 
// handleResize() 라고 쓰면 안된다! => 이건 즉시 이 함수를 호출하라는 뜻이고,
// handleResize 라고 쓰면 resize가 되었을 그 시점에 함수를 호출하라는 뜻이다.


// function handleResize(event){
//     console.log(event);
//     // 이벤트는 뭘까?
// }

// title.addEventListener("click", handleClick);
// function handleClick(){
//     title.style.color = "blue";
//     // 타이틀 색깔을 바꿀 수 있지만 다시 되돌리지는 못한다.(지금까지 배운 것을 바탕으로 했을 때)
//     // 다음 강의를 들어봅시다.
// }

// if else 에 대해 공부해 보자.


if(10 === "10"){
    // console.log("hi");
} else if (10 === 10) {
    // console.log("ho");
} else {
    // console.log("머야!");
}



// && : 두 가지를 모두 만족시켜야 한다.
// || : 두 가지 중에 한개라도 만족시키면 된다. 
if(20 > 5 && "hi" === "hi") {
    // console.log("yes");
} else {
    // console.log("no")
}

// = : 할당
// === : checking

// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

// true || true = true;
// false || true = true;
// true || false = true;
// false || false = false;

// prompt : 유저에게 뭔가를 물어볼 수 있는 alert 같은 갓 
// => 하지만 요즘은 쓰지 않음! 그냥 잠깐 써보는 겨

// const age = prompt("what is your age?");
// console.log(age)

// if(age >= 18 && age <= 21) {
//     console.log('you can drink but you should not');
// } else if (age > 21) {
//     console.log("drink.");
// } else {
//     console.log('too young.');
// }



// const BASE_COLOR = "white";
// const OTHER_COLOR = "blue"

const title = document.querySelector("#title");

// function handleClickTwo(){
//     const currentColor = title.style.color;
//     console.log(currentColor);
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// 이런 이벤트들을 찾을 때에는 항상 MDN을 사용하는 것이 좋다. 
// https://developer.mozilla.org/ko/docs/Web/Events

const CLICKED_CLASS = "clicked";

function handleClickClass() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (hasClass) {
    //     title.classList.remove(CLICKED_CLASS) = "";
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
    // 이거랑 위에 토글이랑 완전 같아.
    title.classList.toggle(CLICKED_CLASS);
}


function init() {
    title.addEventListener("click", handleClickClass);
}
init();
