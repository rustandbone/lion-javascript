function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  let gravity = 10;

  // function tiger(value) {
  //   console.log(apple);
  //   gravity = value;
  //   console.log(gravity);
  // }

  // return tiger;

  // return function (value) {
  //   console.log(apple);
  //   gravity = value;
  //   console.log(gravity);
  // };

  return (value) => {
    gravity = value;
  };
}

const ufo = earth();
ufo(5);

const button = document.querySelector('button');

function handleClick() {
  let isClicked = true;
  return function () {
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }
    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick());

/* ------------------------------- */

function useState(initValue) {
  let value = initValue;
  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

//setClick
const [state, setState] = useState(true);
