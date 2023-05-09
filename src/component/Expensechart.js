import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Expensechart = (props) => {
  // Extract data from props
  const { expenses } = props;
  const calculateTotal = (category) => {
    let total = 0;
    for (let i = 0; i < Object.keys(expenses).length; i++) {
      if (Object.keys(expenses)[i].categorie === category) {
        total += parseInt(Object.keys(expenses)[i].montant);
      }
    }
    return total;
  };
  
  // Prepare chart data
  const data = {
    labels: ['logement', 'loisirs', 'autres'], // categories
    datasets: [{
      label: 'Montant',
      data: [
        calculateTotal('logement'),
        calculateTotal('loisirs'),
        calculateTotal('autres')
      ], // total amount for each category
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Calculate total amount for a given category
  
  const options = {
    scales: {
      x: {
        type: 'category'
      }
    }
  };

  return (
    <Bar data={data} options={options} />
  );
};

export default Expensechart;
