<template>
  <div>
    <div class="card p-2">
      <h3 class="bg-light p-1">Basic Chart</h3>
      <!-- <div class="row">
        <div class="col">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
        <div class="col">
          <canvas id="lineChart" width="400" height="400"></canvas>
        </div>
        <div class="col"></div>
      </div> -->

      <div style="height: 500px">
        <canvas id="lineChart" width="400" height="400"></canvas>
      </div>

    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'; // Chart JS

export default {
  mounted() {
    // const ctx = document.getElementById('myChart').getContext('2d');
    const ctx2 = document.getElementById('lineChart').getContext('2d');

    // const myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });

    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Total Orders',
        data: [10, 30, 20, 200, 55, 300, 75, 80, 95, 100, 115, 120],
        fill: false,
        borderColor: '#000',
        tension: 0.1
      }]
    };

    const lineChart = new Chart(ctx2, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

</script>

<style>
</style>