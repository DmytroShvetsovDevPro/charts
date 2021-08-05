import { FC } from 'react';
import { ResponsiveBump } from '@nivo/bump';
import { ResponsiveLine } from '@nivo/line';
import { BasicTooltip } from '@nivo/tooltip';

import { Layout } from '../components/Layout';
import { data as chartData } from '../data';

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
    data: chartData,
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
          // xScale={{ type: 'point' }}
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

      <hr />

      <div style={{ height: 420 }}>
        <ResponsiveBump
          data={lightweightData}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          // colors={{ scheme: 'blues' }}
          // lineWidth={3}
          // activeLineWidth={6}
          // inactiveLineWidth={3}
          // inactiveOpacity={0.15}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={3}
          activePointBorderWidth={3}
          pointBorderColor={{ from: 'serie.color' }}
          axisLeft={null}
          axisTop={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
        />
      </div>
    </Layout>
  );
};
