import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "../css/Dashboard.css";
import ailogo from "../assets/icons/AIGenerate.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Arrow19 from "../assets/icons/Arrow19.png";
import searchaiiocn from "../assets/icons/Generate B.png";
import baricon from "../assets/icons/Group 1437253232.png";
import DonutCharts from "../Components/DonutCharts";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const chartRef = useRef(null);
  const barChartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const barChartInstanceRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [25, 25, 50],
            backgroundColor: ["#FF0000", "#FFFF00", "#00FF00"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        rotation: -90,
        circumference: 180,
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0, 
          },
        },
      },
    });
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const barCtx = barChartRef.current.getContext("2d");
    if (barChartInstanceRef.current) {
      barChartInstanceRef.current.destroy();
    }
    barChartInstanceRef.current = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: [""],
        datasets: [
          {
            label: "Validity",
            data: [6], 
            backgroundColor: "#00FF00", 
            borderSkipped: false, 
            barThickness: 25, 
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            max: 8, 
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false, 
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
          tooltip: {
            enabled: false, 
          },
        },
      },
    });

    return () => {
      if (barChartInstanceRef.current) {
        barChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="left-box">
        <div className="title-head">
          <div className="logo-title">
            <h1>Databot</h1>
            <img src={ailogo} alt="logo-ai" />
          </div>
          <div className="title-dropdown">
            <h2>
              Connected Data:
              <span onClick={toggleDropdown}>
                {" "}
                Clothing Sales {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h2>
            <div className="dropdown">
              {isOpen && (
                <ul className="dropdown-menu">
                  <p>
                    <input type="text" placeholder="search Data" />
                  </p>
                  <li>SUPPLIER_references</li>
                  <li>NATION_references_REGION</li>
                  <li>ORDERS_references_CUSTOMER</li>
                  <li>data_lake</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="body-content">
          <h1>
            AI Conversational <span>Data Analyst</span>
          </h1>
          <p>
            Your personal AI data assistant. Seamlessly integrate your database
            for rapid, informed decision-making. Get instant analysis and
            answers, optimizing growth metrics daily. Ask anything, get
            analyst-grade responses.
          </p>

          <div className="content-boxes">
            <div className="box">
              <p>Give me the summary of the data Source.</p>
              <div className="image-box">
                <img src={Arrow19} alt="arrow" />
              </div>
            </div>
            <div className="box">
              <p>User duration engagement change vs last week?</p>
              <div className="image-box">
                <img src={Arrow19} alt="arrow" />
              </div>
            </div>
            <div className="box">
              <p>
                Provide an overview of this week's IAP Revenue performance .
              </p>
              <div className="image-box">
                <img src={Arrow19} alt="arrow" />
              </div>
            </div>
            <div className="box">
              <p>
                What are the factors of drop in our Sales Revenue this week?
              </p>
              <div className="image-box">
                <img src={Arrow19} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="summary-content">
          <h2>Summary</h2>
          <p>
            Supplier references refer to information provided by a supplier that
            can be used to verify their capabilities and experience. This
            information is typically used during the procurement process to
            evaluate potential vendors. Here are some samples of supplier
            references:
          </p>
          <div className="list-heading">
            <h5>Basic Reference:</h5>
            <ul className="ul-list-items">
              <li>Supplier Name: Acme Corporation</li>
              <li>Contact Name: John Smith, Sales Manager</li>
              <li>Phone Number: (555) 555-5555</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.
              </li>
            </ul>
          </div>
          <div className="list-heading">
            <h5>Detailed Reference:</h5>
            <ul className="ul-list-items">
              <li>Supplier Name: Global Tech Solutions</li>
              <li>Contact Name: Jane Doe, Account Manager</li>
              <li>Phone Number: (555) 555-1234</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.
              </li>
            </ul>
          </div>
          <div className="list-heading">
            <h5>Detailed Reference:</h5>
            <ul className="ul-list-items">
              <li>Supplier Name: Global Tech Solutions</li>
              <li>Contact Name: Jane Doe, Account Manager</li>
              <li>Phone Number: (555) 555-1234</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.
              </li>
            </ul>
          </div>
          <div className="list-heading">
            <h5>Detailed Reference:</h5>
            <ul className="ul-list-items">
              <li>Supplier Name: Global Tech Solutions</li>
              <li>Contact Name: Jane Doe, Account Manager</li>
              <li>Phone Number: (555) 555-1234</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.
              </li>
            </ul>
          </div>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Ask your AI for data summary......."
          />
          <button className="search-btn">
            {" "}
            <img src={searchaiiocn} alt="" /> Search
          </button>
        </div>
      </div>
      <div className="right-box">
        <div className="title-head">
          <div className="logo-title">
            <h1>Data Visual</h1>
          </div>
        </div>

        <div className="logo-title-right">
          <h1 className="data">Data Overview</h1>

          <div className="data-overview-content">
            <div className="data-box1">
              <div className="box-num">
                <div className="image-box-c">
                  <img src={baricon} alt="icon" />
                </div>
                <div className="data-box-text">
                  <p>Total Number of rows </p>
                  <h1>34.1M</h1>
                </div>
              </div>
              <div className="box-num">
                <div className="image-box-c">
                  <img src={baricon} className="img-rote" alt="icon" />
                </div>
                <div className="data-box-text">
                  <p>Total No of Columns </p>
                  <h1>2</h1>
                </div>
              </div>
            </div>
            <div className="data-boxs">
              <h4>Metadata</h4>
              <ul className="data-boxes-list-text">
                <li>
                  Name <span>Samples</span>
                </li>
                <li>
                  Created at <span>20 Jul 2022</span>
                </li>
                <li>
                  Relates to <span>dim_books</span>
                </li>
                <li>
                  Connection <span>Postgresql</span>
                </li>
              </ul>
            </div>
            <div className="data-boxs">
              <div className="box-bar">
                <h5>SLA</h5>
                <div className="progress-bar">
                  <div className="bar"></div>
                  <span>5/5</span>
                </div>
              </div>

              <div className="bar-boxes">
                <div className="bar-text-report">
                  <h5>Test report</h5>
                  <p>See all</p>
                </div>
                <div className="box-score">
                  <div className="box-score-conetent">
                    <p>100% Score</p>
                    <span>5 Test</span>
                  </div>
                  <div className="progress-bar progress-bar1">
                    <div className="bar bar2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="data-quality-container">
            <div className="data-quality">
              <h1>Data Quality</h1>
              <div className="gauge-meter">
                <canvas ref={chartRef}></canvas>
                <div className="gauge-meter-text">
                  <h1>65%</h1>
                  <p>Good</p>
                </div>
              </div>
            </div>
            <div className="data-quality scroll-respons">
              <h1>Rules against target</h1>
              <div className="bar-graph-box">
                <h1>Validity</h1>
                <h1>6</h1>
              </div>
              <div className="bar-graph-box1">
                <canvas ref={barChartRef}></canvas>
              </div>
              <div className="bar-chart-dot">
                <p>
                  <li></li>Good
                </p>
                <p>
                  <li className="org"></li>Acceptable
                </p>
                <p>
                  <li className="red-l"></li>Not Acceptable
                </p>
              </div>
            </div>
          </div>
          <div className="circular-bar-chart">
            <DonutCharts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
