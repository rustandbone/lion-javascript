/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {
  // console.log(this);
  // console.log(e.currentTarget);
  // currentTarget : 이벤트가 걸린 대상 === this(일반 함수일 때)
  // 화살표 함수 사용시 window 반환하는데, currentTarget 사용 시 this처럼 지정 가능
  // console.log(e.target);
  // target : 마우스가 최초 닿는 대상

  let target = e.target;
  let li = target.closest('li');
  if (!li) return;
  let className = attr(li, 'class');
  //let dataName = target.dataset.name;
  let dataName = attr(li, 'data-name');

  // if (dataName === 'A') {
  //   console.log('A 버튼 클릭');
  // }
  // if (className === 'b') {
  //   console.log('B 버튼 클릭');
  // }

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
