export function getSumInArrayElement(event) {
  if (event) {
    return event.reduce((accum, item) => accum + Number(item), 0);
  }
}

export function transformDate(date) {
  let years = date.substring(0, 4);
  let month = new Date(date).toLocaleString("default", { month: "short" });
  let day = date.substring(8, 10);

  return `${day} ${month}, ${years}`;
}

export function createElement(element, className) {
  const domElement = document.createElement(element);

  if (className) {
    domElement.classList.add(className);
  }
  return domElement;
}

export function getItemsFromCollection(array, quantity) {
  return array.slice(-quantity);
}

export function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
