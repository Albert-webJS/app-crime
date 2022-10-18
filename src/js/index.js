import { keyDownListener, startPlayer, range } from "./player.js";
import {
  activateDate,
  initTimelime,
  setTimelineDate,
} from "./generateElement.js";
import { getItemsFromCollection } from "./utilities.js";
import api from "./api.js";



const allData = await api.getEventsDataBase();
const items = getItemsFromCollection(allData, 550);

const goToDate = (date) => {
  setTimelineDate(date);
  activateDate(items, date);
};

const dateRange = initTimelime(items, goToDate);

range.addEventListener("change", (event) => {
  const lineNumber = event.target.value;
  const date = dateRange[lineNumber];

  goToDate(date);
});

keyDownListener();
startPlayer();

goToDate(items[0].from);
