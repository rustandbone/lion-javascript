/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c section', 'color:orange');
});

article.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c article', 'color:dodgerblue');
});

p.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c p', 'color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
//true 값 넣어서 캡처링 활성화 가능
//버블링 순서 바꿀 수 있음

// section.addEventListener(
//   'click',
//   (e) => {
//     // e.stopPropagation();
//     console.log('%c section', 'color:orange');
//   },
//   true
// );

// article.addEventListener(
//   'click',
//   (e) => {
//     // e.stopPropagation();
//     console.log('%c article', 'color:dodgerblue');
//   },
//   true
// );

// p.addEventListener(
//   'click',
//   (e) => {
//     // e.stopPropagation();
//     console.log('%c p', 'color:hotpink');
//   },
//   true
// );
