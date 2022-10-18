const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = parseInt(canvas.getAttribute("width"));
const height = parseInt(canvas.getAttribute("height"));

const projection = d3
  .geoMercator()
  .center([31, 48.4])
  .translate([width / 2, height / 2])
  .scale(2000);

export function resetCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function generatePointAtMap(d) {
  let [x, y] = projection([+d.lon, +d.lat]);

  ctx.beginPath();
  ctx.fillStyle = "#C00000";
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
