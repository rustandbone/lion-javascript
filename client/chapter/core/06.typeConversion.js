/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;
console.log(typeof String(YEAR));
console.log(YEAR + '');

// undefined, null
let days = null;
console.log(typeof String(days));
console.log(days + '');

let undef = undefined;
console.log(typeof String(undef));
console.log(undef + '');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let bankbook = null;
console.log(Number(bankbook)); //0

// boolean
let cutie = true;
console.log(Number(cutie)); //1

// string
let num = '250';
console.log(typeof num); //string
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width)); //NaN
console.log(parseInt(width, 10));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log('명시적 형 변환 : ' + !false);
console.log('명시적 형 변환 : ' + !!false);
