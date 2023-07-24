import {
  attr,
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
} from './lib/index.js';

// diceAnimation();
// [phase-1]
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation이 실행될 수 있도록
//    - 주사위 굴리기 버튼 가져오기
//    - 이벤트 핸들러 연결
//    - 애니메이션 코드 작성
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//    - 기록 버튼 이벤트 바인딩
//    - hidden 속성 false 만들기
//    - 초기화 버튼 이벤트 바인딩
//    - hidden 속성 true 만들기
// 3. 주사위 값을 가져와서 렌더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기

const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');

const handleRollingDice = ((e) => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      //주사위 play
      console.log('첫 번째 클릭');
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      //주사위 stop
      console.log('두 번쨰 클릭');
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

let count = 1;
let total = 0;

function createItem(value) {
  return /* html */ `
    <tr>
      <td>${count++}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

function renderRecordItem() {
  //주사위의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');

  insertLast(tbody, createItem(diceValue));
  recordButton.disabled = true;
  endScroll(recordListWrapper);
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents(tbody);
  count = 1;
  total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);

// disableElement(node)
// enableElement(node)
// isDisableState(node) => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false
