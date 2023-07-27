import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     second.style.top = '0';

//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//     });
//     second.style.top = '100px';
//   });
// });

// delayP 함수를 실행하면 리턴되는 값이 promise 객체
// 객체 합성 mixin

const defaultOptions = {
  shouleReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류 발생',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }
  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouleReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouleReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({ shouleReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    alert(message);
  })
  .finally(() => {
    // console.log('실행은 한다');
  });

// delayP()
//   .then(({ name, age }) => {
//     console.log(name);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// async 함수가 promise 객체를 반환하도록 함, await 사용 가능
// await 코드의 실행 흐름 제어, result 값 가져오기
async function delayA() {
  return '성공!';
}

const data2 = await delayA();

// console.log(data2);

async function 라면끓이기() {
  delayP({ data: '물 넣기' }).then((res) => {
    console.log(res);
  });

  const 스프 = await delayP({ data: '스프 넣기' });
  console.log(스프);

  const 면 = await delayP({ data: '면넣기' });
  console.log(면);

  const 계란 = await delayP({ data: '계란넣기' });
  console.log(계란);

  const 접시 = await delayP({ data: '접시' });
  console.log(접시);
}

// 라면끓이기();

async function getData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/151');
  // console.log(
  //   data.then((res) => {
  //     console.log(res);
  //   })
  // );
  const pokemon = await data;
  console.log(pokemon.sprites['front_default']);
  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="">`
  );
}

//getData();
