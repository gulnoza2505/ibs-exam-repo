import React from "react";
// import dots from "../../assets/image/dots.png";
import email from "../../assets/image/email.png";
import User from "../../assets/image/people.png";
import Money from "../../assets/image/save-money.png";
import Cart from "../../assets/image/shopping-cart-2.png";
import Dollor from "../../assets/image/d.png";
import {  Wrapper } from "./style";

import Chart from 'react-apexcharts'

function Dashboard() {
  
  const series1 = [
    {
      data: [20, 40, 80, 40, 180, 90, 100, 120, 140, 160, 190],
    },
  ];
  const series2 = [
    {
      name:"serios-1", 
      data: [20, 65, 70, 90, 120, 85, 100],
    }
  ];

  const series3 = {
    labels: ["desktop", "mobile", "tablet"],
    title: {
      text: "Visit Customer",
      data: [100],
      style: {
        fotnSize: "20px",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#40d8fe", "#34ff71", "#FFBF40",],
    // theme: {
    //   mode: "light",
    // },
    dataLabels: {
      enabled: true,
    },
  };

  const option2 = {
    dataLabels: {
      // enabled: false,
    },
    stroke: {

      // curve: "smooth",
    },

    title: {
      // text: "Analytics",
      style: {
        // fotnSize: 90,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
        // curve: "smooth",
    },
    home: {
      type: "number",
      // categories: [104, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        width: 60,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={Dollor} />
            </div>
          </div>

          <p className="card1">$25,255,000</p>
          <div className="card-total">
            <p className="today">Today Sales</p>
            <div className="bb">

            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={Money} />
            </div>
          </div>

          <p className="card1">$1255,00</p>
          <div className="card-total">
            <p className="title-card">Today Expenses</p>
            <div className="bb">
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={User} />
            </div>

          </div>

          <p className="card1">$5355</p>
          <div className="card-total">
            <p className="title-card">Today Visitors</p>
            <div className="bb">
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={Cart} />
            </div>

          </div>

          <p className="card1">$500</p>
          <div className="card-total">
            <p className="title-card">Today Orders</p>
            <div className="bb">
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="apexcharts1">

          <Chart
            style={{ margin: "auto", padding: "10px 5px" }}
            options={option1}
            series={series1}
            type="bar"
            width={400}
            height="310"
          />
        </div>
        <div className="apexcharts2">
          <Chart
            style={{ margin: "10px -10px auto", backgroundColor: "white", padding: "10px 5px" }}
            options={option2}
            series={series2}
            type="line"
            width="500"
            height="300"
            title="Analtics"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <p>Recent Product</p>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Data</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#726518766</td>
              <td>
                <img
                  src="https://media.istockphoto.com/photos/sneaker-picture-id503661616"
                  alt=""
                />
                Nike Air Max
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg">Shipping</td>
            </tr>
            <tr>
              <td>#716551087</td>
              <td>
                <img
                  src="https://i.pcmag.com/imagery/reviews/046UyKcU86Megq3Eenq0sbo-1.fit_lim.size_625x365.v1597063431.jpg"
                  alt=""
                />
                Headphone
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="pasding">Pasding</td>
            </tr>
            <tr>
              <td>#391347778</td>
              <td>
                <img
                  src="	https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"
                  alt="iphon"
                />
                Iphone Pro
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="canseled">Canseled</td>
            </tr>
          </table>

          <div className="table-footer">
            <p>See all</p>
          </div>
        </div>
        <div className="charts">
          <Chart
            type="donut"
            width="360"
            series={[70, 20, 20]}
            options={series3}
            style={{
              margin: "30px 5px 0px 0px",
              height: "250px",
              backgroundColor: "white",
            }}
          ></Chart>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;
