import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { color } from "chart.js/helpers";
import "../css/DonutCharts.css";

const DonutCharts = () => {
  const chartRefs = [useRef(null), useRef(null), useRef(null)];
  const chartInstances = useRef([]);

  useEffect(() => {
    const chartData = [
      {
        title: "Table Health",
        total: 88,
        data: [50, 20, 10, 8],
        colors: ["#00FF00", "#FF4500", "#1E90FF", "#FFD700"],
        labels: ["Success", "Failed", "Skipped", "Broken"],
      },
      {
        title: "Test Results Breakdown",
        total: 88,
        data: [40, 25, 15, 8],
        colors: ["#00FF00", "#FF6347", "#1E90FF", "#A9A9A9"],
        labels: ["Success", "Aborted", "Skipped", "Unknown"],
      },
      {
        title: "Monitored Tables",
        total: 88,
        data: [60, 28],
        colors: ["#32CD32", "#4682B4"],
        labels: ["Monitored", "Unmonitored"],
      },
    ];

    chartData.forEach((chart, index) => {
      const ctx = chartRefs[index].current.getContext("2d");

      if (chartInstances.current[index]) {
        chartInstances.current[index].destroy();
      }

      chartInstances.current[index] = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: chart.labels,
          datasets: [
            {
              data: chart.data,
              backgroundColor: chart.colors,
              hoverBackgroundColor: chart.colors.map((colorValue) =>
                color(colorValue).alpha(0.8).rgbString()
              ),
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                font: {
                  size: 8,
                  fontWeight: "400",
                },
                color: "#333",
                padding: 4,
              },
            },
            tooltip: {
              enabled: true,
            },
            title: {
              display: true,
              text: chart.title,
              textAlign: "left",
              padding: { top: 10, bottom: 20 },
              font: {
                size: 12,
              },
              align: "start",
            },
          },
          layout: {
            padding: {
              left: 10,
            },
          },
        },
      });
    });

    return () => {
      chartInstances.current.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <div className="three-dounts-container">
      {chartRefs.map((ref, index) => (
        <div key={index} className="donut-charts-main">
          <canvas ref={ref}></canvas>
          <div className="donut-chart-title">
            <h1> Total Table</h1>
            <p>88</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonutCharts;
