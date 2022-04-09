import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from './data'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Graph = ({ t1, t2, t3, takeTimefrom, takeTimeto }) => {
    const [hourgraph, setHourgraph] = React.useState(false);

    var data1 = [], data2 = [], data3 = [];
    //console.log(t1, t2, t3)
    function getSchdule(data) {
        data.filter((d) => d.schedule_time.includes(`${t1}`)).map((item) => {
            data1.push(item);
        })
        data.filter((d) => d.schedule_time.includes(`${t2}`)).map((item) => {
            data2.push(item);
        })
        data.filter((d) => d.schedule_time.includes(`${t3}`)).map((item) => {
            data3.push(item);
        })
    }; getSchdule(data);
    console.log(data1, data2, data3)


    const dateWise = [
        {
            name: `Day${t3.split("-")[2]}`,
            // date: '2021-05-17',//
            dataval: data1.length,
        }, {
            name: `Day${t2.split("-")[2]}`,
            // date: '2021-05-18',
            dataval: data2.length,
        }, {
            name: `Day${t1.split("-")[2]}`,
            // date: '2021-05-19',
            dataval: data3.length,
        },
    ]
    const mid = parseInt(takeTimefrom) + 8;
    console.log(mid)
    var data1_1 = [], data1_2 = [], data1_3 = [];

    console.log(data1)

    data1.filter((d) => (d.schedule_time.split(" ")[1]) >= `0` && (d.schedule_time.split(" ")[1]) < `${takeTimefrom}`).map((item) => {
        data1_1.push(item);
    })
    data1.filter((d) => (d.schedule_time.split(" ")[1]) >= `${takeTimefrom}` && (d.schedule_time.split(" ")[1]) < `${mid}`).map((item) => {
        data1_2.push(item);
    })
    data1.filter((d) => (d.schedule_time.split(" ")[1]) >= `${mid}` && (d.schedule_time.split(" ")[1]) <= `${takeTimeto}`).map((item) => {
        data1_3.push(item);
    })

    const hourWise = [
        {
            name: '1st Half',
            dataVal: data1_1.length ? data1_1.length : 0,
        },
        {
            name: '2nd Half',
            dataVal: data1_2.length ? data1_2.length : 0,
        },
        {
            name: '3rd Half',
            dataVal: data1_3.length ? data1_3.length : 0,
        },
    ]
    console.log(hourWise)


    return (
        hourgraph ? (
            <>
                {(data1.length && data2.length && data3.length) !== 0 ? (
                    <>
                        <LineChart
                            width={500}
                            height={300}
                            data={hourWise}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}


                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* <Line type="monotone" dataKey="date" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                            <Line type="monotone" dataKey="dataVal" stroke="#82ca9d" />
                        </LineChart>

                        <button onClick={() => setHourgraph(prev => !prev)}>Toggle</button>
                    </>) : (
                    <h1>Sorry no data for display</h1>
                )}
            </>
        ) : (
            <>
                <LineChart
                    width={500}
                    height={300}
                    data={dateWise}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}


                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="monotone" dataKey="date" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                    <Line type="monotone" dataKey="dataval" stroke="#82ca9d" />
                </LineChart>
                <button onClick={() => setHourgraph(prev => !prev)}>Toggle</button>
            </>
        )


    )
}

export default Graph;
// import React from 'react'


// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend
// } from "recharts";

// const data = [
//     {
//         name: "Page A",
//         uv: 4000,
//         pv: 2400,
//         amt: 2400
//     },
//     {
//         name: "Page B",
//         uv: 3000,
//         pv: 1398,
//         amt: 2210
//     },
//     {
//         name: "Page C",
//         uv: 2000,
//         pv: 9800,
//         amt: 2290
//     },
//     {
//         name: "Page D",
//         uv: 2780,
//         pv: 3908,
//         amt: 2000
//     },
//     {
//         name: "Page E",
//         uv: 1890,
//         pv: 4800,
//         amt: 2181
//     },
//     {
//         name: "Page F",
//         uv: 2390,
//         pv: 3800,
//         amt: 2500
//     },
//     {
//         name: "Page G",
//         uv: 3490,
//         pv: 4300,
//         amt: 2100
//     }
// ];
// console.log(data);

// const Graph = () => {

//     return (
//         <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5
//             }}
//         >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//                 type="monotone"
//                 dataKey="pv"
//                 stroke="#8884d8"
//                 activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//     );
// }

// export default Graph