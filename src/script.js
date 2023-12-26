const dataJson = [
    {
      "title": "work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "self-care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    },
    // {
    //   "title": "hello",
    //   "timeframes": {
    //     "daily": {
    //       "current": 5,
    //       "previous": 5
    //     },
    //     "weekly": {
    //       "current": 5,
    //       "previous": 5
    //     },
    //     "monthly": {
    //       "current": 5,
    //       "previous": 5
    //     }
    //   }
    // }
];

function renderItems(time){
  const list = document.querySelector('.details__list');
  let last;
  if(time === "daily") last ="day";
  if(time === "weekly") last ="week";
  if(time === "monthly") last ="month";
  list.innerHTML = dataJson.map(action => {
      return `<li class="details__item details__item--${action["title"]}" id="${action["title"]}">
                              <div class="details__item-info">
                                  <p class="details__item-action">${action["title"][0].toUpperCase() + action["title"].substring(1)}</p>
                                  <img src="./../images/icon-ellipsis.svg" alt="" class="details__item-more">
                                  <h2 class="details__item-hours">${action["timeframes"][time]["current"]}hrs</h2>
                                  <span class="details__item-last">Last ${last} - ${action["timeframes"][time]["previous"]}hrs</span>
                              </div>

                              <div class="details__item-bg">
                                  <img src="./../images/icon-${action["title"]}.svg" alt="" class="details__item-img">
                              </div>
                          </li>`;
  }).join('');
}

function showInfo(){
  renderItems(this.dataset.name);
  userAction.forEach(action => action.classList.remove('active'));
  this.classList.add('active');
}

renderItems("daily");

const userAction = [...document.querySelector('.user__action').children];
userAction.forEach(action => action.addEventListener('click', showInfo));