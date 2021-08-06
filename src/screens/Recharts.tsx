import React, {FC, useEffect, useState} from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { Layout } from '../components/Layout';
import { DataTabs } from '../components/DataTabs/DataTabs';
import { formatDate } from '../utils';
import Logo from './cardano-ada-logo.png';

const oneDayData = [
  { date: formatDate(1621020000000, true), price: 84.5 },
  { date: formatDate(1621120000000, true), price: 87.2 },
  { date: formatDate(1621220000000, true), price: 85.1 },
  { date: formatDate(1621320000000, true), price: 86.16 },
  { date: formatDate(1621420000000, true), price: 84.64 },
  { date: formatDate(1621520000000, true), price: 82.64 },
  { date: formatDate(1621620000000, true), price: 81.64 },
];

const oneWeekData = [
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

const tabValues = ['24H', '1W'];

const CustomTooltip: FC = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="recharts-custom-tooltip">
        <div>
          <img src={Logo} alt="Cardano logo" width={16} height={16} />
        </div>
        <span>{payload[0].value} CAD</span>
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

  return <line strokeDasharray="5, 1" x1={points[0].x} x2={points[0].x} y1={0} y2={height} style={{ strokeWidth: 1, stroke: '#0058ff' }} />;
};

export const Recharts: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabValues[0]);
  const [chartData, setChartData] = useState(oneDayData);

  const changeTab = (e: any): void => {
    setActiveTab(e.target.id);
  };

  useEffect(() => {
    if (activeTab === '24H') {
      setChartData(oneDayData);
    } else {
      setChartData(oneWeekData);
    }
  }, [activeTab]);

  return (
    <Layout>
      <h1>Recharts</h1>
      <DataTabs values={tabValues} changeTab={changeTab} activeTab={activeTab} />

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
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
              cursor={<CustomCursor />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};
