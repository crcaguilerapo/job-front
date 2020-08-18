const Dashboard = {

    mounted() {
        let ctx = document.getElementById('myChart').getContext('2d');
        axios
        .get('http://127.0.0.1:8000/api/chart')
        .then(function (response) {
            let labels = [];
            let values = [];
            response.data.forEach(element => {
                labels.push(element.name);
                values.push(element.number);
            });
            console.log(labels);
            console.log(values);
            new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: labels,
                    datasets: [
                            {
                                label: '# de estudiantes',
                                data: values
                            }
                    ]
                },
                options: {
                    // All of my other bar chart option here
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
           
        })
    },
    template: `
        <canvas id="myChart"></canvas>
    ` 
};

export default Dashboard;