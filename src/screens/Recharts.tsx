import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 320 },
  { name: 'Page D', uv: 180 },
  { name: 'Page E', uv: 440 },
];

const CustomizedDot: FC<any> = (props) => {
  const { cx, cy } = props;

  return (
    <svg x={cx - 10} y={cy - 10} viewBox="0 0 100 100" width={20} height={20}>
      <g>
        <circle cx="50" cy="50" r="50" fill="#a8c6ff"/>
        <circle cx="50" cy="50" r="30" fill="#0058ff" />
      </g>
    </svg>
  );
};

export const Recharts: FC = () => {
  return (
    <div>
      <h1>Recharts 1</h1>

      <div style={{ maxWidth: 420, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#0058ff" dot={<CustomizedDot />} />
            <CartesianGrid stroke="#dfdfdf" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis orientation="right" padding={{ bottom: 10, top: 0 }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
