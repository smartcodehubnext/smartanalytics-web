import React, { useEffect } from "react";
import Chart from "chart.js";
export default function HomePage({ match, location }) {
  useEffect(() => {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 5, 7, 6, 4, 8, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    return () => {};
  }, []);
  useEffect(() => {
    console.log(match, location);

    return () => {};
  }, []);
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Monthly Earnings</h5>
            <div style={{ maxHeight: "40rem" }}>
              <canvas id="myChart" width="300" height="180"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Trending Services</h5>
            <div className="trending-services">
              <ul className="list-unstyled slimscroll">
                <li>
                  Social Network
                  <div className="text-success float-right">
                    32%<i className="fa fa-level-up"></i>
                  </div>
                </li>
                <li>
                  File Management
                  <div className="text-success float-right">
                    25%<i className="fa fa-level-up"></i>
                  </div>
                </li>
                <li>
                  Search Engine
                  <div className="text-success float-right">
                    16%<i className="fa fa-level-up"></i>
                  </div>
                </li>
                <li>
                  Calendar
                  <div className="text-danger float-right">
                    4%<i className="fa fa-level-down"></i>
                  </div>
                </li>
                <li>
                  Todo App
                  <div className="text-danger float-right">
                    17%<i className="fa fa-level-down"></i>
                  </div>
                </li>
                <li>
                  Mailbox
                  <div className="text-success float-right">
                    14%<i className="fa fa-level-up"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
