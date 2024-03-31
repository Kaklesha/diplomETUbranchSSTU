import React,{useContext , FC } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";
import { UserCategory } from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Main.widget";
import { Line } from "react-chartjs-2";
import {
   
  
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
  } from "chart.js";

import ActivityType from "../../UI_KIT/Molecules/Activity.molecule/type";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
  );

//import * as S from "./styled";

//const FactWidget: FunctionComponent<FactWidgetType> = ({ useGetFactQuery }) => {
const GraphLineWidget:FC<ActivityType> = ({useGetActivityQuery}) => {

    const { data , isLoading} = useGetActivityQuery({user_id: useContext(UserIdContext),category_id:useContext(UserCategory)});
    //const {data, isLoading} = useGetActivityQuery();
    if(isLoading)return <h1>Loading..</h1>;


const options = {
    responsive: true,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 15,
        ticks: {
            stepSize: 5
        }
      }
    }
  };
  
  const labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  
  const data_temp = {
    labels,
    datasets: [
      {
        label: "Создано",
        data: data["created"],
        borderColor: "rgba(41, 161, 156, 0.4)",
        tension: 0.4
      },
      {
        label: "Завершено",
        data: data["completed"],
        borderColor: "rgb(41, 161, 156)",
        tension: 0.4
      },
    ],
  };

   

 
  return (
    <Line options={options} data={data_temp} />
  );

};

export default GraphLineWidget;



// import GraphLineWidget from "./type";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Tooltip,
//   );

// const created = [
//     2,
//     3,
//     5,
//     7,
//     9,
//     11,
//     12
// ];

// const completed = [
//     2,
//     3,
//     5,
//     6,
//     8,
//     10,
//     12
// ];


// const options = {
//     responsive: true,
//     scales: {
//       y: {
//         suggestedMin: 0,
//         suggestedMax: 15,
//         ticks: {
//             stepSize: 5
//         }
//       }
//     }
//   };
  
//   const labels = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Создано",
//         data: created,
//         borderColor: "rgba(41, 161, 156, 0.4)",
//         tension: 0.4
//       },
//       {
//         label: "Завершено",
//         data: completed,
//         borderColor: "rgb(41, 161, 156)",
//         tension: 0.4
//       },
//     ],
//   };

// interface IChartData {
//     chartData:any
// }

// const LineChart:FC<IChartData> = ({ chartData }) => {
//   return (
//     <Line options={options} data={data} />
//   );
// };
// export default LineChart;