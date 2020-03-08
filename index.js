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

console.log("I am working");

// 변수를 선언할 때에는 const를 사용
// 진짜 필요할 때에만 let을 사용
const what = "emojii"; // <- 이모티콘, 숫자, 텍스트 다 넣을 수 있음
console.log(what);

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

console.log(monday, tuesday, wednesday, thursday, friday);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];
console.log(daysOfWeek);

// Array는 규칙을 가지고 있음
console.log(daysOfWeek[2]) // Wed가 나오게 됨
console.log(daysOfWeek[112]) // undefined가 나오게 됨

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
console.log(mingInfo.gender);
console.log(mingInfo);