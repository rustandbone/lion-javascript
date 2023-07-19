function bindEvent(node, type, handler) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g.test(type)) {
    throw new TypeError(
      'bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입이어야 합니다.'
    );
  }

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
