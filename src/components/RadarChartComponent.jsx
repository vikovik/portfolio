import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    value: "Communication",
    A: 95,
    fullMark: 100,
  },
  {
    value: "Team Work",
    A: 75,
    fullMark: 100,
  },
  {
    value: "Problem-solving",
    A: 86,
    fullMark: 100,
  },
  {
    value: "Attention to Details",
    A: 99,
    fullMark: 100,
  },
  {
    value: "Independence",
    A: 85,
    fullMark: 100,
  },
  {
    value: "Time Management",
    A: 85,
    fullMark: 100,
  },
];

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="value" />
        <PolarRadiusAxis />
        <Radar
          name="Soft Skills"
          dataKey="A"
          stroke="#f7e9fd"
          fill="#994fdf"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
