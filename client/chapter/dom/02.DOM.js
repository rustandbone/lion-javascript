/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
const first = document.querySelector('.first');
// - querySelectorAll
const [firstSapn, secondSpan] = document.querySelectorAll('span');
// console.log(first, firstSapn, secondSpan);
// - closest //위로 올라가면서 찾음
console.log(first.closest('h1'));

/* 문서 대상 확인 */
// - matches
console.log(first.matches('#message'));
// - contains - element 포함 여부
console.log(first.contains(secondSpan));

//클래스 포함 여부
//node.classList.contains();

// function getNode(node) {
//   if (typeof node !== 'string') {
//     throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다');
//   }

//   return document.querySelector(node);
// }

console.log(getNode('.first'), getNodes('span'));
