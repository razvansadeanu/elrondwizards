import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Element } from "react-scroll";

function UseOfFunds() {
  const [selected, setSelected] = useState();

  const handleChange = (e, index) => {
    e.preventDefault();
    setSelected(index === selected ? undefined : index);
  };

  const lineWidth = 70;
  return (
    <Element className="useOfFundsContainer" id="funds" name="funds">
      <div className="titleText">
        <span></span>USE OF FUNDS
      </div>
      <div className="useOfFundsContent">
        <div className="chartContainer">
          <PieChart
            style={{
              fontFamily:
                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
              fontSize: "8px",
            }}
            data={[
              { title: "five", value: 5, color: "#0bd2f5" },
              { title: "four", value: 10, color: "#07a1e985" },
              { title: "Three", value: 10, color: "#0cf0f0bb" },
              { title: "Two", value: 25, color: "#03272cca" },
              {
                title: "One",
                value: 50,
                color: "#045664",
              },
            ]}
            radius={PieChart.defaultProps.radius - 7}
            lineWidth={lineWidth}
            segmentsStyle={{
              transition: "stroke .3s",
              cursor: "pointer",
            }}
            segmentsShift={(index) => (index === selected ? 6 : 1)}
            animate
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
              fill: "#fff",
              opacity: 0.9,
              pointerEvents: "none",
              background: "#0bd2f5",
              border: "2px solid #0bd2f5",
            }}
            onClick={(event, index) => handleChange(event, index)}
            onMouseOver={(_, index) => {
              setSelected(index === selected ? undefined : index);
            }}
            onMouseOut={() => {
              setSelected(undefined);
            }}
          />
        </div>
        <div className="textContainer">
          <div className="textContent">
            <p className={selected === 0 ? "active" : ""}>
              5% - Investigative Journalism
            </p>
            <p className={selected === 1 ? "active" : ""}>
              10% - Reforestation
            </p>
            <p className={selected === 2 ? "active" : ""}>
              10% - Children Foundation
            </p>
            <p className={selected === 3 ? "active" : ""}>
              25% - Future projects
            </p>
            <p className={selected === 4 ? "active" : ""}>
              50% - Investors and Team
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default UseOfFunds;
