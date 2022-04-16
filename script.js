const chartContainer = document.querySelector(".chart-container");

const barHeight = (num) => {
  const height = (num / 1500) * 100;
  return height;
};

const countries = [
  {
    name: "United States",
    population: 329, //in millions
  },
  {
    name: "China",
    population: 1400,
  },
  {
    name: "India",
    population: 1200,
  },
  {
    name: "Nepal",
    population: 29,
  },
];

countries.forEach((country) => {
  //The parent element of each bar
  const element = document.createElement("div");
  element.classList.add("chartContainer-child");

  //This element is created to position the bar graph on bottom so that we can use "space between" on flexbox
  const innerElement = document.createElement("article");

  //The bars on the graph
  const bar = document.createElement("div");
  bar.classList.add("chart-child");
  bar.textContent = `${country.name}:${country.population}million`;
  const heightOfBar = barHeight(country.population);
  bar.style.fontStyle = "bold";
  bar.style.height = `${heightOfBar}%`;

  element.appendChild(innerElement);
  element.appendChild(bar);

  chartContainer.appendChild(element);
});
