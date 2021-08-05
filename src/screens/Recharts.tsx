import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import dayjs from 'dayjs';

import { Layout } from '../components/Layout';

const formatDate = (date: number): string => {
  return dayjs(date).format('MMMM DD')
};

const data = [
  { date: formatDate(1621320000000), price: 84.5 },
  { date: formatDate(1622320000000), price: 87.2 },
  { date: formatDate(1623320000000), price: 85.1 },
  { date: formatDate(1624320000000), price: 86.16 },
  { date: formatDate(1625320000000), price: 84.64 },
  { date: formatDate(1626320000000), price: 82.64 },
  { date: formatDate(1627320000000), price: 81.64 },
  { date: formatDate(1628320000000), price: 80.64 },
  { date: formatDate(1629320000000), price: 85.64 },
  { date: formatDate(1629320000000), price: 80.64 },
  { date: formatDate(1629320000000), price: 81.64 },
  { date: formatDate(1629320000000), price: 82.64 },
  { date: formatDate(1629320000000), price: 83.64 },
  { date: formatDate(1629320000000), price: 84.64 },
];

const CustomTooltip: FC<any> = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="recharts-custom-tooltip">
        {payload[0].value}
      </div>
    );
  }

  return null;
};

const CustomDot: FC<any> = (props) => {
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

const CustomCursor: FC<any> = (props) => {
  const { height, points } = props;
  console.log(props)
  // return <rect fill="green" stroke="tomato" strokeWidth={1} x={20} y={0} width={1} height={height} />;
  return <line stroke-dasharray="5, 1" x1={points[0].x} x2={points[0].x} y1={0} y2={height} style={{ strokeWidth: 1, stroke: '#0058ff' }} />;
};

export const Recharts: FC = () => {
  return (
    <Layout>
      <h1>Recharts</h1>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            width={600}
            height={300}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              type="linear"
              dataKey="price"
              stroke="#0058ff"
              dot={false}
              activeDot={<CustomDot />}
            />
            <CartesianGrid stroke="#e8e8e8" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis orientation="right" padding={{ bottom: 0, top: 0 }} />
            <Tooltip
              content={<CustomTooltip />}
              // cursorStyle={{ strokeWidth: '2' }}
              cursor={<CustomCursor />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};
