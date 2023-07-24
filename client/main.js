import { jujeobData } from './data/data.js';
import {
  addClass,
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  showAlert,
  shake,
  copy,
} from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결
// 2. nameField에 있는 값을 가져오기
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한 개를 가져오기
// 5. pick 항목을 result에 랜더링

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리 replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주기
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    console.log('이름이 없어요!');
    showAlert('.alert-error', '이름을 입력해주세요!', 2000);
    shake.restart();
    return;
  }

  if (!isNumericString(name)) {
    console.log('숫자 타입입니다.');
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요!', 2000);
    shake.restart();
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function handleCopy() {
  const text = resultArea.textContent;
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료');
  });
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
