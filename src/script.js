"use strict";

const url = "./data.json";

const exercises = [];

async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  exercises.push(...data);
  return data;
}

async function renderItems(time, arr = []) {
  arr = !arr.length ? await getData() : arr;

  const list = document.querySelector(".details__list");
  let last;
  if (time === "daily") last = "day";
  if (time === "weekly") last = "week";
  if (time === "monthly") last = "month";
  list.innerHTML = arr
    .map((action) => {
      return `<li class="details__item details__item--${action["title"]}" id="${
        action["title"]
      }">
                  <div class="details__item-info">
                      <p class="details__item-action">${
                        action["title"][0].toUpperCase() +
                        action["title"].substring(1).replace("-", " ")
                      }</p>
                      <img src="./images/icon-ellipsis.svg" alt="" class="details__item-more">
                      <div class="settings">
                        <span class="settings__background-color">Change background color <input type="color"></span>
                        <span class="settings__reset">RESET</span>
                      </div>
                      <h2 class="details__item-hours">${
                        action["timeframes"][time]["current"]
                      }hrs</h2>
                      <span class="details__item-last">Last ${last} - ${
        action["timeframes"][time]["previous"]
      }hrs</span>
                  </div>

                  <div class="details__item-bg">
                      <img src="./images/icon-${
                        action["title"]
                      }.svg" alt="" class="details__item-img">
                  </div>
              </li>`;
    })
    .join("");

  const moreIcons = document.querySelectorAll(".details__item-more");
  const inputs = document.querySelectorAll("input");
  const items = document.querySelectorAll(".details__item");
  const resets = document.querySelectorAll(".settings__reset");

  moreIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", changeIcon);
    icon.addEventListener("mouseleave", changeIcon);
    icon.addEventListener("click", showSettings);
  });

  inputs.forEach((input) => input.addEventListener("change", changeBgcolor));

  function showSettings() {
    const setting = this.parentNode.querySelector(".settings");
    setting.classList.toggle("animate");
  }

  items.forEach((item) => setBgcolor(item));
  resets.forEach((reset) => reset.addEventListener("click", setReset));
}

function setBgcolor(item) {
  const color = localStorage.getItem(item.id);
  item.style.backgroundColor = color;
}

function changeBgcolor() {
  const item = this.parentNode.parentNode.parentNode.parentNode;
  setLocalstorageInfo(item.id, this.value);
  item.style.backgroundColor = this.value;
}

function setLocalstorageInfo(name, color) {
  localStorage.setItem(name, color); //musi byc normalna funkcja bo funkcja strzalkowa zmienia kontekst this
}

function showInfo() {
  renderItems(this.dataset.name);
  userAction.forEach((action) => action.classList.remove("active"));
  this.classList.add("active");
}

function setReset() {
  const item = this.parentNode.parentNode.parentNode;
  setLocalstorageInfo(item.id, `var(--color-${item.id})`);
  item.style.backgroundColor = `var(--color-${item.id})`;
}

function changeIcon() {
  this.src.includes("white")
    ? (this.src = "./images/icon-ellipsis.svg")
    : (this.src = "./images/icon-ellipsis-white.svg");
}

renderItems("daily");

const userAction = [...document.querySelector(".user__action").children];
userAction.forEach((action) => action.addEventListener("click", showInfo));

const btn = document.querySelector(".addBtn");
const exit = document.querySelector(".exit");
const popup = document.querySelector(".popup");

function handleAddBtn() {
  popup.classList.toggle("d-none");
}

btn.addEventListener("click", handleAddBtn);
exit.addEventListener("click", handleAddBtn);
let inputValue;

function handleForm(e) {
  e.preventDefault();
  const input = this.children[0][0];
  inputValue = input.value;
  const arr = addItem(inputValue);
  renderItems("daily", arr);
  handleAddBtn();
}

function addItem(title) {
  exercises.push({
    title: title,
    timeframes: {
      daily: {
        current: 5,
        previous: 5,
      },
      weekly: {
        current: 5,
        previous: 5,
      },
      monthly: {
        current: 5,
        previous: 5,
      },
    },
  });

  return exercises;
}

//TODO: NIEDZIALA NA ENTER FORMULARZ

popup.addEventListener("submit", handleForm);
