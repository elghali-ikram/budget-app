import React,{ useRef, useState, useEffect }  from 'react'
import Navbar from './Navbar';
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
export default function Statistique() {
  const [ExpensesCategory, setExpensesCategory] = useState([]);
  const [Expensesmount, setExpensesmount] = useState([]);
  const [IncomeCategory, setEIncomeCategory] = useState([]);
  const [Incomemount, setIncomemount] = useState([]);

  const myValue = sessionStorage.getItem('email');
  const storedData = localStorage.getItem(myValue);
  let userData = JSON.parse(storedData);
  let expenses = userData.expenses || [];
  let income = userData.Income || [];
//for EXPENSES
  useEffect(() => {
    const categories = Object.keys(expenses).map((key) => expenses[key].categorie);
    setExpensesCategory(prevArray => [...new Set([...prevArray, ...categories])]);
  }, [expenses]);
  const calculateTotal = (category,type) => {
    let total = 0;
    Object.values(type).forEach((item) => {
      if (item.categorie === category) {
        total += parseInt(item.montant);
      }
    });
    return total;
  };
  useEffect(() => {
    setExpensesmount(ExpensesCategory.map((categorie) => calculateTotal(categorie,expenses)));
  }, [ExpensesCategory]);
   //FOR INCOME
   useEffect(() => {
    const categories = Object.keys(income).map((key) => income[key].categorie);
    setEIncomeCategory(prevArray => [...new Set([...prevArray, ...categories])]);
  }, [income]);
  useEffect(() => {
    setIncomemount(IncomeCategory.map((categorie) => calculateTotal(categorie,income)));
  }, [IncomeCategory]);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ExpensesCategory.concat(IncomeCategory);
  
   const data = {
    labels,
    datasets: [
      {
        label: 'EXPENSES',
        data: Expensesmount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'INCOME',
        data: Incomemount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  
  
    return (
    <div>
        <Navbar/>
        <Line data={data} options={options}>

        </Line>
    </div>
  )
}
