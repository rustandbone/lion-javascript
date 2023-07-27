/* global gsap */

import {
  xhr,
  xhrPromise,
  tiger,
  insertLast,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  attr,
  clearContents,
} from './lib/index.js';

// 1. tiger 함수 이용해서 user 가져오기
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
//    - html template 만들기
//    - 유저 data 넘겨주기
//    - insertLast 사용하기
// 4. 함수 분리하기

// 에러 발생 시 empty svg 생성하고 렌더링

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP({ timeout: 2000 });
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    if (!userData.length) {
      renderEmptyCard(userCardInner);
      return;
    }

    userData.forEach((item) => renderUserCard(userCardInner, item));
    changeColor('.user-card');
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
    // location.href = '404.html'
  }
}

renderUserList();

// 버튼 클릭 시 해당 article id 가져옴
//  -이벤트 위임
// - button 선택 => 클릭한 대상의 가장 가까운 요소 찾는 method
// - attr(), dataset

function getId(e) {
  e.preventDefault();
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  // console.log(article.dataset.index.slice(5));
  const id = attr(article, 'data-index').slice(5);
  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', getId);
