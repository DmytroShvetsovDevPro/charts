import { FC } from 'react';
import { ResponsiveLine } from '@nivo/line';

import { Layout } from '../components/Layout';
import { formatDate } from '../utils';

const data = [
  { x: formatDate(1621320000000), y: 84.5 },
  { x: formatDate(1622320000000), y: 87.2 },
  { x: formatDate(1623320000000), y: 85.1 },
  { x: formatDate(1624320000000), y: 86.16 },
  { x: formatDate(1625320000000), y: 84.64 },
  { x: formatDate(1626320000000), y: 82.64 },
  { x: formatDate(1627320000000), y: 81.64 },
  { x: formatDate(1628320000000), y: 80.64 },
  { x: formatDate(1629320000000), y: 85.64 },
  { x: formatDate(1629320000000), y: 80.64 },
  { x: formatDate(1629320000000), y: 81.64 },
  { x: formatDate(1629320000000), y: 82.64 },
  { x: formatDate(1629320000000), y: 83.64 },
  { x: formatDate(1629320000000), y: 84.64 },
];

const customTheme = {
  fontFamily: 'inherit',
  crosshair: {
    line: {
      stroke: '#0058ff',
      strokeDasharray: '2',
    },
  },
};

const lightweightData = [
  {
    id: 'currency',
    color: '#0058ff',
    data,
  },
];

export const Nivo: FC = () => {
  return (
    <Layout>
      <h1>Nivo</h1>

      <div style={{ height: 420 }}>
        <ResponsiveLine
          tooltip={(input) => {
            return (
              <div className="nivo-custom-tooltip">{input.point.data.y}</div>
            );
          }}
          theme={customTheme}
          colors={(d) => d.color}
          data={lightweightData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisLeft={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
          }}
          axisRight={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
          }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enableGridX={false}
          crosshairType="x"
          useMesh={true}
        />
      </div>
    </Layout>
  );
};
