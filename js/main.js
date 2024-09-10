const sidebar = document.querySelector(".toggle-btn");

sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
//update the views
function updateStats() {
  document.getElementById('views').innerHTML = getRandomNumber(7000, 8000) + ' <span class="mx-3" style="font-size: 1rem;">+11.02% <i class="bx bx-line-chart mx-2" style="font-size: 1rem;"></i></span>';
  document.getElementById('visits').innerHTML = getRandomNumber(3500, 4000) + ' <span class="mx-3" style="font-size: 1rem;">-0.03% <i class="bx bx-line-chart-down mx-2" style="font-size: 1rem;"></i></span>';
  document.getElementById('new-users').innerHTML = getRandomNumber(100, 200) + ' <span class="mx-3" style="font-size: 1rem;">+15.03% <i class="bx bx-line-chart mx-2" style="font-size: 1rem;"></i></span>';
  document.getElementById('active-users').innerHTML = getRandomNumber(2000, 3000) + ' <span class="mx-3" style="font-size: 1rem;">+6.08% <i class="bx bx-line-chart mx-2" style="font-size: 1rem;"></i></span>';
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fetch and update every 2 sc
setInterval(updateStats, 2000);



// chart
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
       
        data: [9000, 10000, 3300, 9800, 20000, 29000, 25000],
        borderColor: '#1C1C1C',  
        borderWidth: 2,
        tension: .4, 
        pointRadius: 0 
      },
      {
       
        data: [0, 10000, 10000, 15000, 2500, 8000, 28000], 
        borderColor: 'rgba(173, 216, 230, 1)', 
        borderDash: [5,5],
        borderWidth: 2,
        tension: 0.4, 
        pointRadius: 0 
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            if (value === 0) {
              return '0';
            }
            return value / 1000 + 'K'; 
          },
          font: {
            size: 12 
          },
          color: 'rgba(128, 128, 128, 0.8)' 
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false 
        },
        ticks: {
          font: {
            size: 12
          },
          color: 'rgba(128, 128, 128, 0.8)' 
        }
      }
    },
    plugins: {
      legend: {
        display: false, 
      }
    }
  }
});

//bar chart
const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};