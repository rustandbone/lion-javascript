/* [readyState] 
import { xhr } from './xhr';
0 : Uninitialized, 
1 : Loading, 
2 : Loaded, 
3 : Interactive, 
4 : Complete */

import { refError } from '../error/refError.js';

// Ajax
// 자바스크립트 => 화살표 함수, 구조 분해 할당

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

//1. 자바스크립트 함수는 객체
//2. 사용자 입장 : 쉽게 쓰자
//3. 설계자 -> 함수 안에 메서드를 넣어버리자

//JSDoc
/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
); */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원할하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

/* promise API */
export function xhrPromise(options) {
  const { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
  };
  // const config = Object.assign({}, defaultOptions, options);

  if (!url) throw new Error('서버와 통신할 url은 필수값입니다.');
  if (!url) refError('서버와 통신할 url은 필수값입니다.');

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// console.log(
//   xhrPromise({
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/users',
//   })
// );

// xhrPromise({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

// xhrPromise.get('https://jsonplaceholder.typicode.com/users');
