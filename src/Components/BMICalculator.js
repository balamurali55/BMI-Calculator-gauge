import React, { useState } from "react";
import GaugeChartComponent from "./GaugeChart";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(calculatedBmi);
    } else {
      alert(
        weight.length <= 0 ? `Please fill the Weight` : `Please fill the Height`
      );
      setBmi(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">BMI Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-center font-bold">
          Weight (kg):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-center font-bold">
          Height (cm):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-4 text-center">
          <GaugeChartComponent bmi={bmi} />
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
