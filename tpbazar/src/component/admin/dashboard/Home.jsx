import React from 'react';
import './card.css';
import { Chart } from "react-google-charts";
import { Card } from 'react-bootstrap';

// Chart data and options
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
  is3D: true,
};

const dataa = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

const optionss = {
  title: "Company Performance",
  subtitle: "Sales, Expenses, and Profit: 2014-2017",
};

function Home() {
  return (
    <>
      <div className='d-flex'>
        <div className="container mt-2">
          <div className="row">
            <div className="col-6">
              <div className="card l-bg-black">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Users</h5>
                    <hr />
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      5466
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card l-bg-black">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Employees</h5>
                    <hr />
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      98088
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card l-bg-black">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Shops</h5>
                    <hr />
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      6577
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card l-bg-black">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Revenue</h5>
                    <hr />
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      16754
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card>
         
           <Chart
          width={'100%'}
          height={'400px'}
          chartType="PieChart"
          data={data}
          options={options}
        />
        </Card>
      </div>
      {/* Google Chart */}
      <hr />
      <Card>
      <Chart
            width={'100%'}
            height={'300px'}
            chartType="Bar"
            data={dataa}
            options={optionss}
          />
      </Card>
    </>
  );
}

export default Home;
