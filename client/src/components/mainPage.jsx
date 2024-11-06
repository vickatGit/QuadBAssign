import React, { useEffect, useState } from "react";
import wazirX from "../assets/images/wazirX.png";
import { fmt } from "../util";

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tickers")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pb-50">
      <div className="Container-fluid" style={{ padding: "0px 30px" }}>
        <div
          className="d-flex justify-content-around align-items-center average-header"
          style={{ padding: "10px 0px" }}
        >
          <div className="text-center">
            <div className="average-header-maintext color-green">0.62 %</div>
            <div className="average-header-subHeading">5 Mins</div>
          </div>

          <div className="text-center">
            <div className="average-header-maintext color-green">1.29 %</div>
            <div className="average-header-subHeading">1 Hour</div>
          </div>

          <div style={{ maxWidth: "40%" }}>
            <div className="text-center font-32 average-block">
              <div className="average-subText">
                <span className="subText-heading">Best Price to Trade</span>
              </div>
              <div
                className="average-heading"
                style={{ paddingBottom: "10px" }}
              >
                ₹ 35,36,164
              </div>
              <div className="average-subText">
                Average BTC/INR net price including commission
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="average-header-maintext color-green">7 %</div>
            <div className="average-header-subHeading">1 Day</div>
          </div>

          <div className="text-center">
            <div className="average-header-maintext color-green">10.71 %</div>
            <div className="average-header-subHeading">7 Days</div>
          </div>
        </div>
      </div>

      <div
        className="fiat-crypto-table table-responsive"
        style={{ margin: "0 auto" }}
      >
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <th>
                <h4>
                  <span className="pointer">#</span>
                </h4>
              </th>

              <th>
                <h4>
                  <span className="pointer">Platform</span>
                </h4>
              </th>

              <th>
                <h4>
                  <span className="pointer">Last Traded Price</span>
                </h4>
              </th>

              <th>
                <h4>
                  <span className="pointer">Buy / Sell Price</span>
                </h4>
              </th>

              <th>
                <h4>
                  <span className="pointer">Difference</span>
                </h4>
              </th>

              <th>
                <h4>
                  <span className="pointer">Savings</span>
                </h4>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length ? (
              data.map((item, idx) => {
                const difference = item.sell - item.buy;
                return (
                  <tr key={idx + Date.now()}>
                    <td className="align-middle">
                      <h4 className="table-text">{idx + 1}</h4>
                    </td>

                    <td className="align-middle">
                      <h4 className="table-text">
                        <img src={wazirX} className="exchange-logo" />
                        <span className="exchange-name ">{item.name}</span>
                      </h4>
                    </td>

                    <td className="align-middle">
                      <h4 className="table-text">₹ {fmt(item.last)}</h4>
                    </td>
                    <td className="align-middle">
                      <h4 className="table-text">
                        <span>
                          ₹ {fmt(item.buy)} / ₹ {fmt(item.sell)}
                        </span>
                      </h4>
                    </td>
                    <td className="align-middle">
                      <h4 className="table-text color-green">
                        {((difference / item.buy) * 100).toFixed(2)}%
                      </h4>
                    </td>
                    <td className="align-middle">
                      <h4 className="table-text color-green">
                        ₹ {fmt(difference.toFixed(0))}
                      </h4>
                    </td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
