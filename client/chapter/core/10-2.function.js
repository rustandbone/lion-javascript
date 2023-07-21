/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것은? arguments
  console.log(arguments);
  //arguments 객체를 이용해 함수의 매개변수 없이 아이템 총합 구하기
  let total = 0;

  // 1. for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // 2. for of
  // for (let arg of arguments) {
  //   total += arg;
  // }

  // 3. forEach 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 4. slice를 빌려써서 배열로 만들기
  // let realArray = Array.prototype.slice.call(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 5. Array.from()
  // let realArray = Array.from(arguments);
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  //6. spread syntax
  let realArray = [...arguments];
  // realArray.forEach((item) => {
  //   total += item;
  // });

  // realArray.forEach(function (item, index) {
  //   total += item;
  // });

  // 7. Array.reduce
  return realArray.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const result = calculateTotal(1000, 500, 200, 6500, 100);
//console.log(result);

const user = {
  name: 'tiger',
};
user.name;

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

//anonymousFunctionExpression.isActive = true;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  if (isActive) {
    success();
    return;
  }
  fail();
};

callbackFunctionExpression(
  true,
  function () {
    console.log('성공');
  },
  function () {
    console.log('실패');
  }
);

// 콜백 추가 예시
const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail();
  }
};

movePage(
  'www.naver.com',
  function (url) {
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function () {
  var x = 10;
  let uid = 'ajtwk753!a';
  console.log('즉시 실행 함수');
  //  return '반환';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})();

console.log(MASTER.getKey());
console.log(MASTER.setKey('새로운 비밀번호'));
