import React from "react";
import Gauge from "react-svg-gauge";
import PropTypes from "prop-types";

const GaugeChartComponent = ({ bmi }) => {
  let color = "#FFC371";
  let label = "Healthy weight";

  if (bmi < 18.5) {
    color = "#5DADE2";
    label = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    color = "#52BE80";
    label = "Healthy weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    color = "#F5B041";
    label = "Overweight";
  } else if (bmi >= 30) {
    color = "#E74C3C";
    label = "Obesity";
  }

  return (
    <div className="w-full flex flex-col items-center mt-4">
      <Gauge
        value={bmi}
        min={0}
        max={40}
        width={450}
        height={320}
        label={label}
        color={color}
      />
    </div>
  );
};

GaugeChartComponent.propTypes = {
  bmi: PropTypes.number.isRequired,
};

export default GaugeChartComponent;
