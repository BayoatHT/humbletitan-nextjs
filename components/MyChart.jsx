import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const MyChart = ({ chartData }) => {
  console.log(chartData, "chartData Chart me bhi araha hai");
  // const result = Object.keys(chartData).map((key) => [(key), chartData[key]]);
  const result = []
  //   result = Object.keys(chartData.Info)
  for (const key in chartData?.Info) {
    let obj = {}
    if (key !== 'ticker'){Object.assign(obj, {name: key, Value: chartData.Info[key]})
    result.push(obj)}
  }
  console.log(result);

  const data = [
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          height={300}
          data={result}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default MyChart
