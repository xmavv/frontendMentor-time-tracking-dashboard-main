const url = "./data.json"

async function getData(){
  const response = await fetch(url);
  const data = await response.json();
  return data;
} 

async function renderItems(time){
  const data = await getData();

  const list = document.querySelector('.details__list');
  let last;
  if(time === "daily") last ="day";
  if(time === "weekly") last ="week";
  if(time === "monthly") last ="month";
  list.innerHTML = data.map(action => {
      return `<li class="details__item details__item--${action["title"]}" id="${action["title"]}">
                              <div class="details__item-info">
                                  <p class="details__item-action">${action["title"][0].toUpperCase() + action["title"].substring(1).replace('-', ' ')}</p>
                                  <img src="./images/icon-ellipsis.svg" alt="" class="details__item-more">
                                  <h2 class="details__item-hours">${action["timeframes"][time]["current"]}hrs</h2>
                                  <span class="details__item-last">Last ${last} - ${action["timeframes"][time]["previous"]}hrs</span>
                              </div>

                              <div class="details__item-bg">
                                  <img src="./images/icon-${action["title"]}.svg" alt="" class="details__item-img">
                              </div>
                          </li>`;
  }).join('');

  const moreIcons = document.querySelectorAll('.details__item-more');
  moreIcons.forEach(icon => {
    icon.addEventListener('mouseenter', changeIcon);
    icon.addEventListener('mouseleave', changeIcon);
  }); 
}

function showInfo(){
  renderItems(this.dataset.name);
  userAction.forEach(action => action.classList.remove('active'));
  this.classList.add('active');
}

function changeIcon(){
  this.src.includes('white') ? 
  this.src = "./images/icon-ellipsis.svg" : 
  this.src = "./images/icon-ellipsis-white.svg";
}

renderItems("daily");

const userAction = [...document.querySelector('.user__action').children];
userAction.forEach(action => action.addEventListener('click', showInfo));