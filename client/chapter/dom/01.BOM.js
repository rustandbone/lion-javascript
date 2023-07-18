/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

const timer = setTimeout(() => {
  console.log('몇 초 뒤 실행');
}, 3000);

clearTimeout(timer); //타이머 제거

const cancelInterval = setInterval(() => {
  console.log('1초마다 실행되는 코드');
}, 1000);

clearInterval(cancelInterval); //인터벌 수행 중지

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

// protocol : http:
// host : localhost
// port : 5500
// pathname : /index.html
// search : ?type=listing&page=2
// hash : #title

const { href, protocol, host, port, search, hash, replace, reload } = location;

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(key, value);
}

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}

/* Navigator 객체 -------------------------------------------------------- */

//platform : 브라우저가 실행되는 플랫폼 정보 반환
//userAgent : 브라우저와 운영체제 정보를 반환
//language : 브라우저에 사용되는 언어를 반환
//onLine : 브라우저가 온라인인지 여부 반환
//geolocation

const { platform, userAgent, language, onLine, geolocation } = navigator;

function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

browserName();

function getLocationPosition() {
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data) => {
      if (!data) {
        reject({ message: '위치 서비스를 활성화 해주세요.' });
      } else {
        const { latitude, longitude } = data.coords;
        console.log(2);
        resolve({ latitude, longitude });
      }
    });
  });
}

/* Screen 객체 ----------------------------------------------------------- */

// height : 모니터 높이
// availHeight : 브라우저 크기
// innerHeight : 브라우저 해상도 크기 === 100vh
// orientation : 모니터 방향(landscape, portrait)

const { width, height, availWidth, availHeight, orientation } = screen;

/* History 객체 ---------------------------------------------------------- */
// history.go(1) 페이지 앞으로 가기
// history.go(-1), history.back() 패이지 뒤로 가기

const { back, forward, go, length, pushState, replaceState } = history;

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  document.querySelector('#videoElement').srcObject = stream;
});
