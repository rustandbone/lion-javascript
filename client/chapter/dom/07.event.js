/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()" - 이벤트 하나만 할당 가능
// 2. DOM 프로퍼티 : element.onclick = handler - 이벤트 하나만 할당 가능
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode('.first');

function handler() {
  console.log('HTML 속성에서 이벤트 실행');
  console.log('DOM 프로퍼티에서 이벤트 실행');
}

// first.onclick = handler;

// function handleClick() {
//   console.log('이벤트 메서드 호출');
// }

// first.addEventListener('click', handleClick);

//click
//mousemove
//mouseover
//mouseout
//mousedown
//mouseup

// setTimeout(() => {
//   first.removeEventListener('click', handleClick);
// }, 3000);

// bindEvent('.first', 'click', handler);

//const remove = bindEvent('.first', 'click', handler);
//remove() 실행 시 이벤트 제거 가능

// 이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듦
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  console.log(x, y);
  // ball.style.transform = `translate(${x}px, ${y}px)`;
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

first.addEventListener('click', handleClick);

const ground = getNode('.ground');
const ball = getNode('#ball');
ground.addEventListener('click', handleClick);

// ground.addEventListener('mousemove', (e) => {
//   let x = e.offsetX;
//   let y = e.offsetY;

//   let template = `
//   <div class="emotion" style="top:${y}px; left: ${x}px">😍</div>
//   `;
//   insertLast(ground, template);
// });

//debounce, throttle
ground.addEventListener(
  'mousemove',
  debounce((e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

    insertLast(ground, template);
  })
);
