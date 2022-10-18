import {
  getSumInArrayElement,
  transformDate,
  createElement,
} from "./utilities.js";
import { generatePointAtMap, resetCanvas } from "./canvas.js";

const chart = document.querySelector(".chart");
const amount = document.querySelector(".statistic__count--amount");
const amont_type = document.querySelectorAll(".statistic__count");

export function initTimelime(items, onClickCallback) {
  const valueDateMap = items.reduce((acc, { from, affected_number }) => {
    acc[from] =
      (acc[from] ?? 0) + affected_number
        ? getSumInArrayElement(affected_number)
        : 0;
    return acc;
  }, {});
  const dateRange = Object.keys(valueDateMap);
  const maxValueCount = Math.max(...Object.values(valueDateMap).flat(1));

  dateRange.forEach((key) => {
    const value = valueDateMap[key] ?? 0;
    const date = transformDate(key);
    const percent = (value / maxValueCount) * 100;
    const span = createElement("span", "row");
    const spanContent = createElement("span", "row");

    chart.append(span);
    span.append(spanContent);
    span.setAttribute("data-text", date);
    span.setAttribute("data-value", key);
    spanContent.style.height = `${percent}%`;

    span.addEventListener("click", () => onClickCallback(key));

    if (percent > 0) {
      span.classList.add("row-with-data");
    }
  });

  return dateRange;
}

export function setTimelineDate(date) {
  const lines = [...chart.querySelectorAll(".row")];
  const elem = lines.find((line) => line.getAttribute("data-value") == date);

  lines.forEach((line) => line.classList.remove("active"));
  elem.classList.add("active");
}

export function activateDate(allItems, dateValue) {
  const date = new Date(dateValue);
  const items = allItems.filter((item) => {
    const itemFromDate = new Date(item.from);
    const itemTillDate = new Date(item.till);
    return date >= itemFromDate && date <= itemTillDate;
  });

  resetCanvas();
  generateElements(items);
}

export function generateElements(items) {
  items.forEach((item) => {
    const { affected_number } = item;
    const peopleHowAffected = getSumInArrayElement(affected_number);
    generatePointAtMap(item);
    amount.innerHTML = peopleHowAffected ? peopleHowAffected : 0;
    amont_type.forEach(
      (span) => (span.innerHTML = peopleHowAffected ? peopleHowAffected : 0)
    );
  });
}
