/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function onSight() {

    var ctx = document.getElementById("myChart").getContext('2d');
    var ctx2 = document.getElementById("doughnutChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['All Other Causes', 'Assault', 'Influenza', 'Stroke', 'Mental or Behavioral Disorders', 'Diabetes'],
            datasets: [{
                data: [1413, 133, 229, 242, 309, 347],
                backgroundColor: [
                    'rgba(0,255,255,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false },
            layout: {
                padding: {
                    left: 200,
                    right: 200,
                    bottom: 200
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Leading cause of death in 2017 - Non Hispanic African-American Males',
                }
            }
        }
    });

    var myChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['All Other Causes', 'Assault', 'Influenza', 'Stroke', 'Mental or Behavioral Disorders', 'Diabetes'],
            datasets: [{
                data: [1413, 133, 229, 242, 309, 347],
                backgroundColor: [
                    'rgba(0,255,255,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 200,
                    right: 200,
                    bottom: 200
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Leading cause of death in 2017 - Non Hispanic African-American Males',
                }
            }
        }
    });


}



document.addEventListener('DOMContentLoaded', onSight);