let wrapper;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']');
  const stringsContainer = document.getElementsByClassName(stringTarget);
     
  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent;
      await write(string);
      await sleep(1000);
      await erase();
      await sleep(1000);
    };
  }
};

async function write(text){    
  let index = 0;
  while(index < text.length){
    const timeout = 100;
    await sleep(timeout);
    index++;
    wrapper.innerHTML = text.substring(0, index);
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 100;
    await sleep(timeout);
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2);
  }
};

function toggleSocials() {
  const footer = document.querySelector('.page-footer');

  document.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight - footer.clientHeight) {
        document.getElementById('social').classList.add('hidden');
    } else {
      document.getElementById('social').classList.remove('hidden');
    }
  });
}

function scrollPageTo (to, duration = 600) {
  const easeOutQuad = function (t, b, c, d) {
    t /= d;
	  return -c * t*(t-2) + b;
  };
  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;
    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    const animateScroll = function() {
      currentTime += increment;
      let val = easeOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
};

function scrollTo(target) {
  const tagScroll = document.getElementById(target);
  scrollPageTo(tagScroll);
}

function activeItem() {
  const items = document.querySelectorAll('nav li a'),
        itemsArr = Array.prototype.slice.call(items);

  itemsArr.forEach(function(item) {
    item.addEventListener('click', function() {
      const itemId = this.getAttribute('data-target');
      scrollTo(itemId);
    });
  });
};

document.querySelector('.link-scrolldown').addEventListener('click', function() {
  const about = document.getElementById('about');
  scrollPageTo(about);
});

activeItem();
toggleSocials();
writingAll('item', 'data-text');

