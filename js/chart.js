var myChart = document.getElementById('myChart');

var displayChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Taytay Project', 'Quezon City Project', 'Narvacan Project', 'Batangas Project', 'Nueva Ecija Project', 'Marawi City Project'],
        datasets: [{
            label: 'Cost of Projects',
            data: ['20', '90', '80', '60', '40', '100'],
            backgroundColor: [
                'x`',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Cost of Projects'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
