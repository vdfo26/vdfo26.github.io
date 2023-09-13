

//Define a global variable to store the chart instance
let myChart;

// Function to initialize or update the chart
export const drawForecastWeatherGrafic = async (data, filter) => {
  const today = new Date();
  const yValues = [];
  const xValues = [];
  const dayOffset = parseInt(filter) - 1;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + dayOffset);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const parts = key.split(' ');
      const datePart = `${parts[0]} ${parts[1]}`;
      const currentDate = new Date(datePart);

      if (
        (filter && currentDate.getDate() === targetDate.getDate() && currentDate.getMonth() === targetDate.getMonth()) ||
        (!filter)
      ) {
        yValues.push(data[key]);
        xValues.push(key);
      }
    }
  }
  console.log(yValues);
  console.log(xValues);

  // Check if the chart instance exists, and if not, create it
  if (!myChart) {
    myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,0,1)",
          borderColor: "rgba(0,0,0,0.3)",
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { min: 0, max: 38 } }],
        },
        plugins: {
          subtitle: {
            display: true,
            text: 'Custom Chart Subtitle'
          }
        }
      }
    });
  } else {
    // Update the chart's data
    myChart.data.labels = xValues;
    myChart.data.datasets[0].data = yValues;
    myChart.update();
  }

  const filterItems = document.querySelectorAll(".weather__forecast-filter-item");
  filterItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const filterValue = item.getAttribute("data-value");
      drawForecastWeatherGrafic(data, filterValue);
    })
  })
}