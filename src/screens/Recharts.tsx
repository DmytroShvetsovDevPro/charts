import React, { FC } from 'react';
import { LineChart, Line } from 'recharts';

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 320 },
  { name: 'Page D', uv: 180 },
  { name: 'Page E', uv: 550 },
];

export const Recharts: FC = () => {
  return (
    <div>
      <h1>Recharts 1</h1>
      
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#3c73a8" />
      </LineChart>
    </div>
  );
};
