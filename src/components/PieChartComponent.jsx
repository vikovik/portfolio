import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "React.js",
    value: 80,
  },
  {
    name: "Express.js",
    value: 80,
  },
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "Databases",
    value: 80,
  },
  {
    name: "C/C++/Python",
    value: 50,
  },
];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#994fdfc8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
